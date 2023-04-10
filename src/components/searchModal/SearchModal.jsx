import React from 'react'
import './SearchModal.css'
import { Link } from 'react-router-dom'
import Profile from '../../assets/img/profileImgPlaceHolder.png'


const SearchModal = ({searchModal, searchResults, setSearchModal}) => {
    
    return (
    <div style={{display: searchModal ? 'block' : 'none'}} className='overlay' onClick={() => setSearchModal(false)}>
        <div className="resultsContainer">
            <div className="resultsList" onClick={e => e.stopPropagation()}>
                {searchResults.map( result => {
                    return <div key={result._id} className='user' style={{position: 'relative'}}>
                        <Link to={`/user/${result._id}`}>
                            <div className='userResult'>
                                <img src={result.profilePicture || Profile} className={'userImg'} />
                                <div className={'name'} >
                                    <span>{result.firstName + ' ' + result.lastName}</span>
                                    <span>{result.email}</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                } )}
            </div>
        </div>
    </div>
  )
}

export default SearchModal
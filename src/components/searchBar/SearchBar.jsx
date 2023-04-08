import React, { useEffect, useRef, useState } from 'react'
import './SearchBar.css'
import Logo from '../../assets/img/logo.png'
import { findUsers } from '../../api/userRequests'
import SearchModal from '../searchModal/SearchModal'
import { useSelector } from 'react-redux'

const SearchBar = ({chatPage}) => {
  const [searchResults, setSearchResults] = useState([])
  const searchRef = useRef()
  const [searchModal, setSearchModal] = useState(false)
  const {_id} = useSelector(state => state.authReducer.authData)
  const handleUserSearch = async e => {
    e.preventDefault()
    if(!searchRef.current.value) {
      return setSearchModal(false)
    }
    const {data} = await findUsers(searchRef.current.value, _id)
    setSearchResults(data)
    setSearchModal(true)
  }

  useEffect(() => {
    if(!searchModal) searchRef.current.value = ''
  }, [searchModal])

  return (
    <div className='SearchBar'>
        <img src={Logo} />
        <div className="search">
          <input type="text" ref={searchRef} placeholder='#Search' onChange={handleUserSearch}/>
          {/* <div className="s-icon">
            <UilSearch />
          </div> */}
          <SearchModal searchModal={searchModal} searchResults={searchResults} setSearchModal={setSearchModal}/>
        </div>
    </div>
  )
}

export default SearchBar
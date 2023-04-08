import React, { useEffect, useRef, useState } from 'react'
import './LogoSearch.css'
import Logo from '../../assets/img/logo.png'
import {UilSearch} from '@iconscout/react-unicons'
import { findUsers } from '../../api/userRequests'
import SearchModal from '../searchModal/SearchModal'

const LogoSearch = ({chatPage}) => {
  const [searchResults, setSearchResults] = useState([])
  const searchRef = useRef()
  const [searchModal, setSearchModal] = useState(false)

  const handleUserSearch = async e => {
    e.preventDefault()
    if(!searchRef.current.value) {
      return setSearchModal(false)
    }
    const {data} = await findUsers(searchRef.current.value)
    setSearchResults(data)
    setSearchModal(true)
  }

  useEffect(() => {
    if(!searchModal) searchRef.current.value = ''
  }, [searchModal])

  return (
    <div className='LogoSearch'>
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

export default LogoSearch
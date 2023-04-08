import React from 'react'
import SearchBar from '../searchBar/SearchBar'
import InfoCard from '../infoCard/InfoCard'
import UsersCard from '../UsersCard/UsersCard'

const ProfileLeft = () => {
  return (
    <div className='ProfileSide'>
        <SearchBar />
        <InfoCard />
        <UsersCard />
    </div>
  )
}

export default ProfileLeft
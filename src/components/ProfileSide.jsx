import React from 'react'
import SearchBar from './searchBar/SearchBar.jsx'
import './ProfileSide.css'
import ProfileCard from './profileCard/ProfileCard.jsx'
import UsersCard from './UsersCard/UsersCard.jsx'

const ProfileSide = () => {
  return (
    <div className='ProfileSide'>
        <SearchBar />
        <ProfileCard profilePage={false}/>
        <UsersCard />
    </div>
  )
}

export default ProfileSide
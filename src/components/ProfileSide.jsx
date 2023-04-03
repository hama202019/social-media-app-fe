import React from 'react'
import LogoSearch from './SearchLogo/LogoSearch.jsx'
import './ProfileSide.css'
import ProfileCard from './profileCard/ProfileCard.jsx'
import UsersCard from './UsersCard/UsersCard.jsx'

const ProfileSide = () => {
  return (
    <div className='ProfileSide'>
        <LogoSearch />
        <ProfileCard profilePage={false}/>
        <UsersCard />
    </div>
  )
}

export default ProfileSide
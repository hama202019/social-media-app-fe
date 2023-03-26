import React from 'react'
import LogoSearch from './SearchLogo/LogoSearch.jsx'
import './ProfileSide.css'
import ProfileCard from './profileCard/ProfileCard.jsx'

const ProfileSide = () => {
  return (
    <div className='ProfileSide'>
        <LogoSearch />
        <ProfileCard />
    </div>
  )
}

export default ProfileSide
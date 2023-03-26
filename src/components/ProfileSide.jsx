import React from 'react'
import LogoSearch from './SearchLogo/LogoSearch.jsx'
import './ProfileSide.css'
import ProfileCard from './profileCard/ProfileCard.jsx'
import FollowersCard from './FollowersCard/FollowersCard.jsx'

const ProfileSide = () => {
  return (
    <div className='ProfileSide'>
        <LogoSearch />
        <ProfileCard />
        <FollowersCard />
    </div>
  )
}

export default ProfileSide
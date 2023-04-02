import React from 'react'
import LogoSearch from './SearchLogo/LogoSearch.jsx'
import './ProfileSide.css'
import ProfileCard from './profileCard/ProfileCard.jsx'
import FollowersCard from './FollowersCard/FollowersCard.jsx'

const ProfileSide = () => {
  return (
    <div className='ProfileSide'>
        <LogoSearch />
        <ProfileCard profilePage={false}/>
        <FollowersCard />
    </div>
  )
}

export default ProfileSide
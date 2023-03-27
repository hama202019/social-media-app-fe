import React from 'react'
import LogoSearch from '../SearchLogo/LogoSearch'
import FollowersCard from '../followersCard/FollowersCard'
import InfoCard from '../infoCard/InfoCard'

const ProfileLeft = () => {
  return (
    <div className='ProfileSide'>
        <LogoSearch />
        <InfoCard />
        <FollowersCard />
    </div>
  )
}

export default ProfileLeft
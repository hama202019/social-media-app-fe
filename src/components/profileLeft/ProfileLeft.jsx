import React from 'react'
import LogoSearch from '../SearchLogo/LogoSearch'
import InfoCard from '../infoCard/InfoCard'
import UsersCard from '../UsersCard/UsersCard'

const ProfileLeft = () => {
  return (
    <div className='ProfileSide'>
        <LogoSearch />
        <InfoCard />
        <UsersCard />
    </div>
  )
}

export default ProfileLeft
import React from 'react'
import ProfileLeft from '../../components/profileLeft/ProfileLeft'
import ProfileCard from '../../components/profileCard/ProfileCard'
import Posts from '../../components/posts/Posts'
import RightSide from '../../components/rightSide/RightSide'
import './Profile.css'

const Profile = () => {
  return (
    <div className='Profile'>
        <ProfileLeft />
        <div className="profile-center">
          <ProfileCard />
          <Posts />
        </div>
        <RightSide />
    </div>
  )
}

export default Profile
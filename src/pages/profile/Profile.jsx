import React from 'react'
import ProfileLeft from '../../components/profileLeft/ProfileLeft'
import ProfileCard from '../../components/profileCard/ProfileCard'
import Posts from '../../components/posts/Posts'
import RightSide from '../../components/rightSide/RightSide'
import './Profile.css'
import { useSelector } from 'react-redux'

const Profile = () => {
  const {_id} = useSelector(state => state.authReducer.authData)

  return (
    <div className='Profile'>
        <ProfileLeft />
        <div className="profile-center">
          <ProfileCard profilePage={true}/>
          <Posts profilePage={true} id={_id}/>
        </div>
        <RightSide />
    </div>
  )
}

export default Profile
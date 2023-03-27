import React from 'react'
import PostsSide from '../components/PostsSide/PostsSide'
import ProfileSide from '../components/ProfileSide'
import RightSide from '../components/rightSide/RightSide'

import './Home.css'
const Home = () => {
  return (
    <div className='Home'>
        <ProfileSide />
        <PostsSide />
        <RightSide />
    </div>
  )
}
  
export default Home
import React from 'react'
import PostsSide from '../components/PostsSide/PostsSide'
import ProfileSide from '../components/ProfileSide'
import './Home.css'
const Home = () => {
  return (
    <div className='Home'>
        <ProfileSide />
        <PostsSide />
        <div className="rightSide">Right</div>
    </div>
  )
}
  
export default Home
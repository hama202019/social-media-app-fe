import React from 'react'
import Cover from '../../assets/img/coverPlaceHolder.png'
import Profile from '../../assets/img/profileImgPlaceHolder.png'
import './ProfileCard.css'
import { Link, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProfileCard = ({profilePage}) => {
    const {postsData} = useSelector(state => state.postsReducer)
    const user = useSelector(state => state.authReducer.authData)
    const myOwnPosts = postsData.filter(post => post.userId === user._id)
    return (
    <div className='ProfileCard'>
        <div className='profileImages'>
            <img src={user.coverPicture || Cover} />
            <img src={user.profilePicture || Profile} />
        </div>
        <div className="profileName">
            <span>{user.firstName + ' ' + user.lastName}</span>
            <span>{user.about || ""}</span>
        </div>
        <div className="followStatus">
            <hr />
            <div>
                <div className="follow">
                    <span>{user.followers.length}</span>
                    <span>Followers</span>
                </div>
                <div className="vl"></div>
                <div className="follow">
                    <span>{user.following.length}</span>
                    <span>Followings</span>
                </div>
                {profilePage && (<>
                    <div className="vl"></div>
                    <div className="follow">
                        <span>{myOwnPosts.length}</span>
                        <span>Posts</span>
                    </div>
                </>)} 
            </div>
            <hr />
        </div>
        {profilePage ? '' : (<span>
            <Link to={'/profile'}> Profile </Link>
        </span>)}
    </div>
  )
}

export default ProfileCard
import React from 'react'
import Cover from '../../assets/img/cover.jpg'
import Profile from '../../assets/img/profileImg.jpg'
import './ProfileCard.css'

const ProfileCard = () => {
    const profilePage = true

    return (
    <div className='ProfileCard'>
        <div className='profileImages'>
            <img src={Cover} />
            <img src={Profile} />
        </div>
        <div className="profileName">
            <span>Jane Eyre</span>
            <span>Senior Backend Developer</span>
        </div>
        <div className="followStatus">
            <hr />
            <div>
                <div className="follow">
                    <span>6,890</span>
                    <span>Followers</span>
                </div>
                <div className="vl"></div>
                <div className="follow">
                    <span>60</span>
                    <span>Followings</span>
                </div>
                {profilePage && (<>
                    <div className="vl"></div>
                    <div className="follow">
                        <span>3</span>
                        <span>Posts</span>
                    </div>
                </>)} 
            </div>
            <hr />
        </div>
        {profilePage ? '' : (<span>
            Profile
        </span>)}
    </div>
  )
}

export default ProfileCard
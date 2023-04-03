import React from 'react'
import { useEffect } from 'react'
import Profile from '../../assets/img/profileImgPlaceHolder.png'

const UserCard = ({classes, user}) => {

  return (
    <div className={classes.user}>
        <div>
            <img src={user.profilePicture || Profile} className={classes.userImg} />
            <div className={classes.name} >
                <span>{user.firstName + ' ' + user.lastName}</span>
                <span>{user.email}</span>
            </div>
        </div>
        <button className='button'>follow</button>
    </div>
  )
}

export default UserCard
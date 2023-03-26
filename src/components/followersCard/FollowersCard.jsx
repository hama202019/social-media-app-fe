import React from 'react'
import classes from './FollowersCard.module.css'
import { followers } from '../../data/followersData'

const FollowersCard = () => {
  return (
    <div className={classes.FollowersCard}>
        <h3> Who is following you </h3>
        {followers.map((follower, index) => {
            return (
                <div className={classes.follower} key={index}>
                    <div>
                        <img src={follower.img} className={classes.followerImg} />
                        <div className={classes.name} >
                            <span>{follower.name}</span>
                            <span>@{follower.username}</span>
                        </div>
                    </div>
                    <button className='button'>follow</button>
                </div>
            )
        })}
    </div>
  )
}

export default FollowersCard
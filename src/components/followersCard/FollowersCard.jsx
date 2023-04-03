import React from 'react'
import classes from './FollowersCard.module.css'
import { followers } from '../../data/followersData'
import { useSelector } from 'react-redux'
import FollowerCard from '../followerCard/FollowerCard'

const FollowersCard = () => {
    // const {followers} = useSelector(state => state.authReducer.authData)
  return (
    <div className={classes.FollowersCard}>
        <h3> Who is following you </h3>
        {followers.map( (follower, idx) => {
            return (
                <FollowerCard key={idx} follower={follower} classes={classes}/>
            )
        })}
    </div>
  )
}

export default FollowersCard
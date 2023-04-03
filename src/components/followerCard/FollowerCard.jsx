import React from 'react'

const FollowerCard = ({classes, follower}) => {
  return (
    <div className={classes.follower} key={follower.id}>
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
}

export default FollowerCard
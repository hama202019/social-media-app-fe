import React from 'react'
import { useEffect } from 'react'
import Profile from '../../assets/img/profileImgPlaceHolder.png'
import { followUser } from '../../api/userRequests'
import { useDispatch, useSelector } from 'react-redux'
import { updatingFail, updatingSuccess } from '../../actions/userActions'

const UserCard = ({classes, user}) => {
    const {_id} = useSelector(state => state.authReducer.authData)
    const dispatch = useDispatch()
    const {following} = useSelector(state => state.authReducer.authData)
    const handleFollow = () => {   
        const followThisUser = async () => {
            try {
                const {data} = await followUser(user._id, _id)
                dispatch(updatingSuccess(data))
            } catch (error) {
                dispatch(updatingFail(error.response.data.message))
            }
        }
        followThisUser()
    }
  return (
    <div className={classes.user}>
        <div>
            <img src={user.profilePicture || Profile} className={classes.userImg} />
            <div className={classes.name} >
                <span>{user.firstName + ' ' + user.lastName}</span>
                <span>{user.email}</span>
            </div>
        </div>
        <button className='button' onClick={handleFollow}>{following.includes(user._id) ? 'unFollow' : 'follow'}</button>
    </div>
  )
}

export default UserCard
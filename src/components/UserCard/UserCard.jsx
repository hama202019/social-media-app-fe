import React from 'react'
import Profile from '../../assets/img/profileImgPlaceHolder.png'
import { followUser, unfollowUser } from '../../api/userRequests'
import { useDispatch, useSelector } from 'react-redux'
import { updatingFail, updatingSuccess } from '../../actions/userActions'

const UserCard = ({classes, user}) => {
    const {_id} = useSelector(state => state.authReducer.authData)
    const dispatch = useDispatch()
    const {following} = useSelector(state => state.authReducer.authData)
    const handleFollow = () => {   
        const followThisUser = async () => {
            try {
                const {data} = await followUser(user._id, {_id})
                dispatch(updatingSuccess(data))
            } catch (error) {
                dispatch(updatingFail(error.response.data.message))
            }
        }
        followThisUser()
    }
    const handleUnFollow = () => {
        const unfollowThisUser = async () => {
            try {
                const {data} = await unfollowUser(user._id, {_id})
                dispatch(updatingSuccess(data))
            } catch (error) {
                dispatch(updatingFail(error.response.data.message))
            }
        }
        unfollowThisUser()
    }
  return (
    <div className={'user'}>
        <div>
            <img src={user.profilePicture || Profile} className={'userImg'} />
            <div className={'name'} >
                <span>{user.firstName + ' ' + user.lastName}</span>
                <span>{user.email}</span>
            </div>
        </div>
        <button className='button' onClick={following.includes(user._id) ? handleUnFollow : handleFollow }>{following.includes(user._id) ? 'unFollow' : 'follow'}</button>
    </div>
  )
}

export default UserCard
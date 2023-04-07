import React, { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { followUser, getUser, unfollowUser } from '../../api/userRequests'
import Cover from '../../assets/img/coverPlaceHolder.png'
import Profile from '../../assets/img/profileImgPlaceHolder.png'
import LogoSearch from '../../components/SearchLogo/LogoSearch'
import UsersCard from '../../components/UsersCard/UsersCard'
import './User.css'
import { useDispatch, useSelector } from 'react-redux'
import Posts from '../../components/posts/Posts'

const User = ({user}) => {
    const {userID} = useParams()
    const {following, _id} = useSelector(state => state.authReducer.authData)
    const [userData, setUserData] = useState({})
    useEffect(() => {
        const getUserData = async userID => {
            const {data} = await getUser(userID)
            setUserData(data)
        }
        getUserData(userID)
    }, [])
    const dispatch = useDispatch()
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

    if(userID !== _id){
        return (
            <div className="User">
                <div className="ProfileSide userProfileSide">
                    <LogoSearch />
                    <div className="InfoCard">
                        <h4>User Info</h4>
                        <div className="info">
                            <span>
                            <b>Status: </b>
                            </span>
                            <span>{userData.relationship || ''}</span>
                        </div>

                        <div className="info">
                            <span>
                            <b>Lives in: </b>
                            </span>
                            <span>{userData.livesin || ''}</span>
                        </div>

                        <div className="info">
                            <span>
                            <b>Works at: </b>
                            </span>
                            <span>{userData.worksAt || ''}</span>
                        </div>
                        <button className='button followUserButton' onClick={following.includes(userData._id) ? handleUnFollow : handleFollow }>{following.includes(userData._id) ? 'unFollow' : 'follow'}</button>
                    </div>
                    <UsersCard />
                </div>
                <div className="userProfileCard">
                    <div>
                        <div className='profileImages'>
                            <img src={userData.coverPicture || Cover}/>
                            <img src={userData.profilePicture || Profile} />
                        </div>
                        <div className="profileName">
                            <span>{userData.firstName + ' ' + userData.lastName}</span>
                            <span>{userData.about || ""}</span>
                        </div>
                    </div>
                    <Posts profilePage={false} id={userID._id}/>
                </div>
            </div>
        )}
        else{
            return (
                <Navigate to={'/'}/>
            )
        }
}

export default User
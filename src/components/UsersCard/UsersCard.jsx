import React, { useEffect, useState } from 'react'
import classes from './UsersCard.module.css'
import FollowerCard from '../UserCard/UserCard'
import { getAllUsers } from '../../api/userRequests'
import { useSelector } from 'react-redux'

const UsersCard = () => {
    const {_id} = useSelector(state => state.authReducer.authData)
    const [usersData, setUsersData] = useState([])
    useEffect(() => {
        const getUsers = async () => {
            const {data} = await getAllUsers(_id)
            setUsersData(data)
        }
        getUsers()
    }, [])
    
  return (
    <div className={classes.UsersCard}>
        <h3> People you may know </h3>
        {usersData.map( user => {
            return (
                <FollowerCard key={user._id} user={user} classes={classes}/>
            )
        })}
    </div>
  )
}

export default UsersCard
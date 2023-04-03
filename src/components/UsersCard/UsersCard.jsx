import React, { useEffect, useState } from 'react'
import classes from './UsersCard.module.css'
import FollowerCard from '../UserCard/UserCard'
import { getAllUsers } from '../../api/userRequests'

const UsersCard = () => {
    const [usersData, setUsersData] = useState([])
    useEffect(() => {
        const getUsers = async () => {
            const {data} = await getAllUsers()
            setUsersData(data)
        }
        getUsers()
    }, [])
    console.log(usersData)
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
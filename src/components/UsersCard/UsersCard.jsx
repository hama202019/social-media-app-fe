import React, { useEffect, useState } from 'react'
import classes from './UsersCard.module.css'
import FollowerCard from '../UserCard/UserCard'
import { getAllUsers } from '../../api/userRequests'
import { useSelector } from 'react-redux'
import './UsersCard.css'

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
    <div className={'UsersCard'}>
        <h3 style={{textAlign: 'center'}}> People you may know </h3>
        {usersData.map( user => {
            return (
                <FollowerCard key={user._id} user={user} />
            )
        })}
    </div>
  )
}

export default UsersCard
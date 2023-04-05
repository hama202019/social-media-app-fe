import React from 'react'
import Profile from '../../assets/img/profileImgPlaceHolder.png'

const Chat = ({chat}) => {
  return (
    <div className='chat'>
        <img src={chat.profilePicture || Profile} />
        <h3>{chat.firstName + ' ' + chat.lastName}</h3>
    </div>
  )
}

export default Chat
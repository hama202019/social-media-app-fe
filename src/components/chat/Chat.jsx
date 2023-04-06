import React from 'react'
import Profile from '../../assets/img/profileImgPlaceHolder.png'
import './Chat.css'

const Chat = ({chat, onClick}) => {
  const online = 1
  return (
    <div className='chat' onClick={onClick}>
        <div>
        {online && <div className="onlineDot"></div>}
        <img src={chat?.otherUserProfilePicture || Profile} />
        <h5>{chat?.otherUserfirstName + ' ' + chat?.otherUserlastName}</h5>
        </div>
    </div>
  )
}

export default Chat
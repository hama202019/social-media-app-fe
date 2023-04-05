import React from 'react'
import './Chats.css'
import Chat from '../chat/Chat'

const Chats = ({chatsData}) => {
  return (
    <div>
        {chatsData.map(chat => {
            return <Chat chat={chat} key={chat._id} />
        })}
    </div>
  )
}

export default Chats
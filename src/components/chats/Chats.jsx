import React from 'react'
import './Chats.css'
import Chat from '../chat/Chat'
import { useSelector } from 'react-redux'

const Chats = ({setCurrentChat, joinRoom}) => {
  const chatsData = useSelector(state => state.chatsReducer)
  
  return (
    <div className='chatsContainer'>
        {chatsData.map(chat => {
            return <Chat chat={chat} key={chat.chatId} onClick={() => {
              setCurrentChat(chat)
              joinRoom(chat.chatId)
            }}/>
        })}
    </div>
  )
}

export default Chats
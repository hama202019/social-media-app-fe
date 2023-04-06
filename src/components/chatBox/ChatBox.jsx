import React, { useEffect, useState } from 'react'
import Profile from '../../assets/img/profileImgPlaceHolder.png'
import './ChatBox.css'
import { useSelector } from 'react-redux'
import { fetchMessages } from '../../api/messageRequests'
import {format} from 'timeago.js'
import Input from 'react-input-emoji'

const ChatBox = ({currentChat}) => {
    const [messagesData, setMessagesData] = useState([])
    const {authData} = useSelector(state => state.authReducer)

    useEffect(() => {
        const getMessages = async () => {
            const {data} = await fetchMessages(currentChat?.chatId)
            setMessagesData(data)
        }
        getMessages()
    }, [currentChat])
  return (
    <div className="ChatBox">
        <div className="profile">
            <img src={currentChat?.otherUserProfilePicture || Profile} className='chatProfilePicture' />
            <h4>{(currentChat?.otherUserfirstName || '') + ' ' + (currentChat?.otherUserlastName || '')}</h4>
        </div>
        <hr style={{width: '100%', fontWeight: 'lighter'}}/>
        <div className="messages">
            {messagesData.map(message => {
                return <div key={message._id} className={message.senderId === authData._id ? 'myMessage' : 'hisMessage'}>
                    <span>{message.messageContent}</span>
                    <span>{format(message.createdAt)}</span>
                </div>
            })}
        </div>
        <div className="inputBox">
            <Input />
            <button className='button'>Send</button>
        </div>
    </div>
  )
}

export default ChatBox
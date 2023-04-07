import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Profile from '../../assets/img/profileImgPlaceHolder.png'
import './ChatBox.css'
import { useSelector } from 'react-redux'
import { fetchMessages, postMessage } from '../../api/messageRequests'
import {format} from 'timeago.js'
import Input from 'react-input-emoji'
import { io } from 'socket.io-client'

const ChatBox = ({currentChat}) => {
    const bottomOfMessagesRef = useRef();
    const [messagesData, setMessagesData] = useState([])
    const [newMessage, setNewMessage] = useState('')
    const socket = io("http://localhost:4000");
    const {authData} = useSelector(state => state.authReducer)
    const [counter, setCounter] = useState(0)
    const joinRoom = chatId => {
        socket.emit('joinRoom', chatId);
    }
    socket.on('receiveMessage', () => setCounter(counter + 1))
    useEffect(() => {
        const getMessages = async () => {
            joinRoom(currentChat?.chatId)
            const {data} = await fetchMessages(currentChat?.chatId)
            setMessagesData(data)
        }
        getMessages()
        setTimeout(() => {
            bottomOfMessagesRef.current?.scrollIntoView({behavior: "smooth"})
        }, 300);
    }, [counter, currentChat])

    const handlePostMessage = async e => {
        e.preventDefault()
        await postMessage(currentChat?.chatId, authData._id, newMessage)
        socket.emit('sendMessage', {chatId: currentChat?.chatId, newMessage});
        setNewMessage('')
        bottomOfMessagesRef.current?.scrollIntoView({behavior: "smooth"})
    }
  return (
    <div className="ChatBox">
        <div className="profile">
            <img src={currentChat?.profilePicture || Profile} className='chatProfilePicture' />
            <h4>{(currentChat?.firstName || '') + ' ' + (currentChat?.lastName || '')}</h4>
        </div>
        <hr style={{width: '100%', fontWeight: 'lighter'}}/>
        <div className="messages">
            {messagesData.map(message => {
                return <div key={message._id} ref={bottomOfMessagesRef} className={message.senderId === authData._id ? 'myMessage' : 'hisMessage'}>
                    <span>{message.messageContent}</span>
                    <span>{format(message.createdAt)}</span>
                </div>
            })}
            {/* <div ref={bottomOfMessagesRef} /> */}
        </div>
        <div className="inputBox">
            <Input
                clearOnEnter={false}
                value={newMessage} 
                onChange={setNewMessage}
            />
            <button className='button' onClick={handlePostMessage}>Send</button>
        </div>
    </div>
  )
}

export default ChatBox
import React from 'react'
import './Chat.css'
import LogoSearch from '../../components/SearchLogo/LogoSearch'

const Chat = () => {
  return (
    <div className="Chat">
        <div className="leftSide">
            <LogoSearch />
            <div className="chats">
                <h2>Chats</h2>
                
            </div>
        </div>
        <div className="rightSide">Right</div>
    </div>
  )
}

export default Chat
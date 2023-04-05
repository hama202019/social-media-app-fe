import React, { useEffect, useState } from 'react'
import './Chat.css'
import LogoSearch from '../../components/SearchLogo/LogoSearch'
import Chats from '../../components/chats/Chats'
import { getUserChats } from '../../api/chatRequests'
import { useDispatch, useSelector } from 'react-redux'
import {retrievingChatsSuccess} from '../../actions/chatActions'

const Chat = () => {
  const {_id} = useSelector(state => state.authReducer.authData)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      const {data} = await getUserChats(_id)
      dispatch(retrievingChatsSuccess(data))
    }
    fetchData()
  }, [])

  return (
    <div className="Chat">
        <div className="leftSide">
            <LogoSearch />
            <div className="chats">
                <h2>Chats</h2>
                <div className="chatsList">
                  <Chats />
                </div>
            </div>
        </div>
        <div className="rightSideChat">
          Right
        </div>
    </div>
  )
}

export default Chat
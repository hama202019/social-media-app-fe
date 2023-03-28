import React from 'react'
import './ShareModal.css'
import SharePosts from '../sharePosts/SharePosts'
import { UilTimes } from "@iconscout/react-unicons";

const ShareModal = ({open, closeModal}) => {
  if(!open) return null

  return (
    <div className="overlay" onClick={closeModal}>
      <div className="shareModalContainer"  onClick={(e) => e.stopPropagation()}>
        <div className='ShareModal'>
          <UilTimes onClick={closeModal} className='timesIcon'/>
          <SharePosts />
        </div>
      </div>
    </div>
  )
}

export default ShareModal
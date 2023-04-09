import React from 'react'
import './ShareModal.css'
import SharePosts from '../sharePosts/SharePosts'
import { UilTimes } from "@iconscout/react-unicons";

const ShareModal = ({open, setOpenModal}) => {
  if(!open) return null

  return (
    <div className="overlay" onClick={() => setOpenModal(false)}>
      <div className="shareModalContainer"  onClick={(e) => e.stopPropagation()}>
        <div className='ShareModal'>
          <UilTimes onClick={() => setOpenModal(false)} className='timesIcon'/>
          <SharePosts setOpenModal={setOpenModal}/>
        </div>
      </div>
    </div>
  )
}

export default ShareModal
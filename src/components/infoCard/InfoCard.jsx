import React, { useState } from 'react'
import './InfoCard.css'
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from '../profileModal/ProfileModal';
import { useSelector } from 'react-redux';

const InfoCard = () => {
  const [openModal, setOpenModal] = useState(false)
  const user = useSelector(state => state.authReducer.authData)

  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Your Info</h4>
        <div>
          <UilPen
            onClick={() => setOpenModal(true)}
            width="2rem"
            height="1.2rem"
          />
          <ProfileModal open={openModal} closeModal={() => setOpenModal(false)} />
        </div>
      </div>

      <div className="info">
        <span>
          <b>Status: </b>
        </span>
        <span>{user.relationship || ''}</span>
      </div>

      <div className="info">
        <span>
          <b>Lives in: </b>
        </span>
        <span>{user.livesin || ''}</span>
      </div>

      <div className="info">
        <span>
          <b>Works at: </b>
        </span>
        <span>{user.worksAt || ''}</span>
      </div>

      <button className="button logout-button">Logout</button>
    </div>
  )
}

export default InfoCard
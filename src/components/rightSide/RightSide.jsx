import "./RightSide.css";
import React, { useState } from 'react'
import TrendCard from "../trendCard/TrendCard";
import ShareModal from "../shareModal/ShareModal";
import NavIcons from "../navIcons/NavIcons";

const RightSide = () => {
  const [openModal, setOpenModal] =  useState(false);
  return (
    <div className="RightSide">
      <ShareModal open= {openModal} setOpenModal={setOpenModal} />
        <NavIcons className='navIcons'/>
        <TrendCard />
        <button className="button r-button" onClick={() => setOpenModal(true)}>
            Share
        </button>
    </div>
  )
}

export default RightSide
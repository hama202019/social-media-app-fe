import "./RightSide.css";
import Home from "../../assets/img/home.png";
import Noti from "../../assets/img/noti.png";
import ChatIcon from "../../assets/img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
import React, { useState } from 'react'
import TrendCard from "../trendCard/TrendCard";
import ShareModal from "../shareModal/ShareModal";
import NavIcons from "../navIcons/NavIcons";

const RightSide = () => {
  const [openModal, setOpenModal] =  useState(false);
  return (
    <div className="RightSide">
      <ShareModal open= {openModal} closeModal={() => setOpenModal(false)} />
        <NavIcons className='navIcons'/>
        <TrendCard />
        <button className="button r-button" onClick={() => setOpenModal(true)}>
            Share
        </button>
    </div>
  )
}

export default RightSide
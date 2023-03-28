import "./RightSide.css";
import Home from "../../assets/img/home.png";
import Noti from "../../assets/img/noti.png";
import Comment from "../../assets/img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";

import React, { useState } from 'react'
import TrendCard from "../trendCard/TrendCard";
import ShareModal from "../shareModal/ShareModal";

const RightSide = () => {
  const [openModal, setOpenModal] =  useState(false);
  return (
    <div className="RightSide">
      <ShareModal open= {openModal} closeModal={() => setOpenModal(false)} />
        <div className="navIcons">
            <img src={Home} />
            <UilSetting />
            <img src={Noti} />
            <img src={Comment} />
        </div>
        <TrendCard />
        <button className="button r-button" onClick={() => setOpenModal(true)}>
            Share
        </button>
    </div>
  )
}

export default RightSide
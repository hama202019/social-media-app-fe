import "./RightSide.css";
import Home from "../../assets/img/home.png";
import Noti from "../../assets/img/noti.png";
import Comment from "../../assets/img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";

import React from 'react'
import TrendCard from "../trendCard/TrendCard";

const RightSide = () => {
  return (
    <div className="RightSide">
        <div className="navIcons">
            <img src={Home} />
            <UilSetting />
            <img src={Noti} />
            <img src={Comment} />
        </div>
        <TrendCard />
    </div>
  )
}

export default RightSide
import "./RightSide.css";
import Home from "../../assets/img/home.png";
import Noti from "../../assets/img/noti.png";
import Comment from "../../assets/img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";

import React from 'react'

const RightSide = () => {
  return (
    <div className="RightSide">
        <div className="navIcons">
            <img src={Home} />
            <UilSetting />
            <img src={Noti} />
            <img src={Comment} />
        </div>
    </div>
  )
}

export default RightSide
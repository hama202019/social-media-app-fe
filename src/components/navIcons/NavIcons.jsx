import React from 'react'
import Home from "../../assets/img/home.png";
import Noti from "../../assets/img/noti.png";
import ChatIcon from "../../assets/img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";

const NavIcons = () => {
  return (
    <div className="navIcons">
        <Link to={'/'}><img src={Home} /></Link>
        <UilSetting />
        <img src={Noti} />
        <Link to='/chat' ><img src={ChatIcon} /></Link >
    </div>
  )
}

export default NavIcons
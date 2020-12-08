import React from 'react'
import '../core/Header.css';
import { AiFillHome } from "react-icons/ai";
import { GiCutDiamond } from "react-icons/gi";
import { AiOutlineWechat } from "react-icons/ai";
import { MdPets } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
function Header() {
    return (
        <div className = "container">
            <div className = "header">
            <AiFillHome />
            <GiCutDiamond />
            <AiOutlineWechat />
            <MdPets />
            <IoNotifications />
            <IoIosSettings />

            </div>
        </div>
    )
}

export default Header;
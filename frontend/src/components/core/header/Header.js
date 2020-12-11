import React from 'react'
import '../header/Header.css';
import { AiFillHome } from "react-icons/ai";
import { GiCutDiamond } from "react-icons/gi";
import { AiOutlineWechat } from "react-icons/ai";
import { MdPets } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import { Link } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import Setting from "../../pages/setting/Setting";

function Header({backButton}) {
    
    return (
        <div className = "container">
            <Link to="/home" className="linktool">
                <IconButton>
                    <AiFillHome className="iconContainer" />
                </IconButton>
                <span className="tooltip">Home</span>
            </Link>
            <Link onClick={()=>alert("Coming Soon")} className="linktool">
                <IconButton>
                    <GiCutDiamond className="iconContainer" />
                </IconButton>
                <span className="tooltip">Premium</span>
            </Link>
            <Link to="/chat" className="linktool">
                <IconButton>
                    <AiOutlineWechat className="iconContainer" />
                </IconButton>
                <span className="tooltip">Chat</span>
            </Link>
            <Link to="/profile" className="linktool">
                <IconButton>
                    <MdPets className="iconContainer" />
                </IconButton>
                <span className="tooltip">Profile</span>
            </Link>
            <Link onClick={()=>alert("Coming Soon")} className="linktool">
                <IconButton className="ico">
                    <IoNotifications className="iconContainer" />
                </IconButton>
                <span className="tooltip">Notification</span>
            </Link>
            <Link to="/setting" className="linktool">
                <IconButton>
                    <IoIosSettings className="iconContainer" />
                </IconButton>
                <span className="tooltip">Setting</span>
            </Link>


            
        </div>

        
    )
}

export default Header;



import React from 'react'
import '../header/Header.css';
import { AiFillHome } from "react-icons/ai";
import { GiCutDiamond } from "react-icons/gi";
import { AiOutlineWechat } from "react-icons/ai";
import { MdPets } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import { Link, useHistory } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import Setting from "../../pages/setting/Setting";

function Header({backButton}) {
    const history = useHistory();
    return (
        <div className = "container">
            <Link to="/home">
                <IconButton>
                    <AiFillHome className="iconContainer" />
                </IconButton>
            </Link>
            <Link to="/premium">
                <IconButton>
                    <GiCutDiamond className="iconContainer" />
                </IconButton>
            </Link>
            <Link to="/chat">
                <IconButton>
                    <AiOutlineWechat className="iconContainer" />
                </IconButton>
            </Link>
            <Link to="/profile">
                <IconButton>
                    <MdPets className="iconContainer" />
                </IconButton>
            </Link>
            <Link to="/notification">
                <IconButton>
                    <IoNotifications className="iconContainer" />
                </IconButton>
            </Link>
            <Link to="/setting">
                <IconButton>
                    <IoIosSettings className="iconContainer" />
                </IconButton>
            </Link>


            
        </div>

        
    )
}

export default Header;



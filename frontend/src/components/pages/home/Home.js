import React, { useState, useEffect } from 'react';
// import { Button } from 'antd';
import LocalStorageService from '../../../services/localStorageService';
/*import { Link } from 'react-router-dom';*/
import './Home.css'
import jwtDecode from 'jwt-decode';
import Swap from './Swap-page';





export default function Home(props) {
    const [name, setName] = useState("");
    const [id, setId] = useState(0);
    const logout = () => {
        LocalStorageService.removeToken();
        props.setRole("guest");
    }
    
    useEffect(() => {
        const token = LocalStorageService.getToken();
        if (token) {
            const user = jwtDecode(token);
            setName(user.name);
            setId(user.id);
        }
    }, [])
    return (
        <div>
            
                <Swap />
            
        </div>
    );
}

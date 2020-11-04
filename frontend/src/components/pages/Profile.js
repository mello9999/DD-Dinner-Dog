import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import LocalStorageService from '../../services/localStorageService';
import { Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

export default function Profile(props) {
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
            <h2>
                Profile Page
            </h2>
            <p>
                <strong>Name:</strong> {name}
                <br />
                <strong>User ID:</strong> {id}
            </p>
            <Link to="/todo"><Button>Todo List</Button></Link>
            <br/>
            <br/>
            <Button onClick={logout}>Logout</Button>
        </div>
    );
}

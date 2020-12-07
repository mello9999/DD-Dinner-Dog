import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LeftBar from './LeftBar.js';
import RightBar from './RightBar.js';

export default function ChatMay(){
    
    return (
        <React.StrictMode>
        <LeftBar/>
        <RightBar/>
        </React.StrictMode>,
        document.getElementById('LeftBar')
    );
}

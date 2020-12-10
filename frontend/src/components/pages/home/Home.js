import React, { useState, useEffect } from 'react';
// import { Button } from 'antd';
import LocalStorageService from '../../../services/localStorageService';
/*import { Link } from 'react-router-dom';*/
import './Home.css'

import Swap from './Swap-page';
import data from './data.json';




export default function Home(props) {
    return (
        <div>

            <Swap data={data}/>

        </div>
    );
}
//setSelectedFile(e.target.value);
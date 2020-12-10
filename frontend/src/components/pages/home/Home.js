import React from 'react';

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
import React from "react";
import Header from "../../core/header/Header";
import DogCards from "../home/DogCards";
import SwipeButtons from "../home/SwipeButtons";


const Swap = () => {
    return (
        <div className="Swap-page">   
                    <h1>Let's build the Tinder</h1>
                        <DogCards />
                        <SwipeButtons />
        </div>
    );
}
              

export default Swap;
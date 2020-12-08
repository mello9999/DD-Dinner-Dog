import { Switch } from "@material-ui/core";
import React from "react";
import { Route, Router } from "react-router-dom";
import Header from "../../core/header/Header";
import DogCards from "../home/DogCards";
import SwipeButtons from "../home/SwipeButtons";


const Swap=()=>{
    return (
        <div className="Swap-page">  
                <DogCards />
                <SwipeButtons />
        </div>
    );
}
export default Swap;
import React from 'react';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';

import "../home/SwipeButtons.css";

const SwipeButtons = () => {
    return (
        <div className="swipeButtons">
            <IconButton className="swipeButtons_repeat" style={{width:"50px",height:"50px"}}>
            <ReplayIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons_left" style={{width:"50px",height:"50px"}}>
            <CloseIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons_star" style={{width:"50px",height:"50px"}}>
            <StarRateIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons_right" style={{width:"50px",height:"50px"}}>
            <FavoriteIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons_lightning" style={{width:"50px",height:"50px"}}>
            <FlashOnIcon fontSize="large" />
            </IconButton>
            
        </div>
    );
};
export default SwipeButtons;
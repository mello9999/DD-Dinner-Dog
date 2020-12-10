import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function ThemeModeButton() {
  return (
    <div id="Big2">
    <Typography id="themeMode" style={{fontFamily: "Quicksand" , fontWeight:"bold"}} >
        Theme Mode
    </Typography>
    <ButtonGroup disableElevation variant="contained" color="primary">
      <Button style={{backgroundColor: '#ee7548' , fontFamily: "Quicksand" , fontWeight:"bold"}}>Light</Button>
      <Button style={{backgroundColor: '#ffffff' , color: '#000000' , border: "2px solid #000000" , fontFamily: "Quicksand" , fontWeight:"bold"}}>Dark</Button>
    </ButtonGroup>
    
    </div>
  );
}

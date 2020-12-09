import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function ThemeModeButton() {
  return (
    <div>
    <Typography id="themeMode" >
        Theme Mode
    </Typography>
    <ButtonGroup disableElevation variant="contained" color="primary">
      <Button>Light</Button>
      <Button>Dark</Button>
    </ButtonGroup>
    
    </div>
  );
}

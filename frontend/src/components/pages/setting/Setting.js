import React from 'react';
import line from "../z2_line3.png";
import '../setting/Setting.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import DistanceSlider from '../setting/DistanceSlider';
import AgeRangeSlider from '../setting/AgeRange';
import ThemeModeButton from '../setting/ThemeModeButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { RiMailSendLine } from 'react-icons/ri';
import Fab from '@material-ui/core/Fab';
import { Link } from 'react-router-dom';



const useStyles = makeStyles({
    mainCard: {
      minWidth: 270,
      minHeight: 355,
      border: "2px solid black",
      borderRadius: 20,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
    },
    devCard: {
      minWidth: 270,
      minHeight: 355,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
    },
    textFieldContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        
    },
    textField: {
    }

});

export default function Setting() {
    const styles = useStyles();

    return (
        <div className="containerMain">
            <div className="containerSetting">
                <Card className={styles.mainCard} id="CardB">
                    <div className={styles.textFieldContainer} >
                        <label  mb={5} style={{fontSize:"18px" , fontWeight:"bold" , fontFamily: "Quicksand" , color:'#727272'}}>
                            Username
                        </label >
                        <TextField 
                            size="small"
                            id="username" 
                            variant="outlined"
                            
                        />
                        
                    </div>
                    <div className={styles.textFieldContainer}>
                        <label  mb={5} style={{fontSize:"18px" , fontWeight:"bold" , fontFamily: "Quicksand" , color:'#727272'}}>
                            Password
                        </label >
                        <TextField
                            size="small"
                            id="password"
                            variant="outlined"
                        />
                    </div>
                    <div className={styles.changePassButt}> 
                        <Button variant="contained" id="Box_change" style={{fontSize:"8.7px" , fontWeight:"bold" , fontFamily: "Quicksand" , backgroundColor: '#ee7548'}}>
                            Change Password
                        </Button>
                    </div>
                    <div className={styles.textFieldContainer}>
                        <label  mb={5} style={{fontSize:"18px" , fontWeight:"bold" , fontFamily: "Quicksand" , color:'#727272'}}>
                            Email
                        </label >
                        <TextField
                            size="small"
                            id="email"
                            variant="outlined"
                        />
                    </div>
                    <div className={styles.textFieldContainer}>
                        <label  m={5} style={{fontSize:"18px" , fontWeight:"bold" , fontFamily: "Quicksand" , color:'#727272'}}>
                            Phone Number
                        </label >
                        <TextField
                            size="small"
                            id="phone-number"
                            variant="outlined"
                        />
                    </div>
                </Card>
                <div>
                        <p style={{color: '#ffffff'}}><hr id="line_Bet"></hr>.</p>
                </div>
                <div className={styles.devCard}>
                    <div>
                        <DistanceSlider />
                    </div>
                    <div>
                        <AgeRangeSlider />
                    </div>
                    <div>
                        <ThemeModeButton />
                    </div>
                    <div id="Big1">
                        <div>
                            <Typography id="textConnectAccount" gutterBottom style={{fontFamily: "Quicksand" , fontWeight:"bold"}}>
                                Connect Accounts
                            </Typography>
                            <IconButton id="icon_face">
                                <FaFacebook />
                            </IconButton>
                            <IconButton id="icon_face">
                            <img id="icon_line" src={line}/>
                            </IconButton>
                            <IconButton id="icon_goo">
                                <FcGoogle />
                            </IconButton>
                        </div>
                        <div>
                        
                        </div>
                        <div>
                            <Button variant="contained" id="Box_contact" style={{fontFamily: "Quicksand" , fontWeight:"bold"}}>
                                Contact Us  <RiMailSendLine />
                            </Button>
                        </div>
                        <div>
                            <Fab variant="extended" id="Box_save" style={{fontFamily: "Quicksand" , fontWeight:"bold"}}>
                                Save
                            </Fab>
                    </div>
                    </div>
                </div>
                
            </div>    
        </div>
        
    );
    
}

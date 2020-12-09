import React from 'react';
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
                <Card className={styles.mainCard}>
                    <div className={styles.textFieldContainer}>
                        <label  mb={5}>
                            Username
                        </label >
                        <TextField
                            size="small"
                            id="username"
                            variant="outlined"
                        />
                    </div>
                    <div className={styles.textFieldContainer}>
                        <label  mb={5}>
                            Password
                        </label >
                        <TextField
                            size="small"
                            id="password"
                            variant="outlined"
                        />
                    </div>
                    <div className={styles.changePassButt}> 
                        <Button variant="contained">
                            Change Password
                        </Button>
                    </div>
                    <div className={styles.textFieldContainer}>
                        <label  mb={5}>
                            Email
                        </label >
                        <TextField
                            size="small"
                            id="email"
                            variant="outlined"
                        />
                    </div>
                    <div className={styles.textFieldContainer}>
                        <label  m={5}>
                            Phone Number
                        </label >
                        <TextField
                            size="small"
                            id="phone-number"
                            variant="outlined"
                        />
                    </div>
                </Card>
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
                    <div>
                        <Typography id="textConnectAccount" gutterBottom>
                            Connect Accounts
                        </Typography>
                        <IconButton>
                            <FaFacebook />
                        </IconButton>
                        <IconButton >
                            <FcGoogle />
                        </IconButton>
                    </div>
                    <div>
                        <Button variant="contained">
                            Contact Us  <RiMailSendLine />
                        </Button>
                    </div>
                    <div>
                        <Fab variant="extended">
                            Save
                        </Fab>
                    </div>
                </div>
            </div>
        </div>
    );
}

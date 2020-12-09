import React from 'react';
import '../setting/Setting.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';

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
                        Maximum Distance
                    </div>
                    <div>
                        Age Range
                    </div>
                    <div>
                        Theme mode
                    </div>
                    <div>
                        Connect accounts
                    </div>
                    <div>
                        Contact Us
                    </div>
                    <div>
                        Button
                    </div>
                </div>
            </div>
        </div>
    );
}

import React, { useState, useEffect, useRef } from 'react';
//import { Button } from 'antd';
import LocalStorageService from '../../services/localStorageService';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { Button, Grid, Typography } from '@material-ui/core';

export default function Profile(props) {
    const [name, setName] = useState("");
    const [id, setId] = useState(0);
    const [gender, setGender] = useState(null);
    const [age, setAge] = useState(null);
    const [breeds, setBreeds] = useState(null);
    const [location, setLocation] = useState(null);
    const [about, setAbout] = useState(null);
    const [profileFile, setProfileFile] = useState(null);
    const [profileFileData, setProfileData] = useState(null);
    const [certificateFile, setCertificateFile] = useState(null);
    const [certificateFileData, setCertificateData] = useState(null);
    const [picture1File, setPicture1File] = useState(null);
    const [picture1Data, setPicture1Data] = useState(null);
    const [picture2File, setPicture2File] = useState(null);
    const [picture2Data, setPicture2Data] = useState(null);
    const [picture3File, setPicture3File] = useState(null);
    const [picture3Data, setPicture3Data] = useState(null);
    const [picture4File, setPicture4File] = useState(null);
    const [picture4Data, setPicture4Data] = useState(null);
    const onChangeProfilePicture = e => {
        if (e.target.files[0]) {
            //console.log("picture: ", e.target.files);
            setProfileFile(e.target.files[0]);
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setProfileData(reader.result);
            });
            reader.readAsDataURL(e.target.files[0]);
        }
    };
    const onChangeCertificate = e => {
        if (e.target.files[0]) {
            //console.log("picture: ", e.target.files);
            setCertificateFile(e.target.files[0]);
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setCertificateData(reader.result);
            });
            reader.readAsDataURL(e.target.files[0]);
        }
    };
    const onChangePicture1 = e => {
        if (e.target.files[0]) {
            //console.log("picture: ", e.target.files);
            setPicture1File(e.target.files[0]);
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setPicture1Data(reader.result);
            });
            reader.readAsDataURL(e.target.files[0]);
        }
    };
    const onChangePicture2 = e => {
        if (e.target.files[0]) {
            //console.log("picture: ", e.target.files);
            setPicture2File(e.target.files[0]);
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setPicture2Data(reader.result);
            });
            reader.readAsDataURL(e.target.files[0]);
        }
    };
    const onChangePicture3 = e => {
        if (e.target.files[0]) {
            //console.log("picture: ", e.target.files);
            setPicture3File(e.target.files[0]);
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setPicture3Data(reader.result);
            });
            reader.readAsDataURL(e.target.files[0]);
        }
    };
    const onChangePicture4 = e => {
        if (e.target.files[0]) {
            //console.log("picture: ", e.target.files);
            setPicture4File(e.target.files[0]);
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setPicture4Data(reader.result);
            });
            reader.readAsDataURL(e.target.files[0]);
        }
    };
    // const logout = () => {
    //     LocalStorageService.removeToken();
    //     props.setRole("guest");
    // }
    // <Button variant="contained"
    //                                         component="label"
    //                                         onClick={logout}>Logout</Button>
    //                                 </Grid>

    const submitForm = () => {
        const formData = new FormData();
        formData.append("id", id);
        formData.append("name", name);
        formData.append("gender", gender);
        formData.append("age", age);
        formData.append("breeds", breeds);
        formData.append("location", location);
        formData.append("about", about);
        formData.append("profileFileData", profileFileData);
        formData.append("certificateFileData", certificateFileData);
        formData.append("picture1Data", picture1Data);
        formData.append("picture2Data", picture2Data);
        formData.append("picture3Data", picture3Data);
        formData.append("picture4Data", picture4Data);
        axios
            .post("/upload", formData)
            .then((res) => {
                alert("File Upload success");
            })
            .catch((err) => alert("File Upload Error"));
    };


    useEffect(() => {
        const token = LocalStorageService.getToken();
        if (token) {
            const user = jwtDecode(token);
            setName(user.name);
            setId(user.id);
        }
    }, [])
    return (
        <div style={{ "display": "flex", "padding": "30px 100px 0 0" }}>

            <form>
                <Grid container spacing={1} >
                    <Grid container xs={12} >
                        <Grid container xs={4} justify="center" alignItems="center" direction="column">
                            <input
                                id="fi1"
                                type="file"
                                accept="image/*"
                                onChange={onChangeProfilePicture}
                                hidden
                            />
                            <label for="fi1">
                                <div
                                    style={{
                                        height: "150px",
                                        width: "150px",
                                        border: "1px dashed black",
                                        borderRadius: "50%"
                                    }}
                                    for="fi1"
                                >
                                    <img
                                        src={profileFileData}
                                        style={{
                                            objectFit: "cover",
                                            height: "150px",
                                            width: "150px",
                                            borderRadius: "50%"
                                        }}
                                    />
                                </div>
                            </label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                style={{ "width": "100px", "border": "1px solid white", "backgroundColor": "grey" }}
                            />
                        </Grid>

                        <Grid container xs={8} style={{ "borderRadius": "2%", "backgroundColor": "orange", "border": "30px dashed orange" }}>
                            <div>
                                <Grid container xs={12} style={{ "borderRadius": "2%", "border": "3px solid  white", "padding": "30px" }}>
                                    <Grid item xs={12} align="center" >
                                        <h2 style={{ "marginTop": "-50px", "backgroundColor": "orange", "width": "200px", "color": "white" }}>
                                            Account Setting
                                        </h2>
                                    </Grid>
                                    <Grid container xs={5}>
                                        <Grid container item xs={12} direction="column" align="left">
                                            <Typography inline valient="body1" style={{ "color": "white" }}>
                                                gender
                                            </Typography>
                                            <input
                                                type="text"
                                                value={gender}
                                                onChange={(e) => setGender(e.target.value)}
                                                style={{ "width": "100px" }}
                                            />
                                        </Grid>

                                        <Grid container item xs={12} direction="column" align="left">
                                            <Typography inline valient="body1" style={{ "color": "white" }}>
                                                Age
                                            </Typography>
                                            <input
                                                type="text"
                                                value={age}
                                                onChange={(e) => setAge(e.target.value)}
                                                style={{ "width": "100px" }}
                                            />
                                        </Grid>

                                        <Grid container item xs={12} direction="column" align="left">
                                            <Typography inline valient="body1" style={{ "color": "white" }} >
                                                Breeds
                                            </Typography>
                                            <input
                                                type="text"
                                                value={breeds}
                                                onChange={(e) => setBreeds(e.target.value)}
                                                style={{ "width": "200px" }}
                                            />
                                        </Grid>
                                        <Grid container item xs={12} direction="column" align="left">
                                            <Typography inline valient="body1" style={{ "color": "white" }} >
                                                Location
                                            </Typography>
                                            <input
                                                type="text"
                                                value={location}
                                                onChange={(e) => setLocation(e.target.value)}
                                                style={{ "width": "200px" }}
                                            />
                                        </Grid>

                                    </Grid>
                                    <Grid container xs={7}>
                                        <Grid container item xs={6} direction="column" align="left">
                                            <Typography inline valient="body1" style={{ "color": "white" }}>
                                                About
                                            </Typography>
                                            <input
                                                type="text"
                                                value={about}
                                                onChange={(e) => setAbout(e.target.value)}
                                                style={{ "width": "400px" }}
                                            />
                                            <Grid container item xs={6} direction="column" align="left" style={{ "marginTop": "22px" }}>
                                                <Typography inline valient="body1" style={{ "color": "white" }}>
                                                    Certificate
                                                </Typography>
                                                <input
                                                    id="fi2"
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={onChangeCertificate}
                                                    hidden
                                                />
                                                <label for="fi2">
                                                    <div
                                                        style={{
                                                            height: "200px",
                                                            width: "300px",
                                                            border: "1px dashed black",
                                                            borderRadius: "10%",
                                                            backgroundColor: "white"
                                                        }}
                                                        for="fi2"
                                                    >
                                                        <img
                                                            src={certificateFileData}
                                                            style={{
                                                                objectFit: "cover",
                                                                height: "200px",
                                                                width: "300px",
                                                                borderRadius: "10%"
                                                            }}
                                                        />
                                                    </div>
                                                </label>

                                            </Grid>
                                        </Grid>

                                    </Grid>
                                    <Typography inline valient="body1" style={{ "color": "white" }} >
                                        Insert Picture
                                    </Typography>
                                    <Grid container xs={12} style={{ "marginTop": "0px" }}>

                                        <Grid container item xs={2} direction="column" align="left" >
                                            <input
                                                id="fi3"
                                                type="file"
                                                accept="image/*"
                                                onChange={onChangePicture1}
                                                hidden
                                            />
                                            <label for="fi3">
                                                <div
                                                    style={{
                                                        height: "120px",
                                                        width: "120px",
                                                        border: "1px dashed black",
                                                        borderRadius: "10%",
                                                        backgroundColor: "white"
                                                    }}
                                                    for="fi3"
                                                >
                                                    <img
                                                        src={picture1Data}
                                                        style={{
                                                            objectFit: "cover",
                                                            height: "120px",
                                                            width: "120px",
                                                            borderRadius: "10%"
                                                        }}
                                                    />
                                                </div>
                                            </label>

                                        </Grid>
                                        <Grid container item xs={2} direction="column" align="left" style={{ "marginLeft": "5px" }}>
                                            <input
                                                id="fi4"
                                                type="file"
                                                accept="image/*"
                                                onChange={onChangePicture2}
                                                hidden
                                            />
                                            <label for="fi4">
                                                <div
                                                    style={{
                                                        height: "120px",
                                                        width: "120px",
                                                        border: "1px dashed black",
                                                        borderRadius: "10%",
                                                        backgroundColor: "white"
                                                    }}
                                                    for="fi4"
                                                >
                                                    <img
                                                        src={picture2Data}
                                                        style={{
                                                            objectFit: "cover",
                                                            height: "120px",
                                                            width: "120px",
                                                            borderRadius: "10%"
                                                        }}
                                                    />
                                                </div>
                                            </label>

                                        </Grid>
                                        <Grid container item xs={2} direction="column" align="left" style={{ "marginLeft": "5px" }}>
                                            <input
                                                id="fi5"
                                                type="file"
                                                accept="image/*"
                                                onChange={onChangePicture3}
                                                hidden
                                            />
                                            <label for="fi5">
                                                <div
                                                    style={{
                                                        height: "120px",
                                                        width: "120px",
                                                        border: "1px dashed black",
                                                        borderRadius: "10%",
                                                        backgroundColor: "white"
                                                    }}
                                                    for="fi5"
                                                >
                                                    <img
                                                        src={picture3Data}
                                                        style={{
                                                            objectFit: "cover",
                                                            height: "120px",
                                                            width: "120px",
                                                            borderRadius: "10%"
                                                        }}
                                                    />
                                                </div>
                                            </label>

                                        </Grid>
                                        <Grid container item xs={3} direction="column" align="left" style={{ "marginLeft": "5px" }}>
                                            <input
                                                id="fi6"
                                                type="file"
                                                accept="image/*"
                                                onChange={onChangePicture4}
                                                hidden
                                            />
                                            <label for="fi6">
                                                <div
                                                    style={{
                                                        height: "120px",
                                                        width: "120px",
                                                        border: "1px dashed black",
                                                        borderRadius: "10%",
                                                        backgroundColor: "white"
                                                    }}
                                                    for="fi6"
                                                >
                                                    <img
                                                        src={picture4Data}
                                                        style={{
                                                            objectFit: "cover",
                                                            height: "120px",
                                                            width: "120px",
                                                            borderRadius: "10%"
                                                        }}
                                                    />
                                                </div>
                                            </label>

                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} align="right" >
                                        <Button variant="contained"
                                            component="label"
                                            onClick={submitForm}>Save</Button>

                                    </Grid>


                                </Grid>
                            </div>
                        </Grid>

                    </Grid>
                </Grid>
            </form>

        </div >
    );
}
//setSelectedFile(e.target.value);
import React, { useState, useEffect } from 'react';
<<<<<<< HEAD:frontend/src/components/pages/Profile.js
//import { Button } from 'antd';
import LocalStorageService from '../../services/localStorageService';
import axios from '../../config/axios';
import LoadingOverlay from 'react-loading-overlay';
import jwtDecode from 'jwt-decode';
import { Button, Grid, Typography } from '@material-ui/core';

export default function Profile(props) {
    const [isActive, setisActive] = useState(false)
    const [name, setName] = useState("");
    const [id, setId] = useState(0);
    const [gender, setGender] = useState("");
    const [age, setAge] = useState(null);
    const [breeds, setBreeds] = useState("");
    const [location, setLocation] = useState("");
    const [about, setAbout] = useState("");
    const [profileFileData, setProfileData] = useState(null);

    const [certificateFileData, setCertificateData] = useState(null);
    const [picture1Data, setPicture1Data] = useState(null);
    const [picture2Data, setPicture2Data] = useState(null);
    const [picture3Data, setPicture3Data] = useState(null);
    const [picture4Data, setPicture4Data] = useState(null);

    const onChangeProfilePicture = e => {

        if (e.target.files[0]) {

            //console.log("picture: ", e.target.files);
            const reader = new FileReader();

            reader.addEventListener("load", () => {
                setProfileData(reader.result);

            })
            reader.readAsDataURL(e.target.files[0]);
        };

    };

    const onChangeCertificate = e => {
        if (e.target.files[0]) {
            //console.log("picture: ", e.target.files);
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
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setPicture4Data(reader.result);
            });
            reader.readAsDataURL(e.target.files[0]);
        }
    };
=======
// import { Button } from 'antd';
import LocalStorageService from '../../../services/localStorageService';
/*import { Link } from 'react-router-dom';*/
import './Home.css'
import jwtDecode from 'jwt-decode';
import Swap from './Swap-page';
import data from './data.json';




export default function Home(props) {
    const [name, setName] = useState("");
    const [id, setId] = useState(0);
    
>>>>>>> eye:frontend/src/components/pages/home/Home.js
    const logout = () => {
        LocalStorageService.removeToken();
        props.setRole("guest");
    }


    const submitForm = async () => {
        setisActive(true)
        let body = {
            id: id,
            name: name,
            gender: gender,
            age: age,
            breeds: breeds,
            location: location,
            about: about
        }
        let data = [];
        if (profileFileData) {
            data.push({ name: "profileFileData", data: profileFileData })
        }
        if (certificateFileData) {
            data.push({ name: "certificateFileData", data: certificateFileData })
        }
        if (picture1Data) {
            data.push({ name: "picture1Data", data: picture1Data })
        }
        if (picture2Data) {
            data.push({ name: "picture2Data", data: picture2Data })
        }
        if (picture3Data) {
            data.push({ name: "picture3Data", data: picture3Data })
        }
        if (picture4Data) {
            data.push({ name: "picture4Data", data: picture4Data })
        }

        let res = await axios.post("/image-upload", { images: data })

        for (let file in res.data.results) {
            body[file] = res.data.results[file].url;
        }
        axios.post("/doginfo/upload", body).then((res) => {
            setisActive(false)
            alert("Form Upload Success")
        }).catch((err) => alert("Form Upload Error"))


    };





    useEffect(() => {
        const token = LocalStorageService.getToken();
        if (token) {
            const user = jwtDecode(token);


            axios
                .post('/doginfo/getinfo', user)
                .then((res) => {
                    
                    setId(res.data.id);
                    setName(res.data.name);
                    setGender(res.data.gender);
                    setAge(res.data.age);
                    setBreeds(res.data.breeds);
                    setLocation(res.data.location);
                    setAbout(res.data.about);
                    setProfileData(res.data.profilePicture);
                    setCertificateData(res.data.certificate);
                    setPicture1Data(res.data.picture1);
                    setPicture2Data(res.data.picture2);
                    setPicture3Data(res.data.picture3);
                    setPicture4Data(res.data.picture4);
                }).catch((err) => {
                    console.log(err)
                    alert("refresh error")
                });

        }
    }, [])
    return (
<<<<<<< HEAD:frontend/src/components/pages/Profile.js
        <LoadingOverlay
            active={isActive}
            spinner
            text='Uploading files...'
            style={{ "height": "100%" }}
        >
            <div style={{ "display": "flex", "padding": "30px 100px 0 0", "height": "100%" }}>

                <form >
                    <Grid container spacing={1} >
                        <Grid container item xs={12} >
                            <Grid container item xs={4} justify="center" alignItems="center" direction="column">
                                <input
                                    id="fi1"
                                    type="file"
                                    accept="image/*"
                                    onChange={onChangeProfilePicture}
                                    hidden
                                />
                                <label htmlFor="fi1">
                                    <div
                                        style={{
                                            height: "150px",
                                            width: "150px",
                                            border: "3px solid black",
                                            borderRadius: "50%"
                                        }}
                                        htmlFor="fi1"
                                    >
                                        <img
                                            src={profileFileData}
                                            alt=""
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
                                    id="Box_name"
                                    type="text"
                                    value={name || ''}
                                    onChange={(e) => setName(e.target.value)}
                                    style={{ "width": "100px", "border": "3px solid #727272", "backgroundColor": "#ffffff" }}
                                />
                            </Grid>

                            <Grid container item xs={8} style={{ "borderRadius": "2%", "backgroundColor": "#E1B76D", "border": "30px solid #E1B76D" }}>
                                <div>
                                    <Grid container item xs={12} style={{ "borderRadius": "2%", "border": "3px solid  white", "padding": "30px" }}>
                                        <Grid item xs={12} align="center" >
                                            <h2 style={{ "marginTop": "-50px", "backgroundColor": "#E1B76D", "width": "200px", "color": "white" }}>
                                                Account Setting
                                        </h2>
                                        </Grid>
                                        <Grid container item xs={5}>
                                            <Grid container item xs={12} direction="column" align="left">
                                                <Typography inline="true" valient="body1" style={{ "color": "white" }}>
                                                    Gender
                                            </Typography>

                                                <input
                                                    id="Box_gender"
                                                    type="text"
                                                    value={gender || ''}
                                                    onChange={(e) => setGender(e.target.value)}
                                                    style={{ "width": "50%" }}
                                                />

                                            </Grid>

                                            <Grid container item xs={12} direction="column" align="left">
                                                <Typography inline="True" valient="body1" style={{ "color": "white" }}>
                                                    Age
                                            </Typography>
                                                <input
                                                    id="Box_age"
                                                    type="text"
                                                    value={age || ''}
                                                    onChange={(e) => setAge(e.target.value)}
                                                    style={{ "width": "50%" }}
                                                />
                                            </Grid>

                                            <Grid container item xs={12} direction="column" align="left">
                                                <Typography inline="True" valient="body1" style={{ "color": "white" }} >
                                                    Breeds
                                            </Typography>
                                                <input
                                                    id="Box_breeds"
                                                    type="text"
                                                    value={breeds || ''}
                                                    onChange={(e) => setBreeds(e.target.value)}
                                                    style={{ "width": "90%" }}
                                                />
                                            </Grid>
                                            <Grid container item xs={12} direction="column" align="left">
                                                <Typography inline="True" valient="body1" style={{ "color": "white" }} >
                                                    Location
                                            </Typography>
                                                <input
                                                    id="Box_location"
                                                    type="text"
                                                    value={location || ''}
                                                    onChange={(e) => setLocation(e.target.value)}
                                                    style={{ "width": "90%" }}
                                                />
                                            </Grid>

                                        </Grid>
                                        <Grid container item xs={7}>
                                            <Grid container item xs={6} direction="column" align="left">
                                                <Typography inline="True" valient="body1" style={{ "color": "white" }}>
                                                    About
                                            </Typography>
                                                <input
                                                    id="Box_about"
                                                    type="text"
                                                    value={about || ''}
                                                    onChange={(e) => setAbout(e.target.value)}
                                                    style={{ "width": "150%" }}
                                                />
                                                <Grid container item xs={6} direction="column" align="left" style={{ "marginTop": "22px" }}>
                                                    <Typography inline="True" valient="body1" style={{ "color": "white" }}>
                                                        About
                                            </Typography>
                                                    <input
                                                        id="Box_about"
                                                        type="text"
                                                        value={about || ''}
                                                        onChange={(e) => setAbout(e.target.value)}
                                                        style={{ "width": "400px" }}
                                                    />
                                                    <Grid container item xs={6} direction="column" align="left" style={{ "marginTop": "22px" }}>
                                                        <Typography inline="True" valient="body1" style={{ "color": "white" }}>
                                                            Certificate
                                                </Typography>
                                                        <input
                                                            id="fi2"
                                                            type="file"
                                                            accept="image/*"
                                                            onChange={onChangeCertificate}
                                                            hidden
                                                        />
                                                        <label htmlFor="fi2">
                                                            <div
                                                                style={{
                                                                    height: "200px",
                                                                    width: "300px",
                                                                    border: "3px solid #727272",
                                                                    borderRadius: "10%",
                                                                    backgroundColor: "white"
                                                                }}
                                                                htmlFor="fi2"
                                                            >
                                                                <img
                                                                    src={certificateFileData}
                                                                    alt=""
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
                                            <Typography inline="True" valient="body1" style={{ "color": "white" }} >
                                                Insert Picture
                                            </Typography>
                                            <Grid container item xs={12} style={{ "marginTop": "0px" }}>

                                                <Grid container item xs={2} direction="column" align="left" >
                                                    <input
                                                        id="fi3"
                                                        type="file"
                                                        accept="image/*"
                                                        onChange={onChangePicture1}
                                                        hidden
                                                    />
                                                    <label htmlFor="fi3">
                                                        <div
                                                            style={{
                                                                height: "100%",
                                                                width: "100%",
                                                                border: "3px solid #727272",
                                                                borderRadius: "10%",
                                                                backgroundColor: "white"
                                                            }}
                                                            htmlFor="fi3"
                                                        >
                                                            <img
                                                                src={picture1Data}
                                                                alt=""
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

                                        </Grid>
                                        <Typography inline="True" valient="body1" style={{ "color": "white" }} >
                                            Insert Picture
                                       </Typography>
                                        <Grid container item xs={12} style={{ "marginTop": "0px" }}>

                                            <Grid container item xs={2} direction="column" align="left" >
                                                <input
                                                    id="fi3"
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={onChangePicture1}
                                                    hidden
                                                />
                                                <label htmlFor="fi3">
                                                    <div
                                                        style={{
                                                            height: "120px",
                                                            width: "95%",
                                                            marginRight: "7px",
                                                            border: "3px solid #727272",
                                                            borderRadius: "10%",
                                                            backgroundColor: "white"
                                                        }}
                                                        htmlFor="fi3"
                                                    >
                                                        <img
                                                            src={picture1Data}
                                                            alt=""
                                                            style={{
                                                                height: "120px",
                                                                width: "120px",
                                                                border: "3px solid #727272",
                                                                borderRadius: "10%",
                                                                backgroundColor: "white"
                                                            }}
                                                            htmlFor="fi4"
                                                        />
                                                        <img
                                                            src={picture2Data}
                                                            alt=""
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

                                                <label htmlFor="fi4">
                                                    <div
                                                        style={{
                                                            height: "120px",
                                                            width: "78.5%",
                                                            marginLeft: "30px",
                                                            border: "3px solid #727272",
                                                            borderRadius: "10%",
                                                            backgroundColor: "white"
                                                        }}
                                                        htmlFor="fi4"
                                                    >
                                                        <img
                                                            src={picture2Data}
                                                            alt=""
                                                            style={{
                                                                height: "120px",
                                                                width: "120px",
                                                                border: "3px solid #727272",
                                                                borderRadius: "10%",
                                                                backgroundColor: "white"
                                                            }}
                                                            htmlFor="fi5"
                                                        />
                                                        <img
                                                            src={picture3Data}
                                                            alt=""
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

                                                <label htmlFor="fi5">
                                                    <div
                                                        style={{
                                                            height: "120px",
                                                            width: "69%",
                                                            marginLeft: "55px",
                                                            border: "3px solid #727272",
                                                            borderRadius: "10%",
                                                            backgroundColor: "white"
                                                        }}
                                                        htmlFor="fi5"
                                                    >
                                                        <img
                                                            src={picture3Data}
                                                            alt=""
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

                                                <label htmlFor="fi6">
                                                    <div

                                                        style={{
                                                            height: "120px",
                                                            width: "50%",
                                                            marginLeft: "85px",
                                                            border: "3px solid #727272",
                                                            borderRadius: "10%",
                                                            backgroundColor: "white"
                                                        }}
                                                        htmlFor="fi6"
                                                    >
                                                        <img
                                                            src={picture4Data}
                                                            alt=""
                                                            style={{
                                                                height: "120px",
                                                                width: "120px",
                                                                border: "3px solid #727272",
                                                                borderRadius: "10%",
                                                                backgroundColor: "white"
                                                            }}
                                                            htmlFor="fi6"
                                                        />
                                                        <img
                                                            src={picture4Data}
                                                            alt=""
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
                                        <div id="Box_save">
                                            <Grid item xs={6} align="right" >
                                                <Button variant="contained"
                                                    component="label"
                                                    onClick={submitForm} style={{ backgroundColor: "#ee7458", color: "#ffffff", border: "2px solid #F4E6CF" }}>Save</Button>

                                            </Grid>
                                        </div>

                                        <div id="Box_logout">
                                            <Grid item xs={6} align="right" >
                                                <Button variant="contained"
                                                    component="label"
                                                    onClick={logout} style={{ backgroundColor: "#ee7458", color: "#ffffff", border: "2px solid #F4E6CF" }}>Logout</Button>
                                            </Grid>
                                        </div>


                                    </Grid>
                                        
                                    
                                    </div >            
                                    </Grid>
            
           
                                    </Grid>
            
            </Grid>
            
            </form>

        
    </div>

    </LoadingOverlay>
=======
        <div>

            <Swap data={data}/>

        </div>
>>>>>>> eye:frontend/src/components/pages/home/Home.js
    );
}
//setSelectedFile(e.target.value);
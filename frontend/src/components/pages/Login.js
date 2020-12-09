import React from 'react';
import phone from "../../z_phone 1.png"
import google from "../../z_google 1.png"
import line from "../../z_line 1.png"
import facebook from "../../z_facebook 1.png"
import { Form, Input, Button, Row, Col, Divider, notification, Popconfirm, message} from 'antd';
import Title from 'antd/lib/typography/Title';
import axios from '../../config/axios';
import LocalStorageService from '../../services/localStorageService';
const layout = {
    labelCol: { xs: 24, sm: 5, md: 4, lg: 5, xl: 4, xxl: 3 },
    wrapperCol: { xs: 24, sm: 19, md: 20, lg: 19, xl: 20, xxl: 21 },
};
const content = (
    <div>
        <p> content </p>
    </div>
);

function confirm(e) {
    console.log(e);
    // message.success('so good');
}

function cancel(e) {
    console.log(e);
    // message.error('wait a 1000000000sec');
}

export default function Login(props) {

    const onFinish = values => {
        const body = {
            username: values.username,
            password: values.password
        };
        axios.post("/users/login", body)
            .then(result => {
                LocalStorageService.setToken(result.data.token);
                props.setRole("user");
                window.location.replace('/profile');
            })
            .catch(err => {
                notification.error({ 
                    message: `Login Fail.`
                });
            })
    };

   

    return (
        <Row justify="center" >
            <Col xs={23} sm={23} md={23} lg={14} xl={14} xxl={12}>
                <div className="Form">
                    <Row justify="center">
                        <Title level={2} className="Title" style={{color: '#8C9868' , fontSize:"75px"}}>
                            D
                        </Title>
                        <Title level={2} className="Title" style={{color: '#ee7458' , marginTop:"25px" , fontSize:"75px"}}>
                            D <span style={{color: '#8c9868'}}>Dinner  </span>  
                        </Title><span style={{color: '#FFFFF'}}></span>
                        {/*<Title level={2} className="Title" style={{color: '#8C9868', marginTop:"25px" }}>
                            Dinner 
                        </Title>*/}
                        <Title level={2} className='Title' style={{color: '#ee7458', marginTop:"25px" , fontSize:"75px"}}>
                            Dog
                        </Title>
                    </Row>
                    <Divider className="Divider" />
                    <Form
                        className="App"
                        {...layout}
                        onFinish={onFinish}
                        style={{ width: "100%" , marginLeft: "50px"}}
                    >
                        <Form.Item
                            id = "username"
                            /*label="Username"*/
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        
                        >
                            <Input size="large" placeholder="Username" style={{ borderRadius: "20px", borderColor: "#727272" , borderWidth: "2.5px"}}/>
                            
                        </Form.Item>

                        
                        <Form.Item
                            id = "password"
                            /*label="Password"*/
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!'}]}
                            
                            
                        >
                            
                                <Input.Password size="large" placeholder="Password" style={{borderRadius: "20px" , borderColor:"#727272" , borderWidth:"2.5px"}}/>
                                
                        </Form.Item>
                        <div style={{marginTop: "-30px"}}>
                            <br></br>
                            <Popconfirm
                                title = "Forget password ... comming soon"
                                onConfirm={confirm} 
                                onCancel={cancel}> 
                                <Button id = "forgot_password" type="link" style={{marginLeft: "370px" , color: '#646464'}}><p> Forgot password </p></Button>
                            </Popconfirm>
                        </div>
                            
                        <div>
                            <Button id = "login_button" className="Button" type="primary" htmlType="submit" /*shape="round"*/ size="large" style={{marginLeft: "-30px" , marginTop: "15px" , fontFamily: 'Quicksand' , fontWeight: "500"}}>
                                Submit
                            </Button>
                        </div>

                        <div style={{marginTop: "-15px" , marginRight: "90px"}}>
                            
                            <Button id = "Register" href='/register' type="link" style={{marginLeft: "100px" , color: '#646464' , marginTop: "-10px"}}><p id="register"> Register</p> </Button>
                            
                        </div>
                        <div style={{marginRight:"100px" , marginTop:"45px"}}>
                            <p id="line_or"><hr></hr>
                            or</p>
                        </div>
                        <div>
                            <Popconfirm
                                title = "DD veterinary ... comming soon"
                                onConfirm={confirm}
                                onCancel={cancel}>
                                    <Button id = "DD_veter" className="Button" type="primary"  /*shape="round"*/ size="large" style={{marginLeft: "430px" , marginTop: "15px" , fontFamily: 'Quicksand' , fontWeight: "500"}}>
                                        DD veterinary
                                    </Button>
                            </Popconfirm>
                        </div>
                        <div>
                            <img  id="Image1" alt="นิวหน้าหี" src={phone}/>
                        </div>
                        <div>
                            <img id="Image2" alt="นิวหน้าหี2" src={google} />
                        </div>
                        <div>
                            <img id="Image3" alt="นิวหน้าหี3" src={line}/>
                        </div>
                        <div>
                            <img id="Image4" alt="นิวหน้าหี4" src={facebook} />
                        </div>
                    </Form>
                </div>
            </Col>
        </Row>
    );
    
}

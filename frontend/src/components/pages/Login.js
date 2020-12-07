import React from 'react';
import { Form, Input, Button, Row, Col, Divider, notification } from 'antd';
import Title from 'antd/lib/typography/Title';
import axios from '../../config/axios';
import LocalStorageService from '../../services/localStorageService';
const layout = {
    labelCol: { xs: 24, sm: 5, md: 4, lg: 5, xl: 4, xxl: 3 },
    wrapperCol: { xs: 24, sm: 19, md: 20, lg: 19, xl: 20, xxl: 21 },
};

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
                                <div>
                                    <Button type="link" style={{marginLeft: "450px" , color: '#000000'}}> Forgot password </Button>
                                </div>
                        </Form.Item>
                        
                        
                        <Button id = "login_button" className="Button" type="primary" htmlType="submit" shape="round" size="large" style={{borderColor: '#ffffff' , color:'#ffffff' , background:'#ee7458' , marginLeft: "-30px"}}>
                            Submit
                        </Button>
                        <div>
                            <Button id = "Register" type="link" style={{marginLeft: "100px" , color: '#000000' , marginTop: "-10px"}}> Register </Button>
                        </div>
                        
                    </Form>
                </div>
            </Col>
        </Row>
    );
    
}

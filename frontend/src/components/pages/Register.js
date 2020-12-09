import React from 'react';
import DogFoot2 from "../../z_DogFoot2.png"
import DogFoot3 from "../../z_DogFoot2.png"
import { Form, Input, Button, Row, Col, Divider, notification, message } from 'antd';
import Title from 'antd/lib/typography/Title';
import axios from '../../config/axios';
import { withRouter } from 'react-router-dom';
const layout = {
    labelCol: { xs: 24, sm: 7, md: 6, lg: 6, xl: 5, xxl: 4 },
    wrapperCol: { xs: 24, sm: 17, md: 18, lg: 18, xl: 19, xxl: 20 },
};
function Register(props) {

    const onFinish = values => {
        console.log('Received values of form: ', values);
        const body = {
            username: values.email,
            password: values.password,
            name: values.nickname
        }
        axios.post('/users/register', body)
            .then(res => {
                notification.success({
                    message: `Successful Registration, Mx.${values.nickname}.`
                });
                props.history.push('/login');
            })
            .catch(err => {
                notification.error({
                    message: `Registration Fail.`
                });
            });
    };

    return (
        <Row justify="center" >
            <Col xs={23} sm={23} md={23} lg={14} xl={14} xxl={12}>
                <div
                    className="Form"
                >
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

                        <div style={{marginTop: "120px"}}>
                            <Title id="Regis_2" level={2} className="Title" style={{color: '#727272' , fontSize:"25px" , marginLeft: "-900px"}}>
                                Register
                            </Title>
                        </div>
                    </Row>
                    <Divider className="Divider" />
                    <Form
                        {...layout}
                        onFinish={onFinish}
                        style={{ width: "100%" }}
                    >
                        <Form.Item 
                            id = "email"
                            name="email"
                            /*label="E-mail"*/
                            rules={[
                                {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                },
                                {
                                    required: true,
                                    message: 'Please input your E-mail!',
                                },
                            ]}
                        >
                            <Input placeholder="Email" style={{marginLeft: "80px"}}/>
                        </Form.Item>

                        <Form.Item 
                            id = "password"
                            name="password"
                            /*label="Password"*/
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                            hasFeedback
                        >
                            <Input.Password placeholder="Password" style={{marginLeft: "80px" , borderRadius: "30px" , borderWidth: "3px" , borderColor: '#727272'}}/>
                        </Form.Item>

                        <Form.Item
                            id = "confirm"
                            name="confirm"
                            /*label="Confirm Password"*/
                            hasFeedback
                            dependencies={["password"]}
                            rules={[
                                {
                                    required: true,
                                    message: 'Please confirm your password!',
                                },
                                ({ getFieldValue }) => ({
                                    validator(rule, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject('Confirm password must match password');
                                    }
                                })
                            ]}
                        >
                            <Input.Password placeholder="Confirm Password" style={{marginLeft: "80px" , borderRadius: "30px" , borderWidth: "3px" , borderColor: '#727272'}}/>
                        </Form.Item>

                        <Form.Item
                            id = "nickname"
                            name="nickname"
                            /*label={<span>Nickname&nbsp;</span>}*/
                            rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
                        >
                            <Input placeholder="Nick Name" style={{marginLeft: "80px"}}/>
                        </Form.Item>


                        <Form.Item
                            id = "PhoneNumber"
                            name="PhoneNumber"
                            hasFeedback
                            dependencies={["PhoneNumber"]}
                            /*label={<span>Phone Number&nbsp;</span>}*/
                            rules={[
                               
                                ({ getFieldValue }) => ({
                                    validator(rule, value) {
                                        
                                    
                                    let re = new RegExp("^[0-9]{10}$");
                                    console.log(re.test(getFieldValue('PhoneNumber')))
                                    if (re.test(getFieldValue('PhoneNumber'))) {
                                        
                                        return Promise.resolve();
                                    }
                                    return Promise.reject('Invalid Phone Number');
                                }
                            })]}
                               
                        >
                            <Input placeholder="Phone Number" style={{marginLeft: "80px"}}/>
                        </Form.Item>
                        <div>
                            <Button id="submit_button" className="nextButton" type="primary" htmlType="submit">
                                submit
                            </Button>
                        </div>

                        <div style={{marginTop: "-34px"}}>
                            <Button id="login_button2" href='/login' className="backButton" type="primary">
                                <p style={{marginTop: "2px"}}>login</p>
                            </Button>
                        </div>

                        <div>
                            <img id="Image5" alt="นิวหน้าหี5" src={DogFoot2} />
                        </div>
                        
                        <div>
                            <img id="Image6" alt="นิวหน้าหี6" src={DogFoot3} />
                        </div>
                        
                    </Form>
                </div>
            </Col>
        </Row>
    );
}

export default withRouter(Register);
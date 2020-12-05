import React from 'react';
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
                        <Title level={2} className="Title" style={{color: '#8c9868' , fontSize:"50px"}}>
                            Register
                        </Title>
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
                            label="E-mail"
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
                            <Input />
                        </Form.Item>

                        <Form.Item
                            id = "password"
                            name="password"
                            label="Password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                            hasFeedback
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            name="confirm"
                            label="Confirm Password"
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
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            id = "nickname"
                            name="nickname"
                            label={<span>Nickname&nbsp;</span>}
                            rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
                        >
                            <Input />
                        </Form.Item>


                        <Form.Item
                            id = "Phone Number"
                            name="Phone Number"
                            label={<span>Phone Number&nbsp;</span>}
                            rules={[
                                {
                                    required: true,
                                    type: "integer",
                                    message: 'Please input interger!',
                                    whitespace:true
                                },
                                { 
                                    required: true, 
                                    message: 'Please input your Phone Number!', 
                                    whitespace: true 
                                }]}
                        >
                            <Input />
                        </Form.Item>

                        <Button id="register_button" className="Button" type="primary" htmlType="submit">
                            Register
                        </Button>
                    </Form>
                </div>
            </Col>
        </Row>
    );
}

export default withRouter(Register);
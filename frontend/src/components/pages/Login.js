import React from 'react';
import { Form, Input, Button, Row, Col, Divider } from 'antd';
import Title from 'antd/lib/typography/Title';

const layout = {
    labelCol: { xs: 24, sm: 5, md: 4, lg: 5, xl: 4, xxl: 3 },
    wrapperCol: { xs: 24, sm: 19, md: 20, lg: 19, xl: 20, xxl: 21 },
};

export default function Login() {

    const onFinish = values => {
        console.log('Success:', values);
    };

    return (
        <Row justify="center">
            <Col xs={23} sm={23} md={23} lg={14} xl={14} xxl={12}>
                <div className="Form">
                    <Row justify="center">
                        <Title level={2} className="Title">
                            Login
                    </Title>
                    </Row>
                    <Divider className="Divider" />
                    <Form
                        className="App"
                        {...layout}
                        onFinish={onFinish}
                        style={{ width: "100%" }}
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Button className="Button" type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </Col>
        </Row>
    );
}

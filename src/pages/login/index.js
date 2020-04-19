import React from 'react';
import './index.css';

import { Row, Col, Layout, Form, Input, Button, Checkbox } from 'antd';
import IconStudent from '../../assets/icon/icon_student_login.png';

function Login() {
    return (
        <Layout className="layout-login">
            <Row className="ant-layout-content">
                <Col className="login-container-main"
                    xs={{ span: 22, offset: 1 }}
                    sm={{ span: 20, offset: 2 }}
                    md={{ span: 14, offset: 5 }}
                    lg={{ span: 11, offset: 7 }}
                    xl={{ span: 11, offset: 7 }}>
                    <Row className="login-container-content">
                        <Col className="login-container-form" span={10}>
                            <center><img src={IconStudent}></img></center>
                            <Form
                                name="basic"
                                initialValues={{ remember: true }}
                            >
                                <Form.Item
                                    name="username"
                                    rules={[{ required: true, message: 'Please input your username!' }]}
                                >
                                    <Input placeholder="Seu email!" />
                                </Form.Item>

                                <Form.Item
                                    name="password"
                                    rules={[{ required: true, message: 'Please input your password!' }]}
                                >
                                    <Input.Password placeholder="Sua senha!" />
                                </Form.Item>

                                <Form.Item name="remember" valuePropName="checked">
                                    <Checkbox>Fica lembrando</Checkbox>
                                </Form.Item>

                                <Form.Item >
                                    <Button type="primary" htmlType="submit" block>
                                        Manda ai!
        </Button>
                                </Form.Item>
                            </Form>
                        </Col>
                        <Col className="login-container-bg" span={14}> </Col>
                    </Row>
                </Col>
            </Row>
        </Layout>
    );
}

export default Login;

import React from 'react';
import './index.css';

import { Row, Col, Layout, Form, Input, Button, Checkbox } from 'antd';
import IconStudent from '../../assets/icons/icon_student_login.png';

function Login() {
    return (
        <Layout className="layout-login">
            <Row className="ant-layout-content">
                <Col className="login-container-main"
                    xs={{ span: 22, offset: 1 }}
                    sm={{ span: 20, offset: 2 }}
                    md={{ span: 14, offset: 5 }}
                    lg={{ span: 13, offset: 6 }}
                    xl={{ span: 13, offset: 6 }}>
                    <Row className="login-container-content">
                        <Col className="login-container-form"
                            xs={{ span: 24 }}
                            sm={{ span: 20 }}
                            md={{ span: 16 }}
                            lg={{ span: 12 }}
                            xl={{ span: 12 }}>
                            <center><img src={IconStudent} alt="icon-student" ></img></center>
                            <Form
                                name="basic"
                                initialValues={{ remember: true }}
                            >
                                <Form.Item
                                    name="email"
                                    rules={[{ required: true, message: 'Por favor preencha seu email!' }]}
                                >
                                    <Input placeholder="Seu email!" />
                                </Form.Item>

                                <Form.Item
                                    name="password"
                                    rules={[{ required: true, message: 'Por favor preencha sua senha!' }]}
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
                        <Col className="login-container-bg"
                            xs={{ span: 0 }}
                            sm={{ span: 4 }}
                            md={{ span: 8 }}
                            lg={{ span: 12 }}
                            xl={{ span: 12 }}> </Col>
                    </Row>
                </Col>
            </Row>
        </Layout>
    );
}

export default Login;

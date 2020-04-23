import React, { useState } from 'react';
import { Row, Col, Layout, Form, Input, Button, Radio } from 'antd';

import './index.css';
import IconStudent from '../../assets/icons/icon_student_login.png';



function Login() {
    const [email, setEmail] = useState('');
    const [passw, setPassw] = useState('');
    const [userType, setUserType] = useState('student');


    const handlerSubmitFormLogin = (event) => {
        event.preventDefault();
        console.log('subimitou! email: ' + email + " | pass: " + passw + " | usetType: " + userType);

    }

    const checkEmail = (rules, value) => {
        if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(value)) {
            return Promise.resolve();
        }
        return Promise.reject('Erro ai no regex email!');
    }

    const validateMessages = {
            // eslint-disable-next-line no-template-curly-in-string
        required: "${name} precisa ser preenchido!",
        types: {
            // eslint-disable-next-line no-template-curly-in-string
            email: '${name} não é válido!',
        },
    }

    return (
        <Layout className="layout-login">
            <Row className="ant-layout-content">
                <Col className="login-container-main"
                    xs={{ span: 22}}
                    sm={{ span: 20}}
                    md={{ span: 14}}
                    lg={{ span: 13}}
                    xl={{ span: 13}}>
                    <Row className="login-container-content">
                        <Col className="login-container-form"
                            xs={{ span: 24 }}
                            sm={{ span: 20 }}
                            md={{ span: 18 }}
                            lg={{ span: 14 }}
                            xl={{ span: 12 }}>
                            <center><img src={IconStudent} alt="icon-student" ></img></center>
                            <Form
                                name="basic"
                                initialValues={{ remember: true }}
                                onSubmitCapture={handlerSubmitFormLogin}
                                validateMessages={validateMessages}
                            >
                                <Form.Item
                                    name="email"
                                    rules={[{ required: true, type: 'email', validator: checkEmail }]}
                                >
                                    <Input placeholder="Seu email!" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                                </Form.Item>

                                <Form.Item
                                    name="password"
                                    rules={[{ required: true, message: 'Por favor preencha sua senha!' }]}
                                >
                                    <Input.Password placeholder="Sua senha!" onChange={(e) => { setPassw(e.target.value) }} />
                                </Form.Item>

                                <Form.Item name="usertype" >
                                    <Radio.Group value={userType} onChange={(e) => { setUserType(e.target.value) }}>
                                        <Radio.Button value="student" checked block>Sou aluno</Radio.Button>
                                        <Radio.Button value="teacher" block>Sou professor</Radio.Button>
                                    </Radio.Group>
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
                            md={{ span: 6 }}
                            lg={{ span: 10 }}
                            xl={{ span: 12 }}> </Col>
                    </Row>
                </Col>
            </Row>
        </Layout>
    );
}

export default Login;

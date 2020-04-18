import React from 'react';
import './index.css';

import { Row, Col, Layout } from 'antd';
const { Content } = Layout;

function Login() {
    return (
        <Layout>
            <Content>
                <Row>
                    <Col className="login-container"
                        xs={{ span: 22, offset: 1 }}
                        sm={{ span: 20, offset: 2 }}
                        md={{ span: 14, offset: 5 }}
                        lg={{ span: 10, offset: 7 }}
                        xl={{ span: 10, offset: 7 }}>
                        <Row>
                            <Col span={10}>
                                asd
                            </Col>
                            <Col className="login-container-bg" span={14}>

                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
}

export default Login;

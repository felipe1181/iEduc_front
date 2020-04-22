import React from 'react';

import { Row, Col, Layout, Divider } from 'antd';
import { TeamOutlined, SolutionOutlined, WechatOutlined } from '@ant-design/icons';
import Menu from '../default/menu/menu.js';

import Info from './info/info';
import './index.css';


function Dashboard() {
    const { Header, Content } = Layout;
    return (
        <Layout className="layout-login">
            <Header>
                <div className="container-header" span={24}>
                    <Row>
                        <Col span={22}>
                            <Row span={24} className="container-info-dashboard"
                                gutter={{
                                    xs: 8,
                                    sm: 16,
                                    md: 24,
                                    lg: 32
                                }}>
                                <Col
                                    xs={{ span: 24 }}
                                    sm={{ span: 24 }}
                                    md={{ span: 8 }}
                                    lg={{ span: 8 }}
                                    xl={{ span: 8 }}>
                                    <Info ico={<TeamOutlined />} name="Estudantes" val="10.000" />
                                </Col>
                                <Col
                                    xs={{ span: 24 }}
                                    sm={{ span: 24 }}
                                    md={{ span: 8 }}
                                    lg={{ span: 8 }}
                                    xl={{ span: 8 }}>
                                    <Info ico={<SolutionOutlined />} name="Matérias" val="25" />
                                </Col>
                                <Col
                                    xs={{ span: 24 }}
                                    sm={{ span: 24 }}
                                    md={{ span: 8 }}
                                    lg={{ span: 8 }}
                                    xl={{ span: 8 }}>
                                    <Info ico={<WechatOutlined />} name="Classes" val="250" />
                                </Col>
                            </Row>
                        </Col>
                        <Col className="menu-container-ieduc" span={2}>
                            <Menu />
                        </Col>
                    </Row>

                </div>
            </Header>

            <Content>

                <Row>
                    <Col
                        xs={{ span: 24 }}
                        sm={{ span: 24 }}
                        md={{ span: 8 }}
                        lg={{ span: 8 }}
                        xl={{ span: 8 }}>
                        session 1
                        </Col>
                    <Col
                        xs={{ span: 24 }}
                        sm={{ span: 24 }}
                        md={{ span: 8 }}
                        lg={{ span: 8 }}
                        xl={{ span: 8 }}>
                        session 2
                        </Col>
                    <Col
                        xs={{ span: 24 }}
                        sm={{ span: 24 }}
                        md={{ span: 8 }}
                        lg={{ span: 8 }}
                        xl={{ span: 8 }}>
                        session 3
                        </Col>
                </Row>
            </Content>
        </Layout>
    );
}

export default Dashboard;

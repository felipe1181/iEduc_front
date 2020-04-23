import React from 'react';

import { Row, Col, Layout } from 'antd';
import { TeamOutlined, SolutionOutlined, WechatOutlined } from '@ant-design/icons';
import Menu from '../default/menu/menu.js';
import './index.css';

import Info from './info/info';
import Holiday from './session_left/holiday/holiday';
import Exams from './session_left/exams/exams';
import Calendar from './session _center/calendar/calendar';
import Estatistics from './session_right/estatistics/estatistics';
import Classes from './session_right/your_classes/classes';


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

            <Content className="content-main-dashboard">
                <Row  span={24}  gutter={15}>
                    <Col 
                        xs={{ span: 24 }}
                        sm={{ span: 24 }}
                        md={{ span: 8 }}
                        lg={{ span: 8 }}
                        xl={{ span: 5 }}>
                            <Row gutter={5}>
                                <Col span={24}>
                                    <Holiday days="150"/>
                                </Col> 
                                <hr></hr>
                                <Col span={24}>
                                     <Exams />   
                                </Col>
                            </Row>
                        </Col>
                         
                    <Col 
                        xs={{ span: 24 }}
                        sm={{ span: 24 }}
                        md={{ span: 8 }}
                        lg={{ span: 8 }}
                        xl={{ span: 8 }}>
                            <Calendar/>
                        </Col>
                         
                    <Col 
                        xs={{ span: 24 }}
                        sm={{ span: 24 }}
                        md={{ span: 8 }}
                        lg={{ span: 8 }}
                        xl={{ span: 11 }}>
                               <Row gutter={5}>
                                <Col span={24}>
                                    <Classes/>
                                </Col> 
                                <hr></hr>
                                <Col span={24}>
                                    <Estatistics/>  
                                </Col>
                            </Row> 
                        </Col>
                </Row>
            </Content>
        </Layout>
    );
}

export default Dashboard;

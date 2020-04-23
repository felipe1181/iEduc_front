import React from 'react';
import'./classes.css';
import { Row, Col } from 'antd';
import { AndroidFilled,SmileFilled,RocketFilled,ShoppingFilled } from '@ant-design/icons';

import InfoClass from './info_class/infoClass';

function Classes(){
    return(
        <>
            <Row className="card-your-classes default-border-shadow-components"  gutter={10}>
                <Col className="title-classe-card" span={24}>
                    <span>Suas Classes</span> 
                </Col>
                <Col span={6}>
                    <InfoClass ico={<SmileFilled />} color="#63d1b4" name="Classe 1A"/>
                </Col>
                <Col span={6}>
                    <InfoClass ico={<AndroidFilled />} color="#feb4a9" name="Classe de android"/>
                </Col>
                <Col span={6}>
                <InfoClass ico={<RocketFilled />} color="#254d71" name="Primeiro Ano"/>
                </Col>
                <Col span={6}>
                    <InfoClass ico={<ShoppingFilled />} color="#63d1b4" name="Segundo Ano"/>
                </Col>
            </Row>
        </>
    );
}

export default Classes;
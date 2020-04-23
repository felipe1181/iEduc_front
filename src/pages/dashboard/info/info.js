import React from 'react';
import { Row, Col, Card} from 'antd';

import './info.css';

function Info(props) {
    return (
        <>
            <Card span={24} className="card-info-dashboard">
                <Row>
                    <Col className="car-info-text" span={10}>
                        <p>{props.ico}</p>
                        <p>{props.name}</p>
                    </Col>
                    <Col className="car-info-val" span={14}>
                        <p>{props.val}</p>
                    </Col>
                </Row>
            </Card>
        </>
    );
}

export default Info;
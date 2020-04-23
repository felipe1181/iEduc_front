import React from 'react';

import { Card ,Row,Col} from 'antd';

import './holiday.css';

import IconLikeBoss from '../../../../assets/icons/icon_like_boss.png';


function Holiday(props){
    return(
        <>
            <Card className="card-holiday default-border-shadow-components">
                <Row>
                    <Col span={20}>
                       <span>{props.days}</span>
                       <p>Dias para as férias</p> 
                    </Col>
                    <Col span={4}>
                        <img src={IconLikeBoss} alt="icon-holiday"/>
                    </Col>
                </Row> 
            </Card>
        </>        
    );
}

export default Holiday;
import React from 'react';
import { Row, Col } from 'antd';
import './infoClass.css';

function Classes(props){
    return(
        <>
           <Row  className="card-info-classes"  style={{background:props.color}}>
               <Col className="icon-info-classes"  span={4} offset={14}>
                    <span>{props.ico}</span>
               </Col>
               <Col className="title-info-classes"  span={24}>
                    <span>{props.name}</span>
               </Col>
           </Row>
        </>
    );
}

export default Classes;
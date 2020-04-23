import React from 'react';
import './calendar.css';

import { Card, Row,Col,Cascader,Timeline,Button} from 'antd';

const options = [
    {value: 'Hoje',label: 'Hoje'},
    {value: 'Semana',label: 'Semana'},
    {value: 'Mês',label: 'Mês'},
    {value: 'Ano',label: 'Ano'}
];
function Calendar(){
    
    return(
        <Card className="card-calendar default-border-shadow-components">
            <span className="title-calendar">Calendário</span>
            <Row>
                <Col span={17}><p>7 eventos hoje</p></Col>
                <Col span={7}><Cascader size="small"  options={options} placeholder="Filtro" /></Col>
                <Col span={24}>
                
                <Timeline mode="left">
                    <Timeline.Item label="2020-04-22 09:12:11">Aula de geografia</Timeline.Item>
                    <Timeline.Item label="2020-04-22 11:05:00">Aula de matemática</Timeline.Item>
                    <Timeline.Item>Pausa para almoço</Timeline.Item>
                    <Timeline.Item label="2020-04-22 14:00:00">Planejamento de provas</Timeline.Item> 
                    <Timeline.Item label="2020-04-22 17:30:00">Aula de biologia</Timeline.Item>
                    <Timeline.Item>Reunião com professores</Timeline.Item>
                    <Timeline.Item label="2020-04-22 20:30:00">Entrega de provas</Timeline.Item>
                </Timeline>
                </Col>
            </Row>
            <Button type="primary" block>Ver todos</Button>
        </Card>
    );
}

export default Calendar;

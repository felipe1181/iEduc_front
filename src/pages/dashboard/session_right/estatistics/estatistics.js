import React from 'react';
import './estatistics.css';
import { Row, Col,Button } from 'antd';

import  ChartBar from '../../../default/chart/chart_bar/chartBar';

const data = [
    {name: 'Classe 1A', Aprovados: 29, Reprovados: 6,},
    {name: 'Classe Android', Aprovados: 15, Reprovados: 25,},
    {name: 'Primeiro Ano', Aprovados: 38, Reprovados: 2,},
    {name: 'Segundo Ano', Aprovados: 25, Reprovados: 5,}
];

const datakey = [
  {name: 'Aprovados', color: '#8884d8',},
  {name: 'Reprovados', color: '#ED7070',}
];

function Estatistics() {
     
    return (
      <>
        <Row className="card-estatistics default-border-shadow-components">
            <Col className="title-card-statistics" span={24}>
              <span>Estatísticas</span>
            </Col>  
          <Col span={24}>
            <ChartBar data={data} datakey={datakey}/>
          </Col>  
          <Button type="primary" block>Ver todos</Button>
        </Row>      
        
      </>
     
    );
}

export default Estatistics;
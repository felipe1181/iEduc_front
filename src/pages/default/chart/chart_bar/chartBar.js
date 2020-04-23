import React from 'react'; 
import { Row, Col  } from 'antd';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import './chartBar.css';

function ChartBar(props) { 
    return (
        <Row> 
          <Col> 
          <BarChart 
        width={500}
        height={201}
        data={props.data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {props.datakey.map(datakey=> <Bar dataKey={datakey.name} fill={datakey.color} />)} 
      </BarChart>
          </Col>
      
        </Row>      
    );
}

export default ChartBar;
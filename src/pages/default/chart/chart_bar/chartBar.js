import React from 'react'; 

import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';
 
function ChartBar(props) { 
    return (
        <> 
        <BarChart
        width={500}
        height={187}
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
        </>      
    );
}

export default ChartBar;
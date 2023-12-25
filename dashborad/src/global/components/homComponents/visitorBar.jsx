import { Tooltip } from 'recharts';
import './visitorBar.css'
import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const VisitorBar = (props) => {
    // console.log(props);
  return (
    <div className='visitBar'>
        <h5>{props.title}</h5>
       <ResponsiveContainer width="100%" height="100%">
        <BarChart 
          data={props.chartData}
        >
          <XAxis  dataKey={props.dataKey} scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip 
          contentStyle={{background:'transparent',border:"none"}}
          position={{x:120,y:-60}}
          cursor={{fill:"none",}}
          />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar height="150%" dataKey={props.dataKey} fill={props.color} background={{ fill: '#eee' }} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VisitorBar

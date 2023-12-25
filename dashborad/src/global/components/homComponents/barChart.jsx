import { Tooltip } from 'recharts';
import React from 'react'
import { Bar, BarChart, ResponsiveContainer } from 'recharts'
import'./barChart.css';



function BarCharts(props) {
    // console.log(props.title);
  return (
    <div className='Barmain'>
        <h3>{props.title}</h3>
       <ResponsiveContainer width="100%" height="100%">
        <BarChart    data={props.chartData}>
          <Bar dataKey={props.dataKey} fill={props.color} />
          <Tooltip
          contentStyle={{background:'transparent',border:"none"}}
          position={{x:80,y:-30}}
          cursor={{fill:"none",}}
          
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BarCharts

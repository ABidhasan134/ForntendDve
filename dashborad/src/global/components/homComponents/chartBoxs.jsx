//it working with 2 3 5 6 no box
import React from 'react'

import{Link} from 'react-router-dom'
import './charBoxs.css'
import { LineChart, ResponsiveContainer,Line } from 'recharts'
import { Tooltip } from 'recharts';


function ChartBoxs(props) {
  const persent=props.percentage
  // console.log(persent);
  return (
    <div className='charBg'>
     <div className='leftElement'>
      <div className='chartTitle'> 
     {/* <span>{props.icon}</span> */}
     <h4>{props.title}</h4>
      </div>
     <div className="line">
     <ResponsiveContainer width="99%" height="100%">
        <LineChart data={props.chartData}>
          <Line type="monotone" 
          dataKey={props.dataKey} 
          stroke={props.color} strokeWidth={2} />
          <Tooltip contentStyle={{
            background:'transparent',border:"none"
          }}
          labelStyle={{display:"none"}}
          position={{x:-20,y:30}}
          />
        </LineChart>
      </ResponsiveContainer>
     </div>
     </div>
     
     <div className="rigthElement">
      <div className='subNumber'>
          <h4>{props.number}</h4>
          <Link to='/'>viwe all</Link>
      </div>  
      <div className="textArea">
        <p style={{color:persent<0?"tomato":"green",fontSize:'25px'}}>{persent}</p>   
        <p>this month</p>
      </div>
     </div>
     

    </div>
  )
}

export default ChartBoxs

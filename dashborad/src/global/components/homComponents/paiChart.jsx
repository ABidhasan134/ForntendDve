import React from 'react'
import './paiChart.css'

import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import { Tooltip } from 'recharts';
export const paiData = [
  { name: "Mobile", value: 400, color: "#0088FE" },
  { name: "Desktop", value: 300, color: "#00C49F" },
  { name: "Laptop", value: 300, color: "#FFBB28" },
  { name: "Tablet", value: 200, color: "#FF8042" },
];


  
const PaiChart = () => {

  // console.log(paiData);
  return (
    <div className='paiMain'>
        <h3>Leads by source</h3>
      
      <div className="paichart">
      <ResponsiveContainer height="100%" width="100%">
      <PieChart  >
        <Tooltip
        contentStyle={{background:"transparent"}}
        />
        <Pie
          data={paiData}
          innerRadius={"60%"}
          outerRadius={"80%"}
          fill={paiData.color}
          paddingAngle={5}
          dataKey={paiData.value}
        >
          {paiData.map((item) => (
            <Cell key={item.name} fill={item.color} />
          ))}
        </Pie>
        
      </PieChart>
      </ResponsiveContainer>
      </div>
      <div className="options">
        {
          paiData.map((item)=>
            <div className="option">
              <div className="dot" style={{background:item.color}}>
              </div>
              <span>{item.name}</span>
              
              
            </div>

          )
        }
      </div>
      
    </div>
  )
}

export default PaiChart

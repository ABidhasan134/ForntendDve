
import React from 'react';

import './home.css';
import TopList from '../../global/components/homComponents/topList';
import {Data,BarChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser} from '../../global/data/data'
import ChartBoxs from '../../global/components/homComponents/chartBoxs';
import BarCharts from '../../global/components/homComponents/barChart';
import VisitorBar from '../../global/components/homComponents/visitorBar';
import PaiChart from '../../global/components/homComponents/paiChart';
import BigChart  from '../../global/components/homComponents/areaChart'

function Home() {
  return (
    <div className='home'>
      <div className="box box1">
       <TopList/>
      </div>
      <div className="box box2"> <ChartBoxs {...chartBoxUser}/>
      </div>
      <div className="box box3"><ChartBoxs {...chartBoxProduct}/></div>
      <div className="box box4"><PaiChart /></div>
      <div className="box box5"><ChartBoxs {...chartBoxRevenue}/></div>
      <div className="box box6"><ChartBoxs {...chartBoxConversion}/></div>
      <div className="box box7"><BigChart /></div>
      <div className="box box8"><VisitorBar {...barChartBoxVisit}/></div>
      <div className="box box9"><BarCharts {...BarChartBoxRevenue}/></div>
    </div>
  )
}

export default Home

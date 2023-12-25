import React from 'react'

import './topList.css'
import { TopDealUsers } from './peopleList'

function TopList() {
  return (
    <div className='main'>
     <h1>Top Deals</h1>
     {
     TopDealUsers.map((element)=>
        <div className="userSide" key={element.id}>
              <div className="user">
              <img src={element.img} alt="was an user" />
            <div className="nameSide">
            <h3>{element.username}</h3>
            <i>{element.email}</i>
            </div>
              </div>
            <h4>{element.amount}</h4>

        </div>

     )
     }
    </div>
  )
}

export default TopList

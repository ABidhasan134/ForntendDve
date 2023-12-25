import React from 'react'

import {menu} from "../data/data"
import { Link } from 'react-router-dom'
import './sidebar.css'

function Sidebar() {
    
  return (
    <div >
       
      {
        menu.map((item)=>//we can't use {} here  
        //This is because when you want to return JSX elements directly from the arrow function, you use parentheses. 
            <div key={item.id}>
                <i className='titel'>{item.title}</i>
                {
                    item.listItems.map((element)=>
                    <Link to={element.url}>
                      <p className='MenuLink'>
                        <span className='Menuicons'>
                          {element.icon}</span>{element.title}
                      </p>
                    </Link>
                    )
                }
            </div>
            
        )
      }
    </div>
  )
}

export default Sidebar

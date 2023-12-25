import React from 'react';

import Mcfc from './img/MCFC.png';
import Barca from './img/barca.jpg'
import './navbar.css';
import { BsSearch } from "react-icons/bs";
import { IoAppsSharp,IoSettings,IoNotificationsSharp } from "react-icons/io5";
import { LuScan } from "react-icons/lu";


function Navbar() {
  return (
    <nav>
     <div className='navConten'>
          <div className='logoConten'>
                <img src={Mcfc} alt="Mancity img" className='logo' />
                <span className='brandName'>ABid's Bussiness</span>
          </div>
        <div className='icons'>
                <BsSearch  className='icon'/>
                <IoAppsSharp className='icon'/>
                <LuScan className='icon'/>
                <div className="notify">
                    <IoNotificationsSharp className='icon'/>
                    <span className='notification'>5</span>
                </div>
                <div className="user">
                    <img src={Barca} alt="user img" className='userImg'/>
                    <span>Abid</span>
                </div>
                <IoSettings  className='icon'/>
        </div>
     </div>

      
    </nav>
  )
}

export default Navbar

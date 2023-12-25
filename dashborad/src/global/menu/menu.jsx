//this manu bar is created by menualy here
//but we are use a local date fetch 
//this is another way to create side bar
import React from 'react';
import '../menu/menu.css';

import {Link} from 'react-router-dom';
import { FaHome,FaUserFriends,FaWpforms } from "react-icons/fa";
import { IoPersonSharp,IoSettingsSharp,IoBarChart } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import { TiThList } from "react-icons/ti";
import { MdOutlinePostAdd,MdDateRange,MdBackup  } from "react-icons/md";
import { RiApps2Line } from "react-icons/ri";
import { SlNote } from "react-icons/sl";
import { BiLogOut } from "react-icons/bi";

function Menu() {
  return (
    <div className="sidebar">
      <div className='mainContener'>
      <i>Main</i>
      <Link to="/" className='item'>
      <FaHome/>
      <span className='manuList'>Home</span>
      </Link>    
      <Link className='item'>
      <IoPersonSharp/>
      <span className='manuList'>profie</span>
      </Link>     
      </div>
      
      <div className='mainContener'>
      <i>List</i>
      <Link to="/user" className='item'>
      <FaUserFriends />
      <span className='manuList'>user</span>
      </Link>
      <Link to="/product" className='item'>
      <SlBasket/>
      <span className='manuList'>product</span>
      </Link>
      <Link className='item'>
      <TiThList/>
      <span className='manuList'>order</span>
      </Link>      
      <Link className='item'>
      <MdOutlinePostAdd />
      <span className='manuList'> post</span>
      </Link>
    </div>
    <div className="mainContener">
      <i>Genarel</i>
      <Link className='item'>
        <RiApps2Line/>
        <span className='manuList'>Elements</span>
      </Link>
      <Link className='item'>
      <SlNote/>
      <span className='manuList'>Notes</span>
      </Link>
      <Link className='item'>
      <FaWpforms/>
      <span className='manuList'>Forms</span>
      </Link>
      <Link className='item'>
      <MdDateRange/>
      <span className='manuList'>Clander</span>
      </Link>
    
    </div>
    <div className="mainContener">
      <i>Manintenens</i>
      <Link className='item'>
      <IoSettingsSharp/>
      <span className='manuList'>Setting</span>
      </Link>
      <Link className='item'>
      <MdBackup />
      <span className='manuList'>BackUp</span>
      </Link>
    </div>
    <div className="mainContener">
        <Link className='item'>
        <IoBarChart />
        <span className='manuList'>Chart</span>
        </Link>
        <Link className='item'>
        <BiLogOut/>
        <span className='manuList'>logOut</span>
        </Link>
    </div>
    </div>
  )
}

export default Menu;

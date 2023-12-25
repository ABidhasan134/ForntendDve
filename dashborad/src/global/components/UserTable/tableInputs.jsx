//we have to add new table data by row and colume 

import React, { useState } from 'react'
import './tabelData.css'

const TableInputs = (props) => {
    const [newUser,setNewUser]=useState([]);
    const [ID,setId]=useState();
    const [fristName,setFristName]=useState();
    const [lastName,setLastName]=useState();
    const[FullName,setFullName]=useState();
    const handelId=(e)=>{
        setId(e.target.value);
    }
    const handelFristName=(e)=>{
        setFristName(e.target.value);
    }
    const handelLastName=(e)=>{
        setLastName(e.target.value);
    }
    const handelFullName=(e)=>{
        setFullName(e.target.value);
        console.log(FullName);
        
    }
    const handelSubmit=()=>{
     
        const info={
          id:ID,
          Fname:fristName,
          Lname:lastName,
          fullname:FullName
        };

    let updateUser=[...newUser];
          updateUser.push(info);
          setNewUser(updateUser);
        console.log("clicked");
        props.addUser(newUser)
        localStorage.setItem("Item",JSON.stringify(updateUser));
        setId("");
        setFristName("");
    }
  return (
    <div>
      <input type="number" placeholder='id'
      onChange={handelId} required
      />
      <input type="text" placeholder='Frist name' onChange={handelFristName} />
      <input type="text" placeholder='last name' onChange={handelLastName} />
      <input type="text" placeholder='Full Name' onChange={handelFullName} />
      <button onClick={handelSubmit}>Add User</button>
    </div>
  )
}
export default TableInputs;


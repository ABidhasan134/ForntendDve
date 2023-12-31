import React, { useEffect, useState } from 'react'

export default function Search(props) {
    const [search,setSearch]=useState("");
    const handelChange=(e)=>{
        setSearch(e.target.value);
        
    }
    useEffect(()=>{
        props.onSearch(search);
    },[search])

  return (
    <div>
        <input type="text" placeholder="Search..." 
        value={search}
        onChange={handelChange}/>
        
    </div>
  )
}

//this is not connected 
//try api data use

import React, { useEffect, useState } from 'react';
import'./tabelData.css';
// import { DataGrid } from '@mui/x-data-grid';




const TabelData = () => {
    const [users,setUsers]=useState([]);
    const [Loading,setLoading]=useState(true);
    const [Error,setError]=useState(null);
    useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/users")
      .then((response)=>response.json())
      .then((data)=>{
          setUsers(data);
          setLoading(false);
          setError(null);   
      })
      .catch((error)=>{
        setError(error);
      })
      console.log(users)
  },[])
    
    

   
  return (
    <div className='mainTable'>
        {/* <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div> */}
    {
      users.map((event)=>{
        <h1>{ event.name}</h1>
      })
    }
    </div>
  )
}

export default TabelData

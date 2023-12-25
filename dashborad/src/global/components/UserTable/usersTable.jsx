import React, { useState } from 'react'
import'./tabelData.css'

import { DataGrid } from '@mui/x-data-grid'
import TableInputs from './tableInputs';
//we have to add new table data by row and colume 

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 120,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
      field: 'avater',
      headerName: "Avater",
      width

    }
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ]

const UsersTable = () => {

    const [Inputs,setInpust]=useState(false);
    const [oneUser,setOneUser]=useState()
    // const AddData=()=>{
    //   <input placeholder='add'/>
    // }
    const handleData=(props)=>{
      const people=props
      // console.log(people);
      {
        people.map((event)=>{
        console.log(event.id)
        // const use=event.id;
        // alert(use);
        // setOneUser(...rows,use.id)
        }
        );
      

      }
      
    }

  return (
    <div>
      <div className='maintable'>
      <button className='btn' onClick={()=>{setInpust(true)
      console.log({Inputs});}
      }>Add User</button>
      
      <DataGrid
        rows={rows}
        columns={columns}
        sx={{border:'none',
        color: 'white',   
    }}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
    {/* additional to add new users taking have to work */}
    {
      Inputs===true?<TableInputs addUser={handleData}/>: <p>HELLO FALSE</p>
      
      
    }
    
    </div>
  )
}

export default UsersTable


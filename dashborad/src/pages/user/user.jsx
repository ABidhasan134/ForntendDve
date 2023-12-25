import React from 'react'
import './user.css'
import UsersTable from '../../global/components/UserTable/usersTable'


function User() {
  return (
    <div className='users'>
      <div className="userTitel">
      <h2>User Information</h2>
      
      </div>
      <UsersTable />
    </div>
  )
}

export default User

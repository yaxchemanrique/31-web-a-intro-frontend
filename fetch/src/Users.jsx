import React from 'react'
import User from './User'

function Users({data}) {
  return (
    <>
      {data.map(({name, username, email})=> (
        <User name={name} username={username} email={email}/>
      ))}
    </>
  )
}

export default Users
import React from 'react'

function User({name, username, email}) {
  return (
    <div>
      <p>{name}</p>
      <p>{username}</p>
      <small>{email}</small>
      <hr/>
    </div>
  )
}

export default User
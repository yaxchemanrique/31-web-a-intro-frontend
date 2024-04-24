import React from 'react'

function Comment({firstname, email, body}) {
  return (
    <div>
      <p>{firstname}</p>
      <small>{email}</small>
      <p>{body}</p>
      <hr/>
    </div>
  )
}

export default Comment
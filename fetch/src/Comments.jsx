import React from 'react'
import Comment from './Comment'

function Comments({data}) {

  return (
    <>
      {
      data.map(
        ({firstname, email, body}) => 
        (
          <Comment firstname={firstname} email={email} body={body}/>
        ))
      }
    </>
  )
}

export default Comments
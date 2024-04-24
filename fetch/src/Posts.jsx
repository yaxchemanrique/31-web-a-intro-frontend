import React from 'react'
import Post from './Post'

function Posts({data}) {

  return (
    <>
      {data.map(({title, body}) => (<Post title={title} body={body}/>))}
    </>
  )
}

export default Posts
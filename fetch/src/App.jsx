import { useEffect, useState } from 'react'
import Posts from './Posts';
import Comments from './Comments';
import Users from './Users';

function App() {
  // posts, users, comments
  const [content, setContent] = useState('users')
  const [data, setData] = useState([])

  useEffect(()=> {
    async  function getContent() {
      const response = await fetch(`https://jsonplaceholder.typicode.com/${content}`);
      const jsonResponse = await response.json();
      setData(jsonResponse);
    }
    getContent()
  }, [content])
  

  return (
    <div>
      <nav>
        <button onClick={()=> setContent('posts')}>Posts</button>
        <button onClick={()=> setContent('users')}>Users</button>
        <button onClick={()=> setContent('comments')}>Comments</button>
      </nav>
      {content === 'posts' && <Posts data={data}/>}
      {content === 'users' && <Users data={data}/>}
      {content === 'comments' &&<Comments data={data}/>}
    </div>
  )
}

export default App

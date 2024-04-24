import { useState, useEffect } from 'react'
import './App.css'

// Event Listener "mousemove" - window.addEventListener

function App() {
  const [mousePosition, setMousePosition] = useState({x: 0 , y: 0});

  useEffect(()=> {
    console.log('move');

    function handleMouseMove(e) {
      setMousePosition({x: e.clientX , y: e.clientY})
    }

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [])

  // window.addEventListener('mousemove', (e) => {
  //   setMousePosition({x: e.clientX , y: e.clientY})
  // })
  // console.log('move')

  return (
    <div style={{background: '#dedede', width: '100vw', height: '100dvh'}}>
      <button>On/ Off Tacking Mouse</button>
      <h1>x: {mousePosition.x}, y:{mousePosition.y}</h1>
    </div>
  )
}

export default App

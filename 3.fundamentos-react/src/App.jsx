import React, {useState} from 'react'
import './App.css'
import { MiComponente } from './Components/MiComponente.jsx'
import { Top } from './Components/Top.jsx'
import { Saludo } from './Components/Saludo.jsx'
import { Timer } from './Components/Timer.jsx'

function App() {

  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [arrayNames, setArrayNames] = useState([])



  return (
    <>
      <h1>Mi primera App en React</h1>
      <h1>{count}</h1>
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
      <Top>
        <MiComponente />
        <Saludo arrayNames={arrayNames} setArrayNames={setArrayNames}/>
        <Timer />
      </Top>

    </>
  )
}

export default App

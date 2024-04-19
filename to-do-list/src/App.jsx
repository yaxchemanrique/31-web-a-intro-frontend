import React from 'react'
import Header from './Header.jsx'
import TasksBlock from './TasksBlock.jsx'

function App() {
  return (
    <>
      <Header/>
      <main>
        <TasksBlock blockStatus={'active'}/>
        <TasksBlock blockStatus={'pending'}/>
        <TasksBlock blockStatus={'closed'}/>
      </main>
    </>
  )
}

export default App

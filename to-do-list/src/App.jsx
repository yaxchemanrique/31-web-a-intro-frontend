import React, {useState} from 'react'
import Header from './Header.jsx'
import TasksBlock from './TasksBlock.jsx'
import {tasksData} from './Utils/tasks.js'

function App() {
  const [taskName, setTaskName] = useState('');
  const [tasks, setTasks] = useState(tasksData);
  return (
    <>
      <Header taskName={taskName} setTaskName={setTaskName} tasks={tasks} setTasks={setTasks}/>
      <main>
        <TasksBlock tasks={tasks} taskName={taskName} setTaskName={setTaskName} blockStatus={'active'}/>
        <TasksBlock tasks={tasks} taskName={taskName} setTaskName={setTaskName} blockStatus={'pending'}/>
        <TasksBlock tasks={tasks} taskName={taskName} setTaskName={setTaskName} blockStatus={'closed'}/>
      </main>
    </>
  )
}

export default App

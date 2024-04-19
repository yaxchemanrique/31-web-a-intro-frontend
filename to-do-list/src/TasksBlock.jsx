import React from 'react'
import Task from './Task.jsx'

function TaskBlock({blockStatus, tasks}) {
  return (
    <section>
      <h2>{blockStatus}</h2>
        {tasks.map(
          (task) =>(
            task.status === blockStatus ?
            <Task key={task.id} id={task.id} date={task.date}>{task.name}</Task> :
            undefined
        ))}
    </section>
  )
}

export default TaskBlock
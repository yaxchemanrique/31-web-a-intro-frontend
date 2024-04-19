import React from 'react'
import Task from './Task.jsx'
import {tasksData} from './Utils/tasks.js';

function TaskBlock({blockStatus}) {
  return (
    <section>
      <h2>{blockStatus}</h2>
        {tasksData.map(
          (task) =>(
            task.status === blockStatus ?
            <Task date={task.date}>{task.name}</Task> :
            undefined
        ))}
    </section>
  )
}

export default TaskBlock
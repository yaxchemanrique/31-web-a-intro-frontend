import React, { useState } from 'react';
import styles from './Header.module.css'

function Header({taskName, setTaskName, tasks, setTasks}) {
  const [status, setStatus] = useState('')

  function handleSubmit(e) {
    e.preventDefault();

    const nextTasks = [...tasks];
    const form = new FormData(e.target);
    const taskStatus = form.get("task-status");
    const taskName = form.get("task-name");
    
    const newTask = {
      id: Math.random(),
      name: taskName,
      status:taskStatus,
      date: Date.now()
    }

    nextTasks.push(newTask);
    setTasks(nextTasks)
  }
  return (
    <header>
      <img src="./Logo.png" alt="Logoipsum" />
      <form onSubmit={(e)=> handleSubmit(e)}>
        <input 
          type="text"
          name="task-name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />

        <input 
          type="radio" 
          name="task-status" 
          id="active" 
          value="active"
          checked={status === 'active'}
          onChange={(e) => setStatus(e.target.value)}
        />
        <label className={styles.label} htmlFor="active">active</label>

        <input
          type="radio" 
          name="task-status" 
          id="pending" 
          value="pending"
          checked={status === 'pending'}
          onChange={(e) => setStatus(e.target.value)}

        />
        <label className={styles.label} htmlFor="pending">pending</label>

        <input 
          type="radio" 
          name="task-status" 
          id="closed" 
          value="closed" 
          checked={status === 'closed'}
          onChange={(e) => setStatus(e.target.value)}

        />
        <label className={styles.label} htmlFor="closed">closed</label>

        <button type="submit">add</button>
      </form>
      <p>{taskName}</p>
    </header>
  )
}

export default Header
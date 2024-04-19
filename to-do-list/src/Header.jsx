import React, { useState } from 'react'

function Header() {
  const [taskName, setTaskName] = useState('');
  const [status, setStatus] = useState('')

  return (
    <header>
      <img src="./Logo.png" alt="Logoipsum" />
      <form>
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
        <label htmlFor="active">active</label>

        <input
          type="radio" 
          name="task-status" 
          id="pending" 
          value="pending"
          checked={status === 'pending'}
          onChange={(e) => setStatus(e.target.value)}

        />
        <label htmlFor="pending">pending</label>

        <input 
          type="radio" 
          name="task-status" 
          id="closed" 
          value="closed" 
          checked={status === 'closed'}
          onChange={(e) => setStatus(e.target.value)}

        />
        <label htmlFor="closed">closed</label>

        <button type="submit">add</button>
      </form>
    </header>
  )
}

export default Header
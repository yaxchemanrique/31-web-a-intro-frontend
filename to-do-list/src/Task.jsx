import React from 'react'
import {formatDate} from './Utils/date-helper.js'

function Task({children, date, id}) {
  return (
    <div>
      <input id={id} type='checkbox' />
      <label htmlFor={id}>{children}</label>
      {' '}
      <span>{formatDate(date)}</span>
      <button>Borrar</button>
    </div>
  )
}

export default Task

//* <Task prop1={'acc'} prop2={'def'} .../>
/* 
* props = {
*   prop1: 'acc',
*   prop2: 'def',
*   ... 
* }
*/

//* <Task prop1={'acc'} prop2={'def'} ...> Aqui </Task>
/* 
* props = {
*   children: 'Aqui',
*   prop1: 'acc',
*   prop2: 'def',
*   ... 
* }
}*/
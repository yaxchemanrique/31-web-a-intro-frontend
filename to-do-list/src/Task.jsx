import React from 'react'
import {formatDate} from './Utils/date-helper.js'

function Task({children, date}) {
  return (
    <div>
      <input type='checkbox' />
      <label>{children}</label>
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
// 1. Importar dependencias
import React from "react";
import { createRoot } from "react-dom/client";

// 2. Crear un elemento React
/* const element = React.createElement(
  'h1',
  {id: 'hola'},
  'Hola React!'
); */

const element2 = (
  <nav>
    <ul>
      <li>
        <a href="#">Inicio</a>
      </li>
    </ul>
  </nav>
);

const items = 9;
const itemsArr = ['manzana', 'plátano', 'fresas'];
const divId = 'my-id'

const customStyles = {
  fontSize: '2rem',
  color: 'hotpink'
}

const element3 = (
  <div id={divId} style={{
    fontSize: '2rem',
    color: 'hotpink'
  }}>
    Cantidad de elementos por comprar: {itemsArr.length}
    {/*Hola comentario!*/}
    <label className="input-label" htmlFor="newItemText">Nuevo item: </label>
    <input type="text" id="newItemText"></input>
  </div>
)


const elemnt3Viejito = React.createElement(
  'div',
  null,
  'Cantidad de elementos por comprar: ',
  items
)

/* 
No hace sentido hacer esto!
myFunction(param1, param2, for() {}) 

Operador ternario ? :
nullish ?? 
ANd &&

*/

const saludo = (
  'Hola Fulano'
);

const container = document.querySelector('#root');
const root = createRoot(container);
root.render(element3)
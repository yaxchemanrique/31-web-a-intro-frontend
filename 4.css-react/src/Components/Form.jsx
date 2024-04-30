import React from 'react'
import "../ComponentsStyles/Form.css"

function Form() {
    return (
        <div className='form-container'>
            <form className='form' action="submit">
                <input type="text" className='form-input' placeholder='Ingresa un texto'/>
                <button className='form-button'>Enviar formulario</button>
            </form>
        </div>
    )
}

export default Form
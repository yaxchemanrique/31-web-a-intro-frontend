import React, {useState} from "react";

const Saludo = ({arrayNames, setArrayNames}) => {

    const [inputText, setInputText] = useState("");
    
    const appendName = (name) => {
        setInputText("");
        setArrayNames([...arrayNames, name])
    }

    return(
        <>
            <input type="text" placeholder="Inserta tu nombre" value={inputText} onChange={(e) => (setInputText(e.target.value))}/>
            <button onClick={() => appendName(inputText)}>Ingresar</button>
            {arrayNames.map((name, index) => {
                return(
                    <div key={index}>
                        <p>{name}</p>
                    </div>
                )
            })}
        </>
    )
}

export {Saludo}
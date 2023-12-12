import {useEffect, useState} from "react";

function Button ({button, handleClick}) {

    const [state, setState] = useState(0)

    useEffect(() => {
        console.log(`Je suis un bouton et j'affiche ${button}`)

        return () => {
            console.log(`Je démonte et je suis ${button}`)
        }
    }, [state])

    return (
        <button onClick={() => handleClick(button)}>{button}</button>
    )
}

export default Button
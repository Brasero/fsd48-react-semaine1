import {useEffect, useState} from "react";


function CustomButtonClick({value = 1}) {

    const [number, setNumber] = useState(0)
    const [isActive, setIsActive] = useState(false)

    const handlePlus = () => {
        setNumber(number + value)
    }

    const handleMinus = () => {
        setNumber(number - value)
    }

    useEffect(() => {
        if(number === 0) {
            setIsActive(false)
        } else {
            setIsActive(true)
        }
    }, [number])
    return (
        <div>
            <button onClick={handlePlus}>+{value}</button>
            <span>{number}</span>
            <button onClick={handleMinus} disabled={!isActive}>-{value}</button>
        </div>
    )
}

export default CustomButtonClick;
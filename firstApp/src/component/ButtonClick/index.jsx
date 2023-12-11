import { useState, useEffect } from 'react';


function ButtonClick() {
    const [number, setNumber] = useState(0)
    const [isActive, setIsActive] = useState(false)

    const handleClick = () => {
        setNumber(number + 1)
    }

    const handleMinus = () => {
        if (number === 0) {
            return
        }
        setNumber(number - 1)
    }

    useEffect(() => {
            if(number === 0) {
                setIsActive(false)
            } else {
                setIsActive(true)
            }
        }, [number])


    return (
        <>
            <button onClick={handleClick}>+1</button>
            <span>{number}</span>
            <button onClick={handleMinus} disabled={!isActive}>-1</button>
        </>
    )
}

export default ButtonClick
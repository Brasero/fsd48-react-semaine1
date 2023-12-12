import {useEffect, useState} from "react";

function Chrono() {

    const MAX_CHRONO = 20;
    const [chrono, setChrono] = useState(0)
    const [chronoId, setChronoId] = useState(0)
    const [message, setMessage] = useState('')
    const double = chrono * 2

    const start = () => {
        const id = setInterval(() => {
            setChrono((prevState) => {
                return prevState + 1
            })
        }, 1000)
        setChronoId(id)
    }

    const stop = () => {
        if (chronoId !==  0) {
            clearInterval(chronoId)
            setChronoId(0)
        }
    }

    const reset = () => {
        if(chronoId !== 0) {
            stop()
        }
        setMessage('')
        setChrono(0)
    }

    useEffect(() => {
        if(chrono >= MAX_CHRONO) {
            stop()
            setMessage('Vous avez atteint la limite du chrono')
            console.log('test')
        }
    }, [chrono])

    return (
        <div>
            {
                message !== '' && <div>{message}</div>
            }
            <span>{chrono}</span> / <span>{double}</span>
            <br/>
            <button onClick={start}>Start</button>
            <button onClick={reset} disabled={chrono === 0}>Reset</button>
            <button onClick={stop} disabled={chronoId === 0}>Pause</button>
        </div>
    )
}

export default Chrono
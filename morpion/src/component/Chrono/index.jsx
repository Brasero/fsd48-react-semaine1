import {useState} from "react";

function Chrono() {

    const [chrono, setChrono] = useState(0)

    const start = () => {
        setInterval(() => {
            setChrono((prevState) => {
                return prevState + 1
            })
        }, 1000)
    }

    return (
        <div>
            <span>{chrono}</span>
            <br/>
            <button onClick={start}>Start</button>
        </div>
    )
}

export default Chrono
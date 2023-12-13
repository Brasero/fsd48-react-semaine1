import './numberButton.css'
function NumberButton({dispatch}) {

    const buttonArray = Array(10).fill('')

    const handleClick = (index) => {
        dispatch({
            type: 'changeValue',
            payload: index
        })
    }

    const handleReset = () => {
        dispatch({
            type: 'reset'
        })
    }

    const handleDot = () => {
        dispatch({
            type: 'dot'
        })
    }

    return (
        <div className={'numberButton'}>
            {
                buttonArray.map((_, index) => {
                    return <button key={`number-${index}`} onClick={() => handleClick(9 - index)}>{9 - index}</button>
                })
            }
            <button onClick={handleDot}>.</button>
            <button onClick={handleReset}>C</button>
        </div>
    )
}

export default NumberButton
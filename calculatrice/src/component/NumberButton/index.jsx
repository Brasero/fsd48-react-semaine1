
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

    return (
        <div className={'numberButton'}>
            {
                buttonArray.map((_, index) => {
                    return <button key={`number-${index}`} onClick={() => handleClick(index)}>{index}</button>
                })
            }
            <button onClick={handleReset}>C</button>
        </div>
    )
}

export default NumberButton
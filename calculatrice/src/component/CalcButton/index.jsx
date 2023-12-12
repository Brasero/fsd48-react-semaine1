
function CalcButton({dispatch}) {

    const calcs = ['+', '-', 'x', "%", '=']
    const handleClick = (sigle) => {
        dispatch({
            type: 'calc',
            payload: sigle
        })
    }

    const handleEqual = () => {
        dispatch({
            type: "equal"
        })
    }
    return (
        <div className={'calcButton'}>
            {
                calcs.map((value, index) => {
                    return value === '=' ? <button key={`calc-${index}`} onClick={handleEqual}>{value}</button> :
                        <button key={`calc-${index}`} onClick={() => handleClick(value)}>{value}</button>
                })
            }
        </div>
    )
}

export default CalcButton
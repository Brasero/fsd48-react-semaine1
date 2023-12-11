
function Square ({position, value, handleClick}) {

    return (
        <button
            className={'square'}
            onClick={() => handleClick(position)}
        >
            {value}
        </button>
    )
}

export default Square;
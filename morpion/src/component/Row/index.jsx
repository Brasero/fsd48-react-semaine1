import Square from "../Square/index.jsx";

function Row({values, rowNumber, handleClick}) {

    const number = Array(3).fill('')

    return (
        <div className={'row'}>
            {
                number.map((num, index) => <Square
                    value={values[(rowNumber * 3) + index]}
                    handleClick={handleClick}
                    position={(rowNumber * 3) + index}
                />)
            }
        </div>
    )
}

export default Row
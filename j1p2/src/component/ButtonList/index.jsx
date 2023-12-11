
function ButtonList({button, handleClick}) {

    return (
        <div>
            {
                button.map((button) => {
                    return <button onClick={() => handleClick(button)}>{button}</button>
                })
            }
        </div>
    )
}

export default ButtonList;
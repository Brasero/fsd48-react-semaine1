
function List({list, handleClick}) {

    return (
        <ul>
            {
                list.map((elem) => {
                    return <li>{elem}
                        <button onClick={() => handleClick(elem)} style={{background: 'red'}}>X</button>
                    </li>
                })
            }
        </ul>
    )
}

export default List;
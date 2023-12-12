import {useCart} from "../../utils/context/CartContext.jsx";

function List() {

    const {cart, toggleItem} = useCart()
    const {list} = cart

    return (
        <ul>
            {
                list.map((elem) => {
                    return <li>{elem}
                        <button onClick={() => toggleItem(elem)} style={{background: 'red'}}>X</button>
                    </li>
                })
            }
        </ul>
    )
}

export default List;
import Button from "../Button/index.jsx";
import {CartContext, useCart} from "../../utils/context/CartContext.jsx";
import {useContext} from "react";

function ButtonList() {
    const {cart, toggleItem} = useContext(CartContext)

    const {button} = cart

    return (
        <div>
            {
                button.map((button) => {
                    return <Button button={button} handleClick={toggleItem} />
                })
            }
        </div>
    )
}

export default ButtonList;
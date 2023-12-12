import {createContext, useContext, useState} from "react";

export const CartContext = createContext()

const consumeCart = () => {
    const cartData = {
        list: [
            'bananes',
            'fraise',
            'fromage'
        ],
        button: [
            'Lait',
            'Eau',
            'Café'
        ]
    }

    const [cart, setCart] = useState(cartData)

    const toggleItem = (name) => {
        const {list, button} = cart
        if(list.includes(name)) {
            const newList = list.filter((item) => item  !== name)
            button.push(name)
            setCart({
                ...cart, //Permet d'éviter les problèmes de régréssion en cas de modification du state initial /!\ A toujours faire
                list: newList,
                button
            })
        } else {
            const newButton = button.filter((item) => item !== name)
            list.push(name)
            setCart({
                ...cart,
                button: newButton,
                list
            })
        }
    }

    return {
        toggleItem,
        cart
    }
}

export const useCart = () => {
    return useContext(CartContext)
}

const CartProvider = ({children}) => {
    const context = consumeCart()


    return (
        <CartContext.Provider value={context}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
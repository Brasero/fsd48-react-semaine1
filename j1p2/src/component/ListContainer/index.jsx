import {useState} from "react"
import ButtonList from "../ButtonList/index.jsx";
import List from "../List/index.jsx";
function ListContainer() {

    const initialState = {
        list: [
            'bananes',
            'fraise',
            'fromage'
        ],
        button: [
            'Lait',
            'Eau',
            'Café'
        ],
        counter: 0,
        message: ''
    }

    const [state, setState] = useState(initialState)

    const handleClick = (name) => {
        const {list, button} = state
        if(list.includes(name)) {
            const newList = list.filter((item) => item  !== name)
            button.push(name)
            setState({
                ...state, //Permet d'éviter les problèmes de régréssion en cas de modification du state initial /!\ A toujours faire
                list: newList,
                button
            })
        } else {
            const newButton = button.filter((item) => item !== name)
            list.push(name)
            setState({
                ...state,
                button: newButton,
                list
            })
        }
    }

    return (
        <div>
            <ButtonList button={state.button} handleClick={handleClick} />
            <List list={state.list} handleClick={handleClick} />
        </div>
    )
}

export default ListContainer;
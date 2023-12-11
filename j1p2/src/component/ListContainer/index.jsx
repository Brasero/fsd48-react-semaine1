import {useState} from "react"
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
            <div>
                {
                    state.button.map((button) => {
                        return <button onClick={() => handleClick(button)}>{button}</button>
                    })
                }
            </div>
            <ul>
                {
                    state.list.map((elem) => {
                        return <li>{elem} <button onClick={() => handleClick(elem)} style={{background: 'red'}}>X</button></li>
                    })
                }
            </ul>
        </div>
    )
}

export default ListContainer;
import {createContext, useContext, useReducer} from "react";
import townReducer, {initialState} from "../reducer/townReducer.jsx";
import useAxios from "../services/axios.js";

const TownContext = createContext()

export const useTown = () => {
    return useContext(TownContext)
}

const consumeTown = () => {
    const [state, dispatch] = useReducer(townReducer, initialState)
    const {input, towns} = state
    const axios = useAxios()

    const handleInputChange = (payload) => {
        dispatch({
            type: "onChange",
            payload
        })
        if(payload.length >= 3) {
            axios.getTown(payload).then(({data}) => {
                const townName = data.reduce((acc, current) => {
                    acc.push(current.nom)
                    return acc
                }, [])
                dispatch({
                    type: 'pushTown',
                    payload: townName
                })

            })
        } else {
            dispatch({
                type: "pushTown",
                payload: []
            })
        }
    }

    const handleTownClick = (name) => {
        dispatch({
            type: "onChange",
            payload: name
        })
        dispatch({
            type: 'pushTown',
            payload: []
        })
    }

    return {
        input,
        towns,
        handleInputChange,
        handleTownClick
    }
}

const TownProvider = ({children}) => {

    const context = consumeTown()

    return (
        <TownContext.Provider value={context}>
            {children}
        </TownContext.Provider>
    )
}

export default TownProvider
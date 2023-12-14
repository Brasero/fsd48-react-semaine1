import {createContext, useContext, useReducer} from "react";
import pairReducer, {initialState} from "../reducer/pairReducer.js";

const PairContext = createContext()


export const usePair = () => {
    return useContext(PairContext)
}


const consumePair = () => {
    const [state, dispatch] = useReducer(pairReducer, initialState)

    const addNumber = () => {
        dispatch({
            type: 'add'
        })
    }

    const generatePairs =  () => {
        dispatch({
            type: 'generate'
        })
    }

    return {
        state,
        addNumber,
        generatePairs
    }
}

const PairProvider = ({children}) => {
    const value = consumePair()

    return <PairContext.Provider value={value}>
        {children}
    </PairContext.Provider>
}


export default PairProvider
import NumberButton from "../NumberButton/index.jsx";
import CalcButton from "../CalcButton/index.jsx";
import Computer from "../Computer/index.jsx";
import {useReducer} from "react";
import calcReducer, {initialState} from "../../utils/reducer/CalcReducer.js";


// objet action
// { type: 'increment', payload: 10 }
function Calculatrice() {

    const [state, dispatch] = useReducer(calcReducer, initialState)

    return (
        <div className={'calculatrice'}>
            <div className={'computer_container'}>
                <Computer value={state.number} />
            </div>
            <div className={'button_container'}>
                <NumberButton dispatch={dispatch} />
                <CalcButton dispatch={dispatch} />
            </div>
        </div>
    )
}

export default Calculatrice
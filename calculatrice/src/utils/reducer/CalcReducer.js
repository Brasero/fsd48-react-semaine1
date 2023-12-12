export const initialState = {
    number: 0,
    prevNumber: 0,
    calcSigle: ''
}

const modifyValue = (state, value) => {
    if (state === 0) {
        return value;
    }
    return parseInt(state.toString() + value.toString())
}

const calcReducer = (state, action) => {
    switch(action.type) {
        case 'changeValue':
            return {
                ...state,
                number: modifyValue(state.number, action.payload)
            }

        case 'reset':
            return {
                ...state,
                number: 0
            }

        case 'calc':
            return {
                ...state,
                number: 0,
                prevNumber: state.number,
                calcSigle: action.payload
            }

        case 'equal':
            const result = state.number + state.prevNumber
            return {
                ...state,
                number: result,
                prevNumber: 0,
                calcSigle: ''
            }


        default:
            return state;
    }
}


export default calcReducer
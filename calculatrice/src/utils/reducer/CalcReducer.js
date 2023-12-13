export const initialState = {
    number: 0,
    prevNumber: 0,
    calcSigle: '',
    calculated: false
}

const modifyValue = (state, value) => {
    if (state === 0) {
        return value;
    }
    return state.toString() + value.toString()
}

const calculate = (state) => {
    if (state.calcSigle === '') {
        return state.number
    }
    const prevNumber = parseFloat(state.prevNumber)
    const number = parseFloat(state.number)
    return state.calcSigle === '+' ? prevNumber + number :
        state.calcSigle === '-' ? prevNumber - number :
            state.calcSigle === 'x' ? prevNumber * number :
                prevNumber / number
}

const calcReducer = (state, action) => {
    switch(action.type) {
        case 'changeValue':
            if(state.calculated) {
                return {
                    ...state,
                    number: modifyValue(0, action.payload),
                    calculated: false,
                    prevNumber: state.number !== 0 ? state.number : state.prevNumber
                }
            }
            return {
                ...state,
                number: modifyValue(state.number, action.payload)
            }

        case 'reset':
            return {
                ...state,
                number: 0,
                calcSigle: '',
                calculated: false
            }

        case 'calc':
            if(state.calculated) {
                return {
                    ...state,
                    number: calculate(state),
                    prevNumber: 0,
                    calcSigle: action.payload,
                    calculated: true
                }
            }
            return {
                ...state,
                number: 0,
                prevNumber: calculate(state),
                calcSigle: action.payload,
                calculated: true
            }

        case 'dot':
            return state.number.toString().includes('.') ? {...state} : {
                ...state,
                number: state.calculated ? '0.' : state.number + '.',
                calculated: false
            }

        case 'equal':
            const result = calculate(state)
            return {
                ...state,
                number: result,
                prevNumber: 0,
                calcSigle: '',
                calculated: false
            }


        default:
            return state;
    }
}


export default calcReducer
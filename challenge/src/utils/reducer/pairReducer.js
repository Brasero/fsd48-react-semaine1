export const initialState = {
    numbers: [],
    pairs: [],
    message: ''
}

const MAX = 30

const generateNumber = (numbers) => {
    let number = Math.floor(Math.random() * MAX);
    while (numbers.includes(number)) {
        number = Math.floor(Math.random() * 30)
    }

    return number;
}

const generatePair = (numbers) => {
    const pairs = []
    for (let i = 0; i < numbers.length; i += 2) {
        if (numbers[i + 1] === undefined) break;
        pairs.push([numbers[i], numbers[i + 1]])
    }

    if (numbers.length % 2 === 1) {
        pairs[pairs.length - 1].push(numbers[numbers.length - 1])
    }
    return pairs
}

const pairReducer = (state, action) => {
    switch(action.type) {
        case "add":
            return {
                ...state,
                numbers: state.numbers.length < 30 ? state.numbers.concat([generateNumber(state.numbers)]) : state.numbers,
                message: state.numbers.length < 30 ? '' : 'Le maximum à été atteint'
            }

        case 'generate':
            return {
                ...state,
                pairs: generatePair(state.numbers)
            }

        default:
            return state
    }
}

export default pairReducer
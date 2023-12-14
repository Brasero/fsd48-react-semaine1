export const initialState = {
    input: '',
    towns: []
}

const townReducer = (state, action) => {
    switch(action.type) {
        case 'onChange':
            return {
                ...state,
                input: action.payload
            }

        case 'pushTown':
            return {
                ...state,
                towns: action.payload
            }

        default:
            return state
    }
}

export default townReducer
const INC = 'reduxCounter/INC'
const DEC = 'reduxCounter/DEC'

export const incCounter = () => ({
    type: INC,
})
export const decCounter = () => ({
    type: DEC,
})


const initialState = {
    incrementation: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case INC:
            return {
                ...state,
                incrementation: state.incrementation + 1
            }
        case DEC:
            return {
                ...state,
                incrementation: state.incrementation - 1
            }
        default:
            return state
    }
}
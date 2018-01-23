const CHANGE_TEXT = 'text/CHANGE_TEXT'

export const changeText = newText => ({
    type: CHANGE_TEXT,
    newText
})

const initialState = {
    text: ''
}

export default (state = initialState, action) => {
    switch(action.type){
        case CHANGE_TEXT:
            return {
                ...state,
                text: action.newText
            }
        default:
            return state
    }
}
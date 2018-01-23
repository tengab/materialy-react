const TOGGLE_RECT = 'rect/TOGGLE_RECT'

export const toggleRect = () => ({
    type: TOGGLE_RECT,
})


const initialState = {
        isRectVisible: true

}

export default (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_RECT:
            return {
                ...state,
                isRectVisible: !state.isRectVisible
            }
        default:
            return state
    }

}
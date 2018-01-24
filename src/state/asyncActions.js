const SET_DATA = 'asyncActions/SET_DATA'

const setData = data => ({
    type: SET_DATA,
    data
})

export const fetchData = () => (dispatch, getState) => {
    fetch('https://randomuser.me/api')
        .then(response => response.json())
        .then(data =>
            dispatch(setData(data.results[0]))
        )
}

const initialState = {
    randomUserData: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                randomUserData: action.data
            }
        default:
            return state
    }
}


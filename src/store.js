import {createStore, combineReducers} from 'redux'
import todoReducer from './state/todo'
import textReducer from './state/text'

const reducer = combineReducers({
    todo: todoReducer,
    text: textReducer
})

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
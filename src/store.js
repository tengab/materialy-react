import {createStore, combineReducers} from 'redux'
import todoReducer from './state/todo'
import textReducer from './state/text'
import rectangleReducer from './state/rectangle'


const reducer = combineReducers({
    todo: todoReducer,
    text: textReducer,
    rectangle: rectangleReducer
})

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
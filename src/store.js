import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import todoReducer from './state/todo'
import textReducer from './state/text'
import rectangleReducer from './state/rectangle'
import reduxCounterReducer from './state/reduxCounter'
import asyncActionsReducer from './state/asyncActions'


const reducer = combineReducers({
    todo: todoReducer,
    text: textReducer,
    rectangle: rectangleReducer,
    reduxCounter: reduxCounterReducer,
    asyncActions: asyncActionsReducer
})

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    reducer,
    composeEnchancers(
        applyMiddleware(thunk)
    )
)

export default store
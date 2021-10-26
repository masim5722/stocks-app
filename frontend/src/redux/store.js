import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from "redux-thunk"
import loaderReducer from "./reducers/loaderReducer"

const store = () => {
    return createStore(
        combineReducers({
            loader: loaderReducer
        }),
        compose(applyMiddleware(thunk))
    )
}

export default store()
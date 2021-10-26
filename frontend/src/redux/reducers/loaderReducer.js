const loaderDefaultState = { isLoading:  false}

/**
 * Loader Reducers
 * @param state
 * @param action
 * @returns {{isLoading: boolean}|{isLoading}}
 */
const loaderReducer= (state = loaderDefaultState, action) => {
    switch (action.type){
        case "TOGGLE_ISLOADING":
            return {...state, isLoading: action.payload}

        default:
            return state
    }
}

export default loaderReducer
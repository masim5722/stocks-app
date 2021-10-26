/**
 * Loader Action
 * @param toggleLoader
 * @returns {{payload: (boolean|*), type: string}}
 */
export const toggleLoader = (toggleLoader) => {
    return {
        type: 'TOGGLE_ISLOADING',
        payload: toggleLoader.isLoading
    }
}
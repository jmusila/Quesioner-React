import * as types from '../constants/loginTypes'

const initialState = {
    data: {},
    error: null,
    loading: false
}

export default function(state=initialState, action) {
    switch(action.type) {
        case types.LOGIN_USER:
            return {
                ...state,
                loading: true
            }
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false
            }
        case types.LOGIN_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        default:
            return state
    }
}

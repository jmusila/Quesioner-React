import * as types from '../constants/registerTypes';

const initialState = {
    data: {},
    error: null,
    loading: false
}

export default function(state=initialState, action) {
    switch(action.type) {
        case types.REGISTER_USER:
            return {
                ...state,
                loading: true
            }
        case types.REGISTER_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false
            }
        case types.REGISTER_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        default:
            return state
    }
}
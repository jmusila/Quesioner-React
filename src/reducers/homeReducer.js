import * as types from '../constants/homeTypes';

const initialState = {
    data: [],
    error: null,
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case types.FETCH_MEETUPS:
            return {
                ...state,
                loading: true
            }
        case types.FETCH_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false
            }
        case types.FETCH_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        default:
            return state;
    }
}
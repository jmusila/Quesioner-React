import * as types from '../constants/registerTypes';
import axios from 'axios';

const serverUrl = "https://my-postgres-questioner-v2-api.herokuapp.com/api/v2"

export const registerRequest = () => ({
    type: types.REGISTER_USER
});

export const registerSuccess = (data) => ({
    type: types.REGISTER_SUCCESS,
    data
});

export const registerFailure = (error) => ({
    type: types.REGISTER_ERROR,
    error
});


export const registerActions = (data) => dispatch => {
    dispatch(registerRequest());
    return axios.post(`${serverUrl}/auth/signup`, data)
        .then(response => dispatch(registerSuccess(response.data)))
        .catch(error => dispatch(registerFailure(error)));
};
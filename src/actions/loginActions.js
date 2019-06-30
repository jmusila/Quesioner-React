import * as types from '../constants/loginTypes';
import axios from 'axios';

const serverUrl = "https://my-postgres-questioner-v2-api.herokuapp.com/api/v2"

export const loginRequest = () => ({
    type: types.LOGIN_USER
});

export const loginSuccess = (data) => ({
    type: types.LOGIN_SUCCESS,
    data
});

export const loginFailure = (error) => ({
    type: types.LOGIN_ERROR,
    error
});


export const loginActions = (data) => dispatch => {
    dispatch(loginRequest());
    return axios.post(`${serverUrl}/auth/login`, data)
        .then(response => dispatch(loginSuccess(response.data)))
        .catch(error => dispatch(loginFailure(error)));
};
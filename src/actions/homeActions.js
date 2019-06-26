import * as types from '../constants/homeTypes';
import axios from 'axios';

const serverUrl = "https://my-postgres-questioner-v2-api.herokuapp.com/api/v2"

export const fecthRequest = () => ({
    type: tpyes.FETCH_MEETUPS
});

export const fetchSuccess = (meetups) => ({
    type: types.FETCH_SUCCESS,
    payload: meetups
});

export const fetchFailure = (error) => ({
    type: types.FETCH_ERROR,
    error
});


export const fetchActions = () => dispatch => {
    axios.get(`${serverUrl}/meetups/upcoming`)
        .then(response => {
            dispatch(fetchSuccess(response.data.data))
        })
        .catch(error => dispatch(fetchFailure(error)));
};


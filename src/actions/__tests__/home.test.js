import { fetchSuccess, fecthRequest, fetchFailure } from '../homeActions';
import * as types from '../../constants/homeTypes';

describe('meetups actions tests', () => {
    it('test meetup fetch action', () => {
        const payload = {};
        expect(fecthRequest(payload)).toEqual(
            { type: types.FETCH_MEETUPS },
        );
    })
    it('test meetups fetch action success', () => {
        const meetups = { meetups: [] };
        expect(fetchSuccess(meetups)).toEqual(
            { payload: meetups, type: types.FETCH_SUCCESS },
        );
    });
    it('test meetups fetch action error', () => {
        const errors = { errors: {} };
        expect(fetchFailure(errors)).toEqual({ error: errors, type: types.FETCH_ERROR });
    });
})
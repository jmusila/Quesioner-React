import homeReducer, { initialState } from '../homeReducer';
import * as types from '../../constants/homeTypes';

describe('Fetch meetups reducer tests', () => {
    it('should have the initial state', () => {
        expect(homeReducer(initialState, {})).toEqual({
            data: [],
            error: null,
            loading: false
        });
    });
    it('should show loading when FETCH_MEETUPS is dispatched', () => {
        expect(homeReducer(initialState,
            { type: types.FETCH_MEETUPS }).loading).toBe(true);
    });
    it('should set loading to false when FETCH_SUCCESS is dispatched', () => {
        expect(homeReducer(initialState,
            { type: types.FETCH_SUCCESS, payload: {} }).loading).toBe(false);
    });
    it('should set loading to false when FETCH_ERROR is dispatched', () => {
        expect(homeReducer(initialState,
            { type: types.FETCH_ERROR, payload: {} }).loading).toBe(false);
    });
})
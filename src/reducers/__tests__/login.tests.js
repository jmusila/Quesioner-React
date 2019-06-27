import loginReducer, { initialState } from '../loginReducer';
import * as types from '../../constants/loginTypes';

describe('Login reducer tests', () => {
    it('should have an initial state', () => {
        expect(loginReducer(initialState, {})).toBe(initialState);
    })
    it('should show is loading on login submit', () => {
        expect(loginReducer(null, {
            type: types.LOGIN_USER,
            payload: {},
        }).loading).toBe(true);
    });
    it('it should set is loading to true on login success', () => {
        expect(loginReducer(null, {
            type: types.LOGIN_SUCCESS,
            payload: {},
        }).loading).toBe(false);
    });
    it('it should set is loading to true on login success', () => {
        expect(loginReducer(null, {
            type: types.LOGIN_ERROR,
            payload: {},
        }).loading).toBe(false);
    });
})
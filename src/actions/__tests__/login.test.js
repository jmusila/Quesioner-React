import { loginRequest, loginSuccess, loginFailure } from '../loginActions';
import { LOGIN_USER, LOGIN_SUCCESS, LOGIN_ERROR } from '../../constants/loginTypes';

describe('login actions tests', () => {
    it('should dispatch LOGIN_USER', () => {
        expect(loginRequest({}).type).toEqual(LOGIN_USER);
    })
    it('should dispatch LOGIN_SUCCESS', () => {
        expect(loginSuccess({}).type).toEqual(LOGIN_SUCCESS);
    })
    it('should dispatch LOGIN_ERROR', () => {
        expect(loginFailure({}).type).toEqual(LOGIN_ERROR);
    })
})
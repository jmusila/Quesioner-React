import { registerRequest, registerSuccess, registerFailure } from '../registerActions';
import * as types from '../../constants/registerTypes';

const user = {
    email: 'testuser@gmail.com',
    username: 'testuser1',
    phoneNumber: '0798989898',
    firstname: 'test',
    lastname: 'user1',
    password: 'test@me01'
}

describe('register actions', () => {
    it('should create an action to start registration', () => {
        const expectedAction = {
            type: types.REGISTER_USER,
        };
        expect(registerRequest(user)).toEqual(expectedAction);
    })
    it('should create an action to register user', () => {
        const expectedAction = {
            type: types.REGISTER_SUCCESS,
            data: user,
        };
        expect(registerSuccess(user)).toEqual(expectedAction);
    })
    it('should create an action to indicate error on registration', () => {
        const expectedAction = {
            type: types.REGISTER_ERROR,
            error:user,
        };
        expect(registerFailure(user)).toEqual(expectedAction);
    })
})
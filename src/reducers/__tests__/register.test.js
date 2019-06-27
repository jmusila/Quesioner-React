import registerReducer from '../registerReducer';
import * as types from '../../constants/registerTypes';

const user = {
    email: 'testuser@gmail.com',
    username: 'testuser1',
    phoneNumber: '0798989898',
    firstname: 'test',
    lastname: 'user1',
    password: 'test@me01'
}

describe('Register reducer', () => {
    it('should return initial state', () => {
        expect(registerReducer(undefined, {}))
            .toEqual({
                data: {},
                error: null,
                loading: false
            });
    });
    it('should handle REGISTER_USER', () => {
        expect(
            registerReducer([], { type: types.REGISTER_USER, payload: user }),
        ).toEqual({
            loading: true,
        });
    });
    it('should handle REGISTER_SUCCESS', () => {
        expect(
            registerReducer([], { type: types.REGISTER_SUCCESS, payload: user }),
        ).toEqual({
            "data": {
                "email": "testuser@gmail.com",
                "firstname": "test",
                "lastname": "user1",
                "password": "test@me01",
                "phoneNumber": "0798989898",
                "username": "testuser1",
            },
            "loading": false,
        });
    });
    it('should handle REGISTER_ERROR', () => {
        expect(registerReducer(null, {
            type: types.REGISTER_ERROR,
            payload: {},
        }).loading).toBe(false);
    });
})

import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import LoginComponent from '../src/components/signin';

const mockStore = configureMockStore();

describe('Test Login Component', () => {
    let store;
    let wrapper;

    beforeEach(() => {
        store = mockStore({});
        wrapper = shallow(<LoginComponent store={store} />);
    });

    it('should test onChange function', () => {
        const event = {
            target: {
                value: 'hfklfhhsfhdf'
            }
        }
        wrapper
            .dive()
            .find('#password')
            .simulate('change', event);
        expect(wrapper.state().loginUser.password).toBe('hfklfhhsfhdf');
        expect(wrapper.length).toBe(1);
    });
});
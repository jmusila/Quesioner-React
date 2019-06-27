import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import RegisterComponent from '../src/components/signup';

const mockStore = configureMockStore();

describe('Test RegisterComponent', () => {
    let store;
    let wrapper;

    beforeEach(() => {
        store = mockStore({});
        wrapper = shallow(<RegisterComponent store={store} />);
    });

    it('should test onChange function', () => {
        const event = {
            target: {
                value: 'hfklfhhsfhdf'
            }
        }
        wrapper
            .dive()
            .find('#firstname')
            .simulate('change', event);
        expect(wrapper.state().newUserData.firstname).toBe('hfklfhhsfhdf');
        expect(wrapper.length).toBe(1);
    });
});


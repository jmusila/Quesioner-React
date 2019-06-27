
import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import LoginComponent from '../src/components/signin';

const mockStore = configureMockStore();

const store = mockStore({});

it('should test onChange function', () => {
    const event = {
        target: {
            value: 'hfklfhhsfhdf'
        }
    }
    const wrapper = shallow(<LoginComponent store={store}/>);
    wrapper.signinUser;
    wrapper.find('Form')
        .dive()
        .find('#password')
        .simulate('change', event);
    expect(wrapper.state().loginUser.password).toBe('hfklfhhsfhdf');
    expect(wrapper.length).toBe(1);
});


it('should test onChange function email', () => {
    const event = {
        target: {
            value: 'meme@andela.com'
        }
    }
    const wrapper = shallow(<LoginComponent store={store}/>);
    wrapper.signinUser;
    wrapper.find('Form')
        .dive()
        .find('#email')
        .simulate('change', event);
    expect(wrapper.state().loginUser.email).toBe('meme@andela.com');
    expect(wrapper.length).toBe(1);
});

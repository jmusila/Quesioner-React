
import React from 'react';
import { shallow } from 'enzyme';
import LoginComponent from '../src/components/signin';
import { wrap } from 'module';

it('should test onChange function', () => {
    const event = {
        target: {
            value: 'hfklfhhsfhdf'
        }
    }
    const wrapper = shallow(<LoginComponent />);
    wrapper.signinUser;
    wrapper.find('Form')
        .dive()
        .find('#password')
        .simulate('change', event);
    expect(wrapper.state().loginUser.password).toBe('hfklfhhsfhdf');
    expect(wrapper.length).toBe(1);
});

it('should test onClick function', () => {
    const state = {
        loginUser: {
            email: 'ksfhasfh@gmail.com',
            password: 'fhahfdf'
        },
        isLoggedIn: false
    }
    const wrapper = shallow(<LoginComponent />);
    wrapper.setState(state)
    wrapper.find('Button')
        .simulate('click');
    expect(wrapper.state().isLoggedIn).toBe(true);
})
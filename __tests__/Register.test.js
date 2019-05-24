import React from 'react';
import { shallow } from 'enzyme';
import RegisterComponent from '../src/components/signup';

it('should test onChange function', () => {
    const event = {
        target: {
            value: 'hfklfhhsfhdf'
        }
    }
    const wrapper = shallow(<RegisterComponent />);
    wrapper.addUser;
    wrapper.find('Form')
        .dive()
        .find('#firstname')
        .simulate('change', event);
    expect(wrapper.state().newUserData.firstname).toBe('hfklfhhsfhdf');
    expect(wrapper.length).toBe(1);
});

it('should test onChange function', () => {
    const event = {
        target: {
            value: 'hfklfhhsfhdf'
        }
    }
    const wrapper = shallow(<RegisterComponent />);
    wrapper.addUser;
    wrapper.find('Form')
        .dive()
        .find('#lastname')
        .simulate('change', event);
    expect(wrapper.state().newUserData.lastname).toBe('hfklfhhsfhdf');
    expect(wrapper.length).toBe(1);
});

it('should test onChange function', () => {
    const event = {
        target: {
            value: 'hfklfhhsfhdf'
        }
    }
    const wrapper = shallow(<RegisterComponent />);
    wrapper.addUser;
    wrapper.find('Form')
        .dive()
        .find('#username')
        .simulate('change', event);
    expect(wrapper.state().newUserData.username).toBe('hfklfhhsfhdf');
    expect(wrapper.length).toBe(1);
});

it('should test onChange function', () => {
    const event = {
        target: {
            value: 'mme@andela.com'
        }
    }
    const wrapper = shallow(<RegisterComponent />);
    wrapper.addUser;
    wrapper.find('Form')
        .dive()
        .find('#email')
        .simulate('change', event);
    expect(wrapper.state().newUserData.email).toBe('mme@andela.com');
    expect(wrapper.length).toBe(1);
});

it('should test onChange function', () => {
    const event = {
        target: {
            value: 'hhhhvjfhefv'
        }
    }
    const wrapper = shallow(<RegisterComponent />);
    wrapper.addUser;
    wrapper.find('Form')
        .dive()
        .find('#password')
        .simulate('change', event);
    expect(wrapper.state().newUserData.password).toBe('hhhhvjfhefv');
    expect(wrapper.length).toBe(1);
});


it('should test onClick function', () => {
    const state = {
        newUserData: {
            firstname: '',
            lastname: '',
            email: '',
            phoneNumber: '',
            username: '',
            password: ''
        }
    }
    const wrapper = shallow(<RegisterComponent />);
    wrapper.setState(state)
    wrapper.find('Button')
        .dive()
        .simulate('click');
    expect(wrapper.state().addUser).toBe(1);
})
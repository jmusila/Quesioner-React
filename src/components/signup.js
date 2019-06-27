import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Input, FormGroup, Label, Form, Button } from 'reactstrap';
import axios from 'axios';
import { registerActions } from '../actions/registerActions';


class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newUserData: {
                firstname: '',
                lastname: '',
                email: '',
                phoneNumber: '',
                username: '',
                password: ''
            }
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        const { name, value } = e.target;
        const { newUserData } = this.state;
        newUserData[name] = value;
        this.setState({ newUserData });
    }

    handleSubmit(e) {
        e.preventDefault();
        const { newUserData } = this.state;
        const { registerActions } = this.props;
        registerActions(newUserData)
    }
    render() {
        return (
            <div className="SignUp container">
                <Form>
                    <FormGroup>
                        <Label for="firstname">Firstname</Label>
                        <Input id="firstname" name="firstname" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="lastname">Lastname</Label>
                        <Input name="lastname" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input name="email" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="phonenumber">Phonenumber</Label>
                        <Input name="phoneNumber" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input name="username" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input name="password" type="password" onChange={this.handleChange} />
                    </FormGroup>
                </Form>
                <Button type="submit" color="primary" onClick={this.handleSubmit}>SignUp</Button>
            </div>
        );
    }
}

export default connect(null, { registerActions })(SignUp);
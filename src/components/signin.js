import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Input, FormGroup, Label, Form, Button } from 'reactstrap';
import axios from 'axios';
import { Redirect } from "react-router-dom";
import { loginActions } from '../actions/loginActions';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginUser: {
                email: '',
                password: ''
            },
            isLoggedIn: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        const { name, value } = e.target;
        const { loginUser } = this.state;
        loginUser[name] = value;
        this.setState({ loginUser });
    }

    handleSubmit(e) {
        e.preventDefault();
        const { loginUser } = this.state;
        const { loginActions, history } = this.props;
        loginActions(loginUser).then(data => {
            if (data.data) {
                const { access_token } = data.data;
                localStorage.setItem('token', access_token);
                history.push('/');
            }
        });
    }

    render() {
        const token = localStorage.getItem('token');
        if (token) {
            return <Redirect to="/" />
        }

        return (
            <div className="SingIn container">
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input name="email" type="email" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input id="password" name="password" type="password" onChange={this.handleChange} />
                    </FormGroup>
                </Form>
                <Button type="submit" onClick={this.handleSubmit} color="primary">SignIn</Button>
            </div>
        );
    }
}

SignIn.propTypes = {
    loginActions: PropTypes.func.isRequired
};

export default connect(null, { loginActions })(SignIn);
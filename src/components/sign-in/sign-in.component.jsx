import React from 'react';
import FormInput from '../form-input/form-input.component'

import './sign-in.styles.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState( {email: '', password: ''});
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value});
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                            label='E-Mail'
                            name='email'
                            type='email'
                            value={this.state.email}
                            handleChange={this.handleChange}
                            required />
                    <FormInput
                            label='Password'
                            name='password'
                            type='password'
                            value={this.state.password}
                            handleChange={this.handleChange}
                            required />
                            
                    <input type='submit' value='Sign In' />
                </form>
            </div>
        )
    }
}

export default SignIn;
import React from 'react';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {auth, signInWithFacebook, signInWithGoogle} from '../../firebase/firebase.utils'

import './sign-in.styles.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            alert(error.message);
        }
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
                    
                    <div className='buttons'>
                        <CustomButton type='submit'>SIGN IN</CustomButton>
                        <CustomButton type='button' onClick={signInWithGoogle} signInMethod='google-sign-in'>SIGN IN WITH GOOGLE</CustomButton>
                        <CustomButton type='button' onClick={signInWithFacebook} signInMethod='facebook-sign-in'>SIGN IN WITH FACEBOOK</CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn;
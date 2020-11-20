import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component'
import CustomButton from '../../components/custom-button/custom-button.component'
import { auth } from '../../firebase/firebase.utils';

import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUpPage = ({currentUser}) => (
    <div className='sign-in-and-sign-up'>
        {
            (currentUser!==null) ?
            <div>
                <p>You are logged in with "{currentUser.email}"</p>
                <CustomButton onClick={() => auth.signOut()}>SIGN OUT</CustomButton>
            </div>
            
            :
            <SignIn />
        }
    </div>
);

export default SignInAndSignUpPage;
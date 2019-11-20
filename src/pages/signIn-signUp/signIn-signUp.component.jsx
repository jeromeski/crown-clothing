import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './signIn-signUp.styles.scss';

const SignInAndSignUp = () => (
  <div className='signinandsignup'>
    <SignIn />
    <SignUp />
  </div>
)

export default SignInAndSignUp;
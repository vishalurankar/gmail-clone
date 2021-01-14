import { Button } from '@material-ui/core';
import React from 'react'
import { useDispatch } from 'react-redux';
import { dispatch } from 'rxjs/internal/observable/pairs';
import { login } from './features/mail/userSlice';
import { auth, Provider } from './firebase';
import './Login.css';

function Login() {
    const dispatch = useDispatch();

    const signIn =() => {
        auth.signInWithPopup(Provider)
         .then(({ user }) => {
            dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photoUrl: user.photoURL,
            }))
         })
         .catch(error => console.log(error.message));
    }

    return (
        <div className='login'>
            <div className="login__container">
                <img src='https://www.google.com/gmail/about/static/images/logo-gmail.png?cache=1adba63' alt=''/>
                <Button variant='contained' color='primary' onClick={signIn}>Login</Button>
            </div>
        </div>
    )

}

export default Login;

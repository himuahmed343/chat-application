import { FacebookOutlined, GoogleOutlined } from '@ant-design/icons';
import firebase from 'firebase/compat/app';
import React from 'react';



export const Login = () => {
    return (
        <div id="login-page">
            <div id="login-card">
                <h2>Welcome to Chat-App</h2>

                <div
                    className='login-button google'
                    onClick={() => firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                >
                    <GoogleOutlined /> Sign In with Google
                </div>

                <div
                    className='login-button facebook'
                    onClick={() => firebase.auth().signInWithRedirect(new firebase.auth.FacebookAuthProvider())}

                >
                    <FacebookOutlined /> Sign In with Facebook
                </div>
            </div>
        </div>
    )
}

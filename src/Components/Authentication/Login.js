import React, { useContext, useState } from 'react';
import { authConfig, googleSignIn, signInUserWithEmailAndPassword } from './authManager';
import fb from '../../logos/Group 2.png';
import google from '../../logos/Group 573.png';
import { Link, useHistory } from 'react-router-dom';
import { userContext } from '../../App';

const Login = () => {
    document.title = 'Log in';
    authConfig();
    const [loggedinUser, setLoggedinUser] = useContext(userContext);

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const history = useHistory();

    const handleLogin = (e) => {
        if (password.lenght && email.lenght) {
            alert('Confirmed password must be matched to the password');
        } else {
            const user = { email, password };
            signInUserWithEmailAndPassword(user)
                .then(loggedInUser => {
                    sessionStorage.setItem('user', JSON.stringify(loggedInUser));
                    setLoggedinUser(loggedInUser);
                    if (loggedInUser.loggedIn) history.replace('/');
                })
        }
        e.preventDefault();
    }

    const handleGoogleSignIn =(e) => {
        googleSignIn()
            .then(loggedInUser => {
                sessionStorage.setItem('user', JSON.stringify(loggedInUser));
                setLoggedinUser(loggedInUser);
                if (loggedInUser.loggedIn) history.replace('/');
            });
        e.preventDefault();
    }

    return (
        <div className='formPage'>
            <div className='formContainer'>
                <form className='signinForm'>
                    <div className='formTitle'><h1>Log in</h1></div><br />

                    <input className='signInInput' name='email' type='text' placeholder='Email' onChange={(e) => setEmail(e.target.value)} required /><br />

                    <input className='signInInput' name='password' type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} required /><br />

                    <button style={{ width: '100%' }} className='btn-brand' onClick={handleLogin}>Log in</button><br />
                    <p>Don’t have an account? <Link to='/signup'><span className='createAccount'>Create an account</span></Link></p>
                </form>
            </div><br />
            <span className='or'>OR</span>

            <div className='fireAuth'>
                <div className='mr-auto authLogo'> <img
                    src={google}
                    alt=''
                    width='40'
                /></div>
                <div className='authTitle' onClick={handleGoogleSignIn}><h5>Continue with Google</h5></div>
            </div>

        </div>
    );
};

export default Login;
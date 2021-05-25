import './login.css';
import {useRef} from 'react';

const Login = () => {

    //stop re-rendering page
    const email = useRef();
    const password = useRef();

    const handleClick = (e) => {
        e.prevent.default();
    }
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Social-Devs</h3>
                    <span className="loginDesc">Connect with friends and other devs around the world on Social-Devs.</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick} >
                        <input required ref={email} type="email" placeholder="Email" className="loginInput" />
                        <input required minLength='6' ref={password} type="password" placeholder="Password" className="loginInput" />
                        <button className="loginButton">Log-In</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">Register New Account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login

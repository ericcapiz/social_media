import './register.css';

const Register = () => {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Social-Devs</h3>
                    <span className="loginDesc">Register now and connect to different developers around the world.</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Username" className="loginInput" />
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        <input placeholder="Confirm Password" className="loginInput" />
                        <button className="loginButton">Sign-Up</button>
                        <h3 className="loginBack">Already have an account?</h3>
                        <button className="loginRegisterButton">Log-In</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register

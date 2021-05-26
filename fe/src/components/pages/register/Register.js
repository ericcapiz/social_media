import { useHistory } from "react-router";
import { useRef } from "react";
import axios from "axios";
import './register.css';
import { Link } from "react-router-dom";

const Register = () => {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordConfirm = useRef();
    const history = useHistory();

    const handleClick = async (e) => {
        e.preventDefault();
        if (passwordConfirm.current.value !== password.current.value) {
          passwordConfirm.current.setCustomValidity("Passwords don't match!");
        } else {
          const user = {
            username: username.current.value,
            email: email.current.value,
            password: password.current.value,
          };
          try {
            await axios.post("/auth/register", user);
            history.push("/login");
          } catch (err) {
            console.log(err);
          }
        }
      };


    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Social-Devs</h3>
                    <span className="loginDesc">Register now and connect to different developers around the world.</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick} >
                        <input ref={username} required placeholder="Username" className="loginInput" />
                        <input type="email" ref={email} required placeholder="Email" className="loginInput" />
                        <input minLength="6" type="password" ref={password} required placeholder="Password" className="loginInput" />
                        <input type="password" ref={passwordConfirm} required placeholder="Confirm Password" className="loginInput" />
                        <button type="submit" className="loginButton">Sign-Up</button>
                        <h3 className="loginBack">Already have an account?</h3>
                        <Link style={{marginLeft:'100px'}}  to="/login">
                            <button className="loginRegisterButton">Log-In</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register

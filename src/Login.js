import React, { useContext } from "react";
import { AuthContext } from "./Auth";
import firebaseApp from './firebase' ;
import { Link, Redirect } from "react-router-dom";
import './Login.css' ;
import { Button } from 'react-bootstrap' ;
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      firebaseApp.auth().signInWithEmailAndPassword(email.value, password.value);
    } catch (error) {
      alert(error);
    }
  };
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
        return <Redirect to="/dashboard" />;
  }
  return (
    <>
        <div className="login">
                <div className='flex__container'>
                <nav className="navbar">
                    <h1> Ping! </h1>
                </nav>

                <div className="center">
                    <h1>Log in</h1>
                    <form method="post" onSubmit={handleSubmit}>

                        <div class="txt_field">
                            <input type="email" name="email" required/>
                            <span></span>
                            <label for="email">Username</label>
                        </div>
                        <br/>
                        <div class="txt_field">
                            <input type="password" name="password" required/>
                            <span></span>
                            <label for="password">Password</label>
                        </div>

                        <div class="pass">Forgot Password?</div>

                        <input type="submit" value="Log in"/>

                        <div class="signup_link">
                            Not a member? <Link to = '/Signup'>Signup</Link>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </>
  );
};

export default Login;

import React, {useState} from "react";
import firebaseApp from './firebase' ;
import { Link, Redirect } from "react-router-dom";
import "./Login.css";

const SignUp = () => {
    const [currentUser, setCurrentUser] = useState(null);    

    const handleSubmit = (e) => {
      e.preventDefault();    
      const { email, password } = e.target.elements;
      try {
        firebaseApp.auth().createUserWithEmailAndPassword(email.value, password.value);      
        setCurrentUser(true);
      } catch (error) {
        alert(error);
      }
    };

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
                    <h1>Sign up</h1>
                    <form method="post" onSubmit={handleSubmit}>

                        <div class="txt_field">
                            <input type="email" required autocomplete="off"/>
                            <span></span>
                            <label for="email">Email</label>
                        </div>
                        <br/>
                        <div class="txt_field">
                            <input type="password" required/>
                            <span></span>
                            <label for="password">Password</label>
                        </div>

                        <div class="pass">Forgot Password?</div>

                        <input type="submit" value="Sign up"/>

                        <div class="signup_link">
                            Already a member? <Link to = '/Login'>Login</Link>
                        </div>

                    </form>
                </div>
            </div>
        </div>
      </>
    );
  };
  
  export default SignUp;
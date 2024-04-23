import React from "react";
import LoginComponent from "../components/LoginComponent.jsx";

const Login = ({ setUser }) => {
  return (
    <div className="login-container">
        <h1>Login Page</h1>
        <div>
            <div className="firebase-login-button">
                <LoginComponent setUser={setUser} />
            </div>
        </div>
         
    </div>
   
  );
}

export default Login;

import React from "react";
import LoginComponent from "../components/LoginComponent.jsx";
import "/src/components/Login.css";

const Login = ({ setUser }) => {
  return (
    <div className="login-container">
      <div className="title">
        <h1>Login</h1>
      </div>
            <div className="firebase-login-button">
                <LoginComponent setUser={setUser} />
            </div>
    </div>
  );
}

export default Login;

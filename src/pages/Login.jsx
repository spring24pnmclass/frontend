import React from "react";
import LoginComponent from "../components/LoginComponent.jsx";
import "/src/components/Login.css";

const Login = ({ setUser }) => {
  return (

    <div className="login-container">
      <body>


        
      <p><br></br><br /></p>
      </body>
      <div className="title">
        <h1>Login Page</h1>
      </div>

{/*         
        <p><br></br><br /></p>
        <p><br></br><br /></p>
        <p><br></br><br /></p>
        <p><br></br><br /></p> */}

        <div>
            <div className="firebase-login-button">
                <LoginComponent setUser={setUser} />
            </div>
        </div>

        <body> 


        {/* <p><br></br><br /></p>
        <p><br></br><br /></p>
        <p><br></br><br /></p>
        <p><br></br><br /></p>
        <p><br></br><br /></p> */}
    
      </body> 
         
    </div>
   
  );
}

export default Login;

import React, { useEffect } from 'react';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../../firebase/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import "/src/components/loginButton.css";

const LoginComponent = ({ setUser }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        navigate('/location'); // Redirect to location page after successful login
      }
    });
    return unsubscribe;
  }, [setUser, navigate]);

  const handleGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
    }
  };

  return (
    <div className='pt-1000 w-full flex flex-col items-center'>
      <button onClick={handleGoogle} className='firebase-login-button'>
        Sign In With Google
      </button>
    </div>
  );
}

export default LoginComponent;

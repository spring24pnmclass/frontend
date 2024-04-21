import React, { useEffect } from 'react';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../../firebase/firebaseConfig';
import { useNavigate } from 'react-router-dom';

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
    <div className='pt-36 w-full flex flex-col items-center'>
      <button onClick={handleGoogle} className='border-4 bg-green-500 text-white rounded-full mb-8'>
        Sign In With Google
      </button>
    </div>
  );
}

export default LoginComponent;

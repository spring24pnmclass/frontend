import { useState } from 'react'; // Import useState hook
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { auth } from '../../firebase/firebaseConfig';

export default function LoginComponent() {
  const [user, setUser] = useState(null); // State to store user information
  
  // Function to handle Google sign-in
  const handleGoogle = async () => {
    const provider = new GoogleAuthProvider(); // Create GoogleAuthProvider instance
    try {
      const result = await signInWithPopup(auth, provider); // Sign in with Google
      setUser(result.user); // Set the signed-in user information to state
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
    }
  };

  // Function to sign out
  const handleSignOut = async () => {
    try {
      await getAuth().signOut(); // Sign out the user
      setUser(null); // Clear user information from state
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  return (
    <div className='pt-36 w-full flex flex-col items-center'>
      {user ? ( // Conditional rendering based on whether user is logged in
        <>
          <p>Welcome, {user.displayName}!</p> {/* Display user's name */}
          <button onClick={handleSignOut} className='border-4 bg-red-500 text-white rounded-full mb-8'>
            Sign Out
          </button>
        </>
      ) : (
        <button onClick={handleGoogle} className='border-4 bg-green-500 text-white rounded-full mb-8'>
          Sign In With Google
        </button>
      )}
    </div>
  );
}

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaH83vqejaE5Jx8GtH_snVGrY68SI_jjA",
  authDomain: "to-go-bot-login-auth.firebaseapp.com",
  projectId: "to-go-bot-login-auth",
  storageBucket: "to-go-bot-login-auth.appspot.com",
  messagingSenderId: "412445376075",
  appId: "1:412445376075:web:33ef795219bf2415cd17ce",
  measurementId: "G-XTWYT79FXG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, analytics, auth }; // Exporting named exports
export default app; // Default export

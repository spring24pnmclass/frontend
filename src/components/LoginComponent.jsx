import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../../firebase/firebaseConfig';

export default function LoginComponent(){
  const handleGoogle = async (e) => {
    const provider = await new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  }
  
  return (
    <div className='pt-36 w-full flex flex-col items-center'>
      <button onClick={handleGoogle} className='border-4 bg-green-500 text-white rounded-full mb-8'>
        Sign In With Google</button>
    </div>
  )
}

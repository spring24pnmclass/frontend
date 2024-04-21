
import { Inter } from '@next/font/google'
import Navbar from 'components/Navbar'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../../firebase/firebaseConfig';


const inter = Inter({subsets: ['latin']})

export default function Home(){
  const handleGoogle = async (e) => {
    const provider = await new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  }
  
  return (
    <>
    <Navbar />
    <div className='pt-36 w-full flex'>
      <button onClick={handleGoogle} className='mx-auto border-4' bg-green-500 text-white rounded-fu>
        Sign In With Google</button>
    </div>
      </>
  )
}

import React, { useState } from 'react';
import { signInWithEmailAndPassword,getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../Firebase/firebase';



const Login = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState("");
  
  const handleLogin = (e: React.MouseEvent<HTMLInputElement, MouseEvent>)=>{
    e.preventDefault();
    signInWithEmailAndPassword(auth, email,password)
    .then((userCredential)=>{
      console.log(userCredential)
    });

  }
  const auth = getAuth();
  createUserWithEmailAndPassword(auth,email,password)
  .then((userCredential)=>{
    const user = userCredential.user;
    

  })
  .catch((error)=>{
    console.log(error);
  })

  const handleSignup =(e: React.MouseEvent<HTMLButtonElement,MouseEvent>)=>{



  }
  return (
    <>
      <div className='flex items-center justify-center h-screen'>
        <div className='bg-white rounded-lg shadow-md p-8 w-1/2'>
          <h2 className='text-2xl'>Login</h2>
          <form>
            <div className='mb-4'>
              <label htmlFor="email" className='block text-gray-700 text-sm font-bold mb-2' >Email</label>
              <input type="email" className='shadow appearance-none border rounded w-full py-2 text-gray-700 leading-tight focus:outline-none p-2' placeholder='your@email.com'/>
            </div>
            <div className='mb-4'>
              <label htmlFor="password">Password</label>
              <input type="text" className='shadow appearance-none border rounded w-full py-2 text-gray-700 leading-tight focus:outline-none p-2' placeholder='******' />
            </div>
            <div className="actions">
            <input  type="submit" value="Login" onClick={handleLogin} />
            </div>
          </form>
          <button className='cursor-pointer'>Don't have an account</button>
        </div>

      </div>
    </>
  );
};

export default Login;
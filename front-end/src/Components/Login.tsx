import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { getDoc, doc } from 'firebase/firestore';
import { auth, db } from '../Firebase/firebase';
import { useNavigate, Link } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const userDoc = await getDoc(doc(db,'users',user.uid));
      const userData = userDoc.data();
      
      if(user.emailVerified){
        const userDataLowercase = userData?.role.toLowerCase();

        if(userDataLowercase === 'reception'){
          navigate('/reception');
        }else if(userDataLowercase === 'doctor'){
          navigate('/doctor');
        }

      }
      

      
    } catch (error) {
      console.error('Error during login:', error);
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unknown error occurred');
      }
    }
  };

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='bg-white rounded-lg shadow-md p-8 w-1/2'>
        <h2 className='text-2xl mb-6'>Login</h2>
        <form onSubmit={handleLogin}>
          <div className='mb-4'>
            <label htmlFor="email" className='block text-gray-700 text-sm font-bold mb-2'>Email</label>
            <input 
              type="email" 
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='shadow appearance-none border rounded w-full py-2 text-gray-700 leading-tight focus:outline-none p-2' 
              placeholder='your@email.com'
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor="password" className='block text-gray-700 text-sm font-bold mb-2'>Password</label>
            <input 
              type="password" 
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='shadow appearance-none border rounded w-full py-2 text-gray-700 leading-tight focus:outline-none p-2' 
              placeholder='******' 
              required
            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="actions">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
              Login
            </button>
          </div>
        </form>
        <Link to="/signup" className='block text-center mt-4 text-blue-500 hover:text-blue-700'>
          Don't have an account? Sign up
        </Link>
      </div>
    </div>
  );
};

export default Login;
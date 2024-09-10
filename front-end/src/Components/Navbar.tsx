import React from 'react'
import { auth } from '../Firebase/firebase';
import { Navigate, useNavigate } from 'react-router-dom';

import { signOut } from 'firebase/auth';
import { useFirebase } from '../Context/firebaseContext';

const Navbar =  () => {
    
    const navigate = useNavigate();
    const firebase=useFirebase();

    const handleLogout =async ()=>{
      try{
            await signOut(auth);
            navigate('/login');
            
        }catch(error){
            console.error('Error logging out:',error);
            
        }
    }
  return (
    <>
    <nav className="bg-blue-500 p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">Clinic Management</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Logout
        </button>
      </div>
    </nav>
    </>
  )
}

export default Navbar
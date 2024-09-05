import React,{Suspense} from 'react';
import Navbar from './Navbar';
import dynamic from 'next/dynamic';


const Navbar = dynamic(() => import('./Navbar') as Promise<any>, { ssr: false });

const DoctorsDashboard = () => {
 
  return (
    <>
     <Suspense fallback ={<div>loading...</div>}>
      <Navbar />
     </Suspense>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Doctor's Dashboard</h2>
      </div>
    </>
  );
};

export default DoctorsDashboard;
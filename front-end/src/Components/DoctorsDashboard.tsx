import React,{Suspense} from 'react';
// import Navbar from './Navbar';
import dynamic from 'next/dynamic';
import Navbar from './Navbar';
import DashboardTable from './DashboardComponents/DashboardTable';
// const Navbar = dynamic(() => import('./Navbar') as Promise<any>, { ssr: false });
const DoctorsDashboard = () => {

  return (
    <>
     <Suspense fallback ={<div>loading...</div>}>
      <Navbar />
     </Suspense>
     <DashboardTable/>
    </>
  );
};

export default DoctorsDashboard;
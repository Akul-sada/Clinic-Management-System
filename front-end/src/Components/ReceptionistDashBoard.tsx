import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import Navbar from './Navbar'

// const Navbar = dynamic(() => import('./Navbar') as Promise<any>, { ssr: false });

const ReceptionistDashBoard = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
      </Suspense>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Receptionist Dashboard</h2>
        {/* Add your dashboard content here */}
      </div>
    </>
  )
}

export default ReceptionistDashBoard
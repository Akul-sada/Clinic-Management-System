import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Login from './Components/Login';

import DoctorsDashboard from './Components/DoctorsDashboard';

import SignupForm from './Components/SignupForm';
import ReceptionistDashBoad from './Components/ReceptionistDashBoard';
import ReceptionistDashBoard from './Components/ReceptionistDashBoard';




function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignupForm/>}/>
        <Route path='/reception' element={<ReceptionistDashBoard/>}/>
        <Route path='/doctor' element={<DoctorsDashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App;

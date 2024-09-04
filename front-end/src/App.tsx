import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';

import DoctorsDashboard from './Components/DoctorsDashboard';
import ReceptionistDashBoad from './Components/receptionistDashBoad';
import SignupForm from './Components/SignupForm';




function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='signup' element={<SignupForm/>}/>
        <Route path='/recieption' element={<ReceptionistDashBoad
        />}/>
        <Route path='/doctor' element={<DoctorsDashboard/>}/>
      </Routes>
    </Router>
    
    </>
  );
}

export default App;

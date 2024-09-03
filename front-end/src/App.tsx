import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import ReceptionistDashBoad from './Components/ReceptionistDashBoad';
import DoctorsDashboard from './Components/DoctorsDashboard';




function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/recieption' element={<ReceptionistDashBoad/>}/>
        <Route path='/doctor' element={<DoctorsDashboard/>}/>
      </Routes>
    </Router>
    
    </>
  );
}

export default App;

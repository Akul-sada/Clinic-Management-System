import React, { createContext, useState, useContext, ReactNode} from 'react';

interface AuthContextType{
    isAuthenticated:boolean;
    login:()=>void;
    logout:()=>void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: ReactNode }>=({ children })=>{
    const [isAuthenticated,setIsAuthenticated] = useState(false);

    const login = ()=>setIsAuthenticated(true);
    const logout = ()=>setIsAuthenticated(false);

    return(
        <AuthContext.Provider value={{isAuthenticated,login,logout}}>
            {children}
        </AuthContext.Provider>
    );

}
export const useAuth =()=>{
    const context = useContext(AuthContext);
    if(!context) throw new Error('useAuth must be used within an AuthProvider');
    return context;
}
/*
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import DoctorsDashboard from './Components/DoctorsDashboard';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route 
            path="/doctors-dashboard" 
            element={
              <ProtectedRoute>
                <DoctorsDashboard />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

*/










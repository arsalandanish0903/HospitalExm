import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import DoctorSearch from './components/pages/DoctorSearch';
import AppointmentManager from './components/pages/AppointmentManager';
import Login from './components/login/Login';
import History from './components/pages/History';

function App() {
  // State to track login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Login handler to update the login state
  const handleLogin = () => {
    setIsLoggedIn(true);  // Set to true after successful login
  };

  return (
    <Router>
      <div className='flex'>
        {isLoggedIn ? (
          <>
            <Sidebar />
            <div className='flex-1'>
              <Routes>
                <Route path='/patients/available' element={<DoctorSearch />} />
                <Route path='/patients/appointments' element={<AppointmentManager />} />
                <Route path="/patients/history" element={<History />} />

                {/* Add more routes here */}
              </Routes>
            </div>
          </>
        ) : (
          <Login handleLogin={handleLogin} />
        )}
      </div>
    </Router>
  );
}

export default App;

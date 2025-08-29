import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import ProtectedRoute from './components/ProtectedRoute';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<ProtectedRoute />}>
          <Route path="" element={<UserDashboard />} />
        </Route>
        <Route path="/admin/dashboard" element={<ProtectedRoute />}>
          <Route path="" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

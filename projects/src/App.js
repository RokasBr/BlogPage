import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import RegistrationPage from "./Pages/RegistrationPage";
import LoginPage from "./Pages/LoginPage";

function App() {
    return (
        <Router>
            <nav className="navbar">
                <Link to="/public">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </nav>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegistrationPage/>} />
                <Route path="/" element={<h2>Welcome Home</h2>} />
            </Routes>
        </Router>
    );
}

export default App;

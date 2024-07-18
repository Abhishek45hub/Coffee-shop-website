// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import MyOrders from './components/MyOrders';
import Login from './components/Login';
import Cart from './components/Cart';
import ChatBot from './components/ChatBot';
import CreateAccount from './components/CreateAccount'; // Import the CreateAccount component
import './App.css'; // Importing the CSS file

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/orders" element={<MyOrders />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/create-account" element={<CreateAccount />} /> {/* New route for CreateAccount */}
        </Routes>
        <ChatBot />
      </div>
    </Router>
  );
};

export default App;

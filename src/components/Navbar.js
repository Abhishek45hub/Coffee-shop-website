import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <i className="fas fa-coffee"></i> Coffee Shop
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/orders">My Orders</Link></li>
        <li>
          <Link to="/cart">
            <i className="fas fa-shopping-cart"></i> Cart
          </Link>
        </li>
        <li className="login-link"><Link to="/login">Login</Link></li>

      </ul>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/create-event">Create Event</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchNavbarData = async () => {
      try {
        const response = await fetch('/contact');
        const data = await response.json();
        setMessage(data.message);
      } catch (error) {
        console.error('Error fetching navbar data:', error);
      }
    };

    fetchNavbarData();
  }, []);

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="/about" className="nav-link">
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="/services" className="nav-link">
            Services
          </a>
        </li>
        <li className="nav-item">
          <a href="/gallery" className="nav-link">
            Gallery
          </a>
        </li>
        <li className="nav-item">
          <a href="/contact" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
      {message && <p>{message}</p>}
    </nav>
  );
};

export default Navbar;

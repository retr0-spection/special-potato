import React from 'react';
import '../Styles/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer'>
      <div className='links'>
        <div className='link-wrap'>
          <div className='link_items'>
            <h2>About Us</h2>
            <Link to='/login'>Terms and conditions</Link>
            <Link to='/'>Customer Testimonials</Link>
            <Link to='/'>Team</Link>
          </div>
          <div className='link_items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
          </div>
          <span className='website-rights'>&copy; 2024 e-SPAZA</span>
        </div>
        
      </div>
    </div>
  );
}

export default Footer;

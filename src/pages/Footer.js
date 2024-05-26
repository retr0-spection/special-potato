import React from 'react';
import '../Styles/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='footer'>
      <section className='links'>
        <section className='link-wrap'>
          <section className='link_items'>
            <h2>About Us</h2>
            <Link to='/login'>Terms and conditions</Link>
            <Link to='/'>Customer Testimonials</Link>
            <Link to='/'>Team</Link>
          </section>
          <section className='link_items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
          </section>
          <span className='website-rights'>&copy; 2024 e-SPAZA</span>
        </section>
        
      </section>
    </footer>
  );
}

export default Footer;

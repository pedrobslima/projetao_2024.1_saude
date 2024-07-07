import './Footer.css';
import React from 'react';
import logo from '../assets/images/default_logo.png';

function Footer() {
  return (
    <footer className='footer'>
      <div className="footer-left">
        <img src={logo} alt="logo" className="footer-logo" />
        <div className="footer-contact">
          <p>Suporte: email@example.com</p>
          <p>(81) 81113-2312</p>
        </div>
      </div>
      <div className="footer-right">
        <p>Todos os direitos reservados, 2024</p>
      </div>
    </footer>
  );
}

export default Footer;

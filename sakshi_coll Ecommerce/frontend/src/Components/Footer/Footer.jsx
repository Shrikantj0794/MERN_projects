import React, { useState, useEffect, useRef } from 'react';
import './Footer.css';
import sc_logo from '../Assets/SC-collection/sc_logo.png';
import instagram_icon from '../Assets/instagram_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [showProducts, setShowProducts] = useState(false);
  const [showBranches, setShowBranches] = useState(false);

  const productsRef = useRef(null);
  const branchesRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const toggleProducts = () => {
    setShowProducts(!showProducts);
    setShowBranches(false); // Close branches menu when products menu is opened
  };

  const toggleBranches = () => {
    setShowBranches(!showBranches);
    setShowProducts(false); // Close products menu when branches menu is opened
  };

  const handleClickOutside = (event) => {
    if (productsRef.current && !productsRef.current.contains(event.target)) {
      setShowProducts(false);
    }
    if (branchesRef.current && !branchesRef.current.contains(event.target)) {
      setShowBranches(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const year = new Date().getFullYear();

  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={sc_logo} alt="SC Logo" />
        <p>SAKSHI <br/> COLLECTION</p>
      </div>
      <ul className="footer-links">
        <Link to={'/'} onClick={scrollToTop}><li>SHOP</li></Link>

        <li ref={productsRef}>
          <div onClick={toggleProducts} className="toggle-button">Products</div>
          {showProducts && (
            <ul className="dropdown">
              <Link to={'/mens'} onClick={scrollToTop}><li>Men</li></Link>
              <Link to={'/womens'} onClick={scrollToTop}><li>Women</li></Link>
              <Link to={'/kids'} onClick={scrollToTop}><li>Kids</li></Link>
            </ul>
          )}
        </li>

        <li ref={branchesRef}>
          <div onClick={toggleBranches} className="toggle-button">Branches</div>
          {showBranches && (
            <ul className="dropdown">
              <Link to={'https://maps.app.goo.gl/uLJdTy3A2nM1Tid88'} onClick={scrollToTop} target='_blank'><li>Beed</li></Link>
              <Link onClick={scrollToTop} to={'https://www.instagram.com/new_sakshi_collection/'} target='_blank'><li>Shirasdevi</li></Link>
              <Link onClick={scrollToTop} to={'https://www.instagram.com/new_sakshi_collection/'} target='_blank'><li>Pimparner</li></Link>
              <Link onClick={scrollToTop} to={'https://www.instagram.com/new_sakshi_collection/'} target='_blank'><li>Kaij</li></Link>
            </ul>
          )}
        </li>

        <Link><li>About</li></Link>
        <Link><li>Contact</li></Link>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <Link to={'https://www.instagram.com/new_sakshi_collection/'} target='_blank'>
            <img src={instagram_icon} alt="Instagram Icon" />
          </Link>
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="WhatsApp Icon" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright © {year} | Sakshi Collection</p>
      </div>
    </div>
  );
};

export default Footer;
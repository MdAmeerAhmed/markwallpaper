import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaArrowUp } from 'react-icons/fa';
import '../page/ServicesPages/Wallpapers.css'; // Create this file for the CSS below

const FloatingButtons = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/917075407473"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >  
         <FaWhatsapp /> 
      </a>

      {/* Scroll to Top Button */}
      {showTopBtn && (
        <button
          onClick={goToTop}
          className="scroll-to-top"
          aria-label="Scroll to top"
        ><i className="bi bi-arrow-up"></i>
            <FaArrowUp /> 
        </button>
      )}
    </>
  );
};

export default FloatingButtons;

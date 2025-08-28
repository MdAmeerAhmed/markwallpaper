import React, { useState } from 'react';
import { Link } from "react-router-dom";
function Footer() {
    const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('Submitting...');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: '684122e0-c7c5-46f7-b86c-c2ca69e86072', // Replace with your key
        email: email,
      }),
    });

    const result = await response.json();
    if (result.success) {
      setMessage('Thank you for subscribing!');
      setEmail('');
    } else {
      setMessage('Something went wrong. Please try again.');
    }
  };
  return (
    <div>
      <footer className="w3l-footer-29-main">
        <div className="footer-29 py-5">
            <div className="container py-lg-4">
                <div className="row footer-top-29">
                    <div className="col-lg-4 footer-list-29 footer-1 pe-lg-5">
                        <h2><Link className="navbar-brand" to="/">
                                <span className="w3yellow">Mark</span>Wallpaper</Link></h2>
                        <p className="parahny pr-lg-5 mr-xl-4 mb-4">MarkWallpaper is your trusted partner for wallpapers, wardrobes, blinds, and modular kitchens. We design interiors that are stylish, functional, and built to reflect your personality.
                        </p>

                    </div>
                    <div className="col-lg-4 footer-list-29 footer-3 mt-lg-0 mt-5 pe-lg-5">
                        <h6 className="footer-title-29">Quick Links</h6>
                        <div className="footer-listw3-grids">
                            <ul className="footer-listw3">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="about-us" target="_blank" rel="noopener noreferrer">About</Link></li>
                                <li><Link to="/services" target="_blank" rel="noopener noreferrer">Services</Link></li>
                                <li><Link to="/contact" target="_blank" rel="noopener noreferrer">Contact</Link></li>

                            </ul>
                            <ul className="footer-listw3">
                                <li><Link to="/Wallpapers" target="_blank" rel="noopener noreferrer">Wallpapaer</Link></li>
                                <li><Link to="/blind" target="_blank" rel="noopener noreferrer">Blind</Link></li>
                                <li><Link to="/modular-kitchens" target="_blank" rel="noopener noreferrer">Modular Kitchen</Link></li>
                                <li><Link to="/faq" target="_blank" rel="noopener noreferrer">FAQ</Link></li>
                                
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 footer-list-29 footer-4 mt-lg-0 mt-5">
                        <h6 className="footer-title-29">Keep Connected</h6>
                        <p>Get Updates By Subscribe Our Weekly Newsletter</p>

                        <form onSubmit={handleSubmit} className="subscribe" method="post">
                            <input type="email" name="email" placeholder="Your Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            <button type="submit"><span className="fas fa-paper-plane"></span></button>
                        </form>
                        {message && <p className="subscribe-message">{message}</p>}
                        <div className="main-social-footer-29 mt-4">
                            <Link to="/" className="facebook" target="_blank" rel="noopener noreferrer"><span className="fab fa-facebook-f"></span></Link>
                            <Link to="/" className="twitter" target="_blank" rel="noopener noreferrer"><span className="fab fa-twitter"></span></Link>
                            <Link to="/"><span className="fab fa-pinterest-p"></span></Link>
                            <Link to="/" className="instagram" target="_blank" rel="noopener noreferrer"><span className="fab fa-instagram"></span></Link>
                            <Link to="/" className="google" target="_blank" rel="noopener noreferrer"><span className="fab fa-google-plus-g"></span></Link>
                            <Link to="/" className="linkd" target="_blank" rel="noopener noreferrer"><span className="fab fa-linkedin-in"></span></Link>
                        </div>
                    </div>
                </div>
                <div className="bottom-copies text-center">
                    <p className="copy-footer-29">© 2025 MarkWallpaper. All rights reserved .</p>
                </div>
            </div>
        </div>

        {/* <!-- move top --> */}
        <button  id="movetop" title="Go to top">
            <span className="fa fa-angle-up"></span>
        </button>
        
    </footer>
    </div>
  )
}

export default Footer

import React, { useState } from 'react';
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
                        <h2><a className="navbar-brand" href="index.html">
                                <span className="w3yellow">Mark</span>Wallpaper</a></h2>
                        <p className="parahny pr-lg-5 mr-xl-4 mb-4">MarkWallpaper is your trusted partner for wallpapers, wardrobes, blinds, and modular kitchens. We design interiors that are stylish, functional, and built to reflect your personality.
                        </p>

                    </div>
                    <div className="col-lg-4 footer-list-29 footer-3 mt-lg-0 mt-5 pe-lg-5">
                        <h6 className="footer-title-29">Quick Links</h6>
                        <div className="footer-listw3-grids">
                            <ul className="footer-listw3">
                                <li><a href="/">Home</a></li>
                                <li><a href="/about-us">About</a></li>
                                <li><a href="/services">Services</a></li>
                                <li><a href="/contact">Contact</a></li>

                            </ul>
                            <ul className="footer-listw3">
                                <li><a href="/wallpapaer">Wallpapaer</a></li>
                                <li><a href="/blind">Blind</a></li>
                                <li><a href="">Modular Kitchen</a></li>
                                <li><a href="/faq">FAQ</a></li>
                                
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
                            <a href="#facebook" className="facebook"><span className="fab fa-facebook-f"></span></a>
                            <a href="#twitter" className="twitter"><span className="fab fa-twitter"></span></a>
                            <a href="#pinterest"><span className="fab fa-pinterest-p"></span></a>
                            <a href="#instagram" className="instagram"><span className="fab fa-instagram"></span></a>
                            <a href="#google" className="google"><span className="fab fa-google-plus-g"></span></a>
                            <a href="#linkd" className="linkd"><span className="fab fa-linkedin-in"></span></a>
                        </div>
                    </div>
                </div>
                <div className="bottom-copies text-center">
                    <p className="copy-footer-29">© 2025 MarkWallpaperDesigner. All rights reserved .</p>
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

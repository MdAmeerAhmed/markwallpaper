import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
      const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    // Apply the theme to the document element
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const switchTheme = (e) => {
    const newTheme = e.target.checked ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };
  useEffect(() => {
    // Scroll event handler
    const handleScroll = () => {
      const scroll = $(window).scrollTop();
      if (scroll >= 80) {
        $("#site-header").addClass("nav-fixed");
      } else {
        $("#site-header").removeClass("nav-fixed");
      }
    };

    // Navbar toggler click event handler
    const handleNavbarTogglerClick = () => {
      $("header").toggleClass("active");
      $('body').toggleClass('noscroll');
    };

    // Initialize event listeners
    $(window).on("scroll", handleScroll);
    $(".navbar-toggler").on("click", handleNavbarTogglerClick);

    // Cleanup function to remove event listeners
    return () => {
      $(window).off("scroll", handleScroll);
      $(".navbar-toggler").off("click", handleNavbarTogglerClick);
    };
  }, []);

  useEffect(() => {
    if ($(window).width() > 991) {
      $("header").removeClass("active");
    }

    const handleResize = () => {
      if ($(window).width() > 991) {
        $("header").removeClass("active");
      }
    };

    $(window).on("resize", handleResize);

    // Cleanup function to remove event listeners
    return () => {
      $(window).off("resize", handleResize);
    };
  }, []);

  return (
    <header id="site-header" className="fixed-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light stroke py-lg-0">
          <h1>
            <a className="navbar-brand pe-xl-5 pe-lg-4" href="index.html">
              <span className="w3yellow">Mark</span>Wallpaper
            </a>
          </h1>
          <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
            <span className="navbar-toggler-icon fa icon-close fa-times"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-lg-auto my-2 my-lg-0 navbar-nav-scroll">
  <li className="nav-item">
    <NavLink className="nav-link" to="/" end>
      Home
    </NavLink>
  </li>
  <li className="nav-item">
    <NavLink className="nav-link" to="/about-us">
      About
    </NavLink>
  </li>
  <li className="nav-item">
                <NavLink className="nav-link" to="/services">Services</NavLink>
              </li>
  <li className="nav-item">
                <NavLink className="nav-link" to="/project">project</NavLink>
              </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/faq">FAQ</NavLink>
              </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
</ul>

            <ul className="header-search me-lg-4">
              <li className="search-right">
                <a href="#search" className="btn btn-style btn-primary search-btn" title="search">
                     Get Qutation
                </a>
                <div id="search" className="pop-overlay">
                  <div className="popup">
                    <h3 className="title-w3l two mb-4">Get Quote</h3>
                    <form action="error.html" method="GET" className="search-box">
                     <div class="mb-3">
    <label class="form-label">Full Name</label>
    <input type="text" class="form-control" placeholder="Enter your name" required/>
  </div>
  
  <div class="mb-3">
    <label class="form-label">Email Address</label>
    <input type="email" class="form-control" placeholder="Enter your email" required/>
  </div>
  
  <div class="mb-3">
    <label class="form-label">Phone Number</label>
    <input type="tel" class="form-control" placeholder="Enter your phone number" required/>
  </div>
  
  <div class="mb-3">
    <label class="form-label">Wallpaper Dimensions</label>
    <input type="text" class="form-control" placeholder="e.g. 12ft x 10ft" required />
  </div>
  
  <div class="mb-3">
    <label class="form-label">Design Preference</label>
    <textarea class="form-control" placeholder="Describe the style or theme you want" rows="3"></textarea>
  </div>
                      <button type="submit" className="btn">Get Quotation</button>
                    </form>
                    
                  </div>
                  <a className="close" href="#close">×</a>
                </div>
              </li>
            </ul>
          </div>
          <div className="mobile-position">
            <nav className="navigation">
              <div className="theme-switch-wrapper">
                <label className="theme-switch" htmlFor="checkbox">
                  <input
          type="checkbox"
          id="checkbox"
          checked={theme === 'dark'}
          onChange={switchTheme}
        />
                  <div className="mode-container">
                    <i className="gg-sun"></i>
                    <i className="gg-moon"></i>
                  </div>
                </label>
              </div>
            </nav>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

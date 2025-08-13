import React, { useEffect } from 'react';
import $ from 'jquery';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

const HomePage = () => {

  return (
    <div>
      <section className="w3l-main-slider banner-slider position-relative" id="home">
        <div className="owl-carousel owl-one owl-theme">
          <div className="item">
            <div className="slider-info banner-view banner-top1">
              <div className="container">
                <div className="banner-info header-hero-19">
                  <h5>Inspirational interiors</h5>
                  <h3 className="title-hero-19">Interior Designs.</h3>
                  <a href="about.html" className="btn btn-style btn-banner mt-sm-5 mt-4">Read More</a>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="slider-info banner-view banner-top2">
              <div className="container">
                <div className="banner-info header-hero-19">
                  <h5>Designing Dreams</h5>
                  <h3 className="title-hero-19">Decorate ideas</h3>
                  <a href="about.html" className="btn btn-style btn-banner mt-sm-5 mt-4">Read More</a>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="slider-info banner-view banner-top3">
              <div className="container">
                <div className="banner-info header-hero-19">
                  <h5>Inspirational interiors</h5>
                  <h3 className="title-hero-19">Interior Designs.</h3>
                  <a href="about.html" className="btn btn-style btn-banner mt-sm-5 mt-4">Read More</a>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="slider-info banner-view banner-top4">
              <div className="container">
                <div className="banner-info header-hero-19">
                  <h5>Designing Dreams</h5>
                  <h3 className="title-hero-19">Decorate ideas</h3>
                  <a href="about.html" className="btn btn-style btn-banner mt-sm-5 mt-4">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-w3l-media-sec">
          <div className="banner-w3l-media-title">
            <h3 className="title-w3l two">Reflect your style</h3>
          </div>
          <div className="banner-w3l-media-title second-2">
            <p>Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel.</p>
          </div>
          <div className="banner-w3l-media-title img-vdohny text-center p-0">
            <div className="position-relative">
              <a href="#small-dialog" className="popup-with-zoom-anim play-view text-center">
                <span className="video-play-icon">
                  <span className="fa fa-play"></span>
                </span>
              </a>
              <div id="small-dialog" className="zoom-anim-dialog mfp-hide">
                <iframe src="https://player.vimeo.com/video/18696821" frameBorder="0" allow="autoplay; fullscreen"  title="video"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w3l-3-grids py-5" id="grids-3">
        <div className="container py-md-5 py-2">
          <div className="row mb-5 pb-lg-4">
            <div className="col-lg-6 pe-lg-5">
              <div className="title-content text-left">
                <h6 className="title-subw3hny mb-1">About Us</h6>
                <h3 className="title-w3l">We provide you the quality with perfect credibility</h3>
              </div>
            </div>
            <div className="col-lg-6 mt-lg-0 mt-md-5 mt-4 ps-lg-5">
              <p className="pr-lg-5">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet elit. Non quae, fugiat nihil ad. Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="row pt-md-0 pt-5">
            <div className="col-lg-4 col-md-6 mt-md-0 mt-sm-4 px-lg-0">
              <div className="grids3-info position-relative">
                <a href="/" className="d-block zoom"><img src="assets/images/g8.jpg" alt="" className="img-fluid news-image" /></a>
                <div className="w3-grids3-info">
                  <h6><a href="/ " className="category d-block">Living</a></h6>
                  <h4><a href="">Meet the new creativity</a></h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-md-0 mt-4 px-lg-0 grids3-info2">
              <div className="grids3-info second position-relative">
                <a href="blog-single.html" className="d-block zoom"><img src="assets/images/g2.jpg" alt="" className="img-fluid news-image" /></a>
                <div className="w3-grids3-info second">
                  <h6><a href="#category" className="category d-block">Designs</a></h6>
                  <h4><a href="/">Interior that reflects you</a></h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-lg-0 mt-4 px-lg-0">
              <div className="grids3-info position-relative">
                <a href="blog-single.html" className="d-block zoom"><img src="assets/images/g4.jpg" alt="" className="img-fluid news-image" /></a>
                <div className="w3-grids3-info">
                  <h6><a href="#category" className="category d-block">Innovative</a></h6>
                  <h4><a href="/">Innovative stylish ideas</a></h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="w3l-index5 py-5" id="video">
        <div className="container py-5">
          <div className="history-info align-self text-center py-md-5">
            <div className="position-relative py-sm-5">
              <a href="#small-dialog1" className="popup-with-zoom-anim play-view text-center position-absolute">
                <span className="video-play-icon">
                  <span className="fa fa-play"></span>
                </span>
              </a>
              <div id="small-dialog1" className="zoom-anim-dialog mfp-hide">
                <iframe src="https://player.vimeo.com/video/444201456" frameBorder="0" allow="autoplay; fullscreen" title="video"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

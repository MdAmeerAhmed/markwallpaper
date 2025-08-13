import React, { useState } from 'react';
import './Wallpapers.css'; // We'll create this CSS file next
import { NavLink } from 'react-router-dom';
import Contact from '../../Component/Contact';
const Wallpaper = () => {

  return (
    <>
      <div class="inner-banner py-5">
        <section class="w3l-breadcrumb text-left py-sm-5">
          <div class="container">
            <div class="w3breadcrumb-right">
              <ul class="breadcrumbs-custom-path">
                <li><a href="index.html">Home</a></li>
                <li class="active"><span class="fas fa-angle-double-right mx-2"></span> Services</li>
                <li class="active"><span class="fas fa-angle-double-right mx-2"></span> Wallpaper</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
       <div className="sidebar-page-container">
      <div className="auto-container">
        <div className="row clearfix">
          <div className="sidebar-side col-lg-4 col-md-12 col-sm-12">
            <aside className="sidebar services-sidebar">
              <div className="sidebar-widget sidebar-blog-category ">
                <hr />
                <h4>PRODUCTS</h4>
                <hr />
                <ul className="blog-cat">
                  <li className="active">
                    <NavLink to="/wallpapers">WALLPAPERS</NavLink>
                  </li>
                  <li>
                    <NavLink to="/kidsroom">KIDSROOM</NavLink>
                  </li>
                  <li>
                    <NavLink to="/customized-wallpapers">CUSTOMIZED WALLPAPERS</NavLink>
                  </li>
                  <li>
                    <NavLink to="/pvc-walls">PVC WALLS PANEL</NavLink>
                  </li>
                  <li>
                    <NavLink to="/pvc-ceiling">PVC CEILING PANEL</NavLink>
                  </li>
                  <li>
                    <NavLink to="/3d-foam-panel">3D FOAM PANEL</NavLink>
                  </li>
                  <li>
                    <NavLink to="/pvc-flooring">PVC FLOORING</NavLink>
                  </li>
                  <li>
                    <NavLink to="/wooden-flooring">WOODEN FLOORING</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Blinds">BLINDS</NavLink>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
          <div className="content-side col-lg-8 col-md-12 col-sm-12 " style={{ textAlign: "justify" }}>
            <div className="service-detail">
              <div className="inner-box ">
                <div className="image-box" style={{ padding: "25px" }}>
                  <img src="assets/images/sr25.png" alt="Wallpaper" />
                </div>
                <h2>Imported Wallpapers Dealer & Supplier</h2>
                <div className="text" >
                  <p className="text-justify pt-3" >
                    Wallpaper dealers in Indirapuram, Bengaluru, Karnataka, Ghaziabad, Vaishali, and greater Bengaluru, Karnataka. Customized and imported wallpaper dealers in these areas.
                  </p>
                  <p className="text-justify mt-4">
                    To decorate and add beauty to your place, wallpapers are a great choice. They are cheaper and come in many varieties. House 360 Interiors is one of the best and most reputed wallpaper dealers in Bengaluru, Karnataka, offering the best quality wallpapers at reasonable prices.
                  </p>
                  <strong>Huge Range!</strong>
                  <p className="text-justify mt-4">
                    We have a wide range of wallpapers available in different textures, colors, shades, and sizes, giving clients a better vision to choose according to their preferences and space. We also guide them in the right combinations as per the decorations and interiors of their place.
                  </p>
                  <strong>Highly Experienced Team!</strong>
                  <p className="text-justify my-4">
                    The reason we are the <strong>Best Wallpaper Supplier in Bengaluru, Karnataka</strong> is that we have a team of highly skilled professionals with years of experience in offering high-quality and durable wallpapers. We ensure the quality of these wallpapers remains the best by testing the quality of each piece.
                  </p>
                  <div className="two-column row">
                    <div className="column col-lg-6 col-md-6 col-sm-12">
                      <h4>These are features on which we work on:</h4>
                      <ul className="mt-4" >
                        <li><i className="fas fa-check-double me-2 text-primary"></i>Fine polishing</li>
                        <li><i className="fas fa-check-double me-2 text-primary"></i>Stylish and colorful</li>
                        <li><i className="fas fa-check-double me-2 text-primary"></i>Looks hygienic clean</li>
                        <li><i className="fas fa-check-double me-2 text-primary"></i>Fully ventilated</li>
                      </ul>
                    </div>
                    <div className="column col-lg-6 col-md-6 col-sm-12">
                      <div className="image">
                        <img src="assets/images/sr26.png" alt="Wallpaper" />
                      </div>
                    </div>
                  </div>
                  <p className="text-justify mt-3">
                    We deal with the best in the domain who offer us the best quality materials, and we sell them at reasonable prices, which are the best in the market!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
       <section className="testimonial-section-two">
        <div className="auto-container">
          <div className="sec-title">
            <h2>Wallpaper</h2>
          </div>
        </div>
        <div className="auto-container">
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="srvce">
                <img src="assets/images/2d.jfif" alt="2D Wallpaper" />
                <h4><a href="#">2D Wallpaper</a></h4>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="srvce">
                <img src="assets/images/3d.jfif" alt="3D Wallpaper" />
                <h4><a href="#">3D Wallpaper</a></h4>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="srvce sr-n-min-hgt-530">
                <img src="assets/images/5d.jpg" alt="5D Wallpaper" />
                <h4><a href="#">5D Wallpaper</a></h4>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="srvce sr-n-min-hgt-530">
                <img src="assets/images/custom.jfif" alt="Customized Wallpaper" />
                <h4><a href="#">Customized Wallpaper</a></h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="wallppr-img ">
        <div className="container">
          <div className="row">
            {Array.from({ length: 28 }, (_, index) => (
              <div key={index} className="col-md-4 col-lg-4">
                <div className="wal-img">
                  <img src={`assets/images/w${index + 1}.png`} alt={`Wallpaper ${index + 1}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default Wallpaper;

import React  from 'react';
import './Wallpapers.css'; // We'll create this CSS file next
import { NavLink } from 'react-router-dom';
import Contact from '../../Component/Contact';
const Blinds = () => {

  return (
    <>
      <div className="inner-banner py-5">
        <section className="w3l-breadcrumb text-left py-sm-5">
          <div className="container">
            <div className="w3breadcrumb-right">
              <ul className="breadcrumbs-custom-path">
                <li><a href="index.html">Home</a></li>
                <li className="active"><span className="fas fa-angle-double-right mx-2"></span> Services</li>
                <li className="active"><span className="fas fa-angle-double-right mx-2"></span> Wallpaper</li>
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
                  <li >
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
                  <li className="active">
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
                  <img src="assets/images/sr23.jpg" alt="Wallpaper" />
                </div>
                <h2>Blinds</h2>
                <div className="text" >
                  <p className="text-justify pt-3" >
                    Blinds are the great solutions to create a sense of personal space at home and office. They are widely used in the bedrooms and conference rooms. Blinds Dealers in Bengaluru, Karnataka here have many varieties which are equally best in quality and durable in nature.
                  </p>
                   <div className="two-column row mt-4">
                    <div className="column col-lg-6 col-md-6 col-sm-12">
                      <h4>These are the advantages of blinds:</h4>
                      <ul className="mt-4" >
                        <li><i className="fas fa-check-double me-2 text-primary"></i>Attractive and affordable</li>
                        <li><i className="fas fa-check-double me-2 text-primary"></i>Versatility</li>
                        <li><i className="fas fa-check-double me-2 text-primary"></i>Easy Maintenance</li>
                        <li><i className="fas fa-check-double me-2 text-primary"></i>Simple to replace</li>
                        <li><i className="fas fa-check-double me-2 text-primary"></i>Simple operation</li>
                      </ul>
                    </div>
                    <div className="column col-lg-6 col-md-6 col-sm-12">
                      <div className="image">
                        <img src="assets/images/sr30.png" alt="Wallpaper" />
                      </div>
                    </div>
                  </div>
                  <strong>Deal With The Best!</strong>
                  <p className="text-justify mt-4">
                   These blinds are available in a wide range by Vertical Blinds Dealers in Bengaluru, Karnataka who deal with the best vendors of the domain who only offer the best materials by checking them. We first see the place and then offer the best solutions accordingly rest the clients can choose as per their preferences.
                  </p>
                  <strong>Helps In Every Step!</strong>
                  <p className="text-justify my-4">
                    Our team helps in every procedure so that the clients can have a bigger and better picture about what kind of blinds will be perfect for their place. All the products are best in quality and available at the best market rates.
                  </p>
                  <p className="text-justify mt-4">
                   The Wooden Blinds Dealers in Bengaluru, Karnataka has years of experience in this domain by offering only the quality products and by that we have set the strong name of our brand. Contact us right away and avail the best offers which you cannot get from anywhere else.
                  </p>
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
                <img src="assets/images/curtains.jpg" alt="Curtains" />
                <h4><a href="#">Curtains</a></h4>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="srvce">
                <img src="assets/images/roller.jpg" alt="Roller" />
                <h4><a href="#">Roller</a></h4>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="srvce sr-n-min-hgt-530">
                <img src="assets/images/zebra.jpg" alt="Zebra" />
                <h4><a href="#">Zebra</a></h4>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="srvce sr-n-min-hgt-530">
                <img src="assets/images/roman.gif" alt="Roman" />
                <h4><a href="#">Roman</a></h4>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="srvce sr-n-min-hgt-530">
                <img src="assets/images/venetian.jpg" alt="Venetian" />
                <h4><a href="#">Venetian</a></h4>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="srvce sr-n-min-hgt-530">
                <img src="assets/images/pvc.jpg" alt="Customized Wallpaper" />
                <h4><a href="#">PVC</a></h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="wallppr-img ">
        <div className="container">
          <div className="row">
            {Array.from({ length: 29 }, (_, index) => (
              <div key={index} className="col-md-4 col-lg-4">
                <div className="wal-img">
                  <img src={`assets/images/b${index + 1}.png`} alt={`blind ${index + 1}`} />
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

export default Blinds;

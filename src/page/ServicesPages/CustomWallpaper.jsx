import React  from 'react';
import './Wallpapers.css'; // We'll create this CSS file next
import { NavLink } from 'react-router-dom';
import Contact from '../../Component/Contact';
const CustomWallpaper = () => {

  return (
    <>
      <div className="inner-banner py-5">
        <section className="w3l-breadcrumb text-left py-sm-5">
          <div className="container">
            <div className="w3breadcrumb-right">
              <ul className="breadcrumbs-custom-path">
                <li><a href="index.html">Home</a></li>
                <li className="active"><span className="fas fa-angle-double-right mx-2"></span> Services</li>
                <li className="active"><span className="fas fa-angle-double-right mx-2"></span> Customized Wallpapers</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
       <div className="sidebar-page-container m-md-3">
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
                                      <NavLink to="/Blinds">BLINDS</NavLink>
                                    </li>
                                    <li className="active">
                                       <NavLink to="/customized-wallpapers">CUSTOMIZED WALLPAPERS</NavLink>
                                     </li>
                                    <li>
                                      <NavLink to="/modular-kitchens">MODULAR KITCHENS</NavLink>
                                    </li>
                                    <li>
                                      <NavLink to="/wardrobe">WARDROBE</NavLink>
                                    </li>
                </ul>
              </div>
            </aside>
          </div>
          <div className="content-side col-lg-8 col-md-12 col-sm-12 " style={{ textAlign: "justify" }}>
            <div className="service-detail">
              <div className="inner-box ">
                <div className="image-box" style={{ padding: "25px" }}>
  <img 
    src="assets/images/wall.jpeg" 
    alt="Wallpaper" 
    style={{ 
      width: "100%", 
      height: "auto", 
      maxWidth: "100%", 
      display: "block",
      objectFit: "cover"
    }} 
  />
</div>

                <h2>Customized Wallpapers Dealer & Supplier</h2>
                <div className="text" >
                  <p className="text-justify pt-3" >
                   Customized wallpaper dealers in Hyderabad, Secunderabad, Ghaziabad, Vaishali, and Greater Hyderabad. Mark Wallpaper is one of the leading suppliers offering unique, tailor-made wallpaper solutions to suit every space and style.
                  </p>
                  <strong>Transform Your Walls!</strong>
                  <p className="text-justify mt-4">
                   Customized wallpapers are a perfect choice to decorate and add beauty to your place. They are affordable, durable, and available in a wide variety of designs, patterns, and finishes. Mark Wallpaper ensures you get wallpapers that reflect your personality and bring a new life to your interiors.  </p>
                  <strong>Huge Range of Designs!</strong>
                  <p className="text-justify mt-4">
                    We provide a wide selection of customized wallpapers in different themes, textures, and colors. Whether you want something minimal, modern, or artistic, we help you choose the right design to match your interiors. Our team also guides you with perfect combinations that enhance the look of your home or office.</p>
                  <strong>Highly Experienced Team!</strong>
                  <p className="text-justify my-4">
                    The reason we are the best customized wallpaper supplier in Hyderabad and Secunderabad is that we have a team of highly skilled professionals with years of expertise. Every wallpaper is checked for quality, ensuring you get only the finest and most durable customized designs.</p>
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
                        <img src="assets/images/wall-1.jpg" alt="Wallpaper" />
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
                <img src="assets/images/wall-2.jpg" alt="2D Wallpaper" />
                <h4><a href="/">2D Wallpaper</a></h4>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="srvce">
                <img src="assets/images/wall-3.jpg" alt="3D Wallpaper" />
                <h4><a href="/">3D Wallpaper</a></h4>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="srvce sr-n-min-hgt-530">
                <img src="assets/images/wall-4.jpg" alt="5D Wallpaper" />
                <h4><a href="/">5D Wallpaper</a></h4>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="srvce sr-n-min-hgt-530">
                <img src="assets/images/wall-5.jpg" alt="Customized Wallpaper" />
                <h4><a href="/">Customized Wallpaper</a></h4>
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

export default CustomWallpaper;

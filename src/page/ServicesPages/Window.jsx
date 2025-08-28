import React  from 'react';
import './Wallpapers.css'; // We'll create this CSS file next
import { NavLink } from 'react-router-dom';
import Contact from '../../Component/Contact';
const Window = () => {

  return (
    <>
      <div className="inner-banner py-5">
        <section className="w3l-breadcrumb text-left py-sm-5">
          <div className="container">
            <div className="w3breadcrumb-right">
              <ul className="breadcrumbs-custom-path">
                <li><a href="index.html">Home</a></li>
                <li className="active"><span className="fas fa-angle-double-right mx-2"></span> Services</li>
                <li className="active"><span className="fas fa-angle-double-right mx-2"></span>Aluminum Windows & Kitchen Cabinets</li>
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
                  <li >
                                      <NavLink to="/kidsroom">KIDSROOM</NavLink>
                                    </li>
                                    <li>
                                      <NavLink to="/Blinds">BLINDS</NavLink>
                                    </li>
                                    <li>
                                       <NavLink to="/customized-wallpapers">CUSTOMIZED WALLPAPERS</NavLink>
                                     </li>
                                    <li>
                                      <NavLink to="/modular-kitchens">MODULAR KITCHENS</NavLink>
                                    </li>
                                    <li>
                                      <NavLink to="/wardrobe">WARDROBE</NavLink>
                                    </li>
                                    <li className="active">
                                                      <NavLink to="/windows">Aluminum Windows & Kitchen Cabinets</NavLink>
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
    src="assets/images/glass.jpg" 
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

                <h2>Aluminum Windows & Kitchen Cabinets Dealer & Supplier</h2>
                <div className="text" >
                  <p className="text-justify pt-3" >
                    Aluminum windows and kitchen cabinets play a vital role in enhancing both the beauty and functionality of your home. At Mark Interiors, we specialize in high-quality aluminum windows and modern kitchen cabinets in Secunderabad, Hyderabad, and surrounding areas. We provide durable, stylish, and customized solutions that blend strength with elegance. </p>
                  <p className="text-justify mt-4">
                  We offer a wide range of aluminum windows and kitchen cabinets with sleek designs, smooth finishes, and multiple color options to match your interiors. Whether you need modern kitchen storage solutions or durable windows with a premium look, we help you find the perfect fit for your home. Our team also guides you in choosing the right styles and combinations to complement your interiors.</p>
                  <strong>Huge Range for Your Home!</strong>
                  <p className="text-justify mt-4">
                   We have a wide variety of aluminum windows and kitchen cabinet designs available in different sizes, textures, and finishes, giving clients the flexibility to choose as per their preferences and space. We also provide expert advice on the best combinations to elevate the beauty and utility of your home.  </p>
                  <strong>Highly Experienced Team!</strong>
                  <p className="text-justify my-4">
                  What makes us the best aluminum window and kitchen cabinet supplier in Secunderabad, Hyderabad is our team of skilled professionals with years of expertise. We focus on delivering premium, long-lasting, and low-maintenance solutions. Each product is tested for durability and quality, ensuring strength, elegance, and functionality for every home.  </p>
                  <div className="two-column row">
                    <div className="column col-lg-6 col-md-6 col-sm-12">
                      <h4>These are features on which we work on:</h4>
                      <ul className="mt-4" >
                        <li><i className="fas fa-check-double me-2 text-primary"></i>Durable & Long-Lasting</li>
                         <li><i className="fas fa-check-double me-2 text-primary"></i>Scratch & Stain Resistant</li>
                        <li><i className="fas fa-check-double me-2 text-primary"></i>Fine polishing</li>
                        <li><i className="fas fa-check-double me-2 text-primary"></i>Stylish and colorful</li>
                        <li><i className="fas fa-check-double me-2 text-primary"></i>Looks hygienic clean</li>
                        <li><i className="fas fa-check-double me-2 text-primary"></i>Fully ventilated</li>
                        <li><i className="fas fa-check-double me-2 text-primary"></i>Modern & Trendy Style</li>
                        <li><i className="fas fa-check-double me-2 text-primary"></i>Eco-Friendly Options</li>
                        <li><i className="fas fa-check-double me-2 text-primary"></i>Child-Friendly & Safe</li>
                        <li><i className="fas fa-check-double me-2 text-primary"></i>Affordable & Value for Money</li>
                      </ul>
                    </div>
                    <div className="column col-lg-6 col-md-6 col-sm-12">
                      <div className="image">
                        <img src="assets/images/glaas.jpg" alt="Wallpaper" />
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
            <h2>Aluminum Windows & Kitchen Cabinets</h2>
          </div>
        </div>
        <div className="auto-container">
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="srvce">
                <img src="assets/images/gla-1.jpg" alt="2D Wallpaper" />
                
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="srvce">
                <img src="assets/images/gla-2.jpg" alt="3D Wallpaper" />
                
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="srvce sr-n-min-hgt-530">
                <img src="assets/images/gla-3.jpg" alt="5D Wallpaper" />
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="srvce sr-n-min-hgt-530">
                <img src="assets/images/eimg-31.jpeg" alt="Customized Wallpaper" />
                
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="wallppr-img ">
        <div className="container">
          <div className="row">
  {Array.from({ length: 10 }, (_, index) => (
    <div key={index} className="col-md-4 col-lg-4">
      <div className="wal-img">
        <img
          src={`assets/images/eimg-${30 + index}.jpeg`}
          alt={`Wallpaper ${31 + index + 1}`}
        />
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

export default Window;

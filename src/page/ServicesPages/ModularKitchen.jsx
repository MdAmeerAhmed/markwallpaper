import React  from 'react';
import './Wallpapers.css'; // We'll create this CSS file next
import { NavLink } from 'react-router-dom';
import Contact from '../../Component/Contact';
const ModularKitchen = () => {

  return (
    <>
      <div className="inner-banner py-5">
        <section className="w3l-breadcrumb text-left py-sm-5">
          <div className="container">
            <div className="w3breadcrumb-right">
              <ul className="breadcrumbs-custom-path">
                <li><a href="index.html">Home</a></li>
                <li className="active"><span className="fas fa-angle-double-right mx-2"></span> Services</li>
                <li className="active"><span className="fas fa-angle-double-right mx-2"></span> Modular Kitchens</li>
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
                  <li  >
                    <NavLink to="/wallpapers">WALLPAPERS</NavLink>
                  </li>
                  <li>
                      <NavLink to="/kidsroom">KIDSROOM</NavLink>
                       </li>
                                    <li>
                                      <NavLink to="/Blinds">BLINDS</NavLink>
                                    </li>
                                    <li>
                                       <NavLink to="/customized-wallpapers">CUSTOMIZED WALLPAPERS</NavLink>
                                     </li>
                                    <li className="active">
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
    src="assets/images/k1.jpg" 
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
                <h2>Mark Wallpaper – Premium Modular Kitchen Dealer & Supplier</h2>
                <div className="text" >
                  <p className="text-justify pt-3" >
                   Mark Wallpaper is one of the most trusted names in Hyderabad and Secunderabad for delivering elegant, functional, and customized modular kitchens. We specialize in designing and installing modern kitchen solutions that combine style, comfort, and durability.
                  </p>
                  <p className="text-justify mt-4">
                    We offer a huge variety of modular kitchen designs with different layouts, colors, and finishes to suit every home. From compact spaces to luxury kitchens, our solutions are tailored to meet your needs while ensuring maximum storage and functionality. Our expert team also guides clients in selecting the right combinations of cabinets, countertops, and finishes that perfectly match their interiors.
                  </p>
                  <strong>Wide Range of Modular Kitchens!</strong>
                  <p className="text-justify mt-4">
                    At Mark Wallpaper, we design and deliver premium modular kitchens in Hyderabad & Secunderabad. Our modern, functional, and stylish solutions bring comfort, durability, and elegance to your home.
                  </p>
                  <strong>Highly Experienced Team!</strong>
                  <p className="text-justify my-4">
                    At Mark Wallpaper, we take pride in having a highly experienced team of professionals who specialize in creating durable and stylish modular kitchens. Every material used is carefully tested for quality, ensuring your kitchen not only looks great but also lasts for years.
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
                        <img src="assets/images/kict.jpg" alt="Wallpaper" />
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
            <h2>Modular Kitchen</h2>
          </div>
        </div>
        <div className="auto-container">
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="srvce">
                <img src="assets/images/k6.jpg" alt="2D Wallpaper" />
                <h4><a href="/">Acrylic Kitchen</a></h4>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="srvce">
                <img src="assets/images/k5.jpg" alt="2D Wallpaper" />
                <h4><a href="/">Morden Kitchen</a></h4>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="srvce">
                <img src="assets/images/k3.jpg" alt="3D Wallpaper" />
                <h4><a href="/">Laminate Kitchen</a></h4>
              </div>
            </div>
             
          </div>
        </div>
      </section>
      <div className="wallppr-img ">
        <div className="container">
          <div className="row">
            {Array.from({ length: 13 }, (_, index) => (
              <div key={index} className="col-md-4 col-lg-4">
                <div className="wal-img">
                  <img src={`assets/images/kic-${index + 1}.jpg`} alt={`Wallpaper ${index + 1}`} />
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

export default ModularKitchen;

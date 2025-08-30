import { useEffect } from "react";
import Contact from './Contact.jsx';
import WallpaperCostCalculator from './WallpaperCostCalculator';
import { NavLink } from 'react-router-dom';
import VideoPopup from "./VideoPopup.jsx";


function Home() {
    
  useEffect(() => {
    if (window.$) {
      // Initialize the first carousel
      window.$(".owl-one").owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 1000,
        responsive: {
          0: { items: 1 },
          480: { items: 1 },
          667: { items: 1 },
          1000: { items: 1 }
        }
      });

      // Initialize the second carousel
      window.$("#owl-demo1").owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
            nav: false
          },
          768: {
            items: 2,
            nav: false
          },
          1000: {
            items: 3,
            nav: false,
            loop: false
          }
        }
      });

      // Initialize the third carousel
      window.$("#owl-demo2").owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
            nav: false
          },
          768: {
            items: 2,
            nav: false
          },
          1000: {
            items: 2,
            nav: false,
            loop: false
          }
        }
      });
    }
  }, []);
  return (
    <>
     {/* <BannerCarousel/>  */}
       {/* <!--/Header--> */}
    
    {/* <!--//Header-->
    <!--/Banner-Start-->
    <!-- main-slider --> */}
    <section className="w3l-main-slider banner-slider position-relative" id="home">
        <div className="owl-one owl-carousel owl-theme">
            <div className="item">
                <div className="slider-info banner-view banner-top1">
                    <div className="container">
                        <div className="banner-info header-hero-19 position-relative p-4">
                            {/* Transparent background overlay */}
                    <div className="bg-overlay"></div>
                            <h5>TRANSFORM YOUR SPACES WITH ELEGANCE</h5>
                            <h3 className="title-hero-19 text-info">Premium Wallpaper Installation In Hyderabad</h3>
                            <h5>Expert wallpaper suppliers in Hyderabad offering professional installation services with extensive design collection for homes and offices.</h5>
                            <a href="about.html" className="btn btn-style btn-banner mt-sm-5 mt-4">Read More </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="slider-info banner-view banner-top2">
                    <div className="container">
                        <div className="banner-info header-hero-19 position-relative p-4">
                            {/* Transparent background overlay */}
                    <div className="bg-overlay"></div>
                            <h5 className="text-uppercase">CRAFTING STUNNING WALL STORIES</h5>
                            <h3 className="title-hero-19 text-info">Designer Wallpaper Solutions</h3>
                            <h5>Professional wallpaper for home wall in Hyderabad, bringing international designs and expert installation to transform your spaces.</h5>
                            <a href="about.html" className="btn btn-style btn-banner mt-sm-5 mt-4">Read More </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="slider-info banner-view banner-top3">
                  <div className="container">
                <div className="banner-info header-hero-19 p-4 position-relative">
                    {/* Transparent background overlay */}
                    <div className="bg-overlay"></div>
                    <h5 className="text-uppercase">Transforming Walls, Transforming Spaces</h5>
                    <h3 className="title-hero-19 text-info">Complete Wallpaper Solutions</h3>
                    <h5>
                    From concept to completion — Hyderabad’s trusted wallpaper experts delivering bespoke designs, premium materials, and flawless installation for homes and offices.
                    </h5>
                    <a href="about.html" className="btn btn-style btn-banner mt-sm-5 mt-4">
                    Discover More
                    </a>
                </div>
                </div>
                </div>
            </div>
            <div className="item">
                <div className="slider-info banner-view banner-top4">
                    <div className="container">
                        <div className="banner-info header-hero-19 p-4 position-relative">
                            {/* Transparent background overlay */}
                    <div className="bg-overlay"></div>
                            <h5 className="text-uppercase">Elavate Every Wall With Style</h5>
                            <h3 className="title-hero-19 text-info">Bespoke Wallpaper Creations</h3>
                            <h5>Hyderabad’s trusted wallpaper experts delivering tailored designs, superior quality, and flawless installation for homes and offices.</h5>
                            <a href="about.html" className="btn btn-style btn-banner mt-sm-5 mt-4">Read More </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    </section>
    {/* <!-- //main-slider -->
    <!--/bottom-3-grids--> */}
    <div className="w3l-3-grids py-5" id="grids-3">
        <div className="container py-md-5 py-2">
            {/* <!--/row-1--> */}
            <div className="row mb-5 pb-lg-4">
                <div className="col-lg-6 pe-lg-5">
                    <div className="title-content text-left">
                        <h6 className="title-subw3hny mb-1">About Us</h6>
                        <h3 className="title-w3l">Quality services in Hyderabad with perfect credibility. </h3>
                    </div>
                </div>
                <div className="col-lg-6 mt-lg-0 mt-md-5 mt-4 ps-lg-5">

                    <p className="pr-lg-5">We deliver premium-quality wallpapers with unmatched credibility, blending elegance, durability, and creativity to ensure every design transforms your walls into timeless masterpieces. Our commitment to excellence guarantees that your space not only looks stunning but also reflects your unique personality and style.</p>
                </div>
            </div>
            {/* <!--//row-1--> */}
            <div className="row pt-md-0 pt-5">
                <div className="col-lg-4 col-md-6 mt-md-0 mt-sm-4 px-lg-0">
                    <div className="grids3-info position-relative">
                        <a href="/" className="d-block zoom"><img src="assets/images/g8.jpg" alt="" className="img-fluid news-image"/></a>
                        <div className="w3-grids3-info">
                            <h6><a href="#category" className="category d-block">Living</a></h6>
                            <h4><a href="/">Meet the new wallpaper artistry</a></h4>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-md-0 mt-4 px-lg-0 grids3-info2">
                    <div className="grids3-info second position-relative">
                        <a href="blog-single.html" className="d-block zoom"><img src="assets/images/g2.jpg" alt="" className="img-fluid news-image"/></a>
                        <div className="w3-grids3-info second">
                            <h6><a href="#category" className="category d-block">Designs</a></h6>
                            <h4><a href="/">Wallpapers that reflect your style</a></h4>

                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-lg-0 mt-4 px-lg-0">
                    <div className="grids3-info position-relative">
                        <a href="blog-single.html" className="d-block zoom"><img src="assets/images/g4.jpg" alt="" className="img-fluid news-image"/></a>
                        <div className="w3-grids3-info">
                            <h6><a href="/" className="category d-block">Innovative</a></h6>
                            <h4><a href="/">Innovative wallpaper ideas for every space</a></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section className="w3l-passion-mid-sec ">
        <div className="container py-md-5 py-3">
            <div className="container">
                <div className="row w3l-passion-mid-grids">
                    <div className="col-lg-6 passion-grid-item-info pe-lg-5 mb-lg-0 mb-5">

                        <div className="content-8-img"><img src="assets/images/ab2.jpg" className="img-fluid radius-image" alt=""/></div>
                    </div>
                   <div className="col-lg-6 w3hny-passion-item w3l-content-8" >
    <h6 className="title-subw3hny mb-1">ELEVATE YOUR SPACES WITH DESIGNER WALLPAPERS</h6>
    <h3 className="title-w3l mb-3">Premium Wallpaper Solutions in Hyderabad</h3>
    <p className="mb-5 " style={{ textAlign: "justify" }}>
        As premier wallpaper suppliers in Hyderabad, we bring you an extensive collection of international and designer wallpapers paired with expert installation services. Our commitment to quality and design excellence has made us the trusted choice for wallpaper solutions.
    </p>
    <ul className="w3-list-icons-grids d-flex flex-column">
        <li className="icon-list-item-gd d-flex  ">
            <div className="icon-gd me-3"><i className="fas fa-check-double"></i></div>
            <div className="icon-inf d-flex">
                 
                <p className="text-para" style={{ textAlign: "justify" }}>Design Excellence Professional wallpaper designers in Hyderabad offering exclusive collections suitable for every style and space requirement.</p>
            </div>
        </li>
        <li className="icon-list-item-gd d-flex">
            <div className="icon-gd me-3"><i className="fas fa-check-double"></i></div>
            <div className="icon-inf d-flex">
                 
                <p className="text-para"style={{ textAlign: "justify" }}>Expert Installation Specialized wallpaper installation Hyderabad team ensuring flawless application and lasting finish.</p>
            </div>
        </li>
        <li className="icon-list-item-gd d-flex">
            <div className="icon-gd me-3"><i className="fas fa-check-double"></i></div>
            <div className="icon-inf d-flex">
                <p className="text-para"style={{ textAlign: "justify" }}>Premium Materials Curated selection of wallpaper for home wall in Hyderabad featuring quality materials and innovative designs.</p>
            </div>
        </li>
        <li className="icon-list-item-gd d-flex">
            <div className="icon-gd me-3"><i className="fas fa-check-double"></i></div>
            <div className="icon-inf d-flex">     
                <p className="text-para"style={{ textAlign: "justify" }}>Custom Designs Tailor-made wallpaper designs to match your personal taste, home décor, and specific wall dimensions.</p>
            </div>
        </li>
    </ul>
    <div className="w3banner-content-btns">
        <a href="/contact" className="btn btn-style btn-primary mt-lg-5 mt-4 me-2">SCHEDULE A CONSULTATION</a>
    </div>
</div>
                </div>

            </div>
        </div>
    </section>
 
        <div className="container py-md-5 py-2">
            {/* <!--/row-1--> */}
            <div className="row mb-5 pb-lg-4">
                <div className="col-lg-6 pe-lg-5">
                    <div className="title-content text-left">
                        <h3 className="title-w3l">Wallpaper and Wallpaper Installation Services in Hyderabad. </h3>
                    </div>
                </div>
                <div className="col-lg-6 mt-lg-0 mt-md-5 mt-4 ps-lg-5">

                    <p className="pr-lg-5">Book online Wallpaper and Wallpaper Installation Services in Hyderabad, Mark Wallpaper is a one of the best wallpaper services Near you in Hyderabad. we have new and trendy all types of wallpaper collection and best quality wallpapers available.</p>
                </div>
            </div>
            {/* <!--//row-1--> */}
            
        </div>
   
    {/* <!--//bottom-3-grids-->

       <!-- /home-page-video-popup--> */}
       <VideoPopup />
    
    {/* <!-- //home-page-video-popup--> */}
            <WallpaperCostCalculator />
    {/* <!--/w3-grids--> */}
    <section className="w3l-passion-mid-sec py-5">
        <div className="container py-md-5 py-3">
            <div className="container">
                <div className="row w3l-passion-mid-grids">
                    <div className="col-lg-6 passion-grid-item-info pe-lg-5 mb-lg-0 mb-5">

                        <div className="content-8-img"><img src="assets/images/wd4.jpg" className="img-fluid radius-image" alt="Offer"/></div>
                    </div>
                    <div className="col-lg-6 w3hny-passion-item w3l-content-8">
                        <h6 className="title-subw3hny mb-1">What We Offer</h6>
                        <h3 className="title-w3l mb-3">The Luxury World of Wallpaper Designs.</h3>
                        <p className="mb-5">Discover a stunning collection of premium wallpapers that bring elegance and character to every space. From modern patterns to classic textures, our designs transform ordinary walls into extraordinary works of art.</p>
                        <ul className="w3-list-icons-grids">
                            <li className="icon-list-item-gd">
                                <div className="icon-gd"><i aria-hidden="true" className="fas fa-hotel"></i>
                                </div>
                                <div className="icon-inf">
                                    <h5>Residential</h5>
                                    <p className="text-para">Stylish wallpapers to beautify your home. </p>
                                </div>
                            </li>
                            <li className="icon-list-item-gd">
                                <div className="icon-gd"><i aria-hidden="true" className="fas fa-door-open"></i>
                                </div>
                                <div className="icon-inf">
                                    <h5>Commercial</h5>
                                    <p className="text-para">Elegant designs for showrooms and retail spaces. </p>
                                </div>
                            </li>
                            <li className="icon-list-item-gd">
                                <div className="icon-gd"><i aria-hidden="true" className="fas fa-industry"></i>
                                </div>
                                <div className="icon-inf">
                                    <h5>Industries</h5>
                                    <p className="text-para">Durable wallpapers with a creative touch. </p>
                                </div>
                            </li>
                            <li className="icon-list-item-gd">
                                <div className="icon-gd"><i aria-hidden="true" className="fas fa-building"></i>
                                </div>
                                <div className="icon-inf">
                                    <h5>Office</h5>
                                    <p className="text-para">Professional designs that inspire productivity. </p>
                                </div>
                            </li>
                        </ul>
                        <div className="w3banner-content-btns">
                            <a href="/about-us" className="btn btn-style btn-primary mt-lg-5 mt-4 me-2">Read More </a>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <section className="w3l-passion-mid-sec py-5">
        <div className="container py-md-5 py-3">
            <div className="container">
                <div className="row w3l-passion-mid-grids">
                    
                    <div className="col-lg-6 w3hny-passion-item w3l-content-8">
                        <h6 className="title-subw3hny mb-1">Mordern Modular Kitchen</h6>
                        <h3 className="title-w3l mb-3">The Luxury World of Modular Kitchen Designs.</h3>
                        <p className="mb-5">At Mark Wallpaper, we specialize in creating modular kitchens that perfectly balance style, comfort, and functionality. Every design is thoughtfully planned to make the most of your space, ensuring convenience and elegance go hand in hand.</p>
                        <p>No two homes are the same — and neither should your kitchen be. Our customized modular kitchens are designed to fit your lifestyle, cooking needs, and personal taste. Whether you prefer a sleek modern look or a warm traditional style, we’ve got you covered.</p>
                         
                        <div className="w3banner-content-btns">
                            <a href="/modular-kitchens " className="btn btn-style btn-primary mt-lg-5 mt-4 me-2">Read More </a>

                        </div>
                    </div>
                    <div className="col-lg-6 passion-grid-item-info pe-lg-5 mb-lg-0 mb-5">

                        <div className="content-8-img"><img src="assets/images/kitchen-design.jpg" className="img-fluid radius-image" alt="Offer"/></div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    {/* <!--//w3-grids-->
    <!--/Gallery-Section--> */}
    <section className="w3l-gallery" id="gallery">
        <div className="destionation-innf py-5">
            <div className="container py-lg-5 py-md-4 py-2 HomePageGallery">
                <div className="title-content text-center">
                    <h6 className="title-subw3hny text-center">Gallery</h6>
                    <h3 className="title-w3l mb-5 text-center">Latest Projects</h3>
                </div>
                {/* <!--/grids-grids--> */}
               <div className="wallppr-img ">
        <div className="container">
          <div className="row">
            {Array.from({ length: 9 }, (_, index) => (
              <div key={index} className="col-md-4 col-lg-4">
                <div className="wal-img">
                  <img src={`assets/images/eimg-${index + 1}.jpeg`} alt={`blind ${index + 1}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
                {/* <!--//rids-grids--> */}
                <div className="w3banner-content-btns " style={{ textAlign: 'center' }}>
                            <a href="/gallery " className="btn btn-style btn-primary mt-lg-5 mt-4 me-2"> More </a>

                        </div>
            </div>
        </div>
    </section>
    {/* <!--//Gallery-Section-->
    <!--/w3l-midslider--> */}
    <section className="w3l-midslider py-5" id="midslider">
        {/* <!-- /grids --> */}
        <div className="container py-md-5">
            <div className="row">
                <div className="col-lg-5 title-content text-left pe-lg-5 mb-lg-0 mb-5">
                    <h6 className="title-subw3hny mb-1">Stats</h6>
                    <h3 className="title-w3l mb-3">Modern Living Through Wallpaper Design</h3>
                    <p className="mb-5">We take pride in delivering creative wallpaper solutions that enhance spaces and redefine interiors with elegance and durability.</p>
                    <div className="row w3l-stats-section stats-con mt-4" id="stats">
                        <div className="col-6 stats_info counter_grid">
                            <p className="counter">70+ </p>
                            <h3>PRojects</h3>
                        </div>
                        <div className="col-6 stats_info counter_grid">
                            <p className="counter">95+</p>
                            <h3>Happy Clients </h3>
                        </div>

                    </div>
                </div>
                {/* <!-- /grids --> */}
                <div className="col-lg-7 testimonial-width midslider-width ps-lg-3">
                    <div id="owl-demo2" className="owl-three owl-carousel owl-theme">
                        <div className="item">
                            <div className="mid-slider-content">
                                <img src="assets/images/ab1.jpg" className="img-fluid radius-image" alt=""/>
                            </div>
                        </div>
                        <div className="item">
                            <div className="mid-slider-content">
                                <img src="assets/images/ab2.jpg" className="img-fluid radius-image" alt=""/>
                            </div>
                        </div>
                        <div className="item">
                            <div className="mid-slider-content">
                                <img src="assets/images/ab3.jpg" className="img-fluid radius-image" alt=""/>
                            </div>
                        </div>
                        <div className="item">
                            <div className="mid-slider-content">
                                <img src="assets/images/ab4.jpg" className="img-fluid radius-image" alt=""/>
                            </div>
                        </div>
                        <div className="item">
                            <div className="mid-slider-content">
                                <img src="assets/images/ab5.jpg" className="img-fluid radius-image" alt=""/>
                            </div>
                        </div>
                        <div className="item">
                            <div className="mid-slider-content">
                                <img src="assets/images/ab6.jpg" className="img-fluid radius-image" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- /grids --> */}
        </div>
    </section>
    {/* <!--//w3l-midslider-->

    <!-- /blog-grids --> */}
    <section className="w3l-text-11 py-5 pt-0">
        <div className="text11 py-md-5 py-2 pt-0">
            <div className="container">
                <div className="title-content text-center">
                    <h6 className="title-subw3hny text-center">Project</h6>
                    <h3 className="title-w3l mb-3 text-center">Latest Pojects</h3>
                </div>
                <div className="row text11-content">
                    <div className="col-lg-4 item mt-5">
                        <div className="card">
                            <div className="card-header p-0 position-relative border-0">
                                <a href="blog-single.html">
                                    <img className="card-img-bottom d-block radius-image" src="assets/images/g6.jpg" alt="Decorative card illustration"/>
                                </a>
                            </div>
                            <div className="card-body p-0 blog-details">
                                <h6 className="mt-4">July 12, 2021</h6>
                                <a href="#admin" className="admin">- by Admin </a>
                                <br/>
                                <a href="blog-single.html" className="blog-desc blog-desc-2">Modern Modular Kitchen Installation Completed </a>
                                <p>At Mark Wallpaper, we successfully delivered a stylish and fully customized modular kitchen project for one of our clients.  </p>
                                <a href="blog-single.html" className="btn btn-style btn-primary mt-lg-4 mt-4">Read More </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 item mt-5">
                        <div className="card">
                            <div className="card-header p-0 position-relative border-0">
                                <a href="blog-single.html">
                                    <img className="card-img-bottom d-block radius-image" src="assets/images/g7.jpg" alt="Card cap"/>
                                </a>
                            </div>
                            <div className="card-body p-0 blog-details">
                                <h6 className="mt-4">July 22, 2021</h6>
                                <a href="#admin" className="admin">- by Admin </a>
                                <br/>
                                <a href="blog-single.html" className="blog-desc blog-desc-2">Kids Room Project </a>
                                <p>Our team completed a vibrant kids’ room wallpaper installation in Hyderabad. With colorful and creative cartoon-themed designs, room  inspires joy, fun, and for little ones.</p>
                                <a href="blog-single.html" className="btn btn-style btn-primary mt-lg-4 mt-4">Read More </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 item mt-5">
                        <div className="card">
                            <div className="card-header p-0 position-relative border-0">
                                <a href="blog-single.html">
                                    <img className="card-img-bottom d-block radius-image" src="assets/images/g8.jpg" alt="Card cap"/>
                                </a>
                            </div>
                            <div className="card-body p-0 blog-details">
                                <h6 className="mt-4">July 25, 2021</h6>
                                <a href="#admin" className="admin">- by Admin </a>
                                <br/>
                                <a href="blog-single.html" className="blog-desc blog-desc-2">Customized Wallpaper Installation Completed </a>
                                <p>At Mark Wallpaper, we recently completed a premium wallpaper project, transforming a living room with elegant, high-quality designs.</p>
                                <a href="blog-single.html" className="btn btn-style btn-primary mt-lg-4 mt-4">Read More </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- /grids --> */}
            </div>

        </div>
    </section>
    {/* <!-- //blog-grids -->
    <!--/w3l-project--> */}
    <section className="w3l-join-main py-5">
        <div className="container py-md-3">
            <div className="w3l-project-in">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="bottom-info">
                            <div className="header-section pe-lg-5">
                                <h5 className="title-subw3hny mb-3">Invite Your Friends</h5>
                                <h3 className="title-w3l mb-3">Refer and Get Free Services
                                </h3>
                                <p>Share the experience with your friends! Invite them to choose our premium wallpapers, and enjoy exclusive free services as a reward for every successful referral.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 align-self mt-lg-0 mt-sm-5 mt-4">
                        <div className="w3l-buttons d-sm-flex justify-content-end ">
                            <NavLink to="/services" className="btn btn-style btn-primary">Services</NavLink>
                            <NavLink to="/contact" className="btn btn-style transparant-btn ms-sm-2">Get Started Now</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!--//w3l-project-->
    <!--/testimonials--> */}
    <section className="w3l-testimonials" id="testimonials">
        {/* <!-- /grids --> */}
        <div className="cusrtomer-layout py-5">
            <div className="container py-lg-4 py-md-3 py-2 pb-lg-0">

                <div className="title-content text-center">
                    <h6 className="title-subw3hny">Testimonials</h6>
                    <h3 className="title-w3l mb-5">What some of our happy clients<br/> say about us</h3>
                </div>
                {/* <!-- /grids --> */}
                <div className="testimonial-width">
                    <div id="owl-demo1" className="owl-two owl-carousel owl-theme">
                        <div className="item">
                            <div className="testimonial-content">
                                <div className="testimonial">
                                    <div className="testimonial-gds-1">
                                        <div className="test-img">
                                        </div>
                                        <div className="testi-des">
                                            <div className="peopl align-self">
                                                <h3>Rohit Sharma</h3>
                                                <p className="indentity">Hyderabad</p>
                                            </div>
                                        </div>
                                    </div>


                                    <p className="quote-info"> <i className="fas fa-quote-left me-2"></i> I was amazed by the wide variety of designs. The wallpaper I chose completely changed the look of my living room. Excellent quality and service!.<i className="fas fa-quote-right ms-2"></i></p>



                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="testimonial-content">
                                <div className="testimonial">
                                    <div className="testimonial-gds-1">
                                        <div className="test-img"> 
                                        </div>
                                        <div className="testi-des">
                                            <div className="peopl align-self">
                                                <h3>Sana Ali</h3>
                                                <p className="indentity">Hyderabad</p>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="quote-info"> <i className="fas fa-quote-left me-2"></i>Beautiful collection! The wallpapers are elegant and easy to install. My office looks so much more professional now.<i className="fas fa-quote-right ms-2"></i></p>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="testimonial-content">
                                <div className="testimonial">
                                    <div className="testimonial-gds-1">
                                        <div className="test-img"> 
                                        </div>
                                        <div className="testi-des">
                                            <div className="peopl align-self">
                                                <h3>Ananya Gupta</h3>
                                                <p className="indentity">Hyderabad</p>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="quote-info"> <i className="fas fa-quote-left me-2"></i> From modern to classic designs, they have it all. I loved the smooth finish and vibrant colors. Truly worth it!.<i className="fas fa-quote-right ms-2"></i></p>

                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="testimonial-content">
                                <div className="testimonial">
                                    <div className="testimonial-gds-1">
                                        <div className="test-img"> 
                                        </div>
                                        <div className="testi-des">
                                            <div className="peopl align-self">
                                                <h3>Cuthbert Brain</h3>
                                                <p className="indentity">Hyderabad</p>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="quote-info"> <i className="fas fa-quote-left me-2"></i> Great experience! The team helped me pick the right wallpaper for my bedroom, and it feels so cozy now. Highly recommended.<i className="fas fa-quote-right ms-2"></i></p>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="testimonial-content">
                                <div className="testimonial">
                                    <div className="testimonial-gds-1">
                                        <div className="test-img"> 
                                        </div>
                                        <div className="testi-des">
                                            <div className="peopl align-self">
                                                <h3>Vikram Patel</h3>
                                                <p className="indentity">Hyderabad</p>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="quote-info"> <i className="fas fa-quote-left me-2"></i> Premium quality wallpapers at an affordable price. The designs are unique and my guests keep complimenting them.<i className="fas fa-quote-right ms-2"></i></p>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="testimonial-content">
                                <div className="testimonial">
                                    <div className="testimonial-gds-1">
                                        <div className="test-img"> 
                                        </div>
                                        <div className="testi-des">
                                            <div className="peopl align-self">
                                                <h3>Scott Brain</h3>
                                                <p className="indentity">Hyderabad</p>
                                            </div>
                                        </div>
                                    </div>
                                    <blockquote>
                                        <i className="fas fa-quote-right"></i>
                                        <q>Superb designs, vibrant colors, and very durable quality. Installation was hassle-free too!</q>
                                    </blockquote>

                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="testimonial-content">
                                <div className="testimonial">
                                    <div className="testimonial-gds-1">
                                        <div className="test-img"> 
                                        </div>
                                        <div className="testi-des">
                                            <div className="peopl align-self">
                                                <h3>Aijaz Khan</h3>
                                                <p className="indentity">Hyderabad</p>
                                            </div>
                                        </div>
                                    </div>
                                    <blockquote>
                                        <i className="fas fa-quote-right"></i>
                                        <q>I ordered customized wallpaper, and the result was beyond my expectations. Fits perfectly with my interior.</q>
                                    </blockquote>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- /grids --> */}
        </div>
        {/* <!-- //grids --> */}
        <Contact />
    </section>
    </>
  )
}

export default Home

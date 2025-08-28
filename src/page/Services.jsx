import React from 'react'
import { NavLink } from 'react-router-dom'
import Step from '../Component/Step'
import Contact from '../Component/Contact'

function Services() {
  return (
    <>
       {/* <!--/inner-page--> */}
    <div className="inner-banner py-5">
        <section className="w3l-breadcrumb text-left py-sm-5">
            <div className="container">
                <div className="w3breadcrumb-right">
                    <ul className="breadcrumbs-custom-path">
                        <li><a href="index.html">Home</a></li>
                        <li className="active"><span className="fas fa-angle-double-right mx-2"></span> Services</li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
    {/* <!--//inner-page-->
    <!--/services--> */}
    <section className="w3l-services2" id="services">
        <div id="cwp23-block" className="py-3">
            <div className="container py-lg-5">
                <div className="row cwp23-content">
                    <div className="col-lg-6 cwp23-img">
                        <h6 className="title-subw3hny mb-1">Services Info</h6>
                        <h3 className="title-w3l mb-2">Complete Home & Interior Makeover Services</h3>

                        <p className="mt-4">At MarkWallpaper, we specialize in transforming spaces with stylish, high-quality interior solutions. From elegant wallpapers and vibrant kids’ room designs to functional window blinds and tailor-made customized wallpapers, 

                        </p>
                        <p className="mt-4">we bring creativity and personality to every corner of your home. Our modern wardrobes are designed for durability and sophistication, while our stylish modular kitchens blend smart functionality with aesthetic appeal. With a focus on quality, innovation, and customer satisfaction, MarkWallpaper is your trusted partner in creating beautiful and personalized living spaces.</p>

                    </div>
                    <div className="col-lg-6 cwp23-text mt-lg-0 mt-5 ps-lg-5">
                        <div className="imgw3l-ab w3l-news">
                            <div className="grids5-info">
                                <a href="/" className="d-block zoom"><img src="assets/images/g8.jpg" alt="" className="img-fluid radius-image"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    {/* <!--//services-->
    <!--/feature-section--> */}
    <section className="w3l-aboutblock1 grids-3-w3l py-5" id="services">
        <div className="container py-lg-5 py-md-4 py-2">
            <div className="title-content text-center mb-3">
                <h6 className="title-subw3hny mb-1">We Offer</h6>
                <h3 className="title-w3l">Our Services</h3>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 grids-feature mt-5">
                    <img src="assets/images/w2.png" alt="" className="img-fluid radius-image"/>
                    <div className="area-box mt-4">
                        <i className="fas fa-lightbulb" aria-hidden="true"></i>
                        <div className="area-box-info">
                            <h4><NavLink to="/Wallpapers" className="title-head">WALLPAPERS</NavLink></h4>
                            <p>Stylish, high-quality wallpapers to instantly refresh and personalize any space.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 grids-feature mt-5">
                    <img src="assets/images/w27.png" alt="" className="img-fluid radius-image"/>
                    <div className="area-box mt-4">
                        <i className="far fa-file-alt" aria-hidden="true"></i>
                        <div className="area-box-info">
                            <h4><a href="/kidsroom" className="title-head">KIDSROOM</a></h4>
                            <p>Fun, colorful, and safe wallpapers designed to inspire creativity in children’s rooms.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 grids-feature mt-5">
                    <img src="assets/images/blinds.jpg" alt="" className="img-fluid radius-image"/>
                    <div className="area-box mt-4">
                        <i className="fas fa-drafting-compass" aria-hidden="true"></i>
                        <div className="area-box-info">
                            <h4><NavLink to="/Blinds" className="title-head">BLINDS</NavLink></h4>
                            <p>Functional and stylish window blinds for privacy, light control, and energy efficiency.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 grids-feature mt-5">
                    <img src="assets/images/woman.jpg" alt="" className="img-fluid radius-image"/>
                    <div className="area-box mt-4">
                        <i className="fas fa-drafting-compass" aria-hidden="true"></i>
                        <div className="area-box-info">
                            <h4><a href="/customized-wallpapers" className="title-head">CUSTOMIZED WALLPAPERS</a></h4>
                            <p>Tailor-made wallpapers to match your unique style, space, and design preferences.</p>
                        </div>
                    </div>
                </div>
                 <div className="col-lg-4 col-md-6 grids-feature mt-5">
                    <img src="assets/images/wardrobe.jpg" alt="" className="img-fluid radius-image"/>
                    <div className="area-box mt-4">
                        <i className="fas fa-drafting-compass" aria-hidden="true"></i>
                        <div className="area-box-info">
                            <h4><a href="/wardrobe" className="title-head">MORDERN WARDROBE</a></h4>
                            <p>Elegant, durable morden wardrobe that bring warmth and sophistication to your home.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 grids-feature mt-5">
                    <img src="assets/images/kitchen.jpg" alt="" className="img-fluid radius-image"/>
                    <div className="area-box mt-4">
                        <i className="fas fa-drafting-compass" aria-hidden="true"></i>
                        <div className="area-box-info">
                            <h4><a href="/modular-kitchens" className="title-head">STYLISH MODULAR KITCHENS </a></h4>
                            <p>Upgrade your cooking space with smart, modular kitchen designs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!--//feature-section-->
    <!--/w3l-services3--> */}
    <Step />
    <section className="w3l-services3" id="services">
        <div className="new-block">
            <div className="container py-5">
                <div className="middle-section py-lg-5 py-4">
                    <div className="section-width">
                        <h6 className="title-subw3hny mb-1">More Info</h6>
                        <h3 className="title-w3l two mb-4">Innovative Wallpaper Designs for Every Style & Space.</h3>

                    </div>
                    <div className="link-list-menu">
                        <p className="">Transform your space with custom wallpaper designs that reflect your unique style and personality. Our expert designers work closely with you to create bespoke patterns, textures, and themes—whether for residential, commercial, or kids’ rooms. From concept to installation, we ensure high-quality materials, vibrant colors, and durable finishes. Let us bring your walls to life with creativity and precision. Contact us for a consultation or to explore our latest collections!</p>
                        <div className="w3l-two-buttons">
                            <a href="/about-us" className="btn btn-primary btn-white btn-style mt-lg-5 mt-4"> Read More </a>
                            <a href="/contact" className="btn btn-style btn-outline-light mt-lg-5 mt-4 ms-sm-3">Contact US</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!--//w3l-services3-->
    <!-- features section --> */}
    <section className="w3l-features py-5" id="work">
        <div className="container py-lg-5 py-md-4 py-2">
            <div className="title-content text-center mb-md-5 mb-4">
                <h6 className="title-subw3hny mb-1">Featured Info</h6>
                <h3 className="title-w3l mb-5">Speacial Services</h3>
            </div>
            <div className="main-cont-wthree-2 align-items-center text-center">
                <div className="row align-items-center">
                    <div className="col-md-6 mt-4">
                        <div className="grids-1 box-wrap serhny-gd">
                            <div className="icon">
                                <i className="fas fa-pencil-alt"></i>
                            </div>
                            <div className="serhny-gd-info">
                                <h4><a href="#service" className="title-head mb-3">Concept Designs</a></h4>
                                <p className="text-para">Innovative wallpaper concepts, patterns, and themes that align with your vision and space requirements. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mt-4">
                        <div className="grids-1 box-wrap serhny-gd">
                            <div className="icon">
                                <i className="far fa-images"></i>
                            </div>
                            <div className="serhny-gd-info">
                                <h4><a href="#service" className="title-head mb-3">Project Designs</a></h4>
                                <p className="text-para">End-to-end wallpaper design projects, including mood boards, color schemes, and material selection. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mt-4">
                        <div className="grids-1 box-wrap serhny-gd">
                            <div className="icon">
                                <i className="fas fa-users"></i>
                            </div>
                            <div className="serhny-gd-info">
                                <h4><a href="#service" className="title-head mb-3">Consulting</a></h4>
                                <p className="text-para">Expert advice on wallpaper trends, materials, and installation techniques to enhance your interiors. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mt-4">
                        <div className="grids-1 box-wrap serhny-gd">
                            <div className="icon">
                                <i className="fas fa-couch"></i>
                            </div>
                            <div className="serhny-gd-info">
                                <h4><a href="#service" className="title-head mb-3">
                                        Wallpaper Design Services</a></h4>
                                <p className="text-para">Custom wallpaper designs tailored to your space, style, and brand identity—from concept to final print. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Contact />
    {/* <!--//features-section --> */}
    </>
  )
}

export default Services

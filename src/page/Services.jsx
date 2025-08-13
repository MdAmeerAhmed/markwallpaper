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
        <div id="cwp23-block" className="py-5">
            <div className="container py-lg-5">
                <div className="row cwp23-content">
                    <div className="col-lg-6 cwp23-img">
                        <h6 className="title-subw3hny mb-1">Services Info</h6>
                        <h3 className="title-w3l mb-2">What happens behind the scenes</h3>

                        <p className="mt-4">Sed in metus libero. Sed volutpat eget dui ut tempus. Fusce fringilla tincidunt laoreet
                            Morbi ac metus vitae diam scelerisque malesuada eget eu mauris.Cras varius lorem ac velit pharetra.

                        </p>
                        <p className="mt-4">Lorem ipsum dolor sit amet,Ea sed illum facere aperiam sequi optio consectetur adipisicing
                            elit. Cras varius lorem ac velit pharetra, non scelerisque mi vulputate. Phasellus bibendum.</p>

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
    <Step />
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
                    <img src="assets/images/g1.jpg" alt="" className="img-fluid radius-image"/>
                    <div className="area-box mt-4">
                        <i className="fas fa-lightbulb" aria-hidden="true"></i>
                        <div className="area-box-info">
                            <h4><NavLink to="/Wallpapers" className="title-head">WALLPAPERS</NavLink></h4>
                            <p>Amus a ligula quam tesque et ut justo, Duis sed dolor et amet.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 grids-feature mt-5">
                    <img src="assets/images/g3.jpg" alt="" className="img-fluid radius-image"/>
                    <div className="area-box mt-4">
                        <i className="far fa-file-alt" aria-hidden="true"></i>
                        <div className="area-box-info">
                            <h4><a href="#feature" className="title-head">KIDSROOM</a></h4>
                            <p>Amus a ligula quam tesque et ut justo, Duis sed dolor et amet.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 grids-feature mt-5">
                    <img src="assets/images/g2.jpg" alt="" className="img-fluid radius-image"/>
                    <div className="area-box mt-4">
                        <i className="fas fa-drafting-compass" aria-hidden="true"></i>
                        <div className="area-box-info">
                            <h4><a href="#feature" className="title-head">CUSTOMIZED WALLPAPERS</a></h4>
                            <p>Amus a ligula quam tesque et ut justo, Duis sed dolor et amet.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 grids-feature mt-5">
                    <img src="assets/images/g1.jpg" alt="" className="img-fluid radius-image"/>
                    <div className="area-box mt-4">
                        <i className="fas fa-lightbulb" aria-hidden="true"></i>
                        <div className="area-box-info">
                            <h4><a href="#feature" className="title-head">PVC WALLS PANEL</a></h4>
                            <p>Amus a ligula quam tesque et ut justo, Duis sed dolor et amet.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 grids-feature mt-5">
                    <img src="assets/images/g3.jpg" alt="" className="img-fluid radius-image"/>
                    <div className="area-box mt-4">
                        <i className="far fa-file-alt" aria-hidden="true"></i>
                        <div className="area-box-info">
                            <h4><a href="#feature" className="title-head">PVC CEILING PANEL</a></h4>
                            <p>Amus a ligula quam tesque et ut justo, Duis sed dolor et amet.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 grids-feature mt-5">
                    <img src="assets/images/g2.jpg" alt="" className="img-fluid radius-image"/>
                    <div className="area-box mt-4">
                        <i className="fas fa-drafting-compass" aria-hidden="true"></i>
                        <div className="area-box-info">
                            <h4><a href="#feature" className="title-head">3D FOAM PANEL</a></h4>
                            <p>Amus a ligula quam tesque et ut justo, Duis sed dolor et amet.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 grids-feature mt-5">
                    <img src="assets/images/g2.jpg" alt="" className="img-fluid radius-image"/>
                    <div className="area-box mt-4">
                        <i className="fas fa-drafting-compass" aria-hidden="true"></i>
                        <div className="area-box-info">
                            <h4><a href="#feature" className="title-head">PVC FLOORING</a></h4>
                            <p>Amus a ligula quam tesque et ut justo, Duis sed dolor et amet.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 grids-feature mt-5">
                    <img src="assets/images/g2.jpg" alt="" className="img-fluid radius-image"/>
                    <div className="area-box mt-4">
                        <i className="fas fa-drafting-compass" aria-hidden="true"></i>
                        <div className="area-box-info">
                            <h4><a href="#feature" className="title-head">WOODEN FLOORING</a></h4>
                            <p>Amus a ligula quam tesque et ut justo, Duis sed dolor et amet.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 grids-feature mt-5">
                    <img src="assets/images/g2.jpg" alt="" className="img-fluid radius-image"/>
                    <div className="area-box mt-4">
                        <i className="fas fa-drafting-compass" aria-hidden="true"></i>
                        <div className="area-box-info">
                            <h4><NavLink to="/Blinds" className="title-head">BLINDS</NavLink></h4>
                            <p>Amus a ligula quam tesque et ut justo, Duis sed dolor et amet.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!--//feature-section-->
    <!--/w3l-services3--> */}
    <section className="w3l-services3" id="services">
        <div className="new-block">
            <div className="container py-5">
                <div className="middle-section py-lg-5 py-4">
                    <div className="section-width">
                        <h6 className="title-subw3hny mb-1">More Info</h6>
                        <h3 className="title-w3l two mb-4">Nulla mollis dapibus nunc, ut rhoncus
                            turpis quis.</h3>

                    </div>
                    <div className="link-list-menu">
                        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla non ipsum soluta
                            perferendis
                            veniam qui esse magnam commodi quisquam vitae labore nemo at voluptatem, totam, minima recusandae
                            assumenda.</p>
                        <div className="w3l-two-buttons">
                            <a href="about.html" className="btn btn-primary btn-white btn-style mt-lg-5 mt-4"> Read More </a>
                            <a href="about.html" className="btn btn-style btn-outline-light mt-lg-5 mt-4 ms-sm-3">Read More</a>
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
                                <p className="text-para">Lorem ipsum dolor sit amet, elit. Id ab commodi magnam. </p>
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
                                <p className="text-para">Lorem ipsum dolor sit amet, elit. Id ab commodi magnam. </p>
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
                                <p className="text-para">Lorem ipsum dolor sit amet, elit. Id ab commodi magnam. </p>
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
                                        Space Planning</a></h4>
                                <p className="text-para">Lorem ipsum dolor sit amet, elit. Id ab commodi magnam. </p>
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

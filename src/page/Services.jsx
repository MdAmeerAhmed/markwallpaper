import React from 'react'
import { NavLink } from 'react-router-dom'
import Step from '../Component/Step'
import Contact from '../Component/Contact'

function Services() {
  return (
    <>
       {/* <!--/inner-page--> */}
    <div class="inner-banner py-5">
        <section class="w3l-breadcrumb text-left py-sm-5">
            <div class="container">
                <div class="w3breadcrumb-right">
                    <ul class="breadcrumbs-custom-path">
                        <li><a href="index.html">Home</a></li>
                        <li class="active"><span class="fas fa-angle-double-right mx-2"></span> Services</li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
    {/* <!--//inner-page-->
    <!--/services--> */}
    <section class="w3l-services2" id="services">
        <div id="cwp23-block" class="py-5">
            <div class="container py-lg-5">
                <div class="row cwp23-content">
                    <div class="col-lg-6 cwp23-img">
                        <h6 class="title-subw3hny mb-1">Services Info</h6>
                        <h3 class="title-w3l mb-2">What happens behind the scenes</h3>

                        <p class="mt-4">Sed in metus libero. Sed volutpat eget dui ut tempus. Fusce fringilla tincidunt laoreet
                            Morbi ac metus vitae diam scelerisque malesuada eget eu mauris.Cras varius lorem ac velit pharetra.

                        </p>
                        <p class="mt-4">Lorem ipsum dolor sit amet,Ea sed illum facere aperiam sequi optio consectetur adipisicing
                            elit. Cras varius lorem ac velit pharetra, non scelerisque mi vulputate. Phasellus bibendum.</p>

                    </div>
                    <div class="col-lg-6 cwp23-text mt-lg-0 mt-5 ps-lg-5">
                        <div class="imgw3l-ab w3l-news">
                            <div class="grids5-info">
                                <a href="#" class="d-block zoom"><img src="assets/images/g8.jpg" alt="" class="img-fluid radius-image"/></a>
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
    <section class="w3l-aboutblock1 grids-3-w3l py-5" id="services">
        <div class="container py-lg-5 py-md-4 py-2">
            <div class="title-content text-center mb-3">
                <h6 class="title-subw3hny mb-1">We Offer</h6>
                <h3 class="title-w3l">Our Services</h3>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6 grids-feature mt-5">
                    <img src="assets/images/g1.jpg" alt="" class="img-fluid radius-image"/>
                    <div class="area-box mt-4">
                        <i class="fas fa-lightbulb" aria-hidden="true"></i>
                        <div class="area-box-info">
                            <h4><NavLink to="/Wallpapers" class="title-head">WALLPAPERS</NavLink></h4>
                            <p>Amus a ligula quam tesque et ut justo, Duis sed dolor et amet.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 grids-feature mt-5">
                    <img src="assets/images/g3.jpg" alt="" class="img-fluid radius-image"/>
                    <div class="area-box mt-4">
                        <i class="far fa-file-alt" aria-hidden="true"></i>
                        <div class="area-box-info">
                            <h4><a href="#feature" class="title-head">KIDSROOM</a></h4>
                            <p>Amus a ligula quam tesque et ut justo, Duis sed dolor et amet.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 grids-feature mt-5">
                    <img src="assets/images/g2.jpg" alt="" class="img-fluid radius-image"/>
                    <div class="area-box mt-4">
                        <i class="fas fa-drafting-compass" aria-hidden="true"></i>
                        <div class="area-box-info">
                            <h4><a href="#feature" class="title-head">CUSTOMIZED WALLPAPERS</a></h4>
                            <p>Amus a ligula quam tesque et ut justo, Duis sed dolor et amet.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 grids-feature mt-5">
                    <img src="assets/images/g1.jpg" alt="" class="img-fluid radius-image"/>
                    <div class="area-box mt-4">
                        <i class="fas fa-lightbulb" aria-hidden="true"></i>
                        <div class="area-box-info">
                            <h4><a href="#feature" class="title-head">PVC WALLS PANEL</a></h4>
                            <p>Amus a ligula quam tesque et ut justo, Duis sed dolor et amet.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 grids-feature mt-5">
                    <img src="assets/images/g3.jpg" alt="" class="img-fluid radius-image"/>
                    <div class="area-box mt-4">
                        <i class="far fa-file-alt" aria-hidden="true"></i>
                        <div class="area-box-info">
                            <h4><a href="#feature" class="title-head">PVC CEILING PANEL</a></h4>
                            <p>Amus a ligula quam tesque et ut justo, Duis sed dolor et amet.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 grids-feature mt-5">
                    <img src="assets/images/g2.jpg" alt="" class="img-fluid radius-image"/>
                    <div class="area-box mt-4">
                        <i class="fas fa-drafting-compass" aria-hidden="true"></i>
                        <div class="area-box-info">
                            <h4><a href="#feature" class="title-head">3D FOAM PANEL</a></h4>
                            <p>Amus a ligula quam tesque et ut justo, Duis sed dolor et amet.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 grids-feature mt-5">
                    <img src="assets/images/g2.jpg" alt="" class="img-fluid radius-image"/>
                    <div class="area-box mt-4">
                        <i class="fas fa-drafting-compass" aria-hidden="true"></i>
                        <div class="area-box-info">
                            <h4><a href="#feature" class="title-head">PVC FLOORING</a></h4>
                            <p>Amus a ligula quam tesque et ut justo, Duis sed dolor et amet.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 grids-feature mt-5">
                    <img src="assets/images/g2.jpg" alt="" class="img-fluid radius-image"/>
                    <div class="area-box mt-4">
                        <i class="fas fa-drafting-compass" aria-hidden="true"></i>
                        <div class="area-box-info">
                            <h4><a href="#feature" class="title-head">WOODEN FLOORING</a></h4>
                            <p>Amus a ligula quam tesque et ut justo, Duis sed dolor et amet.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 grids-feature mt-5">
                    <img src="assets/images/g2.jpg" alt="" class="img-fluid radius-image"/>
                    <div class="area-box mt-4">
                        <i class="fas fa-drafting-compass" aria-hidden="true"></i>
                        <div class="area-box-info">
                            <h4><NavLink to="/Blinds" class="title-head">BLINDS</NavLink></h4>
                            <p>Amus a ligula quam tesque et ut justo, Duis sed dolor et amet.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!--//feature-section-->
    <!--/w3l-services3--> */}
    <section class="w3l-services3" id="services">
        <div class="new-block">
            <div class="container py-5">
                <div class="middle-section py-lg-5 py-4">
                    <div class="section-width">
                        <h6 class="title-subw3hny mb-1">More Info</h6>
                        <h3 class="title-w3l two mb-4">Nulla mollis dapibus nunc, ut rhoncus
                            turpis quis.</h3>

                    </div>
                    <div class="link-list-menu">
                        <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla non ipsum soluta
                            perferendis
                            veniam qui esse magnam commodi quisquam vitae labore nemo at voluptatem, totam, minima recusandae
                            assumenda.</p>
                        <div class="w3l-two-buttons">
                            <a href="about.html" class="btn btn-primary btn-white btn-style mt-lg-5 mt-4"> Read More </a>
                            <a href="about.html" class="btn btn-style btn-outline-light mt-lg-5 mt-4 ms-sm-3">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!--//w3l-services3-->
    <!-- features section --> */}
    <section class="w3l-features py-5" id="work">
        <div class="container py-lg-5 py-md-4 py-2">
            <div class="title-content text-center mb-md-5 mb-4">
                <h6 class="title-subw3hny mb-1">Featured Info</h6>
                <h3 class="title-w3l mb-5">Speacial Services</h3>
            </div>
            <div class="main-cont-wthree-2 align-items-center text-center">
                <div class="row align-items-center">
                    <div class="col-md-6 mt-4">
                        <div class="grids-1 box-wrap serhny-gd">
                            <div class="icon">
                                <i class="fas fa-pencil-alt"></i>
                            </div>
                            <div class="serhny-gd-info">
                                <h4><a href="#service" class="title-head mb-3">Concept Designs</a></h4>
                                <p class="text-para">Lorem ipsum dolor sit amet, elit. Id ab commodi magnam. </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 mt-4">
                        <div class="grids-1 box-wrap serhny-gd">
                            <div class="icon">
                                <i class="far fa-images"></i>
                            </div>
                            <div class="serhny-gd-info">
                                <h4><a href="#service" class="title-head mb-3">Project Designs</a></h4>
                                <p class="text-para">Lorem ipsum dolor sit amet, elit. Id ab commodi magnam. </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 mt-4">
                        <div class="grids-1 box-wrap serhny-gd">
                            <div class="icon">
                                <i class="fas fa-users"></i>
                            </div>
                            <div class="serhny-gd-info">
                                <h4><a href="#service" class="title-head mb-3">Consulting</a></h4>
                                <p class="text-para">Lorem ipsum dolor sit amet, elit. Id ab commodi magnam. </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 mt-4">
                        <div class="grids-1 box-wrap serhny-gd">
                            <div class="icon">
                                <i class="fas fa-couch"></i>
                            </div>
                            <div class="serhny-gd-info">
                                <h4><a href="#service" class="title-head mb-3">
                                        Space Planning</a></h4>
                                <p class="text-para">Lorem ipsum dolor sit amet, elit. Id ab commodi magnam. </p>
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

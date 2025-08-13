import React from 'react'
import Contact from '../Component/Contact'

function Aboutus() {
  return (
    <>
       {/* <!--/inner-page--> */}
    <div className="inner-banner py-5">
        <section className="w3l-breadcrumb text-left py-sm-5">
            <div className="container">
                <div className="w3breadcrumb-right">
                    <ul className="breadcrumbs-custom-path">
                        <li><a href="index.html">Home</a></li>
                        <li className="active"><span className="fas fa-angle-double-right mx-2"></span> About</li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
    {/* <!--//inner-page-->
    <!--/w3-grids--> */}
    <section className="w3l-passion-mid-sec py-5">
        <div className="container py-md-5 py-3">
            <div className="container">
                <div className="row w3l-passion-mid-grids mb-5 pb-lg-5">
                    <div className="col-lg-6 w3hny-passion-item">
                        <img src="assets/images/g3.jpg" alt="" className="img-fluid radius-image"/>
                    </div>
                    <div className="col-lg-6 passion-grid-item-info ps-lg-5 mt-lg-0 mt-5">
                        <h6 className="title-subw3hny mb-1">About Us</h6>
                        <h3 className="title-w3l mb-4">
                            Designs that make your eyes sparkle</h3>
                        <p className="mt-3 pe-lg-5">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in
                            ligula. Semper at tempufddfel.Lorem ipsum dolor sit, amet consectetur elit. Earum mollitia
                            cum ex ipsam autem!earum sequi amet.</p>

                    </div>

                </div>
                <div className="row w3l-passion-mid-grids">
                    <div className="col-lg-6 passion-grid-item-info pe-lg-5 mb-lg-0 mb-5">
                        <h6 className="title-subw3hny mb-1">Why Us</h6>
                        <h3 className="title-w3l mb-4">We believe in living making good</h3>
                        <p className="mt-3 pe-lg-5">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in
                            ligula. Semper at tempufddfel.Lorem ipsum dolor sit, amet consectetur elit. Earum mollitia
                            cum ex ipsam autem!earum sequi amet.</p>

                    </div>
                    <div className="col-lg-6 w3hny-passion-item">
                        <img src="assets/images/g2.jpg" alt="" className="img-fluid radius-image"/>
                    </div>
                </div>

            </div>
        </div>
    </section>
    {/* <!--//w3-grids-->
    <!-- /home-page-video-popup--> */}
    <section className="w3l-index5 py-5" id="info">
        <div className="container py-md-5">
            <div className="abpagecontent-1-info">
                <h6 className="title-subw3hny mb-1">Our Info</h6>
                <h3 className="title-w3l two mb-3">We provide you the quality with perfect credibility </h3>
                <p className="text-para">Curabitur id gravida risus. Fusce eget ex fermentum, ultricies nisi ac sed,
                    lacinia est. Quisque ut lectus consequat, venenatis eros et, sed commodo risus. Nullam sit
                    amet laoreet elit. Suspendisse non init magnaa velit efficitur, dolor eget ex fermentum.
                </p>
                <p className="text-para mt-3">Curabitur id gravida risus. Fusce eget ex fermentum, ultricies nisi ac sed,
                    lacinia est. Quisque ut lectus consequat, venenatis eros et, sed commodo risus. Nullam sit
                    amet laoreet elit. Suspendisse non init magnaa velit efficitur, dolor eget ex fermentum.
                </p>
            </div>
        </div>
    </section>
    {/* <!-- //home-page-video-popup-->

    <!-- features section --> */}
    <section className="w3l-features py-5" id="work">
        <div className="container py-lg-5 py-md-4 py-2">
            <div className="title-content text-center mb-md-5 mb-4">
                <h6 className="title-subw3hny mb-1">Intro</h6>
                <h3 className="title-w3l mb-5">Our Process</h3>
            </div>
            <div className="main-cont-wthree-2 align-items-center text-center pt-lg-4">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="grids-1 box-wrap">
                            <div className="icon">
                                <i className="fas fa-lightbulb"></i>
                            </div>
                            <h4><a href="#service" className="title-head mb-3">Idea & Design</a></h4>
                            <p className="text-para">Lorem ipsum dolor sit amet, elit. Id ab commodi magnam. </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-md-0 mt-5">
                        <div className="grids-1 box-wrap">
                            <div className="icon">
                                <i className="far fa-images"></i>
                            </div>
                            <h4><a href="#service" className="title-head mb-3">Specification</a></h4>
                            <p className="text-para">Lorem ipsum dolor sit amet, elit. Id ab commodi magnam. </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-lg-0 mt-5">
                        <div className="grids-1 box-wrap">
                            <div className="icon">
                                <i className="fas fa-drafting-compass"></i>
                            </div>
                            <h4><a href="#service" className="title-head mb-3">Execution</a></h4>
                            <p className="text-para">Lorem ipsum dolor sit amet, elit. Id ab commodi magnam. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!--//features section --> */}
    {/* <!--/Team--> */}
    <section className="w3l-team py-5" id="team">
        <div className="container py-lg-5 py-md-4 py-2">
            <div className="row team-row">
                <div className="col-lg-6 team-wrap-info pe-lg-5">
                    <h6 className="title-subw3hny">Our Experts</h6>
                    <h3 className="title-w3l mb-md-4 mb-2">Meet the Team</h3>
                    <p className="text-para pe-lg-5">Curabitur id gravida risus. Fusce eget ex fermentum, ultricies nisi ac sed,
                        lacinia est. Quisque ut lectus consequat, venenatis eros et, sed commodo risus. Nullam sit
                        amet laoreet elit. Suspendisse non init magnaa velit efficitur, dolor eget ex fermentum.
                    </p>
                    <a href="#url" className="btn btn-primary btn-style mt-lg-5 mt-4">Join Us</a>
                </div>
                {/* <!--start-team member --> */}
                <div className="col-lg-3 col-sm-6 team-wrap mt-lg-0 mt-5">
                    <div className="team-member last text-center">
                        <div className="team-img">
                            <img src="assets/images/team3.jpg" alt="" className="img-fluid radius-image" />
                            <div className="overlay">
                                <div className="team-details text-center">
                                    <p>
                                        Our web design team will spend time with our digital marketing team.
                                    </p>
                                    <div className="socials mt-4">
                                        <a href="#url"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#url"><i className="fab fa-twitter"></i></a>
                                        <a href="#url"><i className="fab fa-instagram"></i></a>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="#team">
                            <h6 className="team-title">Charlotte Ava</h6>
                        </a>
                        <p>Founder</p>
                    </div>
                </div>
                {/* <!-- end team member --> */}

                <div className="col-lg-3 col-sm-6 team-wrap mt-lg-0 mt-5">
                    <div className="team-member last text-center">
                        <div className="team-img">
                            <img src="assets/images/team2.jpg" alt="" className="img-fluid radius-image" />
                            <div className="overlay">
                                <div className="team-details text-center">
                                    <p>
                                        Our web design team will spend time with our digital marketing team.
                                    </p>
                                    <div className="socials mt-4">
                                        <a href="#url"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#url"><i className="fab fa-twitter"></i></a>
                                        <a href="#url"><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="#team">
                            <h6 className="team-title">Emma Susan</h6>
                        </a>
                        <p>Designer</p>
                    </div>
                </div>
                {/* <!-- end team member --> */}

            </div>
        </div>
    </section>
    <Contact />
    {/* <!--//Team--> */}
    </>
  )
}

export default Aboutus

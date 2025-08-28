import React from 'react'
import Contact from '../Component/Contact'

function Project() {
  return (
    <div>
       <div className="inner-banner py-5">
        <section className="w3l-breadcrumb text-left py-sm-5">
            <div className="container">
                <div className="w3breadcrumb-right">
                    <ul className="breadcrumbs-custom-path">
                        <li><a href="index.html">Home</a></li>
                        <li className="active"><span className="fas fa-angle-double-right mx-2"></span> Project</li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
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
                                <a href="/wallpaper-project" className="btn btn-style btn-primary mt-lg-4 mt-4">Read More </a>
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
                                <p>Our team completed a vibrant kids’ room wallpaper installation in Hyderabad. With colorful and creative cartoon-themed designs,room inspires joy, fun, and for little ones.</p>
                                <a href="/wallpaper-project" className="btn btn-style btn-primary mt-lg-4 mt-4">Read More </a>
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
                                <a href="/wallpaper-project" className="btn btn-style btn-primary mt-lg-4 mt-4">Read More </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- /grids --> */}
            </div>

        </div>
    </section>
    <Contact />
    </div>
  )
}

export default Project

import React from 'react'

function Gallery() {
  return (
    <div>
       <div className="inner-banner py-5">
        <section className="w3l-breadcrumb text-left py-sm-5">
            <div className="container">
                <div className="w3breadcrumb-right">
                    <ul className="breadcrumbs-custom-path">
                        <li><a href="index.html">Home</a></li>
                        <li className="active"><span className="fas fa-angle-double-right mx-2"></span> Gallery</li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
      <section className="w3l-gallery" id="gallery">
        <div className="destionation-innf py-5">
            <div className="container py-lg-5 py-md-4 py-2 HomePageGallery">
                <div className="title-content text-center">
                    <h6 className="title-subw3hny text-center">Gallery</h6>
                    <h3 className="title-w3l mb-5 text-center">Latest Projects Images</h3>
                </div>
                
                 <div className="wallppr-img ">
        <div className="container">
          <div className="row">
            {Array.from({ length: 30 }, (_, index) => (
              <div key={index} className="col-md-4 col-lg-4">
                <div className="wal-img">
                  <img src={`assets/images/eimg-${index + 1}.jpeg`} alt={`blind ${index + 1}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <!--/grids-grids--> */}
                <ul className="gallery_agile">
                    <li>
                        <div className="w3_agile_portfolio_grid">
                            <a href="assets/images/ab1.jpg">
                                <img src="assets/images/ab1.jpg" alt=" " className="img-fluid radius-image" />
                                <div className="w3layouts_news_grid_pos">
                                    <div className="wthree_text">
                                        <h3><i className="fas fa-search"></i></h3>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="w3_agile_portfolio_grid mt-4">
                            <a href="assets/images/g4.jpg">
                                <img src="assets/images/g4.jpg" alt=" " className="img-fluid radius-image" />
                                <div className="w3layouts_news_grid_pos">
                                    <div className="wthree_text">
                                        <h3><i className="fas fa-search"></i></h3>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className="w3_agile_portfolio_grid">
                            <a href="assets/images/g3.jpg">
                                <img src="assets/images/g3.jpg" alt=" " className="img-fluid radius-image" />
                                <div className="w3layouts_news_grid_pos">
                                    <div className="wthree_text">
                                        <h3><i className="fas fa-search"></i></h3>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="w3_agile_portfolio_grid mt-4">
                            <a href="assets/images/ab3.jpg">
                                <img src="assets/images/fg-1.jpg" alt=" " className="img-fluid radius-image" />
                                <div className="w3layouts_news_grid_pos">
                                    <div className="wthree_text">
                                        <h3><i className="fas fa-search"></i></h3>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className="w3_agile_portfolio_grid">
                            <a href="assets/images/g2.jpg">
                                <img src="assets/images/g2.jpg" alt=" " className="img-fluid radius-image" />
                                <div className="w3layouts_news_grid_pos">
                                    <div className="wthree_text">
                                        <h3><i className="fas fa-search"></i></h3>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="w3_agile_portfolio_grid mt-4">
                            <a href="assets/images/ab2.jpg">
                                <img src="assets/images/ab2.jpg" alt=" " className="img-fluid radius-image" />
                                <div className="w3layouts_news_grid_pos">
                                    <div className="wthree_text">
                                        <h3><i className="fas fa-search"></i></h3>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </li>
                </ul>
                {/* <!--//rids-grids--> */}
            </div>
        </div>
    </section>
    </div>
  )
}

export default Gallery

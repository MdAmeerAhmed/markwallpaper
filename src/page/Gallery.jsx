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
            {Array.from({ length: 39 }, (_, index) => (
              <div key={index} className="col-md-4 col-lg-4">
                <div className="wal-img">
                  <img src={`assets/images/eimg-${index + 1}.jpeg`} alt={`blind ${index + 1}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
            </div>
        </div>
    </section>
    </div>
  )
}

export default Gallery

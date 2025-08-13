import React from 'react'

function ContactUs() {
  return (
    <>
       <div className="inner-banner py-5">
        <section className="w3l-breadcrumb text-left py-sm-5">
            <div className="container">
                <div className="w3breadcrumb-right">
                    <ul className="breadcrumbs-custom-path">
                        <li><a href="index.html">Home</a></li>
                        <li className="active"><span className="fas fa-angle-double-right mx-2"></span> Contact Us</li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
    {/* <!--//inner-page-->
    <!--/contact1--> */}

    <section className="w3l-contact-1 py-5" id="contact">
        <div className="contacts-9 py-lg-5 py-md-4">
            <div className="container">
                {/* <!--/contact-block--> */}
                <div className="map-iframe">
                    <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.873744652635!2d78.3840253148554!3d17.40647728808894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93f5a1a1a1a1%3A0x1a1a1a1a1a1a1a1a!2sShop%20no.1%2C%20Tower-2%2C%20Happy%20Homes%2C%20Pillar%20No.185%2C%20Upperpally%2C%20Hyderabad-500048!5e0!3m2!1sen!2sin!4v1630494567890!5m2!1sen!2sin"
  width="100%"
  height="400"
  style={{ border: "0px" }}
  allowFullScreen=""
  title="Location of Shop no.1, Tower-2, Happy Homes, Upperpally, Hyderabad on Google Maps"
  loading="lazy">
</iframe>
                </div>
                {/* <!--//contact-block--> */}
                <div className="row contact-view mt-5 pt-lg-4">
                    <div className="col-lg-6 cont-details mb-lg-0 mb-5 pe-lg-5">
                        <h6 className="title-subw3hny mb-1">Get in touch</h6>
                        <h3 className="title-w3l mb-4">Contact Us</h3>
                        <p className="mb-sm-5 mb-4">Start working with Us that can provide everything you need to generate awareness, drive traffic,
                            connect. <br/> We guarantee that you’ll be able to have any issue resolved within 24 hours.</p>

                        <div className="w3-addressinfo-grids">
                            <div className="w3-addressinfo-gd">
                                <h5 className="mb-4">London</h5>
                                <div className="cont-top">
                                    <div className="cont-left text-center">
                                        <span className="fas fa-phone-alt"></span>
                                    </div>
                                    <div className="cont-right">
                                        <h6>Phone number</h6>
                                        <p><a href="tel:+(21) 255 999 8887">+(21) 255 999 8887</a></p>
                                    </div>
                                </div>
                                <div className="cont-top margin-up">
                                    <div className="cont-left text-center">
                                        <span className="fas fa-envelope-open-text"></span>
                                    </div>
                                    <div className="cont-right">
                                        <h6>Send Email</h6>
                                        <p><a href="mailto:Intrados@mail.com" className="mail">Intrados@mail.com</a></p>
                                    </div>
                                </div>
                                <div className="cont-top margin-up">
                                    <div className="cont-left text-center">
                                        <span className="fas fa-map-marked-alt"></span>
                                    </div>
                                    <div className="cont-right">
                                        <h6>Company Address</h6>
                                        <p className="pr-lg-5">230 Trainer Honey street, Illinois.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w3-addressinfo-gd">
                                <h5 className="mb-4">Abingdon</h5>
                                <div className="cont-top">
                                    <div className="cont-left text-center">
                                        <span className="fas fa-phone-alt"></span>
                                    </div>
                                    <div className="cont-right">
                                        <h6>Phone number</h6>
                                        <p><a href="tel:+(21) 255 999 8888">+(21) 255 999 8888</a></p>
                                    </div>
                                </div>
                                <div className="cont-top margin-up">
                                    <div className="cont-left text-center">
                                        <span className="fas fa-envelope-open-text"></span>
                                    </div>
                                    <div className="cont-right">
                                        <h6>Send Email</h6>
                                        <p><a href="mailto:Intrados1@mail.com" className="mail">Intrados1@mail.com</a></p>
                                    </div>
                                </div>
                                <div className="cont-top margin-up">
                                    <div className="cont-left text-center">
                                        <span className="fas fa-map-marked-alt"></span>
                                    </div>
                                    <div className="cont-right">
                                        <h6>Company Address</h6>
                                        <p className="pr-lg-5">209 Trainer Avenue street, Illinois.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 map-content-9">
                        <h5 className="mb-sm-4 mb-3">Drop Us a Line</h5>
                        <form action="https://sendmail.w3layouts.com/submitForm" method="post">
                            <div className="twice">
                                <input type="text" className="form-control" name="w3lName" id="w3lName" placeholder="Name" required=""/>
                            </div>
                            <div className="twice">
                                <input type="email" className="form-control" name="w3lSender" id="w3lSender" placeholder="Email" required=""/>
                            </div>
                            <div className="twice">
                                <input type="text" className="form-control" name="w3lSubject" id="w3lSubject" placeholder="Subject" required=""/>
                            </div>
                            <textarea name="w3lMessage" className="form-control" id="w3lMessage" placeholder="Message" required=""></textarea>
                            <div className="w3lhny-submit text-right">
                                <button type="submit" className="btn btn-primary btn-style mt-4">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default ContactUs

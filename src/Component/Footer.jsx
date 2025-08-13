import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="w3l-footer-29-main">
        <div className="footer-29 py-5">
            <div className="container py-lg-4">
                <div className="row footer-top-29">
                    <div className="col-lg-4 footer-list-29 footer-1 pe-lg-5">
                        <h2><a className="navbar-brand" href="index.html">
                                <span className="w3yellow">Mark</span>Wallpaper</a></h2>
                        <p className="parahny pr-lg-5 mr-xl-4 mb-4">Lorem ipsum dolor sit, amet consectetur elit. Earum mollitia cum
                            ex
                            ipsam autem!earum sequi amet.
                        </p>

                    </div>
                    <div className="col-lg-4 footer-list-29 footer-3 mt-lg-0 mt-5 pe-lg-5">
                        <h6 className="footer-title-29">Quick Links</h6>
                        <div className="footer-listw3-grids">
                            <ul className="footer-listw3">
                                <li><a href="index.html">Home</a></li>
                                <li><a href="about.html">About</a></li>
                                <li><a href="Services.html">Services</a></li>
                                <li><a href="contact.html">Contact</a></li>

                            </ul>
                            <ul className="footer-listw3">
                                <li><a href="#privacy">Privacy Policy</a></li>
                                <li><a href="#term">Terms of use</a></li>
                                <li><a href="#sales">Sales and Refunds</a></li>
                                <li><a href="#faq">FAQ</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 footer-list-29 footer-4 mt-lg-0 mt-5">
                        <h6 className="footer-title-29">Keep Connected</h6>
                        <p>Get Updates By Subscribe Our Weekly Newsletter</p>

                        <form action="#" className="subscribe" method="post">
                            <input type="email" name="email" placeholder="Your Email Address" required=""/>
                            <button><span className="fas fa-paper-plane"></span></button>
                        </form>
                        <div className="main-social-footer-29 mt-4">
                            <a href="#facebook" className="facebook"><span className="fab fa-facebook-f"></span></a>
                            <a href="#twitter" className="twitter"><span className="fab fa-twitter"></span></a>
                            <a href="#pinterest"><span className="fab fa-pinterest-p"></span></a>
                            <a href="#instagram" className="instagram"><span className="fab fa-instagram"></span></a>
                            <a href="#google" className="google"><span className="fab fa-google-plus-g"></span></a>
                            <a href="#linkd" className="linkd"><span className="fab fa-linkedin-in"></span></a>
                        </div>
                    </div>
                </div>
                <div className="bottom-copies text-center">
                    <p className="copy-footer-29">© 2021 Intrados. All rights reserved .</p>
                </div>
            </div>
        </div>

        {/* <!-- move top --> */}
        <button  id="movetop" title="Go to top">
            <span className="fa fa-angle-up"></span>
        </button>
        {/* <script>
            // When the user scrolls down 20px from the top of the document, show the button
            window.onscroll = function() {
                scrollFunction()
            };

            function scrollFunction() {
                if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                    document.getElementById("movetop").style.display = "block";
                } else {
                    document.getElementById("movetop").style.display = "none";
                }
            }

            // When the user clicks on the button, scroll to the top of the document
            function topFunction() {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            }

        </script>
        // <!-- //move top --> */}
    </footer>
    </div>
  )
}

export default Footer

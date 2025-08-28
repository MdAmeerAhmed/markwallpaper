import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
    const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('Sending...');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: '684122e0-c7c5-46f7-b86c-c2ca69e86072', // Replace with your key
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }),
    });

    const result = await response.json();
    if (result.success) {
      setMessage('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      setMessage('Something went wrong. Please try again.');
    }
  };
  return (
    <div>
      <section className="w3l-contact-1 "  id="contact">
        <div className="contacts-9  py-md-4">
            <div className="container">
                <div className="col-lg-12 cont-details mb-lg-0 mb-5 pe-lg-5">
                        <h6 className="title-subw3hny mb-1 ">Get in touch</h6>
                        <h3 className="title-w3l mb-4 text-center">Contact Us</h3>
                        <p className="mb-sm-5 mb-4 text-center">Start working with Us that can provide everything you need to generate awareness, drive traffic,
                            connect. <br/> We guarantee that you’ll be able to have any issue resolved within 24 hours.</p>

                        <div className="w3-addressinfo-grids">
                            <div className="w3-addressinfo-gd">
                                <h5 className="mb-4">Hyderabad</h5>
                                <div className="d-flex ">
                                <div className="cont-top col-lg-4 me-5 ">
                                    <div className="cont-left text-center">
                                        <span className="fas fa-phone-alt"></span>
                                    </div>
                                    <div className="cont-right cont-right">
                                        <h6>Phone number</h6>
                                        <p><a href="+(91) 707 540 7473">+(91) 707 540 7473</a></p>
                                    </div>
                                </div>
                                <div className="cont-top  col-lg-4 me-5 ">
                                    <div className="cont-left text-center">
                                        <span className="fas fa-envelope-open-text"></span>
                                    </div>
                                    <div className="cont-right w-100">
                                        <h6>Send Email</h6>
                                        <p><a href="mailto:markwallpaperdesigner.com" className="mail">markwallpaperdesigner@mail.com</a></p>
                                    </div>
                                </div>
                                <div className="cont-top  col-lg-4  w-75 ms-2" >
                                    <div className="cont-left text-center">
                                        <span className="fas fa-map-marked-alt"></span>
                                    </div>
                                    <div className="cont-right  ">
                                        <h6>Company Address</h6>
                                        <p className="pr-lg-5">Shop No.1,Tower-2,Happy Homes,<br/>Pillar No.185,Upperpally,Hyderabad-500048</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                             
                        </div>
                    </div>
                <div className="row contact-view mt-5">
                    {/* <!--/contact-block--> */}
                <div className="map-iframe col-lg-6 pt-5">
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
                    <div className="col-lg-6 map-content-9">
                        <h5 className="mb-sm-4 mb-3">Drop Us a Line</h5>
                        <form onSubmit={handleSubmit} method="post">
                            <div className="twice">
                                <input type="text" className="form-control" name="name" id="w3lName" placeholder="Name" value={formData.name}
          onChange={handleChange} required />
                            </div>
                            <div className="twice">
                                <input type="email" className="form-control" name="email" id="w3lSender" placeholder="Email" value={formData.email}
          onChange={handleChange} required />
                            </div>
                            <div className="twice">
                                <input type="text" className="form-control" name="subject" id="w3lSubject" placeholder="Subject"  value={formData.subject}
        onChange={handleChange} required />
                            </div>
                            <textarea name="message" className="form-control" id="w3lMessage" placeholder="Message"  value={formData.message}
        onChange={handleChange} required ></textarea>
                            <div className="w3lhny-submit text-right">
                               <button
  type="submit"
  className="btn btn-primary btn-style mt-4"
  disabled={message === 'Sending...'}
>
  {message === 'Sending...' ? 'Sending...' : 'Send Message'}
</button>
                            </div>
                            {message && <p className="mt-3 text-center">{message}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Contact

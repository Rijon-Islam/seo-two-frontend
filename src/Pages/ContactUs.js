import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
  const [contact, setContact] = useState([]);
  const navigate = useNavigate();
  const [footerAddress, setFooterAddress] = useState([]);

  useEffect(() => {
    fetch(`https://rjnecommerceseo-88b17f4b1cb1.herokuapp.com/footer-address`)
      .then((res) => res.json())
      .then((info) => setFooterAddress(info));
  }, [footerAddress]);

  useEffect(() => {
    fetch(`https://rjnecommerceseo-88b17f4b1cb1.herokuapp.com/contacts`)
      .then((res) => res.json())
      .then((info) => setContact(info));
  }, []);



  const handleMessage = (event) => {
    event.preventDefault();
    const fullName = event.target.fullName.value;
    const phoneNumber = event.target.phoneNumber.value;
    const emailAddress = event.target.emailAddress.value;
    const website = event.target.website.value;
    const messageStatus = event.target.messageStatus.value;
    const subject = event.target.subject.value;
    const message = event.target.message.value;


    const addItem = {
      fullName,
      phoneNumber,
      emailAddress,
      website,
      messageStatus,
      subject,
      message,

    };

    const url = `https://rjnecommerceseo-88b17f4b1cb1.herokuapp.com/add-message`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addItem),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate('/all-messages');
        alert('Message is Updated');
      });
  };

  const [action, setAction] = useState([]);

  useEffect(() => {
    fetch(`https://rjnecommerceseo-88b17f4b1cb1.herokuapp.com/actions`)
      .then((res) => res.json())
      .then((info) => setAction(info));
  }, []);



  return (


    
    <>
      <div>
        {/*====== Page Title Area Start ======*/}
        <section className="page-title-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h2 className="page-title">Contact Us</h2>
              </div>
              <div className="col-md-6">
                <ul className="breadcrumb-nav">
                  <li><a href="/">Home</a></li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/*====== Page Title Area End ======*/}
        {/*====== Contact Info Start ======*/}
        <section className="contact-info-section section-gap">
          <div className="container">
            <div className="row justify-content-lg-between justify-content-center">
              <div className="col-xl-5 col-lg-6 col-md-10">
                <div className="section-heading mb-30">
                  <h2 className="title">Ready To Get Popular Marketing Service</h2>
                  <span className="tagline">Best SEO Optimization Agency</span>
                </div>
                {
                  footerAddress.map(c => <div className="contact-info-box wow fadeInUp">
                    <div className="single-contact-info">
                      <div className="icon">
                        <i className="fal fa-map-marker-alt" />
                      </div>
                      <div className="content">
                        <h4 className="info-title">Address</h4>
                        <p>{c.footeraddress}</p>
                      </div>
                    </div>
                    <div className="single-contact-info">
                      <div className="icon">
                        <i className="fal fa-envelope-open" />
                      </div>
                      <div className="content">
                        <h4 className="info-title">Email Us</h4>
                        <p>{c.footerEmail} </p>
                      </div>
                    </div>
                    <div className="single-contact-info">
                      <div className="icon">
                        <i className="fal fa-phone" />
                      </div>
                      <div className="content">
                        <h4 className="info-title">Phone</h4>
                        <p>{c.footerPhone} </p>
                      </div>
                    </div>
                  </div>)
                }

              </div>
              <div className="col-lg-6 col-md-9">
                <div className="contact-img text-lg-right text-center content-mt-md-50">
                  <img src="assets/img/illustrations/about-illustration.png" alt="Image" className="animate-float-bob-y" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== Contact Info End ======*/}
        {/*====== Contact Maps Start ======*/}
        <section className="contact-map-area overflow-hidden">
          <div className="contact-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d162839.89482870552!2d-73.94144927060226!3d40.678878939453796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1630508446475!5m2!1sen!2sbd" loading="lazy" />
          </div>
        </section>
        {/*====== Contact Maps End ======*/}
        {/*====== Contact Form Start ======*/}
        <section className="contact-from-area section-gap">
          <div className="container">
            <div className="contact-from">
              <div className="section-heading text-center mb-60">
                <h2 className="title">Send Us Message</h2>
                <span className="tagline">Best Digital Agency Solutions</span>
              </div>
              <form action="#" onSubmit={handleMessage}>
                <div className="row">
                  <div className="col-md-4 col-sm-6">
                    <div className="input-field">
                      <input type="text" name='fullName' placeholder="Your Full Name" />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="input-field">
                      <input type="text" name='phoneNumber' placeholder="Phone Number" />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="input-field">
                      <input type="email" name='emailAddress' placeholder="Email Address" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-field">
                      <input type="text" name='website' placeholder="Website" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-field">
                      <input type="text" name='subject' placeholder="Subject" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-field">
                      <input type="text" name='messageStatus' hidden value='UnRead' required />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="input-field">
                      <textarea placeholder="Message" name='message' defaultValue={""} />
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="template-btn w-100">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
        {/*====== Contact Form End ======*/}
        {/*====== Call To Action Start ======*/}
        <section className="call-to-action bg-color-secondary section-animate-icons">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-5 order-lg-last">
                <div className="cta-illustrations text-center text-lg-right content-mb-md-50">
                  <img src="assets/img/cta-illustrations.png" alt="Image" className="animate-float-bob-y" />
                </div>


              </div>

              {
                action.map(a => <div className="col-lg-7 col-md-10">
                  <div className="cta-content">
                    <h2 className="title">{a.heading}</h2>
                    <p className="subtitle">{a.subHeading}</p>
                    <p className="cta-note">Get Every Single Updates</p>
                    <a href={a.buttonLink} className="template-btn">{a.buttonText}<i className="far fa-long-arrow-right" /></a>
                  </div>
                </div>)
              }

            </div>
          </div>
          {/* Animate Icons */}
          <div className="animate-icons">
            <img src="assets/img/shape/dots-circle.png" alt="Icon" className="dots-circle" />
          </div>
          <div className="cta-shape">
            <img src="assets/img/shape/cta-shape.png" alt="Shape" />
          </div>
        </section>
        {/*====== Call To Action End ======*/}
      </div>

    </>
  );
};

export default ContactUs;
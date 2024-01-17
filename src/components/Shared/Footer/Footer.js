import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

const Footer = () => {


 
  const [categories, setCategories] = useState([]);
  const [footerAbout, setFooterAbout] = useState([]);
  const [footerAddress, setFooterAddress] = useState([]);
  const [footerSocial, setFooterSocial] = useState([]);
  const [footerCopyright, setFooterCopyright] = useState([]);

  const [logo, setLogo] = useState([]);

  useEffect(() => {
    fetch(`https://rjnecommerceseo-88b17f4b1cb1.herokuapp.com/logo`)
      .then((res) => res.json())
      .then((info) => setLogo(info));
  }, []);


  const [canvas, setCanvas] = useState([]);



  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/Shah-Limon/em-list/master/data.json`)
      .then((res) => res.json())
      .then((info) => setCanvas(info));
  }, []);

  useEffect(() => {
    fetch(`https://rjnecommerceseo-88b17f4b1cb1.herokuapp.com/categories`)
      .then((res) => res.json())
      .then((info) => setCategories(info));
  }, [categories]);

  useEffect(() => {
    fetch(`https://rjnecommerceseo-88b17f4b1cb1.herokuapp.com/footer-about`)
      .then((res) => res.json())
      .then((info) => setFooterAbout(info));
  }, []);

  useEffect(() => {
    fetch(`https://rjnecommerceseo-88b17f4b1cb1.herokuapp.com/footer-address`)
      .then((res) => res.json())
      .then((info) => setFooterAddress(info));
  }, [footerAddress]);

  useEffect(() => {
    fetch(`https://rjnecommerceseo-88b17f4b1cb1.herokuapp.com/footer-social`)
      .then((res) => res.json())
      .then((info) => setFooterSocial(info));
  }, []);

  useEffect(() => {
    fetch(`https://rjnecommerceseo-88b17f4b1cb1.herokuapp.com/copyrights`)
      .then((res) => res.json())
      .then((info) => setFooterCopyright(info));
  }, [footerCopyright]);



  const handleSubscriber = (event) => {
    event.preventDefault();
    const email = event.target.email.value;




    const addItem = {
      email,



    };

    const url = `https://rjnecommerceseo-88b17f4b1cb1.herokuapp.com/add-subscriber`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addItem),
    })
      .then((res) => res.json())
      .then((result) => {
        Navigate('/all-subscriber');
        alert('subscribers is Updated');
      });


  }




  return (
    

    <>
      <footer className="template-footer">
        <div className="container">
          <div className="footer-widgets-area">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="widget contact-widget">
                  <h4 className="widget-title">Contact Us</h4>
                  <div className="contact-content">
                    {
                      footerAddress.map(a =>
                        <div className="phone-number">
                          <span>Phone Number</span>
                          <a href="/">
                            <i className="far fa-phone" />
                            {a.footerPhone}
                          </a>
                          <p>
                            {a.footeraddress} <br />
                            {a.footerEmail}
                          </p>
                        </div>)
                    }



                    <>
                      {
                        logo.map(l => <img src={l.logo} alt="logo" />)
                      }

                    </>

                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="widget nav-widget pl-lg-4">
                  <h4 className="widget-title">Quick Link</h4>
                  <ul>
                    <li><a href="/" className="active">Home</a></li>
                    <li><a href="service">Services</a> </li>
                    <li><a href="pricing">Pricing</a> </li>
                    <li><a href="contact">Contact</a></li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="widget newsletters-widget pl-xl-4">
                  <h4 className="widget-title">Newsletters</h4>
                  <p>
                    The answer is through newsletters.
                  </p>
                  <div className="newsletter-form">
                    <form onSubmit={handleSubscriber} >
                      <input name="email" placeholder="Email Address" />
                      <button type="submit">Sign Up <i className="far fa-long-arrow-right" /></button>
                    </form>
                  </div>
                  {
                    footerSocial.map(s =>
                      <ul className="social-links">
                        <li><span>Follow</span></li>
                        <li><a href={s.fblink}><i className="fab fa-facebook-square" /></a></li>
                        <li><a href={s.inslink}><i className="fab fa-instagram" /></a></li>
                      </ul>
                    )
                  }

                </div>
              </div>
            </div>


          </div>

          {
            footerCopyright.map(c =>
              <div className="copyright-box">
                {c.copyrightText}
              </div>)
          }

        </div>
      </footer>

    </>
  );
};

export default Footer;

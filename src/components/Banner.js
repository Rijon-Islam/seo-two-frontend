import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Banner.css';

const Banner = () => {
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    fetch(`https://rjnecommerceseo-88b17f4b1cb1.herokuapp.com/banner`)
      .then((res) => res.json())
      .then((info) => setBanners(info));
  }, []);



  const handleSubscriber = (event) => {
    event.preventDefault();
    const subscriberEmail = event.target.subscriberEmail.value;

    const sunscribe = {
      subscriberEmail

    };

    const url = `https://rjnecommerceseo-88b17f4b1cb1.herokuapp.com/add-subscriber`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(sunscribe),
    })
      .then((res) => res.json())
      .then((result) => {

        alert('Thanks For Subscribe..');
      });
  };



  return (
    // <>
    //   {
    //     banners.map(banner =>
    //       <section id="home" className="slider-area slider-four fix p-relative">
    //         <div className="slider-active">
    //           <div
    //             className="single-slider slider-bg d-flex align-items-center"
    //             style={{
    //               background: "url(img/slider/slider_img_bg.png) no-repeat",
    //               backgroundPosition: "center center",
    //             }}
    //           >
    //             <div className="container">
    //               <div className="row justify-content-center pt-50 pb-150">
    //                 <div className="col-lg-7">

    //                   <div className="slider-content s-slider-content mt-200 banner-heading">
    //                     <h3 data-animation="fadeInUp" data-delay=".4s">
    //                       {banner.bannerHeading}
    //                     </h3>
    //                     <p data-animation="fadeInUp" data-delay=".6s">
    //                       {banner.bannerDetails}
    //                     </p>
    //                     <Link to='/order-now' class="template-btn mt-5" data-animation="fadeInRight" data-delay=".8s">Buy Now</Link>
    //                   </div>



    //                 </div>
    //                 <div className="col-lg-5">
    //                   <div
    //                     className="slider-img"
    //                     data-animation="fadeInUp"
    //                     data-delay=".4s"
    //                   >
    //                     <img src={banner.bannerImage} alt="slider_img05" />
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </section>
    //     )
    //   }
    // </>
    <>

      {
        banners.map(banner =>
          <section className="hero-area-three">
            <div className="container">
              <div className="row align-items-end justify-content-center">
                <div className="col-xl-5 col-lg-6 col-md-10">
                  <div className="hero-content">
                    <h1 className="hero-title wow fadeInDown" data-wow-delay="0.3s">
                      {banner.bannerHeading}
                    </h1>
                    <p className="wow fadeInLeft" data-wow-delay="0.4s">
                      {banner.bannerDetails}
                    </p>
                    <ul className="hero-btns">
                      <li className="wow fadeInUp" data-wow-delay="0.5s">
                        <a href={banner.buttonLink} className="template-btn">
                          Start a Project <i className="far fa-long-arrow-right" />
                        </a>
                      </li>
                      <li className="wow fadeInUp" data-wow-delay="0.6s">
                        <a href={banner.youtubeLink} className="video-btn" data-lity>
                          <i className="fas fa-play" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-6 col-md-9 col-sm-10">
                  <div className="hero-img text-center text-lg-right wow fadeInUp" data-wow-delay="0.3s">
                    <img src={banner.bannerImage} alt="Image" />
                  </div>
                </div>
              </div>
            </div>
          </section>

        )
      }


    </>
  );
};

export default Banner;

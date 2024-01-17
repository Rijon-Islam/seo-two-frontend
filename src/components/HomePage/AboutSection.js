import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AboutSection = () => {

  const [about, setAbout] = useState([]);

  useEffect(() => {
    fetch(`https://rjnecommerceseo-88b17f4b1cb1.herokuapp.com/about`)
      .then((res) => res.json())
      .then((info) => setAbout(info));
  }, []);


  return (
    
    <>


      {
        about.map(c => <section className="skill-section section-gap-bottom mt-5">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 col-md-8">
                <div className="skill-image text-center text-lg-left content-mb-md-50 wow fadeInLeft">
                  <img src={c.aboutImg} alt="Image" className="animate-float-bob-y" />
                </div>
              </div>
              <div className="col-lg-6 col-md-9">
                <div className="skill-content pl-xl-3">
                  <div className="section-heading mb-20">
                    <h2 className="title">{c.aboutHeading}</h2>
                    <span className="tagline">{c.aboutText}</span>
                  </div>
                  <p>
                    {c.aboutDetails}
                  </p>
                  <div className="skill-progress-bars">
                    <div className="progress-bar-item mt-35">
                      <div className="progress-bar-top">
                        <h5 className="title">{c.aboutPointone}</h5>
                        <span className="counter">95%</span>
                      </div>
                      <div className="progress-line" data-percentage={85}>
                        <div className="line" />
                      </div>
                    </div>
                    <div className="progress-bar-item mt-35">
                      <div className="progress-bar-top">
                        <h5 className="title">{c.aboutPointwo}</h5>
                        <span className="counter">96%</span>
                      </div>
                      <div className="progress-line" data-percentage={65}>
                        <div className="line" />
                      </div>
                    </div>
                    <div className="progress-bar-item mt-35">
                      <div className="progress-bar-top">
                        <h5 className="title">{c.aboutPointhree}</h5>
                        <span className="counter">95%</span>
                      </div>
                      <div className="progress-line" data-percentage={79}>
                        <div className="line" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>)
      }



    </>
  );
};

export default AboutSection;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AboutSection = () => {

    const [about, setAbout] = useState([]);

    useEffect(() => {
        fetch(`https://rjnecommerceseo-88b17f4b1cb1.herokuapp.com/about`)
            .then((res) => res.json())
            .then((info) => setAbout(info));
    }, []);



    const handleAboutSection = (event) => {
        event.preventDefault();

        const aboutHeading = event.target.aboutHeading.value;
        const aboutImg = event.target.aboutImg.value;
        const aboutText = event.target.aboutText.value;
        const aboutDetails = event.target.aboutDetails.value;
        const aboutPointone = event.target.aboutPointone.value;
        const aboutPointwo = event.target.aboutPointwo.value;
        const aboutPointhree = event.target.aboutPointhree.value;
        


        const aboutSection = {

            aboutImg,
            aboutText,
            aboutHeading,
            aboutDetails,
            aboutPointone,
            aboutPointwo,
            aboutPointhree,
            

        };

        const url = `https://rjnecommerceseo-88b17f4b1cb1.herokuapp.com/add-about`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(aboutSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('About is Updated');
            });
    };



    return (
        <div>
            <section id="services" class="services-area pt-120 pb-90 fix" >
                <div class="container">
                    <div class="row">

                    </div>
                    <div class="row">

                        <div class="col-lg-8 col-md-12">
                            <h2> Update About </h2>

                            {
                                about.length === 1 &&
                                <>
                                    {
                                        about.map(a =>
                                            <Link className='template-btn' to={`/${a._id}`}>
                                                Update About Section
                                            </Link>
                                        )
                                    }
                                </>
                            }
                            {
                                about.length === 0 &&


                                <form class="contact-form " onSubmit={handleAboutSection}>
                                    <div class="row">


                                     <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text"  name="aboutImg" placeholder="About Image" required />
                                            </div>
                                        </div>


                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text"  name="aboutHeading" placeholder="About Heading" required />
                                            </div>
                                        </div>

                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text"  name="aboutText" placeholder="About Text" required />
                                            </div>
                                        </div>

                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text"  name="aboutDetails" placeholder="About Details" required />
                                            </div>
                                        </div>


                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text"  name="aboutPointone" placeholder="About Point One" required />
                                            </div>
                                        </div>

                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text"  name="aboutPointwo" placeholder="About Point Two" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text"  name="aboutPointhree" placeholder="About Point Three" required />
                                            </div>
                                        </div>

                                      

                                        <div class="slider-btn">
                                            <button class="template-btn" data-animation="fadeInRight" data-delay=".8s"> Update About </button>
                                        </div>
                                    </div>

                                </form>
                            }



                        </div>


                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutSection;
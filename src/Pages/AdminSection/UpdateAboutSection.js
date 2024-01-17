import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const UpdateAboutSection = () => {

    const [about, setAbout] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://rjnecommerceseo-88b17f4b1cb1.herokuapp.com/about-us/${id}`)
            .then((res) => res.json())
            .then((info) => setAbout(info));
    }, [id]);



    const handleAboutSection = (event) => {
        event.preventDefault();
        const aboutImg = event.target.aboutImg.value;
        const aboutHeading = event.target.aboutHeading.value;
        const aboutText = event.target.aboutText.value;
        const aboutDetails = event.target.aboutDetails.value;
        const aboutPointone = event.target.aboutPointone.value;
        const aboutPointwo = event.target.aboutPointwo.value;
        const aboutPointhree = event.target.aboutPointhree.value;
       



        const aboutSection = {
            aboutText,
            aboutHeading,
            aboutDetails,
            aboutPointone,
            aboutPointwo,
            aboutPointhree,
            aboutImg,

        };

        const url = `https://rjnecommerceseo-88b17f4b1cb1.herokuapp.com/update-about/${id}`;
        fetch(url, {
            method: "PUT",
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


                            <form class="contact-form " onSubmit={handleAboutSection}>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text" name="aboutImg" defaultValue={about.aboutImg} placeholder="About Image" required />
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text" name="aboutText" defaultValue={about.aboutText} placeholder="About Text" required />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text" name="aboutHeading" defaultValue={about.aboutHeading} placeholder="About Heading" required />
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text" name="aboutDetails" defaultValue={about.aboutDetails} placeholder="About Details" required />
                                        </div>
                                    </div>


                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text" name="aboutPointone" defaultValue={about.aboutPointone} placeholder="About Point One" required />
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text" name="aboutPointwo" defaultValue={about.aboutPointwo} placeholder="About Point Two" required />
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-email mb-20">
                                            <input type="text" name="aboutPointhree" defaultValue={about.aboutPointhree} placeholder="About Ponit Three" required />
                                        </div>
                                    </div>
                                    <div class="slider-btn">
                                        <button class="template-btn" data-animation="fadeInRight" data-delay=".8s"> Update About </button>
                                    </div>
                                </div>

                            </form>



                        </div>


                    </div>
                </div>
            </section>
        </div>
    );
};

export default UpdateAboutSection;
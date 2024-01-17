import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const EditVideoText = () => {

    const [videotext, setVideo] = useState([]);
    const { id } = useParams();


    useEffect(() => {
        fetch(`https://rjnecommerceseo-88b17f4b1cb1.herokuapp.com/videos/${id}`)
            .then((res) => res.json())
            .then((info) => setVideo(info));
    }, []);




    const handleVideoText = (event) => {
        event.preventDefault();
        const imageLink = event.target.imageLink.value;
        const videoLink = event.target.videoLink.value;
        const videoSectionTitle = event.target.videoSectionTitle.value;
        const videoSectionText = event.target.videoSectionText.value;


        const videoSection = {
            imageLink,
            videoLink,
            videoSectionTitle,
            videoSectionText,


        };

        const url = `https://rjnecommerceseo-88b17f4b1cb1.herokuapp.com/update-videos/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(videoSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert(' Video Text is Updated');
            });
    };




    return (
        <div>
            {
                <section id="services" class="services-area pt-120 pb-90 fix" >
                    <div class="container">
                        <div class="row">

                        </div>
                        <div class="row">

                            <div class="col-lg-8 col-md-12">
                                <h2> Update Video Text </h2>

                                <form class="contact-form " onSubmit={handleVideoText}>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text" name="imageLink" defaultValue={videotext.imageLink} placeholder="Image URL" required />
                                            </div>
                                        </div>

                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text" name="videoLink" defaultValue={videotext.videoLink} placeholder="Video URL" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text" name="videoSectionTitle" defaultValue={videotext.videoSectionTitle} placeholder="Video Section Title" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text" name="videoSectionText" defaultValue={videotext.videoSectionText} placeholder="Video Section Text" required />
                                            </div>
                                        </div>


                                        <div class="slider-btn">
                                            <button class="template-btn" data-animation="fadeInRight" data-delay=".8s"> Update Video Text</button>
                                        </div>
                                    </div>

                                </form>



                            </div>



                        </div>
                    </div>

                </section>
            }
        </div>
    );
};

export default EditVideoText;
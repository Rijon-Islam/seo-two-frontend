import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const UpdateVideoSection = () => {

    const [video, setVideo] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://rjnecommerceseo-88b17f4b1cb1.herokuapp.com/videos-items/${id}`)
            .then((res) => res.json())
            .then((info) => setVideo(info));
    }, [id]);


    const handleVideoSection = (event) => {
        event.preventDefault();
        const facebookLink = event.target.facebookLink.value;
        const twitterLink = event.target.twitterLink.value;
        const linkedinLink = event.target.linkedinLink.value;
        const youtubeLink = event.target.youtubeLink.value;
        const memberImg = event.target.memberImg.value;
        const membername = event.target.membername.value;
        const memberPosition = event.target.memberPosition.value;


        const videoSection = {
            facebookLink,
            twitterLink,
            linkedinLink,
            youtubeLink,
            memberImg,
            membername,
            memberPosition,


        };

        const url = `https://rjnecommerceseo-88b17f4b1cb1.herokuapp.com/videos-items/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(videoSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Video Section is Updated');
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
                            <h2> Update Video </h2>


                            <form class="contact-form " onSubmit={handleVideoSection}>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text"  name="facebookLink" defaultValue={video.facebookLink} placeholder="Facebook URL" required />
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text"  name="twitterLink" defaultValue={video.twitterLink} placeholder=" Twitter URL" required />
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text"  name="linkedinLink" defaultValue={video.linkedinLink} placeholder="Linkedin URL" required />
                                        </div>
                                    </div>


                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text"  name="youtubeLink" defaultValue={video.youtubeLink} placeholder="Youtube URL" required />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text"  name="memberImg" defaultValue={video.memberImg} placeholder="Member Img URL" required />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text"  name="membername" defaultValue={video.membername} placeholder="Member Name" required />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text"  name="memberPosition" defaultValue={video.memberPosition} placeholder="Member Position" required />
                                        </div>
                                    </div>

                                    <div class="slider-btn">
                                        <button class="template-btn" data-animation="fadeInRight" data-delay=".8s"> Update Video Section </button>
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

export default UpdateVideoSection;
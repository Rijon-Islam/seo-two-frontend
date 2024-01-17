import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const VideoSection = () => {

    const [video, setVideo] = useState([]);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`https://rjnecommerceseo-88b17f4b1cb1.herokuapp.com/videos`)
            .then((res) => res.json())
            .then((info) => setVideo(info));
    }, []);

    useEffect(() => {
        fetch(`https://rjnecommerceseo-88b17f4b1cb1.herokuapp.com/videos-items`)
            .then((res) => res.json())
            .then((info) => setItems(info));
    }, []);


    const handleVideoSection = (event) => {
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

        const url = `https://rjnecommerceseo-88b17f4b1cb1.herokuapp.com/add-video`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(videoSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert(' Video Section is Updated');
            });
    };

    const handleAddItem = (event) => {
        event.preventDefault();
        const facebookLink = event.target.facebookLink.value;
        const twitterLink = event.target.twitterLink.value;
        const linkedinLink = event.target.linkedinLink.value;
        const youtubeLink = event.target.youtubeLink.value;
        const memberImg = event.target.memberImg.value;
        const membername = event.target.membername.value;
        const memberPosition = event.target.memberPosition.value;

        const itemSection = {
            facebookLink,
            twitterLink,
            linkedinLink,
            youtubeLink,
            memberImg,
            membername,
            memberPosition

        };

        const url = `https://rjnecommerceseo-88b17f4b1cb1.herokuapp.com/add-video-item`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(itemSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert(' Team Members Item is Added');
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
                            <h2> Update Video Section </h2>
                            {
                                video.length === 1 &&
                                <> {
                                    video.map(s => <Link className='template-btn' to={`/videotext-edit/${s._id}`}>Update Video</Link>)
                                }</>

                            }
                            {
                                video.length === 0 &&
                                <form class="contact-form " onSubmit={handleVideoSection}>
                                    <div class="row">


                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text" name="imageLink" placeholder="Image URL" required />
                                            </div>
                                        </div>

                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text" name="videoLink" placeholder="Video URL" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text" name="videoSectionTitle" placeholder="Video Section Title" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text" name="videoSectionText" placeholder="Video Section Text" required />
                                            </div>
                                        </div>


                                        <div class="slider-btn">
                                            <button class="template-btn" data-animation="fadeInRight" data-delay=".8s"> Update Video Section </button>
                                        </div>
                                    </div>

                                </form>
                            }

                            <h2>Add Team Members Item</h2>
                            <form class="contact-form" onSubmit={handleAddItem}>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text" name="facebookLink" placeholder="Facebook URL" required />
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text" name="twitterLink" placeholder="Twitter URL" required />
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text" name="linkedinLink" placeholder="Linkedin URL" required />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text" name="youtubeLink" placeholder="Youtube URL" required />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text" name="memberImg" placeholder="Member Img URL" required />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text" name="membername" placeholder="Member Name" required />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text" name="memberPosition" placeholder="Member Position" required />
                                        </div>
                                    </div>

                                    <div class="slider-btn">
                                        <button class="template-btn" data-animation="fadeInRight" data-delay=".8s"> Add Team Member </button>
                                    </div>
                                </div>

                            </form>



                        </div>

                       

                        <div className="row team-member-items justify-content-center">
                            {
                                items.map(c =>
                                    <div className="col-xl-3 col-lg-4 col-sm-6">
                                        <div className="member-item mt-30">
                                            <div className="member-photo">
                                                <img src={c.memberImg} alt="Image One" />
                                               
                                            </div>
                                            <h4 className="name"><Link to={`/video/${c._id}`}>{c.membername}</Link></h4>
                                            <span className="title">{c.memberPosition}</span>
                                        </div>
                                    </div>)
                            }


                        </div>

                    </div>
                </div>

            </section>

        </div>
    );
};

export default VideoSection;
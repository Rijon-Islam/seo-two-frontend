import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {

    const [service, setService] = useState([]);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`https://rjnecommerceseo-88b17f4b1cb1.herokuapp.com/service`)
            .then((res) => res.json())
            .then((info) => setService(info));
    }, []);

    useEffect(() => {
        fetch(`https://rjnecommerceseo-88b17f4b1cb1.herokuapp.com/service-items`)
            .then((res) => res.json())
            .then((info) => setItems(info));
    }, []);


    const handleServiceSection = (event) => {
        event.preventDefault();
        const servicesubHeading = event.target.servicesubHeading.value;
        const serviceHeading = event.target.serviceHeading.value;


        const serviceSection = {
            servicesubHeading,
            serviceHeading,


        };

        const url = `https://rjnecommerceseo-88b17f4b1cb1.herokuapp.com/add-Service`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(serviceSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert(' Service is Updated');
            });
    };

    const handleAddItem = (event) => {
        event.preventDefault();
        const serviceIcon = event.target.serviceIcon.value;
        const serviceTitle = event.target.serviceTitle.value;
        const serviceDetails = event.target.serviceDetails.value;

        const itemSection = {
            serviceIcon,
            serviceTitle,
            serviceDetails,
        };

        const url = `https://rjnecommerceseo-88b17f4b1cb1.herokuapp.com/add-service-item`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(itemSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert(' Item is Added');
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
                            <h2> Update Service </h2>
                            {
                                service.length === 1 &&
                                <> {
                                    service.map(s => <Link className='template-btn' to={`/servicetext-edit/${s._id}`}>Update Service</Link>)
                                }</>

                            }
                            {
                                service.length === 0 &&
                                <form class="contact-form " onSubmit={handleServiceSection}>
                                    <div class="row">


                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text" name="serviceHeading" placeholder="Service Heading" required />
                                            </div>
                                        </div>

                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text" name="servicesubHeading" placeholder="Service Sub Heading" required />
                                            </div>
                                        </div>





                                        <div class="slider-btn">
                                            <button class="template-btn" data-animation="fadeInRight" data-delay=".8s"> Update Services </button>
                                        </div>
                                    </div>

                                </form>
                            }

                            <h2>Add Service</h2>
                            <form class="contact-form" onSubmit={handleAddItem}>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text" name="serviceIcon" placeholder="Service Icon" required />
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text" name="serviceTitle" placeholder="Service Title" required />
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text" name="serviceDetails" placeholder=" Service Details" required />
                                        </div>
                                    </div>

                                    <div class="slider-btn">
                                        <button class="template-btn" data-animation="fadeInRight" data-delay=".8s"> Add Service </button>
                                    </div>
                                </div>

                            </form>



                        </div>

                     

                        <section className="service-section section-gap bg-color-secondary section-doted-bg mt-5">
                            <div className="">

                                

                                <div className="iconic-bordered-boxes white-version">
                                    {
                                        items.map(c => <div className="single-box">
                                            <div className="icon">
                                                <img src={c.serviceIcon} alt="Code" />
                                            </div>
                                            <h4 className="title">
                                            <Link to={`/service-edit/${c._id}`}>{c.serviceTitle}</Link>
                                            </h4>
                                            <p>
                                                {c.serviceDetails}
                                            </p>
                                        </div>
                                        )
                                    }






                                </div>
                            </div>
                        </section>

                    </div>
                </div>

            </section>

        </div>
    );
};

export default ServicesSection;
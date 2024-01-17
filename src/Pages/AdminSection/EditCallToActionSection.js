import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const EditCallToActionSection = () => {

    const [call, setAction] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://rjnecommerceseo-88b17f4b1cb1.herokuapp.com/actions/${id}`)
            .then((res) => res.json())
            .then((info) => setAction(info));
    }, [call]);


    const handleActionSection = (event) => {
        event.preventDefault();
        const heading = event.target.heading.value;
        const subHeading = event.target.subHeading.value;
        const buttonText = event.target.buttonText.value;
        const buttonLink = event.target.buttonLink.value;
       


        const actionSection = {
            heading,
            subHeading,
            buttonText,
            buttonLink,
           

        };

        const url = `https://rjnecommerceseo-88b17f4b1cb1.herokuapp.com/update-actions/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(actionSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Action is Updated');
            });
    };



    return (

        <>
        <HeaderBottom></HeaderBottom>
        <div>
            <section id="services" class="services-area pt-120 pb-90 fix" >
                <div class="container">
                    <div class="row">

                    </div>
                    <div class="row">

                        <div class="col-lg-8 col-md-12">
                            <h2> Update Action</h2>

                            <form class="contact-form " onSubmit={handleActionSection}>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text"  name="heading" defaultValue={call.heading} placeholder="Heading" required />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-email mb-20">
                                            <input type="text"  name="subHeading" defaultValue={call.subHeading} placeholder="Sub Heading" required />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-subject mb-20">
                                            <input type="text"  name="buttonText" defaultValue={call.buttonText} placeholder="Button Text" required />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-subject mb-20">
                                            <input type="text"  name="buttonLink" defaultValue={call.buttonLink} placeholder="Button URL" required />
                                        </div>
                                    </div>
                                

                                    <div class="slider-btn">
                                        <button class="template-btn" data-animation="fadeInRight" data-delay=".8s">Update Action</button>
                                    </div>
                                </div>

                            </form>

                        </div>


                    </div>
                </div>
            </section>
        </div>
        </>
        
    );
};

export default EditCallToActionSection;
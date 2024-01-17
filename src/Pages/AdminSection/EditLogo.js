import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const EditLogo = () => {


    const [editlogo, setLogo] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://rjnecommerceseo-88b17f4b1cb1.herokuapp.com/logo/${id}`)
            .then((res) => res.json())
            .then((info) => setLogo(info));
    }, []);



    const handleLogo = (event) => {
        event.preventDefault();
        const logo = event.target.logo.value;



        const logoSection = {
            logo,


        };

        const url = `https://rjnecommerceseo-88b17f4b1cb1.herokuapp.com/logo/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(logoSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Logo is Updated');
            });
    };



    return (
        <>
            <section id="services" class="services-area pt-120 pb-90 fix" >
                <div class="container">
                    <div class="row">

                    </div>
                    <div class="row">

                        <div class="col-lg-8 col-md-12">
                            <h2> Update Your Logo</h2>

                            

                                <form class="contact-form " onSubmit={handleLogo}>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text" id="firstn" name="logo" defaultValue={editlogo.logo} placeholder="Submit Your Logo" required />
                                            </div>
                                        </div>

                                        <div class="slider-btn">
                                            <button class="template-btn" data-animation="fadeInRight" data-delay=".8s"> Update Your Logo</button>
                                        </div>
                                    </div>

                                </form>
                            

                        </div>


                    </div>
                </div>
            </section>



        </>
    );
};

export default EditLogo;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const FooterContact = () => {

    const [footeraddress, setAddressfooter] = useState([]);

    useEffect(() => {
        fetch(`https://rjnecommerceseo-88b17f4b1cb1.herokuapp.com/footer-address`)
            .then((res) => res.json())
            .then((info) => setAddressfooter(info));
    }, []);


    const handlefooterAddress = (event) => {
        event.preventDefault();

        const footeraddress = event.target.footeraddress.value;
        const footerPhone = event.target.footerPhone.value;
        const footerEmail = event.target.footerEmail.value;




        const contactSection = {

            footeraddress,
            footerPhone,
            footerEmail,




        };

        const url = `https://rjnecommerceseo-88b17f4b1cb1.herokuapp.com/add-footer-address`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(contactSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Footer Address is Updated');
            });
    };



    return (
        <div className='container vh-100 d-flex align-items-center justify-content-center'>
            <section id="services" class="services-area pt-120 pb-90 fix" >



                <div class="container">
                    <div class="row">

                    </div>
                    <div class="row">

                        <div class="col-lg-8 col-md-12">


                            <h2> Update Footer Contact </h2>

                            {
                                footeraddress.length === 1 &&
                                <>
                                    {
                                        footeraddress.map(c =>
                                            footeraddress.map(c =>
                                                <Link className='template-btn' to={`/edit-address-footer/${c._id}`}> Edit Address</Link>)


                                        )
                                    }
                                </>
                            }
                            {
                                footeraddress.length === 0 &&

                                <form class="contact-form " onSubmit={handlefooterAddress}>
                                    <div class="row">




                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">

                                                <input type="text"  name="footeraddress" placeholder=" Footer Address" required />
                                            </div>
                                        </div>

                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text"  name="footerPhone" placeholder=" Footer Phone" required />
                                            </div>
                                        </div>

                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text"  name="footerEmail" placeholder=" Footer Email" required />
                                            </div>
                                        </div>



                                        <div class="slider-btn">
                                            <button class="template-btn" data-delay=".8s"> Add Footer Address Details</button>
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

export default FooterContact;
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { useNavigate, useParams } from 'react-router-dom';

const OrderNow = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const { id } = useParams();
    const [price, setPrice] = useState([])
    useEffect(() => {
        fetch(`https://rjnecommerceseo-88b17f4b1cb1.herokuapp.com/pricing/${id}`)
            .then((res) => res.json())
            .then((info) => setPrice(info));
    }, []);


    const handleNewOrder = (event) => {
        event.preventDefault();
        const price = event.target.price.value;
        const packageName = event.target.packageName.value;
        const customerEmail = event.target.customerEmail.value;
        const customerName = event.target.customerName.value;
        const customerAddress = event.target.customerAddress.value;
        const customerCountry = event.target.customerCountry.value;
        const paymentStatus = event.target.paymentStatus.value;
        const orderStatus = event.target.orderStatus.value;
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        });


        const order = {
            packageName,
            price,
            customerEmail,
            customerName,
            customerAddress,
            customerCountry,
            paymentStatus,
            orderStatus,
            orderDate: formattedDate,

        };

        const url = `https://rjnecommerceseo-88b17f4b1cb1.herokuapp.com/new-order`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(order),
        })
            .then((res) => res.json())
            .then((result) => {
                navigate('/pending-order');
            });
    };


    return (
        <div>
            <section id="services" class="services-area pt-120 pb-90 fix" >
                <div class="container">
                    <div class="row">

                    </div>
                    <div class="row">
                        <h2>SEO Plan</h2>


                        <form class="contact-form mt-5" onSubmit={handleNewOrder}>
                            <div class="row">

                                <div class="col-lg-12">
                                    <div class="contact-field p-relative c-name mb-20">
                                        <input disabled type="text" value={price.packageName} name="packageName" required />
                                    </div>
                                    <div class="contact-field p-relative c-name mb-20">
                                        <input disabled type="number" value={price.packagePrice} name="price" required />
                                    </div>
                                    <div class="contact-field p-relative c-name mb-20">
                                        <input disabled type="email" value={user?.email} name="customerEmail" required />
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="contact-field p-relative c-email mb-20">
                                        <input type="text" name="customerName" placeholder="Full Name" required />
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="contact-field p-relative c-subject mb-20">
                                        <input type="text" name="customerAddress" placeholder="Your Address" required />
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="contact-field p-relative c-subject mb-20">
                                        <input type="text" name="customerCountry" placeholder="Your Country" required />
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="contact-field p-relative c-subject mb-20">
                                        <input type="text" hidden id="text" value='UnPaid' name="paymentStatus" required />
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="contact-field p-relative c-subject mb-20">
                                        <input type="text" hidden id="text" value='Pending' name="orderStatus" required />
                                    </div>
                                </div>

                                <div class="slider-btn">
                                    <button class="template-btn" data-animation="fadeInRight" data-delay=".8s">Place Order Now</button>
                                </div>
                            </div>

                        </form>



                    </div>
                </div>
            </section>
        </div>
    );
};

export default OrderNow;
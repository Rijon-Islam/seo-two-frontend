import React, { useEffect, useState } from 'react';
import './Admin.css';
import { Link, useParams } from 'react-router-dom';
import AdminMenu from '../../components/AdminMenu';

const PaymentStatus = () => {
    const [order, setOrder] = useState([]);
    const {id} = useParams();



    useEffect(() => {
        fetch(`https://rjnecommerceseo-88b17f4b1cb1.herokuapp.com/order/${id}`)
            .then((res) => res.json())
            .then((info) => setOrder(info));
    }, []);

    const handlePaymentStatus = (event) => {
        event.preventDefault();
        const paymentStatus = event.target.paymentStatus.value;



        const status = {
            paymentStatus,
        };

        const url = `https://rjnecommerceseo-88b17f4b1cb1.herokuapp.com/order/${order._id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(status),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('PaymentStatus is Updated');
            });
    };


    const handleOrderStatus = (event) => {
        event.preventDefault();
        
        const orderStatus = event.target.orderStatus.value;



        const orderSec = {
           
            orderStatus,
        };

        const url = `https://rjnecommerceseo-88b17f4b1cb1.herokuapp.com/order-status/${order._id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(orderSec),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('OrderStatus is Updated');
            });
    };

    return (
        <div className='container'>
            <section id="services" class="services-area pt-120 pb-90 fix" >
                <div class="container">
                    <div class="row">

                    </div>
                    <div class="row">

                        <div>
                            <h2>Welcome to Admin Panel</h2>
                            <AdminMenu></AdminMenu>

                            <h2>Update Payment Status</h2>

                            <form onSubmit={handlePaymentStatus}>
                            <div class="col-lg-6">
                                        <div class="contact-field p-relative c-name mb-20">
                                        <select name="paymentStatus" id="cars">
                                    <option value="UnPaid">UnPaid</option>
                                    <option value="Paid">Paid</option>
                                </select>
                                        </div>
                                    </div>
                                <div class="slider-btn">
                                        <button class="template-btn" data-animation="fadeInRight" data-delay=".8s"> Update Payment </button>
                                    </div>
                            </form>

                            <h2 className='mt-5'>Upadte Order Status</h2>

                            <form onSubmit={handleOrderStatus}>
                            <div class="col-lg-6">
                                        <div class="contact-field p-relative c-name mb-20">
                                        <select name="orderStatus" id="cars">
                                    <option value="Pending">Pending</option>
                                    <option value="Delivered">Delivered</option>
                                </select>
                                        </div>
                                    </div>
                                <div class="slider-btn">
                                        <button class="template-btn" data-animation="fadeInRight" data-delay=".8s"> Update Order </button>
                                    </div>
                            </form>

                        </div>


                    </div>
                </div> 
            </section>
        </div>
    );
};

export default PaymentStatus;
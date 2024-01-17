import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TestimonialSection from './../../components/HomePage/TestimonialSection';

const Pricing = () => {


    

    const [pricing, setPricing] = useState([]);


  

    useEffect(() => {
        fetch(`https://rjnecommerceseo-88b17f4b1cb1.herokuapp.com/testimonials`)
            .then((res) => res.json())
            .then((info) => setPricing(info));
    }, []);




    return (
        <section id="services" class="services-area pt-120 pb-90 fix">
            <div className='mt-5'>
                <div class="container">
                    <div class="row">

                    </div>
                    <div class="row">

                        <div class="col-lg-8 col-md-12">


                        </div>

                        <div className="row no-gutters align-items-center justify-content-center">

                            {
                                pricing.map(p => <div className="col-lg-4 col-md-7 col-sm-8">
                                    <div className="pricing-table pricing-table-two">
                                        <h4 className="plan-name">{p.packageName}</h4>
                                        
                                        <div className="plan-price">
                                            <span className="currency">$</span>
                                            <span className="price">{p.packagePrice}</span>
                                        </div>
                                        <Link to={`/package-edit/${p._id}`} className="template-btn bordered-btn">
                                            Edit <i className="far fa-long-arrow-right" />
                                        </Link>

                                      
                                    </div>
                                </div>)
                            }




                        </div>


                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">

                        </div>
                    </div>


                </div>




            </div>
        </section>
    );
};

export default Pricing;
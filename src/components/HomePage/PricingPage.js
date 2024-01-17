import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PricingPage = () => {

    const [pricing, setPricing] = useState([]);


    useEffect(() => {
        fetch(`https://rjnecommerceseo-88b17f4b1cb1.herokuapp.com/testimonials`)
            .then((res) => res.json())
            .then((info) => setPricing(info));
    }, []);

    const [action, setAction] = useState([]);

    useEffect(() => {
        fetch(`https://rjnecommerceseo-88b17f4b1cb1.herokuapp.com/actions`)
            .then((res) => res.json())
            .then((info) => setAction(info));
    }, []);


    return (
        <>
            <section class="page-title-area">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-6">
                            <h2 class="page-title">Pricing Plan</h2>
                        </div>
                        <div class="col-md-6">
                            <ul class="breadcrumb-nav">
                                <li><a href="/">Home</a></li>
                                <li>Pricing Plan</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pricing-section pricing-section-line section-gap bg-color-off-white">
                <div className="container">
                    <div className="section-heading text-center mb-50">
                        <h2 className="title">Best Pricing For Business</h2>
                        <span className="tagline">Best SEO Optimization Agency</span>
                    </div>
                    <div className="row no-gutters align-items-center justify-content-center">
                        {
                            pricing.map(b => b.packageName === 'Basic' &&

                                <div className="col-lg-4 col-md-7 col-sm-8">
                                    <div className="pricing-table pricing-table-two">
                                        <h4 className="plan-name">{b.packageName}</h4>
                                        <p>
                                            {b.packageDetails}
                                        </p>
                                        <div className="plan-price">
                                            <span className="currency">$</span>
                                            <span className="price">{b.packagePrice}</span>
                                        </div>
                                        <Link to={`/order-now/${b._id}`} className="template-btn bordered-btn">
                                            {b.packageButtonText} <i className="far fa-long-arrow-right" />
                                        </Link>

                                        <ul className="feature-list">
                                            <li><i className="far fa-check" /> {b.packagePointOne}</li>
                                            <li><i className="far fa-check" /> {b.packagePointTwo}</li>
                                            <li><i className="far fa-check" /> {b.packagePointThree}</li>
                                            <li><i className="far fa-check" /> {b.packagePointFour}</li>
                                            <li><i className="far fa-check" /> {b.packagePointFive}</li>
                                            <li><i className="far fa-check" /> {b.packagePointSix}</li>
                                            <li><i className="far fa-check" /> {b.packagePointSeven}</li>

                                        </ul>
                                    </div>
                                </div>)
                        }

                        {
                            pricing.map(s => s.packageName === 'Standard' &&

                                <div className="col-lg-4 col-md-8 col-sm-9">
                                    <div className="pricing-table pricing-table-two featured-plan">
                                        <h4 className="plan-name">{s.packageName}</h4>
                                        <p>
                                            {s.packageDetails}
                                        </p>
                                        <div className="plan-price">
                                            <span className="currency">$</span>
                                            <span className="price"> {s.packagePrice}</span>
                                        </div>
                                        <Link to={`/order-now/${s._id}`} className="template-btn bordered-btn">
                                            {s.packageButtonText} <i className="far fa-long-arrow-right" />
                                        </Link>

                                        <ul className="feature-list">
                                            <li><i className="far fa-check" /> {s.packagePointOne}</li>
                                            <li><i className="far fa-check" /> {s.packagePointTwo}</li>
                                            <li><i className="far fa-check" /> {s.packagePointThree}</li>
                                            <li><i className="far fa-check" /> {s.packagePointFour}</li>
                                            <li><i className="far fa-check" /> {s.packagePointFive}</li>
                                            <li><i className="far fa-check" /> {s.packagePointSix}</li>
                                            <li><i className="far fa-check" /> {s.packagePointSeven}</li>
                                            <li><i className="far fa-check" /> {s.packagePointEight}</li>
                                            <li><i className="far fa-check" /> {s.packagePointNine}</li>
                                            <li><i className="far fa-check" /> {s.packagePointTen}</li>
                                        </ul>
                                        <span className="featured-label">
                                            Popular
                                        </span>
                                    </div>
                                </div>)
                        }

                        {
                            pricing.map(p => p.packageName === 'Premium' &&

                                <div className="col-lg-4 col-md-7 col-sm-8">
                                    <div className="pricing-table pricing-table-two">
                                        <h4 className="plan-name">{p.packageName}</h4>
                                        <p>
                                            {p.packageDetails}
                                        </p>
                                        <div className="plan-price">
                                            <span className="currency">$</span>
                                            <span className="price">{p.packagePrice}</span>
                                        </div>
                                        <Link to={`/order-now/${p._id}`} className="template-btn bordered-btn">
                                            {p.packageButtonText} <i className="far fa-long-arrow-right" />
                                        </Link>

                                        <ul className="feature-list">
                                            <li><i className="far fa-check" /> {p.packagePointOne}</li>
                                            <li><i className="far fa-check" /> {p.packagePointTwo}</li>
                                            <li><i className="far fa-check" /> {p.packagePointThree}</li>
                                            <li><i className="far fa-check" /> {p.packagePointFour}</li>
                                            <li><i className="far fa-check" /> {p.packagePointFive}</li>
                                            <li><i className="far fa-check" /> {p.packagePointSix}</li>
                                            <li><i className="far fa-check" /> {p.packagePointSeven}</li>

                                        </ul>
                                    </div>
                                </div>)
                        }

                    </div>
                </div>
            </section>

            {
                action.map(a =>
                    <section className="call-to-action style-two bg-color-secondary">
                        <div className="container">
                            <div className="row align-items-center justify-content-between">
                                <div className="col-lg-7">
                                    <div className="cta-content">
                                        <h2 className="title">{a.heading}</h2>
                                        <p className="subtitle">{a.subHeading}</p>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <p className="cta-note">Get Every Single Updates</p>
                                    <a href={a.buttonLink} className="template-btn bordered-white">{a.buttonText} <i className="far fa-long-arrow-right" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="cta-shape">
                            <img src="assets/img/shape/cta-shape.png" alt="Shape" />
                        </div>
                    </section>)
            }




        </>

    );
};

export default PricingPage;
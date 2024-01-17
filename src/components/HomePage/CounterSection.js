import React, { useEffect, useState } from 'react';

const CounterSection = () => {

    const [countersec, setCounter] = useState([]);

    useEffect(() => {
        fetch(`https://rjnecommerceseo-88b17f4b1cb1.herokuapp.com/counters`)
            .then((res) => res.json())
            .then((info) => setCounter(info));
    }, []);

    return (
        <>
            {
                countersec.map(e => <section className="counter-section section-gap-top-less">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-3 col-md-5 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="counter-item counter-box mt-30">
                                    <div className="icon">
                                        <i className="flaticon-rating" />
                                    </div>
                                    <div className="counter-wrap">
                                        <span className="counter">{e.happyClientsNumber}</span>
                                        <span className="suffix">+</span>
                                    </div>
                                    <p className="title">{e.happyClientsText}</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-5 col-sm-6 wow fadeInUp" data-wow-delay="0.2s">
                                <div className="counter-item counter-box bg-color-2 mt-30">
                                    <div className="icon">
                                        <i className="flaticon-web-design" />
                                    </div>
                                    <div className="counter-wrap">
                                        <span className="counter">{e.projectCompleteNumber}</span>
                                        <span className="suffix">+</span>
                                    </div>
                                    <p className="title">{e.projectCompleteText}</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-5 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="counter-item counter-box bg-color-3 mt-30">
                                    <div className="icon">
                                        <i className="flaticon-checked" />
                                    </div>
                                    <div className="counter-wrap">
                                        <span className="counter">{e.yearofExperienceNumber}</span>
                                        <span className="suffix">+</span>
                                    </div>
                                    <p className="title">{e.yearofExperienceText}</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-5 col-sm-6 wow fadeInUp" data-wow-delay="0.4s">
                                <div className="counter-item counter-box bg-color-4 mt-30">
                                    <div className="icon">
                                        <i className="flaticon-winner" />
                                    </div>
                                    <div className="counter-wrap">
                                        <span className="counter">{e.winingAwardNumber}</span>
                                        <span className="suffix">+</span>
                                    </div>
                                    <p className="title">{e.winingAwardText}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                )

            }



        </>
    );
};

export default CounterSection;
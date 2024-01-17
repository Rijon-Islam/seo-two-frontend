import React, { useEffect, useState } from 'react';

const CallToAction = () => {

    const [action, setAction] = useState([]);

    useEffect(() => {
        fetch(`https://rjnecommerceseo-88b17f4b1cb1.herokuapp.com/actions`)
            .then((res) => res.json())
            .then((info) => setAction(info));
    }, []);
    return (
        <>

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

export default CallToAction;
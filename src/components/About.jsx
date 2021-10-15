import React from 'react';
import AboutCards from './AboutCards';

const About = () => {
    return (
        <section className="bg-light" id="about">
            <div className="container">
                <div className="row text-center mb-5">
                    <h2 className="fw-bold mt-5 text-uppercase fs-5">What we do</h2>
                </div>
                <AboutCards />
            </div>
        </section>
    );
}

export default About;
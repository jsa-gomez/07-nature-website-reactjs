import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
    return (
        <main className="bg-img">
            <div className="container">
                    <Navbar />
                <div className="row align-items-center align-content-center" style={{ height: "600px" }}>
                    <div className="col-10 text-white mb-5 text-center mx-auto">
                        <h1 className="text-uppercase mb-3 fw-bold">responsive layout</h1>
                        <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque rem veritatis dolorem voluptas dolore odio pariatur explicabo nesciunt non et obcaecati repellat est sint aliquid, temporibus ab ad eum nisi.</p>
                        <a href="#about" className="btn btn-info text-white">Read More</a>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Hero;
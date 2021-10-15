import React from 'react';
import img_01 from './../img/img_01.jpg';
import img_02 from './../img/img_02.jpg';
import img_03 from './../img/img_03.jpg';
import img_04 from './../img/img_04.jpg';

const Portfolio = () => {
    return (  
        <section id="portfolio">
            <div className="container">
                <div className="row text-center mb-5">
                    <h2 className="fw-bold mt-5 text-uppercase fs-5">OUR PORTFOLIO</h2>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="mb-5">
                            <img src={img_01} alt="" className="img-fluid rounded"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-5">
                            <img src={img_02} alt="" className="img-fluid rounded"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-5">
                            <img src={img_03} alt="" className="img-fluid rounded"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-5">
                            <img src={img_04} alt="" className="img-fluid rounded"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Portfolio;
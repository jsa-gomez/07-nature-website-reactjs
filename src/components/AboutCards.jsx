import React from 'react';

const AboutCards = () => {
    return (  
        <div className="row">
            <div className="col-md-3">
                <div className="bg-white text-center p-4 mb-3 shadow about_card">
                    <i class="bi bi-pencil text-info fs-2"></i>
                    <h5 className="mt-3">Creative Ideas</h5>
                    <p className="fw-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolor alias, impedit adipisci repudiandae incidunt.</p>
                </div>
            </div>
            <div className="col-md-3">
                <div className="bg-white text-center p-4 mb-3 shadow about_card">
                    <i class="bi bi-cash text-info fs-2"></i>
                    <h5 className="mt-3">Creative Ideas</h5>
                    <p className="fw-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolor alias, impedit adipisci repudiandae incidunt.</p>
                </div>
            </div>
            <div className="col-md-3">
                <div className="bg-white text-center p-4 mb-3 shadow about_card">
                    <i class="bi bi-lightbulb text-info fs-2"></i>
                    <h5 className="mt-3">Creative Ideas</h5>
                    <p className="fw-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolor alias, impedit adipisci repudiandae incidunt.</p>
                </div>
            </div>
            <div className="col-md-3 mb-5">
                <div className="bg-white text-center p-4 shadow about_card">
                    <i class="bi bi-currency-dollar text-info fs-2"></i>
                    <h5 className="mt-3">Creative Ideas</h5>
                    <p className="fw-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolor alias, impedit adipisci repudiandae incidunt.</p>
                </div>
            </div>
        </div>
    );
}
 
export default AboutCards;
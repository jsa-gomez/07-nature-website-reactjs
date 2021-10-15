import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-info" id="contact">
            <div className="container">
                <div className="row text-center text-white">
                    <div className="col-12 py-5">
                        <h4>About</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam veritatis dicta ea sint aliquid quos repudiandae enim nisi ipsum eligendi!</p>
                        <a href="#"><i class="bi bi-facebook text-white fs-2 mx-4"></i></a>
                        <a href="#"><i class="bi bi-github text-white fs-2 mx-4"></i></a>
                        <a href="#"><i class="bi bi-instagram text-white fs-2 mx-4"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faPhone, faPrint, faFacebook, faTwitter, faGooglePlus, faLinkedinIn, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <main>
            <footer className="bg-dark text-white pt-5 pb-4">
                <div className="container text-center textmd">
                    <div className="row text-center text-md-left">
                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Company Name</h5>
                            <p>Type content</p>
                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">The Product</h5>
                            <p>
                                <a href="#" className="text-white no-underline">the providers</a>
                            </p>
                            <p>
                                <a href="#" className="text-white no-underline">Cretivity</a>
                            </p>
                            <p>
                                <a href="#" className="text-white no-underline">Sources</a>
                            </p>
                            <p>
                                <a href="#" className="text-white no-underline">boot</a>
                            </p>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Useful links</h5>
                            <p>
                                <a href="#" className="text-white no-underline">Your account</a>
                            </p>
                            <p>
                                <a href="#" className="text-white no-underline">Affilates</a>
                            </p>
                            <p>
                                <a href="#" className="text-white no-underline">Shipping Rates</a>
                            </p>
                            <p>
                                <a href="#" className="text-white no-underline">Help</a>
                            </p>
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Useful links</h5>
                            <p>
                                <FontAwesomeIcon icon={faHome} /> Newyork,NY 2333,US
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faEnvelope} /> theproviders98@gmail.com
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faPhone} /> +92 3201370493
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faPrint} /> +01 335 633 77
                            </p>
                        </div>
                    </div>
                    <hr className="mb-4" />
                    <div className="mb-4">
                        <div className="row align-items-center">
                            <div className="col-md-7 col-lg-8">
                                <p>
                                    Copyright &copy; 2020 All rights reserved by:
                                    <a href="#" className="no-underline">
                                        <strong className="text-warning">The Providers</strong>
                                    </a>
                                </p>
                            </div>
                            <div className="col-md-5 col-lg-4">
                                <div className="text-center text-md-right">
                                    <ul className="list-unstyled list-inline">
                                        <li className="list-inline-item">
                                            <a href="#" className="btn-floating btn-sm text-white text-2xl" ><FontAwesomeIcon icon={faFacebook} /></a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#" className="btn-floating btn-sm text-white text-2xl" ><FontAwesomeIcon icon={faTwitter} /></a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#" className="btn-floating btn-sm text-white text-2xl" ><FontAwesomeIcon icon={faGooglePlus} /></a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#" className="btn-floating btn-sm text-white text-2xl" ><FontAwesomeIcon icon={faLinkedinIn} /></a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#" className="btn-floating btn-sm text-white text-2xl" ><FontAwesomeIcon icon={faYoutube} /></a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#" className="btn-floating btn-sm text-white text-2xl" ><FontAwesomeIcon icon={faInstagram} /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}

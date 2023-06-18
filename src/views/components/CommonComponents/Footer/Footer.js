import React from "react";
import { Link } from "react-router-dom";
import { BsTwitter, BsYoutube, BsMessenger } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import FooterLogo from "../../../../assets/logo/logo.PNG";
import GooglePlayStore from "../../../../assets/apps_store/google_play_store.png";
import AppleStore from "../../../../assets/apps_store/apple_store.png";
import Messeenger from '../../../../assets/messenger.png';
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer_bg ">
            <div className="container footer_bg text-white">
                <footer className="pt-3">
                    <div className="row">
                        <div className="col-12 col-lg-4  d-flex  flex-column justify-content-center align-items-center">
                            <div className='d-flex justify-content-center'>
                                <Link to="/"> <img className='footer_logo' src={FooterLogo} alt="" /></Link>
                                {/* <h2 className=" text-info">  Easy Shop</h2> */}
                            </div>
                            <p className="text-center fw-bold">Shop here easily for your favorites jewelry items</p>
                        </div>

                        <div className="col-6 col-lg-2 col-md-3 ">
                            <div className=''>

                                <div className=''>
                                    <h5 className='text-center'>Offers</h5>
                                </div>

                                <ul className="nav flex-column">
                                    <li className="mb-2 text-center"><Link to="/offers" className="  footer_btn fw-bold">Offers</Link></li>
                                    <li className="mb-2 text-center"><Link to="/" className="  footer_btn fw-bold"> Partners</Link></li>
                                    <li className="mb-2 text-center"><Link to="/" className="  footer_btn fw-bold">Services</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-6 col-lg-2 col-md-3">
                            <h5 className='text-center '>Features</h5>
                            <ul className="nav flex-column">
                                <li className="mb-2 text-center"><Link to="/features" className="  footer_btn fw-bold">Features</Link></li>
                                <li className="mb-2 text-center"><Link to="/" className="  footer_btn fw-bold">My Jobs Panel</Link></li>
                                <li className="mb-2 text-center"><Link to="/" className="  footer_btn fw-bold">List of Features</Link></li>
                            </ul>
                        </div>

                        <div className="col-6 col-lg-2 col-md-3">
                            <h5 className='text-center'>Services</h5>
                            <ul className="nav flex-column">
                                <li className="mb-2 text-center"><Link to="/safty" className="  footer_btn fw-bold">Safty</Link></li>
                                <li className="mb-2 text-center"><Link to="/getStarted" className="  footer_btn fw-bold">Get Started</Link></li>
                                <li className="mb-2 text-center"><Link to="/" className="  footer_btn fw-bold">About</Link></li>
                            </ul>
                        </div>

                        <div className="col-6 col-lg-2 col-md-3 mb-3">
                            <h5 className=' text-center'>App Store</h5>
                            <ul className="nav flex-column">
                                <li className=" text-center">
                                    <div className="">
                                        <a href={`https://play.google.com/store/apps/details?id=com.paymentsall.app`} target="_blank" rel="noreferrer">
                                            <img className=" appStore mt-1" src={GooglePlayStore} alt="" />
                                        </a>
                                        <a href={`https://play.google.com/store/apps/details?id=com.paymentsall.app`} target="_blank" rel="noreferrer">
                                            <img className=" appStore mt-1" src={AppleStore} alt="" />
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <hr className=" my-0" />

                    <div className=" d-flex justify-content-center">
                        <div className=" ">
                            <a className="text-decoration-none text-white fs-3" href="https://www.facebook.com/GorgeousBangladeshLtd/" target="_blank" rel="noreferrer">  <FaFacebookF></FaFacebookF> </a>
                            <a className="text-decoration-none text-white fs-3" href="https://www.facebook.com/GorgeousBangladeshLtd/" target="_blank" rel="noreferrer">   <BsYoutube></BsYoutube></a>
                            <a className="text-decoration-none text-white fs-3" href="https://www.facebook.com/GorgeousBangladeshLtd/" target="_blank" rel="noreferrer">   <BsTwitter></BsTwitter></a>
                        </div>
                    </div>

                    <div>
                        <p className='text-center mb-0  text-white'> <small>Copyright @ 2023, All right reserved by palashjewelers.com</small></p>
                    </div>
                </footer >
            </div >
        </footer >
    );
};

export default Footer;

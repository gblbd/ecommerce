import React from 'react';
import MissionImage from '../../../assets/mission_vission/misssion.jpg';
import VissionImage from '../../../assets/mission_vission/vission.jpg';
import './About.css';

const About = () => {
    return (
        <div>
            <div className='about_bg  d-flex justify-content-center align-items-center'>
                <div className=" col-10">
                    <div className=" mx-auto my-5 ">
                        <div className=' mt-5'>
                            <div className='row'>
                                <div className='col-lg-6 mx-auto gbl_animate_left'>
                                    <img className=' about_img rounded-5 shadow shadow-lg mb-3' src={VissionImage} alt="" />
                                </div>
                                <div className='col-lg-6 mt-sm-3 mt-lg-0'>
                                    <h2 className=' fw-bold text-success text-center'>Our Mission</h2>
                                    <p className=''>
                                        Our business enterprise aims at overall development of Bangladesh by undertaking entrepreneurship in multiple nation building ventures.
                                        Gorgeous Bangladesh Limited has been working relentlessly in the fields of: Cement & Clinker, Construction, Marketing, Chemical & Fertilizer, International Trade, Electrical & Electronics, Fashion & Design, Mining, Hotel & Resorts, Tours & Travels, Tv & News Paper,
                                        Media &Events, Logistic & Transport, Developers & Real-Estate, Aviation, and Foundation (NGO) with a view to contributing to the ongoing development of the country.
                                        <br /> <br />
                                        Our mission is, among others, to make employment opportunities, to eliminate poverty, contributing for enhancing infrastructures at national level and finally to lead Bangladesh towards development and prosperity.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
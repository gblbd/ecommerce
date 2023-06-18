import React from 'react';
import { Link } from 'react-router-dom';
import './HomeContactSection.css';

const HomeContactSection = () => {
    return (
        <div className="contactArea col-lg-12 px-4 py-5" >
            <div className="row align-items-center g-lg-5 py-lg-5 col-lg-10 mx-auto p-sm-0">

                <div className="col-lg-5 text-center text-lg-start gbl_animate_left my-auto  ">
                    <div className="">
                        <h1 className="text-3xl font-bold mb-2 gbl_animate_bottom">Get in Touch!</h1>
                        <h5 className=' mb-2'><b>Palash Jewelers LTD.</b></h5>
                        <p className=' mb-0'><b>Address:</b> 133, 177 KDA,  </p>
                        <p>New Market Rd, Khulna-9100</p>
                        <p className=' mb-0'><b>Website:</b>
                            <Link className=' text-decoration-none' to="/"> www.palashjewelers.com</Link>
                        </p>
                        <p className=' mb-0'><b>Email:</b> palashjewellers.official@gmail.com</p>
                        <p className=' mb-0'><b>Facebook:</b>
                            <a className=' text-decoration-none' href="https://www.facebook.com/palashjewellersbd/" target="_blank" rel="noreferrer"> Palash Jewelers</a> <br />
                        </p>
                        <p className=' mb-lg-0 mb-sm-3'><b>Phone:</b> +8801711-011166</p>
                    </div>
                </div>

                <div className="col-lg-6  gbl_animate_right mx-auto my-auto">
                    <form
                        className='d-flex flex-column'
                        action="https://formspree.io/f/mbjelnwv"
                        method="POST">

                        <input type="text"

                            className=' mb-2 form-control'
                            name="username"
                            autoComplete="off"
                            placeholder='Name'
                            required
                        />

                        <input type="text"
                            className=' mb-2 form-control'
                            name="phone"
                            autoComplete="off"
                            placeholder='Phone No'
                            required
                        />

                        <input type="email"
                            className=' mb-2 form-control'
                            name="email"
                            autoComplete="off"
                            placeholder='Email Address'

                        />
                        <textarea
                            className='form-control mb-3'
                            name='message'
                            cols="30"
                            rows="3"
                            autoComplete="off"
                            placeholder='Message'
                            required
                        ></textarea>
                        <input className=' btn btn-success' type="submit" value="Send Message" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default HomeContactSection;
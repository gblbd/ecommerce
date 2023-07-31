import React, { useState } from 'react';
import Logo from '../../../../assets/logo/logo_small.png';
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {


    return (
        <div>
            <section className="gradient-form">
                <div className="container py-5">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-xl-10">
                            <div className="card text-black">
                                <div className="row g-0  rounded-5">
                                    <div className="col-lg-5 d-flex flex-column justify-content-center align-items-center logo_area"  >
                                        <div className="px-3 py-lg-4 p-md-5  mx-auto">
                                            <img className='logo' src={Logo} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="form_area">

                                            <form
                                                className=' rounded rounded-2 bg-sm login_form'
                                                autoComplete='off'
                                            >
                                                <div className=''>
                                                    <h5 className=' mb-4'>Please login to your account</h5>
                                                    <input
                                                        className="d-none"
                                                        autoComplete="off"
                                                        name="hidden"
                                                        type="text"
                                                    ></input>
                                                    <div className="form-outline mb-4">
                                                        <label className="form-label fw-bold" htmlFor="username">User Id</label>
                                                        <input
                                                            name="email"
                                                            type="email"
                                                            id="email"
                                                            className="form-control"
                                                            placeholder="Enter Phone No or Email address" />
                                                    </div>

                                                    <div className="form-outline mb-4">
                                                        <label className="form-label fw-bold" htmlFor="password">Password</label>
                                                        <input
                                                            name='password'
                                                            type="password"
                                                            id="password"
                                                            className="form-control"
                                                            placeholder='Enter password' />
                                                    </div>

                                                    <div className="text-center pt-1 mb-md-5 pb-1">
                                                        <button type="submit" className=" btn btn-primary fa-lg gradient-custom-2 mb-3" >Log In</button>
                                                        <Link to="/changePasswordRequest" className="text-muted m-2 text-decoration-none fw-bold" >Forgot password?</Link>
                                                    </div>

                                                    <div className="create_new ">
                                                        <p className="mb-0 me-2">Don't have an account?</p>
                                                        <Link to="/signup"><button type="button" className="btn btn-primary">Create new</button></Link>
                                                    </div>

                                                    <div className="text-center">
                                                        <p>or sign up with:</p>
                                                        <button type="button" className="custom_icon mx-2">
                                                            <FaFacebook />
                                                        </button>

                                                        <button type="button" className="custom_icon mx-2">
                                                            <FaGoogle />
                                                        </button>

                                                        <button type="button" className="custom_icon mx-2">
                                                            <FaTwitter />
                                                        </button>

                                                        <button type="button" className="custom_icon mx-2">
                                                            <FaGithub />
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;
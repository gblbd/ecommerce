import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { BsTelephoneFill, BsHandbag } from 'react-icons/bs';
import { HiShoppingBag } from 'react-icons/hi';
import { BiUser } from 'react-icons/bi';
import { AiOutlineShoppingCart, AiOutlineHome, AiOutlineHeart } from 'react-icons/ai';
import LogoImage from '../../../../assets/logo/logo.PNG'
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='navbg'>
            <div className=' col-10 mx-auto'>

                {/* nav top section menu */}
                <div className=' d-lg-flex justify-content-lg-between justify-content-center py-2'>
                    <div className='col-lg-8 d-lg-flex  justify-content-lg-between  flex-md-row-reverse  '>

                        <Link className=" d-flex justify-content-center  " href="#">
                            <img className='shopLogo' src={LogoImage} alt="" />
                        </Link>

                        <form className="d-flex flex-column my-4" >
                            <div className="input-group   ">
                                <input type="text" className="form-control searchArea" placeholder='Search...' aria-describedby=" " />
                                <button type="button" className="btn btn-primary"><FaSearch className=''></FaSearch> </button>
                            </div>
                            {/* <span /> */}
                        </form>

                    </div>

                    <div className=' d-md-flex justify-content-between d-lg-inline '>
                        <div className=' d-flex justify-content-between align-items-center'>

                            <Link to="/" className="navBtnTop text-primary d-flex justify-content-center align-items-center " aria-current="page" href="#">
                                <AiOutlineHome className=''></AiOutlineHome> <span className='ms-1'> Home</span>
                            </Link>

                            <Link to="/account" className=" navBtnTop text-primary d-flex justify-content-center align-items-center mx-3" href="#">
                                <BiUser></BiUser> <span className='ms-1'> My Account</span>
                            </Link>

                            <Link to="/wishList" className=" navBtnTop text-primary d-flex justify-content-center align-items-center">
                                <AiOutlineHeart></AiOutlineHeart><span className='ms-1'> Wish List</span>
                            </Link>

                        </div>

                        <div className=' d-flex justify-content-lg-end justify-content-center my-2'>
                            <div className='navBtn text-primary d-flex justify-content-center align-items-center'>
                                <AiOutlineShoppingCart className=' '></AiOutlineShoppingCart>
                                <Link to="/cart" className=" text-decoration-none ms-1 ">Cart</Link>
                            </div>
                            <div className='navBtn text-primary mx-3 d-flex justify-content-center align-items-center'>
                                <BsHandbag className=''></BsHandbag>
                                <Link to="/checkout" className="text-decoration-none ms-1">Check Out</Link>
                            </div>
                        </div>

                    </div>
                </div>

                <hr className=' my-0' />
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container">

                        <button className="navbar-toggler navbarTogglerCustom" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon "></span>
                        </button>

                        {/* nav bottom section menu */}
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">


                            <ul className="navbar-nav  mb-2 mb-lg-0 fw-bold">
                                <li className="nav-item">
                                    <Link to="/" className="collapsBtn navBtn text-primary" aria-current="page" href="#">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/products" className="collapsBtn mx-lg-3  navBtn text-primary" href="#">Products</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/services" className="collapsBtn mx-lg-3  navBtn text-primary" href="#">Services</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about" className="collapsBtn mx-lg-3  navBtn text-primary" href="#">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact" className="collapsBtn  navBtn text-primary" href="#">Contact</Link>
                                </li>
                            </ul>

                            <span className='collapsBtn text-primary border-0 fw-bold fs-6 ms-lg-auto d-none d-lg-block'><BsTelephoneFill className=''></BsTelephoneFill>  8801711-011166</span>

                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
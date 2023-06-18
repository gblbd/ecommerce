import React from 'react';
import { Link } from 'react-router-dom';
import { BsTrash } from 'react-icons/bs';
import DiamondRing from '../../../assets/products/jeweleryProduct_06.png'
import './Cart.css';

const Cart = () => {
    return (
        <div className='col-10 mx-auto'>
            <div className="row">
                <div className='col-lg-9 my-4'>
                    <div className='d-flex justify-content-between'>
                        <h5 className='fw-bold text-uppercase'>SHOPPING CART(5 ITEMS)</h5>
                        <p className='fw-bold text-uppercase'>DELIVERY CHARGE INFO</p>
                    </div>
                    <div>
                        <table className="table table-hover table-bordered  text-center ">
                            <thead>
                                <tr className=' table-secondary'>
                                    <th scope="col">SL</th>
                                    <th scope="col">PRODUCT</th>
                                    <th scope="col">UNIT PRICE</th>
                                    <th scope="col">QUANTITY</th>
                                    <th scope="col">TOTAL</th>
                                    <th scope="col">ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td className=' d-flex flex-column'>
                                        <Link to="/" className=' text-decoration-none'> <img className='cartProductImg' src={DiamondRing} alt="product_Image" /></Link>
                                        <Link to="/" className=' text-decoration-none productName'>Diamond Gold</Link>
                                        <Link to="/" className=' text-decoration-none showDetails'>Show Details</Link>
                                    </td>
                                    <td className='my-auto'>৳45000</td>
                                    <td>1</td>
                                    <td>৳45000</td>
                                    {/* <td><Link className=' text-decoration-none text-info' to="/">Diamond One</Link></td> */}
                                    <td><BsTrash></BsTrash></td>
                                </tr>
                                <tr className=''>
                                    <th scope="row">2</th>
                                    <td className=' d-flex flex-column'>
                                        <Link to="/" className=' text-decoration-none'> <img className='cartProductImg' src={DiamondRing} alt="product_Image" /></Link>
                                        <Link to="/" className=' text-decoration-none productName'>Diamond Gold</Link>
                                        <Link to="/" className=' text-decoration-none showDetails'>Show Details</Link>
                                    </td>
                                    <td className='my-auto'>৳45000</td>
                                    <td>1</td>
                                    <td>৳45000</td>
                                    <td><BsTrash></BsTrash></td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td className=' d-flex flex-column'>
                                        <Link to="/" className=' text-decoration-none'> <img className='cartProductImg' src={DiamondRing} alt="product_Image" /></Link>
                                        <Link to="/" className=' text-decoration-none productName'>Diamond Gold</Link>
                                        <Link to="/" className=' text-decoration-none showDetails'>Show Details</Link>
                                    </td>
                                    <td className='my-auto'>৳45000</td>
                                    <td>1</td>
                                    <td>৳45000</td>
                                    <td><BsTrash></BsTrash></td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td className=' d-flex flex-column'>
                                        <Link to="/" className=' text-decoration-none'> <img className='cartProductImg' src={DiamondRing} alt="product_Image" /></Link>
                                        <Link to="/" className=' text-decoration-none productName'>Diamond Gold</Link>
                                        <Link to="/" className=' text-decoration-none showDetails'>Show Details</Link>
                                    </td>
                                    <td className='my-auto'>৳45000</td>
                                    <td>1</td>
                                    <td>৳45000</td>
                                    <td><BsTrash></BsTrash></td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td className=' d-flex flex-column'>
                                        <Link to="/" className=' text-decoration-none'> <img className='cartProductImg' src={DiamondRing} alt="product_Image" /></Link>
                                        <Link to="/" className=' text-decoration-none productName'>Diamond Gold</Link>
                                        <Link to="/" className=' text-decoration-none showDetails'>Show Details</Link>
                                    </td>
                                    <td className='my-auto'>৳45000</td>
                                    <td>1</td>
                                    <td>৳45000</td>
                                    <td><BsTrash></BsTrash></td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>

                <div className=' col-lg-3 mt-4'>
                    <p className=" fw-bold">ORDER SUMMARY</p>
                    <hr />
                    <p className="d-flex justify-content-between fw-bold"><span> Cart Sub Total:</span> <span>	৳389000</span></p>
                    <hr />
                    <h6 className="d-flex justify-content-between fw-bold"><span> Total Cart Amount:</span> <span>	৳389000</span></h6>

                    <div className='discountCoupon my-2'>
                        <div class="input-group">
                            <label className=' text-secondary'> <small>Only one coupon code can be used per order at this time.</small> </label>
                            <input type="text" aria-label="couponCode" placeholder='Enter Coupon' class="form-control" />
                            <span class="input-group-text btn btn-primary">APPLY</span>
                        </div>
                    </div>

                    <Link to="/checkout" className=' btn btn-primary rounded-4 w-100 fw-bold mt-3'>PROCEED TO CHECKOUT</Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;
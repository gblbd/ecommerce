import React from 'react';
import './CheckOut.css';

const CheckOut = () => {
    return (
        <div className=' col-10 mx-auto my-4'>
            <p className='fw-bold d-flex justify-content-between'><span> 1. QUICK CHECKOUT FOR  <b className=' text-info'> 8801711-011166</b></span> <span> EDIT</span></p>
            <p className=' fw-bold'>  2. BILLING & SHIPPING INFORMATION (Call 8801711-011166 from 9 am to 9 pm if you have any difficulties saving your address).</p>
            <form className=' my-3  bg-light p-3 rounded-3'>
                <p className=' fw-bold text-center'>SHIPPING ADDRESS</p>
                <div className='row'>
                    <div className=' col-lg-6 col-md-9 mx-auto my-1'>
                        <input class="form-control" type="text" placeholder="Full Name" aria-label="default input example" />
                    </div>
                    <div className=' col-lg-6 col-md-9 mx-auto my-1'>
                        <input class="form-control" type="text" placeholder="Address" aria-label="default input example" />
                    </div>
                    <div className=' col-lg-6 col-md-9 mx-auto my-1'>
                        <input class="form-control " type="text" placeholder="Loyalty Code" aria-label="default input example" />
                    </div>
                    <div className=' col-lg-6 col-md-9 mx-auto my-1'>
                        <input class="form-control" type="text" placeholder="Your City" aria-label="default input example" />
                    </div>
                    <div className=' col-lg-6 col-md-9 mx-auto my-1'>
                        <input class="form-control" type="email" placeholder="Email Id" aria-label="default input example" />
                    </div>
                    <div className=' col-lg-6 col-md-9 mx-auto my-1'>
                        <input class="form-control" type="text" placeholder="Phone Number" aria-label="default input example" />
                    </div>
                </div>

                <div className='col-lg-6 col-md-9 mx-auto'>
                    <div class="form-check my-1">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            I would like to be informed of new collections and promotional offers
                        </label>
                    </div>
                    <div class="form-check my-1">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                        <label class="form-check-label" for="flexCheckChecked">
                            Save the Contact info in my profile
                        </label>
                    </div>
                </div>

                <div className=' text-center'>
                    <button className=' btn btn-primary w-auto my-3'>CONTINUE</button>
                </div>
            </form>
            <p className=' fw-bold'>  3. ORDER SUMMARY & LOGISTICS</p>
            <p className=' fw-bold'>  4. PAYMENT OPTIONS</p>
        </div>
    );
};

export default CheckOut;
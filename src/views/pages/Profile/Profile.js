import React, { useState } from 'react';
import { GrUserManager } from 'react-icons/gr';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import './Profile.css';

const Profile = () => {
    const [country, setCountry] = useState('');
    const [region, setRegion] = useState('');



    return (
        <div className='my-4 col-10  mx-auto myProfileArea bg-light'>
            <div className='  col-md-8 col-lg-5 my-4 mx-auto myProfileArea'>
                <form className=' my-3   p-3 rounded-3'>
                    <h4 className=' fw-bold text-center'> <GrUserManager></GrUserManager> MY PROFILE</h4>

                    <div className='row my-3'>
                        <p className='my-0 fw-bold text-primary text-center'>Personal Details</p>
                        <hr className=' mt-0' />
                        <div className=''>
                            <input class="form-control my-1" type="text" placeholder="Full Name" aria-label="default input example" />
                        </div>
                        <div className=''>
                            <input class="form-control my-1" type="text" placeholder="User Name" aria-label="default input example" required />
                        </div>
                        <div className=''>
                            <input class="form-control my-1" type="email" placeholder="Alternate Email Id" aria-label="default input example" />
                        </div>
                        <div className=''>
                            <input class="form-control my-1" type="text" placeholder="Alternate Phone No" aria-label="default input example" />
                        </div>

                        <div className=' d-flex my-1'>
                            <label className='fw-bold'>Gender</label>
                            <div className=' d-flex ms-3'>
                                <div class="form-check">
                                    <input class="form-check-input" value="male" type="radio" name="gender" id="genderMale" checked />
                                    <label class="form-check-label" for="genderMale"> Male </label>
                                </div>

                                <div class="form-check ms-2">
                                    <input class="form-check-input" value="female" type="radio" name="gender" id="genderFemale" />
                                    <label class="form-check-label" for="genderFemale"> Female </label>
                                </div>
                            </div>
                        </div>
                        <div className='my-1'>
                            <input class="form-control" type="date" placeholder="Date of birth" aria-label="default input example" />
                        </div>
                    </div>

                    <div className='row mt-5 '>

                        <p className='my-0 fw-bold text-primary text-center'>Contact Details</p>
                        <hr className=' mt-0' />

                        <div className='my-1'>
                            {/* <input class="form-control" type="text" placeholder="Detail Address" aria-label="default input example" /> */}
                            <textarea class="form-control" placeholder="Detail Address" id="detailsAddress"></textarea>
                        </div>

                        <div className='my-1'>
                            <input class="form-control" type="text" placeholder="Phone Number" aria-label="default input example" />
                        </div>

                        <div className='my-1'>
                            <CountryDropdown
                                className="form-select"
                                value={country}
                                onChange={(country) => setCountry(country)} />
                        </div>

                        <div className='my-1'>
                            <RegionDropdown
                                className="form-select"
                                country={country}
                                value={region}
                                onChange={(region) => setRegion(region)} />
                        </div>
                    </div>

                    <div className=' text-center'>
                        <button type='submit' className=' btn btn-primary w-50 my-3'>SUBMIT</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Profile;
import React from 'react';
import SpecialityOne from '../../../../assets/cardOne/imageOne.png'
import SpecialityTwo from '../../../../assets/cardOne/ImageTwo.png'
import SpecialityThree from '../../../../assets/cardOne/ImageThree.png'
import './HomeSpecialitySection.css'

const HomeSpecialitySection = () => {
    return (
        <div className='specialityArea pb-md-4'>
            <div className=' col-10 mx-auto dataArea'>
                <div className=' d-lg-flex text-center text-lg-start'>
                    <div className=' col-lg-4 col-12  my-4 my-lg-0    px-lg-3 py-lg-5'>
                        <h5 className='mb-0 mb-lg-1'>WELCOME TO</h5>
                        <h2 className='fw-bold mt-0 mt-lg-1'>Palash Jewelers</h2>
                    </div>
                    <div className=' col-lg-8 col-12 px-lg-3 py-lg-5 '>
                        <p>Palash Jewelers has striven to produce the highest quality fine jewelry; to provide the best service and customer experience. We wish to exceed our client's expectations each and every time we serve them.  Our clients are all classes of people.</p>
                    </div>
                </div>
                <div className='offerCard'>
                    <div className=' col-md-4 col-12'>
                        <img className='specialityImage img-fluid roundedOne' src={SpecialityOne} alt="" />
                    </div>

                    <div className=' col-md-4 col-12'>
                        <img className='specialityImage img-fluid roundedTwo my-1 my-md-0' src={SpecialityTwo} alt="" />
                    </div>

                    <div className=' col-md-4 col-12'>
                        <img className='specialityImage img-fluid roundedThree' src={SpecialityThree} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSpecialitySection;
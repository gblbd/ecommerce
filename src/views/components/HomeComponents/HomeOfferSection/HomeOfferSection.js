import React from 'react';
import SpecialityOne from '../../../../assets/cardTwo/imageOne.png'
import SpecialityTwo from '../../../../assets/cardTwo/imageTwo.png'
import SpecialityThree from '../../../../assets/cardTwo/imageThree.png'
import './HomeOfferSection.css';

const HomeOfferSection = () => {
    return (
        <div className='offerbg pb-md-4'>
            <div className=' col-10 mx-auto'>
                <div className='offerCard'>
                    <div className=' col-md-4'>
                        <img className='specialityImage img-fluid roundedOne' src={SpecialityOne} alt="" />
                    </div>

                    <div className=' col-md-4'>
                        {/* <img className='specialityImage img-fluid' src={SpecialityTwo} alt="" /> */}
                        <img className='specialityImage img-fluid roundedTwo my-1 my-md-0' src={SpecialityTwo} alt="" />
                    </div>

                    <div className=' col-md-4'>
                        <img className='specialityImage img-fluid roundedThree' src={SpecialityThree} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeOfferSection;
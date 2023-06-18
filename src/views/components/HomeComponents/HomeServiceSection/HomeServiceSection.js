import React from 'react';
import ServiceImage from '../../../../assets/PngItem_2476274.png';
import { MdRecycling } from 'react-icons/md';
import { GiConvergenceTarget, GiAutoRepair, GiJewelCrown, GiDiscussion } from 'react-icons/gi';

import './HomeServiceSection.css';

const HomeServiceSection = () => {
    return (
        <div className='servicesArea'>
            <div className='col-10 mx-auto'>
                <div className='row'>

                    {/* operation  image section */}
                    <div className=' col-lg-6 d-flex justify-content-center align-items-center animate_left'>
                        <img className='opertionImage  d-none d-md-block' src={ServiceImage} alt="" />
                    </div>

                    {/* operation text section */}
                    <div className='col-lg-6 animate_right'>
                        <h1 className='paymentsAllTitle mt-lg-0 my-sm-4 mt-0 text-center text-lg-start'>Our Services</h1>
                        {/* <p className='securityRightSubTitle my-4 text-center text-md-start '>By using the cradit card, you can improve your financial life by building credit, earning rewards and saving money.</p> */}


                        {/* operation segments */}
                        <div className=' row text-center text-md-start'>
                            <div className=' col-md-6'>
                                <GiAutoRepair className='operationIcon'></GiAutoRepair>
                                <p className='fw-bold'>Repair / Restoration</p>
                                <p className=' col-md-10'>We can repair, resize, and restore your jewelry to its original condition. We are also able to enhance and tailor the look of your jewelry to your liking.</p>
                            </div>

                            <div className=' col-md-6'>
                                <GiJewelCrown className='operationIcon'></GiJewelCrown>
                                <p className='fw-bold'>Custom Design</p>
                                <p className=' col-md-10'>Looking for something unique; personal? Our artisan jewelers can help you design your very own customized jewelry; make your dream pieces tangible.</p>
                            </div>

                            <div className=' col-md-6'>
                                <GiDiscussion className='operationIcon'></GiDiscussion>
                                <p className='fw-bold'>Consulting</p>
                                <p className=' col-md-10'>Here at Popular, we don't just sell jewelry. We help our clients select fine jewelry pieces that best fits their style and budget. Whether you're rewarding yourself, purchasing a gift for that special someone, or celebrating a special events.</p>
                            </div>

                            <div className=' col-md-6'>
                                <MdRecycling className='operationIcon'></MdRecycling>
                                <p className='fw-bold'>Recycling & Scrap</p>
                                <p className=' col-md-10'>Have some unwanted jewelry lying around the house collecting dust? We provide quotes for diamond, gold, and platinum. For your scrap gold, you can receive cash or store credit, with which you may allot towards a new purchase.</p>
                            </div>


                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeServiceSection;
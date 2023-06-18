import React from 'react';
import SliderOne from '../../../../assets/heroCarousol/sliderTwo.png';
import SliderTwo from '../../../../assets/heroCarousol/sliderOne.png';
import SliderThree from '../../../../assets/heroCarousol/sliderThree.png';
import './HomeHeroCarousol.css';

const HomeHeroCarousol = () => {
    return (
        <div className='col-10 mx-auto animate_bottom'>
            <div id="carouselExampleCaptions" className="carousel slide carousel-dark  " data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="5000">
                        <img src={SliderOne} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            {/* <h5>First slide label</h5> */}
                            {/* <p>Some representative placeholder content for the first slide.</p> */}
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={SliderTwo} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            {/* <h5>Second slide label</h5> */}
                            {/* <p>Some representative placeholder content for the second slide.</p> */}
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={SliderThree} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            {/* <h5>Third slide label</h5> */}
                            {/* <p>Some representative placeholder content for the third slide.</p> */}
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev prevIcon" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next NextIcon" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default HomeHeroCarousol;
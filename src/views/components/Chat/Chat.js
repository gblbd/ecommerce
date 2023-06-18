import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SiMessenger } from 'react-icons/si';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import Logo from '../../../assets/logo/logo.PNG'
import { BsDashLg } from 'react-icons/bs';
import Messeenger from '../../../assets/messenger.png';
import './Chat.css'

const Chat = () => {
    const [show, setShow] = useState();
    const [showMsg, setShowMsg] = useState();
    const [showLogin, setShowLogin] = useState(false);


    const toggleShow = () => {
        setShow(!show);
    }

    const toggleShowMsg = () => {
        setShowMsg(!showMsg);
    }

    const handleShowLogin = () => {
        setShowLogin(showLogin);
    }

    return (
        <div className=''>
            <Link onClick={toggleShow}> <img className="messgengerIcon" src={Messeenger} alt="" /></Link>


            {show &&
                <div className='chatLoginArea'>

                    <div className='d-flex justify-content-between'>
                        <div><img className='logo' src={Logo} alt="logo" /></div>

                        <div>
                            <HiOutlineDotsHorizontal onClick={toggleShowMsg} className='chatIcons'></HiOutlineDotsHorizontal>
                            <BsDashLg onClick={toggleShow} className='chatIcons'></BsDashLg>
                        </div>
                    </div>

                    {showMsg &&
                        <div className='showMsg'>
                            <a href='https://www.facebook.com/palashjewellersbd/' className='   text-center text-decoration-none  '> Visit Facebook Page</a>
                            <p>Add Messenger to Your Website</p>
                        </div>
                    }

                    {showLogin &&
                        <div className='loginShow'>
                            <h5 className=' text-center fw-bold'>Login</h5>
                            <div className=' text-center'>
                                <a href='https://www.facebook.com/palashjewellersbd/' className='  fs-5 fw-bold text-center text-decoration-none btn btn-primary w-100 btn-lg fw-bold'><SiMessenger className=' me-1'></SiMessenger>Use Messenger</a>
                            </div>
                            <div className=' text-center'>
                                <Link className='  fs-5 fw-bold text-center text-decoration-none btn btn-secondary w-100 btn-lg text-white fw-bold my-2'>Continew as Guest</Link>
                            </div>

                            <p className=' text-center small'>By continuing as a guest, you agree to Meta's <Link to="/termsAndConditions" className=' text-info text-decoration-none'> Terms, Privacy </Link> Policy and <Link to="/cookiesPolicy" className=' text-info text-decoration-none'>Cookies</Link> Policy.</p>
                        </div>
                    }


                    <h5 className=' my-3'>Chat with Palash Jewelers</h5>
                    <p>Hi! How can we help you?</p>
                    <div className=' text-center startChat'>
                        <Link onClick={() => setShowLogin(true)} className="btn btn-primary w-100 btn-lg fw-bold ">Start Chat</Link>
                    </div>
                    <p className=' text-center my-2'><SiMessenger></SiMessenger> Powered by Messenger</p>
                </div>
            }
        </div>
    );
};

export default Chat;
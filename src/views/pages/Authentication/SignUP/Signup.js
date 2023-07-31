import axios from "axios";
import React, { useState } from "react";
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../../../assets/logo/logo_small.png";
import useAuth from "../../../../hooks/useAuth";
import "../Login/Login.css";

const Signup = () => {
  const [registerData, setRegisterData] = useState({});
  //to redirevt the previous pages
  //to redirevt the previous pages

  const navigate = useNavigate();

  const { user, setUser, isLoading, setIsLoading } = useAuth();
  const handelOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegisterData = { ...registerData };
    newRegisterData[field] = value;

    setRegisterData(newRegisterData);
  };
  const [errorMessage, setErrorMessage] = useState("");
  const handelRegisterSubmit = (event) => {
    event.preventDefault();
    console.log("registerData ", registerData);
    const { name, email, password } = registerData;

    setIsLoading(true);
    // setValues({ ...values, buttonText: 'Submitting' });
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_API}/api/signup`,
      data: { name, email, password, role: "user" },
    })
      .then((response) => {
        console.log("SIGNUP SUCCESS", response);
        setErrorMessage("");
        if (response.insertedId) {
          event.target.reset();
        }
        navigate("/login", { replace: true });
      })
      .catch((error) => {
        console.log("SIGNUP ERROR", error.response.data);
        setErrorMessage(error.response.data.error);
        // // setValues({ ...values, buttonText: 'Submit' });
        //setAuthError(error.response.data.error);
      });
  };
  return (
    <div>
      <section className="gradient-form">
        <div className="container py-5">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-xl-10">
              <div className="card text-black">
                <div className="row g-0  rounded-5">
                  <div className="col-lg-5 d-flex flex-column justify-content-center align-items-center logo_area">
                    <div className="px-3 py-lg-4 p-md-5  mx-auto">
                      <img className="logo" src={Logo} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="form_area">
                      <p className=" text-center text-warning"></p>
                      <form
                        onSubmit={handelRegisterSubmit}
                        className=" rounded rounded-2 bg-sm login_form"
                      >
                        <div className="">
                          <h5 className=" mb-4">
                            Please login to your account
                          </h5>

                          <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="fullName">
                              Full Name
                            </label>
                            <input
                              type="text"
                              onChange={handelOnBlur}
                              name="name"
                              id="fullName"
                              className="form-control"
                              placeholder="Enter Name"
                            />
                          </div>

                          <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="email">
                              Email
                            </label>
                            <input
                              type="email"
                              name="email"
                              onChange={handelOnBlur}
                              id="email"
                              className="form-control"
                              placeholder="Enter email"
                              required
                            />
                          </div>

                          <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="password">
                              Password
                            </label>
                            <input
                              type="password"
                              name="password"
                              onChange={handelOnBlur}
                              id="password"
                              className="form-control"
                              placeholder="Enter password"
                            />
                          </div>

                          <div className="text-center pt-1 mb-md-5 pb-1">
                            <button
                              onClick={handelRegisterSubmit}
                              className=" custom_btn fa-lg gradient-custom-2 mb-3"
                              type="submit"
                            >
                              Register
                            </button>
                          </div>

                          <div className="create_new">
                            <p className="mb-0">Already have an account?</p>
                            <Link to="/login">
                              <button type="button" className="custom_btn">
                                Login now
                              </button>
                            </Link>
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

export default Signup;

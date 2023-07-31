import axios from "axios";
import React, { useState } from "react";
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../../../assets/logo/logo_small.png";
import useAuth from "../../../../hooks/useAuth";
import { authenticate, isAuth } from "../../../../utilities/helper";
import "./Login.css";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, setUser, isLoading, setIsLoading } = useAuth();
  const location = useLocation();
  console.log("lo", location);
  const navigate = useNavigate();
  //taking input
  const handelOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;

    setLoginData(newLoginData);
  };
  //login system by form submit
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordAlert, setPasswordAllert] = useState("");

  const handelLoginSubmit = (event) => {
    event.preventDefault();

    const { email, password } = loginData;
    //password validation by condition
    if (password === undefined || email === undefined) {
      setErrorMessage("please fill the form");
    } else if (password.length < 6) {
      setPasswordAllert("Password must be minimum 6 characters");
    } else if (password.length > 6) {
      setPasswordAllert("");
    }

    axios({
      method: "POST",
      url: `${process.env.REACT_APP_API}/api/signin`,
      data: { email, password },
    })
      .then((response) => {
        console.log("SIGNIN SUCCESS", response);
        const destination = location?.state?.from || "/";
        navigate(location?.state?.from || "/", { replace: true });
        setErrorMessage("");
        authenticate(response.data, () => {
          setUser(isAuth());
          setIsLoading(false);
          navigate("/dashboard", { replace: true });
          console.log("cookie local save ", isAuth());
        });
      })
      .catch((error) => {
        setErrorMessage(error.response.data.error);
        console.log("SIGN IN ERROR", error.response.data);
        // setValues({ ...values, buttonText: 'Submit' });
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
                      <form
                        className=" rounded rounded-2 bg-sm login_form"
                        autoComplete="off"
                        onSubmit={handelLoginSubmit}
                      >
                        <div className="">
                          <h5 className=" mb-4">
                            Please login to your account
                          </h5>
                          <input
                            className="d-none"
                            autoComplete="off"
                            name="hidden"
                            type="text"
                          ></input>
                          <div className="form-outline mb-4">
                            <label
                              className="form-label fw-bold"
                              htmlFor="username"
                            >
                              User Id
                            </label>
                            <input
                              name="email"
                              onChange={handelOnBlur}
                              type="email"
                              id="email"
                              className="form-control"
                              placeholder="Enter Phone No or Email address"
                            />
                          </div>

                          <div className="form-outline mb-4">
                            <label
                              className="form-label fw-bold"
                              htmlFor="password"
                            >
                              Password
                            </label>
                            <input
                              name="password"
                              onChange={handelOnBlur}
                              type="password"
                              id="password"
                              className="form-control"
                              placeholder="Enter password"
                            />
                          </div>

                          <div className="text-center pt-1 mb-md-5 pb-1">
                            <button
                              type="submit"
                              className=" btn btn-primary fa-lg gradient-custom-2 mb-3"
                              onClick={handelLoginSubmit}
                            >
                              Log In
                            </button>
                            <Link
                              to="/changePasswordRequest"
                              className="text-muted m-2 text-decoration-none fw-bold"
                            >
                              Forgot password?
                            </Link>
                          </div>

                          <div className="create_new ">
                            <p className="mb-0 me-2">Don't have an account?</p>
                            <Link to="/signup">
                              <button type="button" className="btn btn-primary">
                                Create new
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

export default Login;

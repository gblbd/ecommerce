import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { getLocalStorage } from "../../../utilities/helper";
import "./CheckOut.css";

const CheckOut = (props) => {
  console.log("vvv", props);
  const {
    user,
    setUser,
    isLoading,
    setIsLoading,
    totalAmount,
    setTotalAmount,
  } = useAuth();
  console.log("zzz", totalAmount);
  const [formData, setFormData] = useState({
    name: user?.name || "",
    address: "",
    postalcode: "",
    city: "",
    email: user?.email,
    phoneNumber: "",
    totalAmount: totalAmount,
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) =>
      type === "checkbox"
        ? { ...prevData, [name]: checked }
        : { ...prevData, [name]: value }
    );
  };
  console.log("formData", formData);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const localStorageData = getLocalStorage("products"); // Replace "your_localstorage_key" with the key you are using to store the data in localStorage
    console.log("submit1");
    if (!user._id) {
      // If the user ID is not available, handle it as per your application logic
      console.error("User ID not available.");
      return;
    }

    // Create the payload to send to the server
    console.log("ubmit2");
    const payload = {
      userId: user._id,
      orderData: localStorageData,
      shippingAddress: formData,
    };
    console.log("payload", payload);
    try {
      const response = await axios({
        method: "POST",
        url: `${process.env.REACT_APP_API}/api/order-data-upload`,
        data: payload,
      });
      console.log("responsexxxx:", response.status);
      if (response?.status !== 200) {
        console.error("Error saving order data.");
        return;
      }

      // Success handling if needed

      console.log("Order data saved successfully!");
      navigate("/", { replace: true });
    } catch (error) {
      console.error("Error saving order data:", error);
    }
  };

  return (
    <div className=" col-10 mx-auto my-4">
      <p className="fw-bold d-flex justify-content-between">
        <span>
          {" "}
          1. QUICK CHECKOUT FOR <b className=" text-info"> 8801711-011166</b>
        </span>{" "}
        <span> EDIT</span>
      </p>
      <p className=" fw-bold">
        {" "}
        2. BILLING & SHIPPING INFORMATION (Call 8801711-011166 from 9 am to 9 pm
        if you have any difficulties saving your address).
      </p>
      <form className=" my-3  bg-light p-3 rounded-3" onSubmit={handleSubmit}>
        <p className=" fw-bold text-center">SHIPPING ADDRESS</p>
        <div className="row">
          <div className=" col-lg-6 col-md-9 mx-auto my-1">
            <input
              class="form-control"
              type="text"
              defaultValue={user.name}
              placeholder="Full Name"
              aria-label="default input example"
            />
          </div>
          <div className=" col-lg-6 col-md-9 mx-auto my-1">
            <input
              class="form-control"
              type="text"
              placeholder="Address"
              name="address"
              onChange={handleChange}
              aria-label="default input example"
            />
          </div>
          <div className=" col-lg-6 col-md-9 mx-auto my-1">
            <input
              class="form-control "
              type="text"
              placeholder="postal Code"
              name="postalcode"
              onChange={handleChange}
              aria-label="default input example"
            />
          </div>
          <div className=" col-lg-6 col-md-9 mx-auto my-1">
            <input
              class="form-control"
              type="text"
              name="city"
              onChange={handleChange}
              placeholder="Your City"
              aria-label="default input example"
            />
          </div>
          <div className=" col-lg-6 col-md-9 mx-auto my-1">
            <input
              class="form-control"
              type="email"
              defaultValue={user.email}
              name="email"
              onChange={handleChange}
              placeholder="Email Id"
              aria-label="default input example"
            />
          </div>
          <div className=" col-lg-6 col-md-9 mx-auto my-1">
            <input
              class="form-control"
              type="text"
              placeholder="Phone Number"
              onChange={handleChange}
              name="phoneNumber"
              aria-label="default input example"
            />
          </div>
        </div>

        <div className="col-lg-6 col-md-9 mx-auto">
          <div class="form-check my-1">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              I would like to be informed of new collections and promotional
              offers
            </label>
          </div>
          <div class="form-check my-1">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              checked
            />
            <label class="form-check-label" for="flexCheckChecked">
              Save the Contact info in my profile
            </label>
          </div>
        </div>

        <div className=" text-center">
          <button
            className=" btn btn-primary w-auto my-3"
            onClick={handleSubmit}
          >
            CONTINUE
          </button>
        </div>
      </form>
      <p className=" fw-bold"> 3. ORDER SUMMARY & LOGISTICS</p>
      <p className=" fw-bold"> 4. PAYMENT OPTIONS</p>
    </div>
  );
};

export default CheckOut;

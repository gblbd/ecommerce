import React, { useState } from "react";
import Select from "react-select";
import "./PorductUploadComponent.css";
const PorductUploadComponent = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  return (
    <div>
      <div className="container-form">
        <form id="contact" action="" method="post">
          <h3>product upload Form</h3>
          <h4>Add categorey</h4>
          <div className="form-inline">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="enter categorey name"
              />
            </div>
            <button type="submit" className="btn btn-primary ml-2">
              Submit
            </button>
          </div>
          <h2>Upload data</h2>
          <fieldset>
            <input
              placeholder="product name"
              type="text"
              tabindex="1"
              required
              autofocus
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="product price"
              type="text"
              tabindex="2"
              required
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Your product discount (optional)"
              type="text"
              tabindex="4"
              required
            />
          </fieldset>
          <fieldset>
            <Select
              className="basic-single mt-2 mb-2"
              classNamePrefix="select"
              isClearable={isClearable}
              isSearchable={isSearchable}
              name="color"
              options={options}
            />
          </fieldset>
          <fieldset>
            <textarea
              placeholder="Your product details"
              type="tel"
              tabindex="3"
              required
            />
          </fieldset>

          <fieldset>
            <button
              name="submit"
              type="submit"
              id="contact-submit"
              data-submit="...Sending"
            >
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default PorductUploadComponent;

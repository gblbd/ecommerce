import React, { useEffect, useState } from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { BsFillHeartFill, BsFillStarFill } from "react-icons/bs";
import { GiCheckMark } from "react-icons/gi";
import { useParams } from "react-router-dom";
import ProductImage from "../../../../../assets/products/jeweleryProduct_09.png";
import "./ProcuctDetails.css";

const ProductDetailsSection = () => {
  const [products, setProducts] = useState([""]);

  const productId = useParams();
  const clickedProductId = productId.productId;

  useEffect(() => {
    fetch("../../../../../fake_api/product_list.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log("ProductDetailsSection : ", data)
        setProducts(data);
      });
  }, []);

  const selectedProduct = products.find(
    (product) => product.id === clickedProductId
  );
  // const { title, image, price } = selectedProduct;
  console.log("selectedProduct ProductDetailsSection :", selectedProduct);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleAccordion = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div className=" d-flex justify-content-evenly justify-content-center align-items-center p-3">
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://alkite.files.wordpress.com/2009/05/surfing-1.jpg"
              alt="Chania"
              width="460"
              height="345"
            />
          </div>
          <div class="carousel-item">
            <img
              className="pdDetailImg"
              src={ProductImage}
              alt="product_image"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://alkite.files.wordpress.com/2009/05/surfing-1.jpg"
              alt="Chania"
              width="460"
              height="345"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      {/*   <img className='pdDetailImg' src={ProductImage} alt="product_image" /> */}
      <div>
        <div className=" d-flex justify-content-center align-items-center">
          <h2>Special Diamond Ring </h2>{" "}
          <BsFillHeartFill className=" text-primary fs-3 ms-3"></BsFillHeartFill>
        </div>

        <div className=" d-flex justify-content-between align-content-center">
          <h5 className=" text-success d-flex align-items-center my-2">
            {" "}
            <GiCheckMark className=""></GiCheckMark> In Stock
          </h5>
          <p>
            {" "}
            <b>Code:</b> GBHN45677HH
          </p>
        </div>

        <div className=" d-flex justify-content-evenly align-content-center">
          <div>
            {" "}
            <BsFillStarFill className=" ms-1" />
            <BsFillStarFill className=" ms-1" />
            <BsFillStarFill className=" ms-1" />
            <BsFillStarFill className=" ms-1" />
            <BsFillStarFill className=" ms-1" />
          </div>
          <p>Write Review</p>
        </div>

        <h4>Brand: PalashRazibEcomm</h4>

        <h2 className=" fw-bold">Price:৳596000 </h2>
        <div className=" d-flex flex-column ">
          <div className=" d-flex justify-content-center align-content-center ">
            <p className="fs-4 fw-bold my-auto me-1">-</p>
            <input className=" rounded-5 w-50 h-75  my-auto" type="text" />
            <p className="fs-4  fw-bold my-auto ms-1">+</p>
          </div>
          <div className=" my-3">
            <button className=" btn btn-success rounded-3 w-100 fw-bold">
              Add to Cart
            </button>
            <button className=" btn btn-success rounded-3 w-100 fw-bold mt-2">
              Buy Now
            </button>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              type="button"
              aria-expanded={!isCollapsed}
              className={`accordion-button ${isCollapsed ? "collapsed" : ""}`}
              onClick={toggleAccordion}
            >
              Product Details
              <span className="icon">
                {isCollapsed ? (
                  <AiOutlinePlusCircle />
                ) : (
                  <AiOutlineMinusCircle />
                )}
              </span>
            </button>
          </h2>
          <div
            className={`accordion-collapse ${isCollapsed ? "collapse" : ""}`}
          >
            <div className="accordion-body">
              <div className="ship-policy">
                {/*  <span>Shipping Policy:</span>
                <p>
                  We provide free shipping for all orders within India in
                  selected cities.
                </p> */}
              </div>
              <div className="return-policy">
                <span className="return-desc">
                  <p className="rtp">
                    Product: <span>55</span>
                  </p>
                  <p className="rtp">
                    Gross weight: <span>55</span>
                  </p>
                  <p className="rtp">
                    Collection: <span>55</span>
                  </p>
                  <p className="rtp">
                    Purity:: <span>55k</span>
                  </p>
                  <p className="rtp">
                    Diamond Clarity: <span>15vs</span>
                  </p>
                  <p className="rtp">
                    Diamond Clour: <span>V H</span>
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSection;

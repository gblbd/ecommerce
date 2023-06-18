import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegHeart } from 'react-icons/fa';
import './ProductDisplay.css'

const ProductDisplay = ({ items }) => {
    const [addProduct, setAddProduct] = useState([0])

    let countProduct = 0;

    const handleAddProduct = (product) => {
        console.log('I am clicked :', product);
        countProduct += 1;
    }
    console.log("countProduct : ", countProduct);

    return (
        <div className="col-lg-10 mx-auto">
            <div className="row">
                <div className="product my-3">
                    {items.map((product) => {
                        return (
                            <div className="" key={product.id}>
                                <div className=" mb-2" >
                                    <div className="">
                                        <div className="">
                                            <img src={product.img} alt={product.title} className="productImg rounded-2" />
                                        </div>
                                        <div className=" d-flex justify-content-between  align-items-center m-1">
                                            <p className="productTitle m-0 fw-bold">{product.title}</p>
                                            <FaRegHeart className=" text-secondary"></FaRegHeart>
                                        </div>
                                        <p className="productTitle m-0 fw-bold">{product.price}</p>
                                    </div>
                                    <div className=" d-flex justify-content-around ">

                                        <Link to="/" className=" text-decoration-none "> <small className=" text-secondary"> +Compare</small></Link>
                                        <Link to="/" onClick={() => handleAddProduct(product)} className=" text-decoration-none fw-bold"> <small className=" text-success"> Add To Cart </small></Link>

                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ProductDisplay;

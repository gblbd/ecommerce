import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../../../../../hooks/useAuth";
import {
  getLocalStorage,
  setLocalStorage,
} from "../../../../../utilities/helper";
import "./ProductDisplay.css";

const ProductDisplay = ({ items }) => {
  const [productList, setProductList] = useState([]);
  const { user, setUser, cartInfo, setCartInfo } = useAuth();

  console.log(" cartInfo", cartInfo);
  const getCartItemCount = () => {
    const productList = getLocalStorage("products");
    if (productList) {
      setCartInfo(
        productList.reduce((total, product) => total + product.count, 0)
      );
    }
    return 0;
  };

  const handleAddProduct = (product) => {
    const existingProduct = productList.find((p) => p._id === product._id);
    if (existingProduct) {
      // Product already exists, update its count
      const updatedProductList = productList.map((p) =>
        p._id === product._id ? { ...p, count: p.count + 1 } : p
      );
      setProductList(updatedProductList);
    } else {
      // Product does not exist, add it to the list with count 1
      setProductList([...productList, { ...product, count: 1 }]);
    }
  };

  // Save the updated productList to localStorage whenever it changes
  React.useEffect(() => {
    setLocalStorage("products", productList);
    getCartItemCount();
  }, [productList]);
  console.log("productList", productList);
  return (
    <div className="col-lg-10 mx-auto">
      <div className="row">
        <div className="product my-3">
          {items.map((product) => {
            return (
              <div className="" key={product._id}>
                <div className=" mb-2">
                  <div className="">
                    <div className="">
                      <img
                        src={product.img}
                        alt={product.title}
                        className="productImg rounded-2"
                      />
                    </div>
                    <div className=" d-flex justify-content-between  align-items-center m-1">
                      <p className="productTitle m-0 fw-bold">
                        {product.title}
                      </p>
                      <FaRegHeart className=" text-secondary"></FaRegHeart>
                    </div>
                    <p className="productTitle m-0 fw-bold">{product.price}</p>
                  </div>
                  <div className=" d-flex justify-content-around ">
                    <Link to="/" className=" text-decoration-none ">
                      {" "}
                      <small className=" text-secondary"> +Compare</small>
                    </Link>
                    <Link
                      onClick={() => handleAddProduct(product)}
                      className=" text-decoration-none fw-bold"
                    >
                      {" "}
                      <small className=" text-success"> Add To Cart </small>
                    </Link>
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

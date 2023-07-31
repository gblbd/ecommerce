import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../../../../../hooks/useAuth";
import {
  getLocalStorage,
  setLocalStorage,
} from "../../../../../utilities/helper";
import "./ProductDisplay.css";
const ProductDisplay = ({ items }) => {
  const [productList, setProductList] = useState([]);
  const { user, setUser, cartInfo, setCartInfo } = useAuth();
  const notify = () => toast("Added in cart!");
  const notify2 = () => toast("Added in wishlist!");

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
      notify();
    } else {
      // Product does not exist, add it to the list with count 1
      notify();
      setProductList([...productList, { ...product, count: 1 }]);
    }
  };

  // Save the updated productList to localStorage whenever it changes
  React.useEffect(() => {
    setLocalStorage("products", productList);
    getCartItemCount();
  }, [productList]);
  const [wishlist, setWishlist] = useState([]);
  const isProductInWishlist = (productId) => {
    return wishlist.some((p) => p._id === productId);
  };
  const handleWishlist = (product) => {
    const existingWishlist = [...wishlist];

    const isProductInWishlist = existingWishlist.some(
      (p) => p._id === product._id
    );
    let updatedWishlist;
    if (isProductInWishlist) {
      // If the product is already in the wishlist, remove it
      updatedWishlist = existingWishlist.filter((p) => p._id !== product._id);
      setWishlist(updatedWishlist);
      notify2();
    } else {
      // If the product is not in the wishlist, add it to the wishlist array
      updatedWishlist = [...existingWishlist, product];
      setWishlist(updatedWishlist);
      notify2();
    }

    // Update the local storage with the updated wishlist
    setLocalStorage("wishlist", updatedWishlist);
  };

  console.log("productList", productList);

  return (
    <div className="col-lg-10 mx-auto">
      <ToastContainer />
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
                      <FaRegHeart
                        className={
                          isProductInWishlist(product._id)
                            ? "text-red"
                            : "text-secondary"
                        }
                        onClick={() => handleWishlist(product)}
                      ></FaRegHeart>
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

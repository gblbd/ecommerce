import React, { useState } from "react";
import { Link } from "react-router-dom";

import useAuth from "../../../hooks/useAuth";
import { getLocalStorage, setLocalStorage } from "../../../utilities/helper";
import "./WishList.css";

const WishList = () => {
  // Get the wishlist from local storage
  const wishlist = getLocalStorage("wishlist") || [];
  const { user, setUser, cartInfo, setCartInfo } = useAuth();
  const getCartItemCount = () => {
    const productList = getLocalStorage("products");
    if (productList) {
      setCartInfo(
        productList.reduce((total, product) => total + product.count, 0)
      );
    }
    return 0;
  };
  const [productList, setProductList] = useState([]);
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
  React.useEffect(() => {
    setLocalStorage("products", productList);
    getCartItemCount();
  }, [productList]);
  return (
    <div className="col-10 mx-auto my-4">
      <h3 className="text-center fw-bold">Your Favorite Jewelry</h3>
      <table className="table table-hover table-bordered text-center">
        <thead>
          <tr className="table-secondary">
            <th scope="col">SL</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            {/*      <th scope="col">Added Date</th> */}
            <th scope="col">Status</th>
            <th scope="col">Details</th>
          </tr>
        </thead>
        <tbody>
          {wishlist.map((item, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{item.title}</td>
              <td>{item.price}</td>
              {/*  <td>{item.addedDate}</td> */}
              <td>
                <Link
                  onClick={() => handleAddProduct(item)}
                  className="text-decoration-none text-success"
                >
                  Add to Cart
                </Link>
              </td>
              <td>
                <Link className="text-decoration-none text-info" to="/">
                  Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WishList;

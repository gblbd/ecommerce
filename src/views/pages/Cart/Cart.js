import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";
import DiamondRing from "../../../assets/products/jeweleryProduct_06.png";
import {
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage,
} from "../../../utilities/helper";
import "./Cart.css";

const Cart = () => {
  const [cartList, setCartList] = useState([]);

  const getCartItemCount = () => {
    const productList = getLocalStorage("products");
    if (productList) {
      return productList.reduce((total, product) => total + product.count, 0);
    }
    return 0;
  };

  const cartItemCount = getCartItemCount();

  // Retrieve cart items from localStorage on component mount
  React.useEffect(() => {
    const productList = getLocalStorage("products");
    if (productList) {
      setCartList(productList);
    }
  }, []);
  const handleRemoveProduct = (productId) => {
    const updatedCartList = cartList.filter(
      (product) => product.id !== productId
    );
    setCartList(updatedCartList);
    // Update the localStorage with the updated product list
    setLocalStorage("products", updatedCartList);
    // Remove the product from localStorage
    removeLocalStorage(`product_${productId}`);
  };
  const calculateCartSubTotal = () => {
    return cartList.reduce(
      (total, product) => total + product.price * product.count,
      0
    );
  };

  const cartSubTotal = calculateCartSubTotal();

  // Function to calculate the total cart amount including delivery charge (dummy value for example)
  const calculateTotalCartAmount = () => {
    return cartSubTotal + 200; // Assuming a fixed delivery charge of 200 for example
  };

  const totalCartAmount = calculateTotalCartAmount();
  return (
    <div className="col-10 mx-auto">
      <div className="row">
        <div className="col-lg-9 my-4">
          <div className="d-flex justify-content-between">
            <h5 className="fw-bold text-uppercase">
              SHOPPING CART({cartItemCount} ITEMS)
            </h5>
            <p className="fw-bold text-uppercase">DELIVERY CHARGE INFO</p>
          </div>
          <div>
            <table className="table table-hover table-bordered  text-center ">
              <thead>
                <tr className=" table-secondary">
                  <th scope="col">SL</th>
                  <th scope="col">PRODUCT</th>
                  <th scope="col">UNIT PRICE</th>
                  <th scope="col">QUANTITY</th>
                  <th scope="col">TOTAL</th>
                  <th scope="col">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {cartList.map((product, index) => (
                  <tr key={product.id}>
                    <th scope="row">{index + 1}</th>
                    <td className="d-flex flex-column">
                      <Link to="/" className="text-decoration-none">
                        <img
                          className="cartProductImg"
                          src={DiamondRing}
                          alt="product_Image"
                        />
                      </Link>
                      <Link to="/" className="text-decoration-none productName">
                        {product.title}
                      </Link>
                      <Link to="/" className="text-decoration-none showDetails">
                        Show Details
                      </Link>
                    </td>
                    <td className="my-auto">৳{product.price}</td>
                    <td>{product.count}</td>
                    <td>৳{product.price * product.count}</td>
                    <td>
                      <BsTrash
                        onClick={() => handleRemoveProduct(product.id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className=" col-lg-3 mt-4">
          <p className=" fw-bold">ORDER SUMMARY</p>
          <hr />
          <p className="d-flex justify-content-between fw-bold">
            <span> Cart Sub Total:</span> <span> ৳{cartSubTotal}</span>
          </p>
          <hr />
          <h6 className="d-flex justify-content-between fw-bold">
            <span> Total Cart Amount:</span> <span> ৳{totalCartAmount}</span>
          </h6>

          <div className="discountCoupon my-2">
            <div class="input-group">
              <label className=" text-secondary">
                {" "}
                <small>
                  Only one coupon code can be used per order at this time.
                </small>{" "}
              </label>
              <input
                type="text"
                aria-label="couponCode"
                placeholder="Enter Coupon"
                class="form-control"
              />
              <span class="input-group-text btn btn-primary">APPLY</span>
            </div>
          </div>

          <Link
            to="/checkout"
            className=" btn btn-primary rounded-4 w-100 fw-bold mt-3"
          >
            PROCEED TO CHECKOUT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;

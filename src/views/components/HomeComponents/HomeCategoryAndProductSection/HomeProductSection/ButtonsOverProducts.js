import React from "react";
import ProductList from "../../../../../fake_api/ProductList";
import './ButtonsOverProducts.css';

const ButtonsOverProducts = ({ filterItem, setItem, menuItems }) => {
    return (
        <div>
            {menuItems.map((item, id) => {
                return (
                    <div>
                        <button
                            className="category_btn  mb-1 text-uppercase "
                            onClick={(hidebutton) => filterItem(item)}
                            key={id}
                        >
                            <div className=" d-flex">
                                <button>NEW</button>
                                <button>FEATURED</button>
                                <button>BEST SELLERS</button>
                            </div>
                        </button>
                    </div>
                );
            })}




        </div >
    );
};

export default ButtonsOverProducts;
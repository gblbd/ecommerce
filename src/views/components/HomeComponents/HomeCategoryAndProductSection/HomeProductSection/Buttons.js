import React from "react";
import ProductList from "../../../../../fake_api/ProductList";
import './Buttons.css';

const Buttons = ({ filterItem, setItem, menuItems }) => {
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
                                <span className="arrow">&#10148;</span> {item}
                            </div>
                        </button>
                    </div>
                );
            })}
            <button
                className="category_btn text-uppercase"
                onClick={() => setItem(ProductList)}
            >
                <div className=" d-flex">
                    <span className="arrow">&#10148;</span> Show All
                </div>
            </button>



        </div >
    );
};

export default Buttons;
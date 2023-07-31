import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../../contextProvider/ContextProvider";
import "./HomeCategoryDisplaySection.css";

const HomeCategoryDisplaySection = ({ category }) => {
  const { categoryId, setCategoryId } = useContext(ProductContext);

  const { _id, name } = category;

  return (
    <div>
      <div className="">
        <Link to={`/category/${_id}`} onClick={setCategoryId(_id)}>
          <button className=" btn btn-outline-primary mb-1">
            &#10148;{name}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeCategoryDisplaySection;

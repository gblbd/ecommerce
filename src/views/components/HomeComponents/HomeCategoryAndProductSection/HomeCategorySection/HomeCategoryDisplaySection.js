import React, { useContext, useState } from 'react';
import './HomeCategoryDisplaySection.css';
import { Link, Outlet } from 'react-router-dom';
import { ProductContext } from '../../../contextProvider/ContextProvider';
import HomeProductsSection from '../HomeProductSection/HomeProductsSection';

const HomeCategoryDisplaySection = ({ category }) => {
    const { categoryId, setCategoryId } = useContext(ProductContext);


    const { id, name } = category;

    return (
        <div>
            <div className=''>
                <Link to={`/category/${id}`} onClick={setCategoryId(id)}>
                    <button
                        className=' btn btn-outline-primary mb-1'
                    >
                        &#10148;{name}
                    </button>
                </Link>

            </div>
        </div>
    );
};

export default HomeCategoryDisplaySection;
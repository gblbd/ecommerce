import React, { useContext } from 'react';
import { ProductContext } from '../../../contextProvider/ContextProvider';
import Loader from '../../../Shared/Loader/Loader';

const HomeProductsSection = () => {

    const { categoryId, loading, setLoading } = useContext(ProductContext);

    console.log("New Setted Category ID :", categoryId);

    if (loading) {
        <Loader></Loader>
    }

    return (
        <div>
            <h2>Show all  Products  of this category</h2>
        </div>
    );
};

export default HomeProductsSection;
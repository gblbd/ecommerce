import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductImage from '../../../../../assets/products/jeweleryProduct_09.png'
import { GiCheckMark } from 'react-icons/gi'
import { BsFillHeartFill, BsFillStarFill } from 'react-icons/bs'
import './ProcuctDetails.css';

const ProductDetailsSection = () => {

    const [products, setProducts] = useState(['']);

    const productId = useParams();
    const clickedProductId = productId.productId;

    useEffect(() => {
        fetch("../../../../../fake_api/product_list.json")
            .then(res => res.json())
            .then(data => {
                // console.log("ProductDetailsSection : ", data)
                setProducts(data);
            })
    }, [])

    const selectedProduct = products.find(product => product.id === clickedProductId);
    // const { title, image, price } = selectedProduct;
    console.log("selectedProduct ProductDetailsSection :", selectedProduct);


    return (
        <div className=' d-flex justify-content-evenly justify-content-center align-items-center p-3'>
            <img className='pdDetailImg' src={ProductImage} alt="product_image" />
            <div>
                <div className=' d-flex justify-content-center align-items-center'>
                    <h2>Special Diamond Ring </h2> <BsFillHeartFill className=' text-primary fs-3 ms-3'></BsFillHeartFill>
                </div>

                <div className=' d-flex justify-content-between align-content-center'>
                    <h5 className=' text-success d-flex align-items-center my-2'> <GiCheckMark className=''></GiCheckMark> In Stock</h5>
                    <p> <b>Code:</b> GBHN45677HH</p>
                </div>

                <div className=' d-flex justify-content-evenly align-content-center'>
                    <div> <BsFillStarFill className=' ms-1' /><BsFillStarFill className=' ms-1' /><BsFillStarFill className=' ms-1' /><BsFillStarFill className=' ms-1' /><BsFillStarFill className=' ms-1' /></div>
                    <p>Write Review</p>
                </div>


                <h4>Brand: PalashRazibEcomm</h4>

                <h2 className=' fw-bold'>Price:৳596000 </h2>
                <div className=' d-flex flex-column '>
                    <div className=' d-flex justify-content-center align-content-center ' >
                        <p className='fs-4 fw-bold my-auto me-1'>-</p>
                        <input className=' rounded-5 w-50 h-75  my-auto' type="text" />
                        <p className='fs-4  fw-bold my-auto ms-1'>+</p>
                    </div>
                    <div className=' my-3'>
                        <button className=' btn btn-success rounded-3 w-100 fw-bold'>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsSection;
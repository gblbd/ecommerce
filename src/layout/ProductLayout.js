import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../views/components/CommonComponents/Footer/Footer';
import Navbar from '../views/components/CommonComponents/Header/Navbar';

const ProductLayout = () => {
    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        fetch('../../src/fake_api/category_list.json')
            .then(res => res.json())
            .then(data => console.log("All Category : ", data))
    }, [])

    return (
        <div className='col-10 mx-auto'>
            <Navbar></Navbar>
            <div className="row">
                <div className=" col-lg-3 mt-md-5">
                    <ul className=" list-group">

                        <li className="  ">
                            <Link className=" btn btn-outline-primary text-decoration-none" to={`/category/1}`}>  Category One </Link>
                        </li>
                        <li className="  ">
                            <Link className=" btn btn-outline-primary text-decoration-none" to={`/category/2}`}>  Category Two </Link>
                        </li>
                        <li className="  ">
                            <Link className=" btn btn-outline-primary text-decoration-none" to={`/category/3}`}>  Category Three </Link>
                        </li>
                        <li className="  ">
                            <Link className=" btn btn-outline-primary text-decoration-none" to={`/category/4}`}>  Category Four </Link>
                        </li>
                        <li className="  ">
                            <Link className=" btn btn-outline-primary text-decoration-none" to={`/category/5}`}>  Category Five </Link>
                        </li>

                        <li className="  ">
                            <Link className=" btn btn-outline-primary text-decoration-none" to={`/category/6}`}>  Category Six </Link>
                        </li>

                        <li className="  ">
                            <Link className=" btn btn-outline-primary text-decoration-none" to={`/category/7}`}>  Category Seven </Link>
                        </li>

                        <li className="  ">
                            <Link className=" btn btn-outline-primary text-decoration-none" to={`/category/8}`}>  Category Eight </Link>
                        </li>

                        <li className="  ">
                            <Link className=" btn btn-outline-primary text-decoration-none" to={`/category/9}`}>  Category Nine </Link>
                        </li>

                        <li className="  ">
                            <Link className=" btn btn-outline-primary text-decoration-none" to={`/category/10}`}>  Category Ten </Link>
                        </li>

                        <li className="  ">
                            <Link className=" btn btn-outline-primary text-decoration-none" to={`/category/11}`}>  Category Eleven </Link>
                        </li>
                        <li className="  ">
                            <Link className=" btn btn-outline-primary text-decoration-none" to={`/category/12}`}>  Category Twelve </Link>
                        </li>
                    </ul>
                </div>

                <div className=' col-lg-9'>
                    <Outlet></Outlet>
                </div>
            </div>

            <Footer></Footer>

        </div>
    );
};

export default ProductLayout;
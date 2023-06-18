import React from 'react';
import './WishList.css';
import { Link } from 'react-router-dom';

const WishList = () => {
    return (
        <div className='col-10 mx-auto my-4'>
            <h3 className=' text-center fw-bold' >Your Favorite Jewelry</h3>
            <table className="table table-hover table-bordered  text-center ">
                <thead>
                    <tr className=' table-secondary'>
                        <th scope="col">SL</th>
                        <th scope="col">Title</th>
                        <th scope="col">Added Date</th>
                        <th scope="col">Status</th>
                        <th scope="col">Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Diamond Gold</td>
                        <td>23/04/2023</td>
                        <td> <Link className=' text-decoration-none text-success'>Add to Cart</Link></td>
                        <td><Link className=' text-decoration-none text-info' to="/">Diamond One</Link></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Diamond Gold</td>
                        <td>23/04/2023</td>
                        <td> <Link className=' text-decoration-none text-success'>Add to Cart</Link></td>
                        <td><Link className=' text-decoration-none text-info' to="/">Diamond Two</Link></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Diamond Gold</td>
                        <td>23/04/2023</td>
                        <td> <Link className=' text-decoration-none text-success'>Add to Cart</Link></td>
                        <td><Link className=' text-decoration-none text-info' to="/">Diamond Three</Link></td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Diamond Gold</td>
                        <td>27/04/2023</td>
                        <td> <Link className=' text-decoration-none text-success'>Add to Cart</Link></td>
                        <td><Link className=' text-decoration-none text-info' to="/">Diamond Four</Link></td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>Diamond Gold</td>
                        <td>29/04/2023</td>
                        <td> <Link className=' text-decoration-none text-secondary'>Ordered</Link></td>
                        <td><Link className=' text-decoration-none text-info' to="/">Diamond Five</Link></td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
};

export default WishList;
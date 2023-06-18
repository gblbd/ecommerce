import React, { useState } from 'react';
import { GiBigDiamondRing } from 'react-icons/gi';
import ProductList from '../../../../../fake_api/ProductList';
import Buttons from '../HomeProductSection/Buttons';
import ProductDisplay from '../HomeProductSection/ProductDisplay';
import './HomeCategorySection.css';
import ButtonsOverProducts from '../HomeProductSection/ButtonsOverProducts';

const HomeCategorySection = () => {
    const newProductDisplay = ProductList.slice(0, 8);
    const [items, setItems] = useState(newProductDisplay);


    const menuItems = [...new Set(ProductList.map((product) => product.category))];

    const filterItem = (curcat) => {
        const newItem = ProductList.filter((newVal) => {
            return newVal.category === curcat;
        });
        setItems(newItem);
    };

    return (
        <div className='productArea'>
            <div className='col-10 mx-auto py-4'>
                <div className="row ">
                    <div className=' col-lg-2 col-md-4 col-12'>
                        <p className="buttonsTitle"><GiBigDiamondRing className="diamondRing mx-0"></GiBigDiamondRing>ITEM CATEGORIES</p>
                        <Buttons
                            filterItem={filterItem}
                            setItem={setItems}
                            menuItems={menuItems}
                        />
                    </div>
                    <div className='col-lg-10 col-md-8 col-12 productDisplayArea'>
                        {/* <div className='buttonOverProduct col-lg-2 col-md-4 col-12'>
                            <ButtonsOverProducts
                                filterItem={filterItem}
                                setItem={setItems}
                                menuItems={menuItems}
                            />
                        </div> */}
                        <ProductDisplay items={items} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCategorySection;
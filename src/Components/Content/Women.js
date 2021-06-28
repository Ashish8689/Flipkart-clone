import React from 'react'
import { useSelector } from 'react-redux';
import { selectwomens } from '../../features/products/productsSlice';
import { Category } from '../../productsData';
import CategoryBlock from './CategoryBlock';
import Products from './Products'

function Women() {

    const Allproduct = useSelector(selectwomens);

    return (
        <>

           <div className="category-container">
                {Category.map(item =>(
                    <CategoryBlock data={item} />
                ))}
            </div>

            <div className="Women-container">
                <div className="banner-container">
                    <div className="banner"></div>
                </div>

                <div className="container">
                    <div className="product-container">
                        {Allproduct.map(product=>{
                            return <Products key={product.id} product={product}/>
                        })}       
                    </div>      
                </div> 
            </div>
        </>
    )
}

export default Women

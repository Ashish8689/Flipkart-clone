import React from 'react'
import { useSelector } from 'react-redux';
import { selectmobile } from '../../features/products/productsSlice';
import './content.css'
import Products from './Products'
import CategoryBlock from '../Content/CategoryBlock';
import { Category } from "../../productsData";


function Content() {

    const Allmobile = useSelector(selectmobile);

    return (
        <div className="content-container">

            <div className="category-container">
                {Category.map(item =>(
                    <CategoryBlock data={item} />
                ))}
            </div>

            <div className="banner-container">
                <div className="banner"></div>
            </div>

            <div className="container">
                <div className="product-container">
                    {Allmobile.map(product=>{
                        return <Products key={product.id} product={product}/>
                    })}       
                </div>      
            </div>    

        </div>
    )
}

export default Content

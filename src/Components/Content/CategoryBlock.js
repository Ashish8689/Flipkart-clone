import React from 'react'
import { Link } from 'react-router-dom'

function CategoryBlock({data:{category,img}}) {
    return (
        <div className="category-block">
            <Link to={category}>
                <div className="category-img-container">
                    <img src={img} alt="category" />
                </div>
                <div className="category-content">
                   <h3>{category}</h3>
                </div>
            </Link>
        </div>
    )
}

export default CategoryBlock

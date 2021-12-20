
import Data from './Products.json';
import Item from './Item';
import React from 'react';
import Detail from "./Detail"
import "./Product.css"


const Product = () => {
    return (
            <div className="Product">
                <div className="listView">
                {
                    Data.map((data, key)=>{
                        console.log(key)
                        return (
                            <div key={key}>
                                <Item 
                                key={data.id}
                                name={data.brand_name}
                                brand_logo={data.brand_logo}
                                price={data.price}
                                media={data.media}
                                stock={data.stock}
                                description={data.description}
                                />
                            </div>
                        )
                    })
                }
                </div>
                <div className="detailView">
                    <Detail />
                </div>
            </div>
    )
}

export default Product

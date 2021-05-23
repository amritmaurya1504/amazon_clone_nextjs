import React from 'react'
import Product from './Product'

const ProductFeed = ({products}) => {
    return (
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-col-4 md:-mt-40 lg:-mt-96 mx-auto">
            {
                products.slice(0,4).map(({id , title , price , description , category , image}) => {
                    return (
                        <Product key={id} 
                        id={id}
                        title={title}
                        price={price}
                        category={category}
                        description={description}
                        image={image}
                         />
                    )
                })
            }
            <img className="md:col-span-full" src="https://links.papareact.com/dyz" alt="" />
            <div className="md:col-span-2">
            {
                products.slice(4,5).map(({id , title , price , description , category , image}) => {
                    return (
                        <Product key={id} 
                        id={id}
                        title={title}
                        price={price}
                        category={category}
                        description={description}
                        image={image}
                         />
                    )
                })
            }
            </div>
            {
                products.slice(5,products.length).map(({id , title , price , description , category , image}) => {
                    return (
                        <Product key={id} 
                        id={id}
                        title={title}
                        price={price}
                        category={category}
                        description={description}
                        image={image}
                         />
                    )
                })
            }
        </div>
    )
}

export default ProductFeed

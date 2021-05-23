import React, { useState } from 'react'
import Image from "next/image"
import {StarIcon} from "@heroicons/react/solid"
import Currency from "react-currency-formatter"
const MAX_RATING = 5;
const MIX_RATING = 1;
const Product = ({id , title , price , description , category , image}) => {
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIX_RATING +1)) + MIX_RATING
    );
    return (
        <div className="relative flex flex-col m-5 bg-white z-30 p-10">
            <p className="absolute top-2 right-2 text-xs italic text-gray-500">{category}</p>
            <Image src={image} height={200} width={200} objectFit="contain" />
            <h4 className="my-3">{title}</h4>
            <div className="flex">
                 {Array(rating).fill().map((_,i) => (
                <StarIcon className="h-5 text-yellow-500" />
                 ))}
            </div>
            <p className="text-xs my-2 line-clamp-3">{description}</p>
            <div className="mb-5">
                <Currency quantity={price} currency="INR" />
            </div>
            <button className="mt-auto button">Add to Basket</button>
        </div>
    )
}

export default Product

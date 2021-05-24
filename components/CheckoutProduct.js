import { StarIcon } from "@heroicons/react/solid"
import Image from "next/image"
import Currency from "react-currency-formatter"
import { useDispatch } from "react-redux"
import { addToBasket , removeFromBasket } from "../slices/basketSlice"
const CheckoutProduct = ({ id, title, price, rating, description, category, image }) => {
    const dispatch = useDispatch();

    const additemtobasket = () => {
        const product = {
            id, title, price, rating, description, category, image 
        }
       dispatch(addToBasket(product))
    }
    const removeItemFrom = () => {
        dispatch(removeFromBasket({ id }))
    }

    return (
        <div className="grid grid-cols-5">
            <Image
                src={image}
                width={200}
                height={200}
                objectFit="contain"
            />
            <div className="col-span-3 mx-5">
                <p>{title}</p>
                <div className="flex">
                    {Array(rating).fill().map((_, i) => (
                        <StarIcon key={i} className="h-5 text-yellow-500" />
                    ))}
                </div>
                <p className="text-xs my-2 line-clamp-3">{description}</p>
                <Currency quantity={price} currency="INR" />
            </div>
            <div className="flex flex-col space-y-2 my-auto justify-self-end">
                <button className="button" onClick={additemtobasket} >Add to basket</button>
                <button className="button" onClick={removeItemFrom}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct

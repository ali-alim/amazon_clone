import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import CurrencyFormat from "react-currency-format";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

function CheckoutProduct({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
  hasPrime,
}) {
  const dispatch = useDispatch()
  const addItemToBasket = () => {
    const product = {
      id, title, price, rating, description, category, image, hasPrime
    };
    //Push item into Redux
    dispatch(addToBasket(product))
    
  }

  const removeItemFromBasket = () => {
    //remove the item from redux
    dispatch(removeFromBasket({id}))
  }

  return (
    <div className="grid grid-cols-5">
      <Image src={image} width={200} height={200} objectFit="contain" />
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={id} className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-3">
          {description}
        </p>
        <CurrencyFormat
          value={price}
          displayType={"text"}
          thousandSeparator={true}
          suffix={"₾"}
        />
        
        {hasPrime && (
          <div className="flex items-center space-x-2">
          <img loading="lazy" className="w-12" src="https://links.papareact.com/fdw" alt="" />  
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>
       {/* Right add/remove buttons */}
       <div className="flex flex-col justify-items-end my-auto space-y-2">
         <div className="button" onClick={addItemToBasket}>Add to Basket</div>
         <div className="button" onClick={removeItemFromBasket}>Remove from Basket</div>
       </div>
    </div>
  );
}

export default CheckoutProduct;

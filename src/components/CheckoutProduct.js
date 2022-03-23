import Image from "next/image"

function CheckoutProduct({
    id,
    title,
    price,
    rating,
    description,
    category,
    image,
    hasPrime
}) {
  return (
    <div className="grid grid-cols-5">
        <Image
            src={image}
            width={200}
            height={200}
            objectFit="contain"
        />
    </div>
  )
}

export default CheckoutProduct
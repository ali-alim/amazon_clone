import Header from "../components/Header";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import { useSession } from "next-auth/react";
import CurrencyFormat from "react-currency-format";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(process.env.stripe_public_key);

function Checkout() {
  
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const { data: session, status } = useSession();
  const createCheckoutSession = async () => {
    const stripe = await stripePromise;

    //call the backend to create a checkout session
  };
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto ">
        {/* Left Side */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />
          <div className="flex flex-col space-y-10 p-5 bg-white">
            <h1 className="border-b pb-4 text-3xl">
              {items.length === 0
                ? "Your Amazon Cart is empty"
                : "Shopping Cart"}
            </h1>
            {items.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                rating={item.rating}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                hasPrime={item.hasPrime}
              />
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col shadow-md p-10 bg-white">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} {items.length == 1 ? "item" : "items"}
                ):
                <span className="font-bold">
                  <CurrencyFormat
                    value={total}
                    displayType={"text"}
                    thousandSeparator={true}
                    suffix={"₾"}
                  />
                </span>
              </h2>

              <form action="/create-checkout-session">
                <button
                  disabled={!session}
                  className={`button mt-2 ${
                    !session &&
                    "from-gray-300 to-gray-500 border-gray-200 text-gray-200 cursor-not-allowed"
                  }`}
                >
                  {!session ? "Sign in to checkout" : "Proceed to checkout"}
                </button>
              </form>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default Checkout;

import Header from "../components/Header"
import Image from "next/image"
function Checkout() {
    // const 
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
            objectFit='contain'
        />
        <div className="flex flex-col space-y-10 p-5 bg-white" >
            <h1 className="border-b pb-4 text-3xl">Your shopping basket</h1>
        </div>
        </div>

        {/* Right Side */}
        <div></div>
    </main>
    </div>
  )
}

export default Checkout
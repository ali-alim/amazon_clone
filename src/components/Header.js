import Image from "next/image";
import {useRouter} from "next/router"
import {signIn, signOut, useSession} from "next-auth/react";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

function Header() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const items = useSelector(selectItems)

  return (
    <header className="sticky top-0 z-50">
      {/* TOP NAV */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        {/* LOGO */}
        <div className="mt-2 flex item-center flex-grow sm:flex-grow-0">
          <Image
          onClick={()=>router.push('/')}
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>

        {/* SEARCH */}
        <div className=" hidden sm:flex items-center h-10 rounded-md cursor-pointer flex-grow bg-yellow-400 hover:bg-yellow-500">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink focus:outline-none rounded-l-md"
            type="text"
          />
          <SearchIcon className="h-12 p-4" />
        </div>

        {/* RIGHT SECTION   */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div onClick={!session ? signIn : signOut} className="link cursor-pointer">
            <p>
              {session ? `Hello, ${session.user.name}` : 'Hello, Sign in'}
            </p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>

          <div className="link" onClick={() => session && router.push('/orders')}>
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div onClick = {()=>router.push('/checkout')} className="relative link flex items-center">
            <span className="absolute top-0 right-0 md:right-10 w-4 h-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              {items.length}
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold mt-2 md:text-sm">
              Basket
            </p>
          </div>
        </div>
      </div>
      {/* BOTTOM NAV */}
      <div className="flex items-center bg-amazon_blue-light text-white text-sm space-x-3 h-6 p-2 pl-6 ">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link-bn">Today's deals</p>
        <p className="link-bn">Customer Service</p>
        <p className="link-bn hidden md:inline-flex">Registry</p>
        <p className="link-bn hidden md:inline-flex">Gift Cards</p>
        <p className="link-bn hidden md:inline-flex">Sell</p>
      </div>
    </header>
  );
}

export default Header;

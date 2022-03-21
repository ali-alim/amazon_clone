import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
function Header() {
  return (
    <header>
      {/* TOP NAV */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        {/* LOGO */}
        <div className="mt-2 flex item-center flex-grow sm:flex-grow-0">
          <Image
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
          <div className="link">
            <p>Hello Ali M.</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>

          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div className="relative link flex items-center">
            <span className="absolute top-0 right-0 md:right-10 w-4 h-4 bg-yellow-400 text-center rounded-full text-black font-bold">0</span>
            <ShoppingCartIcon className="h-10"/>
            <p className="hidden md:inline font-extrabold mt-2 md:text-sm">Basket</p>
          </div>
        </div>
      </div>
      {/* BOTTOM NAV */}
      <div></div>
    </header>
  );
}

export default Header;

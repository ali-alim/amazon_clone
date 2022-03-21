import Image from "next/image";
import { MenuIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline'
function Header() {
  return (
    <header>
      {/* TOP NAV */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
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
        <div>
          <BeakerIcon className="h-7 w-7 text-white"/>
          <input type="text" />
        </div>
      </div>

      {/* BOTTOM NAV */}
      <div></div>
    </header>
  );
}

export default Header;

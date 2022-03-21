import Image from "next/image";
function Header() {
  return (
    <header>
      {/* TOP NAV */}
      <div>
        <Image
        src="https://links.papareact.com/f90"
        width={150}
        height={40} />
      </div>

      {/* BOTTOM NAV */}
      <div></div>
    </header>
  );
}

export default Header;

'use client'
import { useState } from "react";
import Link from 'next/link';
import CartBadge from "./pages/cart/CartBadge";
import SidebarToggle from "@/hooks/cart/SidebarToggle";
import CartSidebar from "./pages/cart/CartSidebar";
import Image from "next/image";

const Nav: React.FC = () => {
  const [isNavMenuVisible, setIsNavMenuVisible] = useState(false);

  const toggleNavMenu = () => {
    setIsNavMenuVisible(!isNavMenuVisible);
  };

  const [isCartOpen, toggleCart] = SidebarToggle(false);
  return (
    <>
      <header className="xl:px-24 sticky top-0 z-50 ">
        <div className="head bg-white flex items-center lg:items-start shadow-xl rounded-b-xl">
          <div className="img p-4 sm:p-8 flex justify-center items-center lg:shadow-lg h-full shadow-[#00b7ab7d] rounded-b-xl">
            <Link href="/">
            <Image src="/images/logo.png" alt="alt" width={350} height={350} className="h-full" priority={false}/>
              {/* <img src="images/logo.png" alt="logo" height="350" width="350" className="h-full" /> */}
            </Link>
          </div>
          <div className="parent w-full">
            <div className="one hidden lg:grid bg-[#00B7AB] justify-end pr-4 xl:pr-8 gap-6">
              <div className="py-4 flex items-center text-white gap-6">
                <a href="tel:+919125393939" className="flex items-center gap-2">
                  <Image src="/images/phone.svg" alt="alt" width={30} height={30} />
                  {/* <img src="images/phone.svg" alt="" />  */}
                  +91 9125393939</a>
                <a href="" className="flex items-center gap-2">
                  <Image src="/images/mail.svg" alt="alt" width={30} height={30} />
                  {/* <img src="images/mail.svg" alt="" /> */}
                  dr.pathcare@gmail.com
                </a>
                <a href="" type="button" className="flex gap-2 items-center bg-white py-2 px-4 rounded-lg shadow text-[#00B7AB]">
                <Image src="/images/phone-call.svg" alt="alt" width={16} height={16} /> Call</a>
                <a href="" type="button" className="flex gap-2 items-center bg-white py-2 px-4 rounded-lg text-[#00B7AB] shadow">
                <Image src="/images/Whatsapp.svg" alt="alt" width={16} height={16} /> Whatsapp</a>
              </div>
            </div>
            <div className="two flex items-center py-4 gap-6 xl:gap-12 justify-end pr-6 xl:pr-20">
              <nav>
                <button data-collapse-toggle="navbar-default" onClick={toggleNavMenu} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                  <span className="sr-only">Open main menu</span>
                  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                  </svg>
                </button>
                <div className={`w-full md:block md:w-auto duration-100 ease-in-out transition-all ${isNavMenuVisible ? "block" : "hidden"}`} id="navbar-default">
                  <ul className="z-50 font-medium absolute lg:static right-0 w-1/2 lg:w-full flex items-center flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                      <Link href="/" className="block py-2 px-3 text-gray-900 rounded md:p-0" aria-current="page">Home</Link>
                    </li>
                    <li>
                      <Link href="/aboutus" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About Us</Link>
                    </li>
                    <li>
                      <a href="/test" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Test</a>
                    </li>
                    <li>
                      <Link href="/contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </nav>
              <a href="" type="button" className="lg:flex hidden gap-2 items-center bg-white py-2 px-4 rounded-lg text-[#00B7AB] shadow shadow-gray-300">
              <Image src="/images/microscope.svg" alt="alt" width={18} height={18} />
                Test
              </a>
              <a href="" type="button" className="lg:flex hidden gap-2 items-center bg-white py-2 px-4 rounded-lg text-[#00B7AB] shadow shadow-gray-300">
              <Image src="/images/statoscope.svg" alt="alt" width={18} height={18} /> Checkups</a>
              <CartBadge onClick={toggleCart} />
            </div>
          </div>
        </div>
      </header>

      {isCartOpen &&
          <CartSidebar isOpen={isCartOpen} onClose={toggleCart} />
        }
    </>
  );
};

export default Nav;
<style jsx>{`
.navmenu.hideMenu {
  display: none;
}
.navmenu.visible {
  display: block;
}
`}</style>
"use client";
import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header className="lg:justify-between lg:hidden ">
        {/* main div */}
        <div className="flex items-center justify-between px-8 py-6 lg:px-4 lg:bg-white">
          {/* first div  logo*/}
          <div className="">
            <Image
              src="/images/nikelogo.png"
              alt="Picture of the Nike"
              width={70}
              height={30}
            />
          </div>
          {/* second div  button*/}
          <div className="lg:hidden">
            <button type="button" className="block" onClick={toggleMenu}>
              <svg className="h-8 w-8 fill-current text-white" viewBox="0 0 24 24">
                {!isOpen && (
                  <path
                    fill-rule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
                {isOpen && (
                  <path
                    fill-rule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        <nav
          className={`px-5 pt-2 pb-4 lg:flex lg:px-[15rem] lg:p-5 lg:tracking-widest lg:space-x-10 lg:uppercase ${isOpen ? "block" : "hidden"}`}
        >
          <Link
            href="/home"
            className="block px-2 py-1 text-white hover:bg-red-400 rounded lg:font-bold lg:text-xl"
          >
            Home
          </Link>
          <Link
            href="/home"
            className="block mt-1 px-2 py-1 text-white hover:bg-red-400 rounded lg:font-bold lg:text-xl lg:mt-0"
          >
            Collection
          </Link>
          <Link
            href="/home"
            className="block mt-1 px-2 py-1 text-white hover:bg-red-400 rounded lg:font-bold lg:text-xl lg:mt-0"
          >
            About
          </Link>
          <Link
            href="/home"
            className="block mt-1 px-2 py-1 text-white hover:bg-red-400 rounded lg:font-bold lg:text-xl lg:mt-0"
          >
            Contact
          </Link>
         
        </nav>
      </header>
    </div>
  );
};

export default Navbar;

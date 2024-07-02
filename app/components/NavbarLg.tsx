import { FC } from "react";

import Link from "next/link";

const NavbarLg: FC = () => {
  return (
    <div className=" text-white">
      <nav className="flex justify-center items-center h-16 mr-32">
        <ul className="flex space-x-20">
          <Link href="/home" className="mt-12 p-4 hover:rounded-md uppercase font-bold tracking-widest hover:bg-red-400 text-xl">
            Home
          </Link>
          <Link href="/home" className="mt-12 p-4 hover:rounded-md uppercase font-bold tracking-widest hover:bg-red-400 text-xl">
            Collection
          </Link>
          <Link href="/home" className="mt-12 p-4 hover:rounded-md uppercase font-bold tracking-widest hover:bg-red-400 text-xl">
            About
          </Link>
          <Link href="/home" className="mt-12 p-4 hover:rounded-md uppercase font-bold tracking-widest hover:bg-red-400 text-xl">
            Contact
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default NavbarLg;

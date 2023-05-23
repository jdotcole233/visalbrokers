import Image from "next/image";
import Link from "next/link";
import React from "react";
const imageLoader = require("../../loader.js");
const Navbar = () => {
  return (
    <div className=" bg-gray-100">
      <nav className="max-w-screen-xl items-center mx-auto grid grid-cols-4 p-4">
        <div className="col-span-2 flex items-center">
          <Image
            loader={imageLoader}
            src="/assets/Logo.png"
            alt="logo"
            height={30}
            width={30}
          />
          <h2 className="font-bold ">VISAL BROKERS</h2>
        </div>
        <div className="col-span-2 hidden md:flex">
          <ul className="flex justify-around">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Service</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Contact Us</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

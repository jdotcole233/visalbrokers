import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className=" w-screen md:bg-heroimage pb-32">
      <div className=" md:mx-36 grid  grid-cols-4">
        <div className="py-28 col-span-4 px-6 md:col-span-3 lg:col-span-2">
          <span className="uppercase tracking-wider text-xs">
            Your future - our passion
          </span>
          <div className="pt-4 flex flex-col gap-3">
            <p className="text-5xl font-bold tracking-wider text-blue-600">
              Providing
            </p>
            <p className="text-5xl font-bold tracking-wider">Professional</p>
            <p className="text-5xl font-bold tracking-wider">
              (re)insurance <span className="text-blue-600">advice</span>{" "}
            </p>
            <p className="text-gray-500 text-xs w-3/4">
              Our organization stands as a knowledge house when it comes to
              professional (re)insurance advice with close to 40 years of (re)insurance
              experience.
            </p>
            <p className="p-4 bg-blue-600 w-5/12 md:w-3/12 text-center text-white">
              <Link href="/">
                <a>Get a quote</a>
              </Link>
            </p>
          </div>
        </div>
        <div></div>
      </div>
      {/* <div className="grid grid-cols-4">
        <div></div>
        <div className="col-span-4 md:col-span-3 ">
          <Image
            src="/assets/partners.png"
            alt="partners"
            height={50}
            width={1000}
          />
        </div>
      </div> */}
    </div>
  );
};

export default Hero;

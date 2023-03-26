import Image from "next/image";
import React from "react";

const imageLoader = require("../../../loader.js")

const OurTeam = () => {
  const people = [
    {
      image: "/assets/DSC_6726.JPG",
    },
    {
      image: "/assets/DSC_6726.JPG",
    },
    {
      image: "/assets/DSC_6726.JPG",
    },
    {
      image: "/assets/DSC_6726.JPG",
    },
    {
      image: "/assets/DSC_6726.JPG",
    },
    {
      image: "/assets/DSC_6726.JPG",
    },
  ];

  return (
    <div>
      <div className="max-w-screen-xl mx-auto p-4">
        <div className="flex flex-col items-center justify-center py-10 gap-3">
          <span className="uppercase tracking-widest text-blue-600 font-light ">
            Our Team
          </span>
          <span className="text-3xl font-semibold tracking-widest">
            Meet Our Team Members
          </span>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {people.map((person, index) => (
            <div key={index} className="relative">
              <Image
                src={person.image}
                alt="Vincent"
                loader={imageLoader}
                height={500}
                width={350}
              />
              {/* <div className=" right-0 left-0 -bottom-5 bg-white p-4 absolute">
                <span>CEO</span>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;

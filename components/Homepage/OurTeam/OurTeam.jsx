import Image from "next/image";
import React from "react";

const imageLoader = require("../../../loader.js");

const OurTeam = () => {
  const people = [
    {
      image: "/assets/DSC_6726.JPG",
      company: "Visal Re",
      name: "Sam Norman Sali",
      role: "Managing Director",
    },
    {
      image: "/assets/DON_1102.JPG",
      company: "Visal Re",
      name: "Aseye Yawa Bediako",
      role: "Senior Broking Officer",
    },
    {
      image: "/assets/Alvan.JPG",
      company: "VISAL INSURANCE",
      name: "Alvan Nhyira Sali ",
      role: "Business Development Manager",
    },
    {
      image: "/assets/Naa.JPG",
      company: "VISAL INSURANCE ",
      name: "Naa Lamiley Lamptey",
      role: "Client Relations Manager",
    },
    {
      image: "/assets/Bansah.JPG",
      company: "VISAL INSURANCE",
      name: "Christabel Bansah",
      role: "Administrative Executive",
    },
    {
      image: "/assets/Aseye.jpg",
      company: "Visal Re",
      name: "Aseye Tsatsu",
      role: "Finance & Human Resource Executive",
    },
    {
      image: "/assets/bod.jpeg",
      company: "VISAL INSURANCE",
      name: "Elizabeth Dugble",
      role: "Technical Director",
    },
  ];

  return (
    <div className="pb-11">
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
              <div className=" right-0 left-0 flex flex-col -bottom-5 bg-white p-4 absolute">
                <span className="font-medium">{person?.company}</span>
                <span className="font-bold">{person?.name}</span>
                <span className="font-light">{person?.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;

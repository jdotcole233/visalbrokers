import Image from "next/image";
import React from "react";

const imageLoader = require("../../../loader.js");

const OurServices = () => {
  const list = [
    {
      title: "Fire and allied Risks",
      text: "We help you desicover any protection inclusions that are ideal for you.",
      image: "/assets/Images/fire and allied risks.jpg",
    },
    {
      title: "Assets All Risks",
      text: "We help you desicover any protection inclusions that are ideal for you.",
      image: "/assets/Images/Assets All risks.jpg",
    },
    {
      title: "Miscellaneous Accident",
      text: "We help you desicover any protection inclusions that are ideal for you.",
      image: "/assets/Images/Miscellaneous Accident.jpg",
    },
    {
      title: "Engineering comprising",
      text: "We help you desicover any protection inclusions that are ideal for you.",
      image: "/assets/Images/Engineering comprising.jpg",
    },
    {
      title: "Motor",
      text: "We help you desicover any protection inclusions that are ideal for you.",
      image: "/assets/Images/Motor.jpg",
    },
    {
      title: "Marine and Aviation",
      text: "We help you desicover any protection inclusions that are ideal for you.",
      image: "/assets/Images/marine and aviation.jpg",
    },
    {
      title: "Combined Policies",
      text: "We help you desicover any protection inclusions that are ideal for you.",
      image: "/assets/Images/Combined Policies.jpg",
    },
    {
      title: "Life Insurance",
      text: "We help you desicover any protection inclusions that are ideal for you.",
      image: "/assets/Images/Life insurance.jpg",
    },
    {
      title: "Health Insurance",
      text: "We help you desicover any protection inclusions that are ideal for you.",
      image: "/assets/Images/Health insurance.jpg",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="py-10 md:py-20">
        <div className="flex flex-col gap-3">
          <span className="uppercase tracking-widest text-center">
            Our Service
          </span>
          <span className="text-4xl font-semibold tracking-wide text-center">
            We Provide The Best Insurance Broking Services
          </span>
          <span className="text-blue-500 tracking-widest text-center">
            We cover all fields of insurance
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-10 px-4 pt-20">
          {list.map((item, index) => (
            <div key={index} className=" shadow-lg rounded-lg">
              <div className="h-44 w-full relative">
                <Image
                  src={item.image}
                  loader={imageLoader}
                  alt="cover"
                  layout="fill"
                  objectFit="fill"
                  className="object-contain h-full w-full rounded-lg"
                />
              </div>
              <div className="pt-5 flex flex-col py-2 gap-2 px-2">
                <span className="text-xl">{item.title}</span>
                {/* <span className="text-sm text-gray-400 pb-5">{item.text}</span> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;

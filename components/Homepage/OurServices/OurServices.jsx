import Image from "next/image";
import React from "react";

const OurServices = () => {

    const list = [
        {
            title: "Fire and allied Risks",
            text:"We help you desicover any protection inclusions that are ideal for you.",
            image:"/assets/cover1.png"
        },
        {
            title: "Assets All Risks",
            text:"We help you desicover any protection inclusions that are ideal for you.",
            image:"/assets/assets.png"
        },
        {
            title: "Miscellaneous Accident",
            text:"We help you desicover any protection inclusions that are ideal for you.",
            image:"/assets/bike.png"
        },
        {
            title: "Engineering comprising",
            text:"We help you desicover any protection inclusions that are ideal for you.",
            image:"/assets/Engineering.png"
        },
        {
            title: "Motor",
            text:"We help you desicover any protection inclusions that are ideal for you.",
            image:"/assets/bike.png"
        },
        {
            title: "Marine and Aviation",
            text:"We help you desicover any protection inclusions that are ideal for you.",
            image:"/assets/aviation.png"
        },
        {
            title: "Combined Policies",
            text:"We help you desicover any protection inclusions that are ideal for you.",
            image:"/assets/combined.png"
        },
        {
            title: "Life Insurance",
            text:"We help you desicover any protection inclusions that are ideal for you.",
            image:"/assets/lifeInsurance.png"
        },
        {
            title: "Health Insurance",
            text:"We help you desicover any protection inclusions that are ideal for you.",
            image:"/assets/healthInsurance.png"
        },
    ]

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="py-10 md:py-20">
        <div className="flex flex-col gap-3">
          <span className="uppercase tracking-widest text-center">
            Our Service
          </span>
          <span className="text-4xl font-semibold tracking-wide text-center">
            We Provide Best Services
          </span>
          <span className="text-blue-500 tracking-widest text-center">
            We are covering all the insurance fields
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10 px-4 pt-20">
            {list.map((item,index) => (
          <div key={index} className=" shadow-lg rounded-lg">
              <div className="h-44 w-full relative">
                <Image
              src={item.image}
              alt="cover"
              layout="fill"
              objectFit="fill"
              className="object-contain h-full w-full rounded-lg"
            />
              </div>
              <div className="pt-5 flex flex-col py-2 gap-2 px-2">
                <span className="text-xl">{item.title}</span>
                <span className="text-sm text-gray-400 pb-5">{item.text}</span>
              </div>
          </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;

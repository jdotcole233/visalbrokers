import Image from "next/image";
import React from "react";

const imageLoader = require("../../../loader.js")

const Features = () => {
  const list = [
    {
      title: "Loyalty",
      image: "/assets/featureicon.png",
      text: "In +30 years we have already help countless companies with insurance and become a vertified platform",
    },
    {
      title: "Commitment",
      image: "/assets/featureicon.png",
      text: "In +30 years we have already help countless companies with insurance and become a vertified platform",
    },
    {
      title: "Speed",
      image: "/assets/featureicon.png",
      text: "In +30 years we have already help countless companies with insurance and become a vertified platform",
    },
    {
      title: "Professionalism",
      image: "/assets/featureicon.png",
      text: "In +30 years we have already help countless companies with insurance and become a vertified platform",
    },
    {
      title: "Innovation",
      image: "/assets/featureicon.png",
      text: "In +30 years we have already help countless companies with insurance and become a vertified platform",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto py-20">
      <div className="flex flex-col gap-3">
        <p className="uppercase text-blue-600 text-center">Features</p>
        <p className="text-center text-3xl font-semibold ">
          Why are we better than others?
        </p>
        <p className="w-3/4 mx-auto grid grid-cols-1 text-gray-400 text-xs">
          <span className="text-center">
            To become one of the leading insurance broking and consultancy firms
          </span>
          <span className="text-center">
            in Ghana and West Africa by combining quality and timely service
            delivery with professionalism in premium cost management,efficient
            risk management
          </span>
          <span className="text-center"> and claim management service.</span>
        </p>
      </div>
      <div className="p-6 mt-10 grid-cols-2 md:grid-cols-3 grid lg:grid-cols-5 gap-4">
        {list.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 py-5 px-3 items-center justify-center shadow-lg rounded-lg"
          >
            <Image loader={imageLoader} src={item?.image} alt="icon" height={30} width={30} />
            <p className="font-semibold">{item?.title}</p>
            {/* <p className="text-xs text-gray-400 text-center">{item?.text}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Service = () => {
  const list = [
    {
      title: "Fire and Allied Risks",
      icon: "/assets/group 3.png",
      text: "We provide comprehensive coverage for all types of fire and allied risks.",
    },
    {
      title: "Assets All Risks",
      icon: "/assets/group 3 (1).png",
      text: "We provide a comprehensive range of insurance products to cover all types...",
    },
    {
      title: "Miscallaneous Accident",
      icon: "/assets/group 3 (2).png",
      text: "We provide comprehensive coverage for all types of accident including...",
    },
    {
      title: "Engineering Comprising",
      icon: "/assets/group 3 (3).png",
      text: "We provide comprehensive coverage for all types of engineering including...",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <div className="grid md:grid-cols-5 md:py-20">
        <div className="col-span-3">
          <div className="grid grid-cols-2 gap-4">
            {list.map((item, index) => (
              <div key={index} className="bg-gray-50 p-4 flex flex-col gap-3">
                <div>
                  <Image src={item?.icon} alt="icon" height={50} width={50} />
                </div>
                <p className="text-lg">{item?.title}</p>
                <span className="text-gray-400 ">{item?.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="md:col-span-2 col-span-3 p-4 flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <p className="uppercase text-blue-600 tracking-widest">service</p>
            <span className="text-3xl font-semibold">We Promise, We Will</span>
            <span className="text-3xl font-semibold">
              Protect You From In and
            </span>
            <span className="text-3xl font-semibold">Out</span>
          </div>
          <div>
            <span className="text-sm text-gray-400">
              To become one of the leading insurance broking and consultancy
              firms in Ghana and West Africa by combining quality and timely
              service delivery with{" "}
            </span>
          </div>
          <p className="px-4 py-3 bg-blue-600 rounded-full text-center w-2/4 text-white">
            <Link href="/"><a>Learn more</a></Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;

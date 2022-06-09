import Image from "next/image";
import React from "react";

const OurTeam = () => {
  const people = [
    {
      image: "/assets/Frame 125.png",
    },
    {
      image: "/assets/Frame 125.png",
    },
    {
      image: "/assets/Frame 125.png",
    },
    {
      image: "/assets/Frame 125.png",
    },
    {
      image: "/assets/Frame 125.png",
    },
    {
      image: "/assets/Frame 125.png",
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
            <div key={index}>
              <Image
                src={person.image}
                alt="Vincent"
                height={500}
                width={350}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;

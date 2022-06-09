import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <div className="flex flex-col items-center justify-center gap-5">
        <span className="uppercase font-light tracking-widest">
          Testimonial
        </span>
        <span className="text-4xl tracking-wide">
          What Our Customers Have To Say
        </span>
        <span className="text-sm text-gray-400">
          we share common trends, strategies ideas, opinion, short & log stories
          from the team and customers
        </span>
      </div>
      <div className="grid md:grid-cols-5 md:py-10">
        <div className="col-span-2">
            <Image src='/assets/Frame 347.png' alt='kwame' height={400} width={400} />
        </div>
        <div className="col-span-3">
            <div className="md:w-3/4">
          <span className="text-2xl tracking-wider leading-loose">
            Low-hanging fruit are we in agreeance, we need to leverage our
            synergies. Put it on the parking lot drive awareness to increase
            engagement but shelfware, yet if you could do that, that would be
            great get all your ducks in a row.
          </span>
          <div className="py-10 flex justify justify-between">
              <span className="text-2xl font-semibold">Kwame Osei</span>
              <span className="text-gray-400 text-xl italic font-light">COO @ Africa Reinsurance Corporation</span>
          </div>
          <div>
              <Image src='/assets/africare.png' alt="africare" height={40} width={180} />
          </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

import Image from "next/image";
import React from "react";
import { ArrowRightIcon } from "@heroicons/react/outline";


const imageLoader = require("../../../loader.js")

const FastTrack = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <div className="grid md:grid-cols-2">
        <div>
          <div className="flex flex-col gap-3 py-4">
            <h2 className="text-4xl md:text-5xl font-semibold w-10/12">
              Visal Re: Where Reinsurance solutions are custom arranged to suit
              your needs
            </h2>
            <h2 className="text-4xl md:text-5xl font-semibold"></h2>
            <h2 className="text-4xl md:text-5xl font-semibold"></h2>
          </div>
          <Image
            src="/assets/Frame 59.png"
            height={600}
            loader={imageLoader}
            width={500}
            alt="increase"
          />
        </div>
        <div className="md:pt-20">
          <span className=" font-light text-gray-500 ">
            Visal Reinsurance Brokers provides reinsurance intermediary services
            to insurance companies domiciled in Africa. Our focus is to ensure
            the adequate protection of investments fashioned for the development
            of the continent. We have provided reinsurance solutions for major
            African investments in Energy & Power, Construction & Engineering,
            Marine, Mining and Technology.
          </span>
          <div className="w-4/5 mx-auto mt-10">
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/assets/Frame 328.png"
                  height={80}
                  loader={imageLoader}
                  width={80}
                  alt="icon"
                />
                <div className="flex flex-col">
                  <p>Update or change your </p>
                  <p>current plan everytime you want</p>
                </div>
                <Image
                  src="/assets/arrow_down.png"
                  alt="arrow"
                  height={30}
                  loader={imageLoader}
                  width={30}
                />
              </div>
              <span className=" font-light text-gray-500 ">
                Fast track design thinking yet quarterly sales are at an
                all-time low I have a hard stop in an hour and half thought{" "}
              </span>
              <p className="flex gap-4 items-center">
                <span>Learn more</span>
                <ArrowRightIcon className="h-6 w-6 text-gray-500" />
              </p>
              <div className="divide-y">
                <div className="flex justify-around items-center py-5 ">
                  <div>
                    <Image
                      src="/assets/envelopeopen.png"
                      alt="envelope"
                      height={30}
                      loader={imageLoader}
                      width={30}
                    />
                  </div>
                  <div className="flex flex-col">
                    <p>Be the #1 in getting our</p>
                    <p>latest news</p>
                  </div>
                  <div>
                    <Image
                      src="/assets/Frame 66.png"
                      alt="arrow"
                      height={30}
                      loader={imageLoader}
                      width={30}
                    />
                  </div>
                </div>
                <div className="flex justify-around items-center py-5">
                  <div>
                    <Image
                      src="/assets/envelopeopen.png"
                      alt="envelope"
                      loader={imageLoader}
                      height={30}
                      width={30}
                    />
                  </div>
                  <div className="flex flex-col">
                    <p>Register everywhere</p>
                    <p>and everytime you want</p>
                  </div>
                  <div>
                    <Image
                      src="/assets/Frame 66.png"
                      alt="arrow"
                      loader={imageLoader}
                      height={30}
                      width={30}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FastTrack;

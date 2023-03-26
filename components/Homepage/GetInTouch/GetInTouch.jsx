import Image from "next/image";
import React from "react";

const imageLoader = require("../../../loader.js");

const GetInTouch = () => {
  return (
    <div className="bg-gradient-to-b from-cyan-800 to-blue-700">
      <div className="max-w-screen-xl mx-auto md:p-4 p-2 ">
        <div className="md:py-20 flex items-center justify-center py-10 bg-right bg-family-bg bg-no-repeat">
          <div className="md:w-4/5 mx-auto">
            <h1 className="text-white text-2xl ">Get In Touch</h1>
            <div className="grid grid-cols-1 md:pt-10 pt-5 gap-7">
              <div className="grid grid-cols-2 gap-5">
                <div className="grid grid-cols-1 gap-1">
                  <label className="text-white">Your name</label>
                  <input className="p-2 rounded border-2 focus:outline-none border-gray-300 " type="text" />
                </div>
                <div className="grid grid-cols-1 gap-1">
                  <label className="text-white">Your Email</label>
                  <input className="p-2 rounded border-2 focus:outline-none border-gray-300 " type="text" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div className="grid grid-cols-1 gap-1">
                  <label className="text-white">Your Subject</label>
                  <input className="p-2 rounded border-2 focus:outline-none border-gray-300 " type="text" />
                </div>
                <div className="grid grid-cols-1 gap-1">
                  <label className="text-white">Contact Number</label>
                  <input className="p-2 rounded border-2 focus:outline-none border-gray-300 " type="text" />
                </div>
              </div>
              <div className="grid grid-cols-1">
                <div className="grid grid-cols-1 gap-1">
                  <label className="text-white">Your Subject</label>
                  {/* <input className="p-2 rounded border-2 focus:outline-none border-gray-300 " type="text" /> */}
                  <textarea cols="10" rows="10"></textarea>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/assets/partners.png"
            height={60}
            loader={imageLoader}
            width={900}
            alt="partners"
          />
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;

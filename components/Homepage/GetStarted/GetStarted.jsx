import Image from "next/image";
import React from "react";

const GetStarted = () => {
  return (
    <div className="bg-gray-100 bg-woman-bg bg-right-bottom bg-no-repeat">
      <div className="max-w-screen-xl p-4 mx-auto md:py-20 ">
        <div>
          <div className="flex flex-col gap-5">
            <span className="uppercase text-sm text-blue-500">Free Quote</span>
            <div className="flex flex-col gap-2">
              <span className="text-3xl">Get an insurance quote to</span>
              <span className="text-3xl">get started!</span>
            </div>
            <div className="flex gap-2">
              <button className="bg-blue-500 text-white font-bold py-px px-2 rounded">
                Home
              </button>
              <button className="bg-black text-white font-bold py-px px-2 rounded">
                Life
              </button>
              <button className="bg-black text-white font-bold py-px px-2 rounded">
                Health
              </button>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 py-20">
          <div className="flex flex-col gap-5">
            <input
              className="rounded p-2  border-2 md:opacity-100 opacity-70 border-gray-400 md:w-4/5"
              placeholder="Full name"
              type="text"
            />
            <input
              className="rounded p-2  border-2 md:opacity-100 opacity-70 border-gray-400 md:w-4/5"
              placeholder="Email Address"
              type="text"
            />
            <select className="rounded p-2  border-2 md:opacity-100 opacity-70 border-gray-400 md:w-4/5">
              <option value="">select</option>
            </select>
            <div>
              <button className="p-4 bg-blue-600 text-white rounded text-center">
                Get a quote
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <Image src='/assets/projects.png' alt="projects" height={300} width={1800} /> */}
    </div>
  );
};

export default GetStarted;

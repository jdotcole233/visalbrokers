import Image from "next/image";
import React from "react";

const imageLoader = require("../../../loader.js");

const FastTrack = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 mb-11">
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
            src="/assets/301.gif"
            height={600}
            loader={imageLoader}
            width={500}
            alt="increase"
          />
        </div>
        <div className="md:pt-20">
          <span className=" font-light text-gray-500 ">
            Visal Reinsurance(Visal Re) Brokers provides reinsurance intermediary services
            to insurance companies domiciled in Africa. Our focus is to ensure
            the adequate protection of investments fashioned for the development
            of the continent. We have provided reinsurance solutions for major
            African investments in Energy & Power, Construction & Engineering,
            Marine, Mining and Technology.
          </span>
          {/* Services */}
          <div className="mt-6">
            <h3>
              We offer the best of reinsurance services in the below key areas.
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-4 mt-6">
            <div className="flex flex-row space-x-3">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-11 h-11"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <h1 className="font-bold">
                  Facultative Reinsurance management
                </h1>
                <p className="font-light">
                  We provide facultative reinsurance services for cedants in
                  different countries. Our expertise in this area enables us
                  guarantee reinsurance solutions for any type of risk.
                </p>
              </div>
            </div>

            <div className="flex flex-row space-x-3">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-11 h-11"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <h1 className="font-bold">Treaty Reinsurance management</h1>
                <p className="font-light">
                  We provide treaty reinsurance services for both insurance and
                  reinsurance companies in the sub region. Our ability to
                  negotiate favorable terms and secure arrangement with top
                  notch securities helps us guarantee peace of mind for all our
                  clients.
                </p>
              </div>
            </div>

            <div className="flex flex-row space-x-3">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-11 h-11"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <h1 className="font-bold">Claims Handling</h1>
                <p className="font-light">
                  Claims management is a key aspect of our business. We work
                  deligently with all our partners on this front to ensure that
                  genuine claims are not only paid but paid promptly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FastTrack;

import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
const imageLoader = require("../../../loader.js");

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
};

const Testimonials = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <div className="flex flex-col items-center justify-center gap-5">
        <span className="uppercase font-light tracking-widest">
          Our Reinsurance Partners
        </span>
        {/* <span className="text-4xl tracking-wide">
          What Our Customers Have To Say
        </span> */}
        {/* <span className="text-sm text-gray-200">
          we share common trends, strategies ideas, opinion, short & log stories
          from the team and customers
        </span> */}
      </div>
      <Slider {...settings}>
        {/* <div className=""> */}
        <div className="">
          <Image
            src="/assets/logo/Ghana Reinsurance PLC.png"
            alt="kwame"
            loader={imageLoader}
            height={200}
            width={200}
          />
        </div>
        <div className="">
          <Image
            src="/assets/logo/WAICA Reinsurance Corporation.png"
            alt="kwame"
            loader={imageLoader}
            height={200}
            width={200}
          />
        </div>
        <div className="">
          <Image
            src="/assets/logo/Africa Reinsurance corporation.png"
            alt="kwame"
            height={200}
            loader={imageLoader}
            width={200}
          />
        </div>
        <div className="">
          <Image
            src="/assets/logo/GN Reinsurance.png"
            alt="kwame"
            height={200}
            loader={imageLoader}
            width={200}
          />
        </div>
        <div className="">
          <Image
            src="/assets/logo/Mainstream re.png"
            alt="kwame"
            height={200}
            loader={imageLoader}
            width={200}
          />
        </div>
        <div className="">
          <Image
            src="/assets/logo/Taiping General Insurance Ltd.png"
            alt="kwame"
            height={200}
            loader={imageLoader}
            width={200}
          />
        </div>
        <div className="">
          <Image
            src="/assets/logo/Alltrust Insurance Company.png"
            alt="kwame"
            height={200}
            loader={imageLoader}
            width={200}
          />
        </div>
        <div className="">
          <Image
            src="/assets/logo/Continental Reinsurance Company.png"
            alt="kwame"
            height={200}
            loader={imageLoader}
            width={200}
          />
        </div>
        <div className="">
          <Image
            src="/assets/logo/FBS Reinsurance Company.png"
            alt="kwame"
            height={200}
            loader={imageLoader}
            width={200}
          />
        </div>
        <div className="">
          <Image
            src="/assets/logo/W-Safe Reinsurance Company.png"
            alt="kwame"
            height={200}
            loader={imageLoader}
            width={200}
          />
        </div>
        <div className="">
          <Image
            src="/assets/logo/Swan Reinsurance Company.png"
            alt="kwame"
            height={200}
            loader={imageLoader}
            width={200}
          />
        </div>
        <div className="">
          <Image
            src="/assets/logo/African Specialty Risk.png"
            alt="kwame"
            height={200}
            loader={imageLoader}
            width={200}
          />
        </div>
        <div className="">
          <Image
            src="/assets/logo/Cica Reinsurance Compan.png"
            alt="kwame"
            height={200}
            loader={imageLoader}
            width={200}
          />
        </div>
        <div className="">
          <Image
            src="/assets/logo/Aveni Reinsurance Company.png"
            alt="kwame"
            height={200}
            loader={imageLoader}
            width={200}
          />
        </div>
        <div className="">
          <Image
            src="/assets/logo/Nouvelle Compagnie African De Reassurance.png"
            alt="kwame"
            height={200}
            loader={imageLoader}
            width={200}
          />
        </div>
        <div className="">
          <Image
            src="/assets/logo/SCG Gabon.png"
            alt="kwame"
            height={200}
            loader={imageLoader}
            width={200}
          />
        </div>
        <div className="">
          <Image
            src="/assets/logo/Kenya Reinsurance Corporation.png"
            alt="kwame"
            height={200}
            loader={imageLoader}
            width={200}
          />
        </div>
        <div className="">
          <Image
            src="/assets/logo/GIC South Africa.png"
            alt="kwame"
            height={200}
            loader={imageLoader}
            width={200}
          />
        </div>
        <div className="">
          <Image
            src="/assets/logo/Oman Reinsurance Company.png"
            alt="kwame"
            height={200}
            loader={imageLoader}
            width={200}
          />
        </div>
        <div className="">
          <Image
            src="/assets/logo/Ethiopian Reinsurance Company.png"
            alt="kwame"
            height={200}
            loader={imageLoader}
            width={200}
          />
        </div>
        {/* </div> */}
      </Slider>
    </div>
  );
};

export default Testimonials;

import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { FaGifts, FaShippingFast } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import "./Services.css";
const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="my-10">
      <>
        <div className="divider w-1/3 mx-auto mt-6 bg-blue-500 h-1"></div>
        <h1 className="text-4xl font-bold text-center text-blue-600">
          Our Services
        </h1>
        <div className="divider w-1/3 mx-auto mt-6 bg-blue-500 h-1"></div>
      </>
      <div className="grid grid-cols-1 lg:grid-cols-3 mx-10 gap-10">
        <div className="mt-6 text-center pr-2 border-r-2">
          <div>
            <FaShippingFast className="w-20 h-20 mx-auto text-rose-500 border-2 p-3 border-rose-500 rounded-full"></FaShippingFast>
          </div>
          <h4 className="text-xl font-bold ">Free Shipping</h4>
          <p>
            With our FREE shipping offer, you can conveniently browse and order
            your favorite toys from the comfort of your own home. We will ensure
            your purchase is carefully packaged and delivered right to your
            doorstep, saving you time and effort.
          </p>
        </div>

        <div className="mt-6 text-center  pr-2 border-r-2">
          <div>
            <GiReturnArrow className="w-20 h-20 mx-auto text-rose-500 border-2 p-3 border-rose-500 rounded-full"></GiReturnArrow>
          </div>
          <h4 className="text-xl font-bold ">Gift Cards</h4>
          <p>
            Struggling to find the perfect gift for a child in your life? Look
            no further than our Toy Store gift cards! With our gift cards, you
            can give the gift of endless possibilities, allowing the recipient
            to choose their own toy and create unforgettable memories.
          </p>
        </div>

        <div className="mt-6 text-center  pr-2 border-r-2">
          <div>
            <FaGifts className="w-20 h-20 mx-auto text-rose-500 border-2 p-3 border-rose-500 rounded-full"></FaGifts>
          </div>
          <h4 className="text-xl font-bold ">Various Offers</h4>
          <p>
            With our FREE shipping offer, you can conveniently browse and order
            your favorite toys from the comfort of your own home. We will ensure
            your purchase is carefully packaged and delivered right to your
            doorstep, saving you time and effort.
          </p>
        </div>
      </div>

      <div
        data-aos="zoom-in"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
        className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-10 mx-12">
        <div className="cute-doll rounded-2xl">
          <h2
            data-aos="flip-left"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            className="text-center text-5xl font-bold p-2 rounded-lg mt-20 bg-indigo-500 w-1/2 mx-auto">
            Cute Toy
          </h2>

          <h5 className="bg-blue-500 mt-2 mx-auto w-1/2 p-3 rounded">
            Latest Collection
          </h5>
          <button className="bg-rose-500 mt-2 lg:ml-56 px-3 py-2 rounded-3xl text-white">
            SHOP NOW
          </button>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1200"
          className="on-sale rounded-2xl">
          <h2
            data-aos="flip-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1500"
            className="text-5xl font-bold p-2 rounded-lg mt-28 bg-purple-500 w-1/3 ml-4">
            On Sale
          </h2>

          <h5 className="bg-violet-600 mt-2 w-1/3 ml-4 p-2 rounded">
            Latest Collection
          </h5>
          <button className="bg-rose-500 mt-2 ml-4 px-3 py-2 rounded-3xl text-white">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;

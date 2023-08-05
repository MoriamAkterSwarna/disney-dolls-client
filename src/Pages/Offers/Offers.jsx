import Lottie from "lottie-react";
import React from "react";
import offerLottie from "../../assets/animation_lky1ztsf.json";
const Offers = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <Lottie
        className=" w-full lg:w-1/2 h-[70vh]"
        animationData={offerLottie}
        loop={true}
      />
      <div
        data-aos="flip-right"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="bg-blue-300 w-full lg:w-1/2 mr-20 h-full mt-20 py-20 px-10 text-center rounded-full ">
        <h2 className="text-5xl text-blue-600 font-bold">Upto 35% Discount</h2>

        <h3 className="mt-2 text-2xl font-bold">Magical Savings </h3>
        <h4 className="text-xl font-bold">Buy From Disney Toy Store</h4>

        <button className="btn btn-primary mt-4">Shop Now</button>
      </div>
    </div>
  );
};

export default Offers;

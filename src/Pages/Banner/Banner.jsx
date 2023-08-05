import React from "react";
import banner1 from "../../assets/banner/banner1.jpg";
import banner2 from "../../assets/banner/banner2.jpg";
import banner3 from "../../assets/banner/banner3.jpg";
import Brands from "../Brands/Brands";
import CategoryTab from "../CategoryTab/CategoryTab";
import Gallary from "../Gallary/Gallary";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";

const Banner = () => {
  return (
    <div className="m-0">
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img src={banner3} className="w-full mr-0 object-cover h-[80vh]" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src={banner2} className="w-full object-cover h-[80vh]" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src={banner1} className="w-full object-cover h-[80vh]" />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs bg-blue-600">
          1
        </a>
        <a href="#item2" className="btn btn-xs bg-blue-600">
          2
        </a>
        <a href="#item3" className="btn btn-xs bg-blue-600">
          3
        </a>
      </div>
      <Brands></Brands>
      <Gallary></Gallary>
      <CategoryTab></CategoryTab>
      <div>
        <div className="divider w-2/3 mx-auto mt-6 bg-blue-500 h-1"></div>
        <h1 className="text-center text-5xl font-bold text-blue-600">
          Clients Feedback About us:{" "}
        </h1>
        <div className="divider w-1/3 mx-auto mt-6 bg-blue-500 h-1"></div>
        <Testimonials></Testimonials>
      </div>
      <Services></Services>
    </div>
  );
};

export default Banner;

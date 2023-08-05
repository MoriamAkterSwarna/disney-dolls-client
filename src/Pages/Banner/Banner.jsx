import React from "react";
import banner1 from "../../assets/banner/banner1.jpg";
import banner2 from "../../assets/banner/banner2.jpg";
import banner3 from "../../assets/banner/banner3.jpg";
import Brands from "../Brands/Brands";
import CategoryTab from "../CategoryTab/CategoryTab";
import Gallary from "../Gallary/Gallary";
import Offers from "../Offers/Offers";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";

const Banner = () => {
  return (
    <div className="m-0">
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <div class="relative">
            <img
              src={banner1}
              class="w-full lg:w-[100vw] h-full lg:h-[80vh] object-cover"
              alt="Banner Image"
            />
            <div class=" w-full lg:w-1/2 left-2 lg:left-auto  right-2 absolute top-4 md:top-1/3 lg:top-1/4 xl:top-1/3 lg:right-4 md:right-10 bg-white py-4 md:py-10 px-4 md:px-10 rounded-md">
              <h2 class="text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-2 md:mb-3 font-bold text-blue-600">
                "Step into a World of Enchantment: <br /> Explore the Magic at
                the <br /> Disney Toy Store!"
              </h2>
              <p class="text-sm md:text-base lg:text-lg xl:text-xl">
                Step into a realm filled with beloved characters, <br /> magical
                adventures, and an array of captivating toys <br /> that are
                sure to ignite the spark <br /> of joy in both the young and the
                young at heart.
              </p>
            </div>
          </div>
        </div>

        <div id="item2" className="carousel-item w-full">
          <div class="relative">
            <img
              src={banner3}
              class="w-full lg:w-[100vw] h-full lg:h-[80vh] object-cover"
              alt="Banner Image"
            />
            <div class=" w-full lg:w-1/2 left-2 lg:left-auto  right-2 absolute top-4 md:top-1/3 lg:top-1/4 xl:top-1/3 lg:right-4 md:right-10 bg-white py-4 md:py-10 px-4 md:px-10 rounded-md">
              <h2 class="text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-2 md:mb-3 font-bold text-blue-600">
                "Step into a World of Enchantment: <br /> Explore the Magic at
                the <br /> Disney Toy Store!"
              </h2>
              <p class="text-sm md:text-base lg:text-lg xl:text-xl">
                Step into a realm filled with beloved characters, <br /> magical
                adventures, and an array of captivating toys <br /> that are
                sure to ignite the spark <br /> of joy in both the young and the
                young at heart.
              </p>
            </div>
          </div>
        </div>
        <div id="item3" className="carousel-item w-full">
          <div class="relative">
            <img
              src={banner2}
              class="w-full lg:w-[100vw] h-full lg:h-[80vh] object-cover"
              alt="Banner Image"
            />
            <div class=" w-full lg:w-1/2 left-2 lg:left-auto  right-2 absolute top-4 md:top-1/3 lg:top-1/4 xl:top-1/3 lg:right-4 md:right-10 bg-white py-4 md:py-10 px-4 md:px-10 rounded-md">
              <h2 class="text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-2 md:mb-3 font-bold text-blue-600">
                "Step into a World of Enchantment: <br /> Explore the Magic at
                the <br /> Disney Toy Store!"
              </h2>
              <p class="text-sm md:text-base lg:text-lg xl:text-xl">
                Step into a realm filled with beloved characters, <br /> magical
                adventures, and an array of captivating toys <br /> that are
                sure to ignite the spark <br /> of joy in both the young and the
                young at heart.
              </p>
            </div>
          </div>
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

      <Offers></Offers>
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
      <Brands></Brands>
    </div>
  );
};

export default Banner;

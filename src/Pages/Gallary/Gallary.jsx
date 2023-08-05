import React from "react";

import "aos/dist/aos.css";
import gallery2 from "../../assets/gallery/gallery-2.jpg";
import gallery3 from "../../assets/gallery/gallery-3.jpg";
import gallery1 from "../../assets/gallery/gallery1.jpg";
import gallery4 from "../../assets/gallery/gallery4.jpg";
import gallery5 from "../../assets/gallery/gallery5.jpg";
import gallery6 from "../../assets/gallery/gallery6.jpg";
const Gallary = () => {
  return (
    <div className="my-8">
      <h2 className="text-center text-6xl mb-6"> Toy Gallery</h2>
      <div className="container px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
          <div data-aos="fade-up" data-aos-duration="3000">
            <img
              className=" h-[295px] w-[440px] object-cover shadow-lg rounded-lg border-2 p-3 hover:bg-fuchsia-400 hover:transform hover:scale-110 hover:transition-all hover:duration-300 "
              src={gallery1}
              alt="Image 1"
            />
          </div>

          <div data-aos="fade-up" data-aos-duration="3000" className="">
            <img
              className="h-[295px] w-full object-cover shadow-lg rounded-lg border-2 p-3 hover:bg-fuchsia-400 hover:transform hover:scale-110  hover:transition-all hover:duration-300"
              src={gallery2}
              alt="Image 2"
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="3000">
            <img
              className="h-[295px] w-[440px] object-cover shadow-lg rounded-lg border-2 p-3 hover:bg-fuchsia-400 hover:transform hover:scale-110  hover:transition-all hover:duration-300"
              src={gallery3}
              alt="Image 3"
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="3000">
            <img
              className="h-[295px] w-[440px] object-cover shadow-lg rounded-lg border-2 p-3 hover:bg-fuchsia-400 hover:transform hover:scale-110  hover:transition-all hover:duration-300"
              src={gallery4}
              alt="Image 4"
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="3000">
            <img
              className="h-[295px] w-[440px]  object-cover shadow-lg rounded-lg border-2 p-3 hover:bg-fuchsia-400 hover:transform hover:scale-110  hover:transition-all hover:duration-300"
              src={gallery5}
              alt="Image 5"
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="3000">
            <img
              className="h-[295px] w-[440px]  object-cover shadow-lg rounded-lg border-2 p-3 hover:bg-fuchsia-400 hover:transform hover:scale-110  hover:transition-all hover:duration-300"
              src={gallery6}
              alt="Image 6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallary;

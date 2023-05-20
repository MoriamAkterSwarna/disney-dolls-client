import React, { useEffect } from "react";

import gallery1 from "../../assets/gallery/gallery1.jpg";
import gallery2 from "../../assets/gallery/gallery-2.jpg";
import gallery3 from "../../assets/gallery/gallery-3.jpg";
import gallery4 from "../../assets/gallery/gallery4.jpg";
import gallery5 from "../../assets/gallery/gallery5.jpg";
import gallery6 from "../../assets/gallery/gallery6.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
const Gallary = () => {
 
  return (
    <div className="my-8">
      <h2 className="text-center text-6xl mb-6"> Toy Gallery</h2>
      <div className="container px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto">
          <div data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="600">
            <img
              className=" h-[295px] w-[440px] object-cover shadow-lg rounded-lg border-2 p-3"
              src={gallery1}
              alt="Image 1"
            />
          </div>

          <div data-aos="fade-left " data-aos-easing="ease-in-sine" data-aos-duration="600">
            <img
              className="h-[295px] w-[440px] object-cover shadow-lg rounded-lg border-2 p-3"
              src={gallery2}
              alt="Image 2"
            />
          </div>
          <div data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="600">
            <img
              className="h-[295px] w-[440px] object-cover shadow-lg rounded-lg border-2 p-3"
              src={gallery3}
              alt="Image 3"
            />
          </div>
          <div data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-duration="600">
          <img
            className="h-[295px] w-[440px] object-cover shadow-lg rounded-lg border-2 p-3"
            src={gallery4}
            alt="Image 4"
          />
          </div>
          <div data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="600"><img
            className="h-[295px] w-[440px]  object-cover shadow-lg rounded-lg border-2 p-3"
            src={gallery5}
            alt="Image 5"
          /></div>
          <div data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-duration="600"><img
            className="h-[295px] w-[440px]  object-cover shadow-lg rounded-lg border-2 p-3"
            src={gallery6}
            alt="Image 6"
          /></div>
        </div>
      </div>
    </div>
  );
};

export default Gallary;

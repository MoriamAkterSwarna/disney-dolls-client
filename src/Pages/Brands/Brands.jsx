import React from "react";
import brand1 from "../../assets/brands/Duplo-Logo-2002.png";
import brand2 from "../../assets/brands/download (1).png";
import brand3 from "../../assets/brands/download.jpg";
import brand4 from "../../assets/brands/download.png";
import brand5 from "../../assets/brands/png-clipart-barbie-fashion-doll-logo-mattel-barbie-purple-violet-thumbnail.png";
import brand6 from "../../assets/brands/png-clipart-hot-wheels-car-die-cast-toy-mattel-hot-text-orange-thumbnail.png";

const Brands = () => {
  return (
    <>
      <>
        <div className="divider w-1/3 mx-auto mt-6 bg-blue-500 h-1"></div>
        <h2 className="text-center text-5xl font-bold text-blue-600">
          Shop By Brands
        </h2>
        <div className="divider w-1/3 mx-auto mt-6 bg-blue-500 h-1"></div>
      </>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 my-10 mx-4">
        <img
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          className="brands-bg object-contain h-[200px] border border-slate-400 p-4 rounded-sm "
          title="Duplo"
          src={brand1}
          alt=""
        />
        <img
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          className="brands-bg object-contain h-[200px] w-full border border-slate-400 p-4 rounded-sm "
          title="Duplo"
          src={brand2}
          alt=""
        />
        <img
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          className="brands-bg object-contain h-[200px] border border-slate-400 p-4 rounded-sm"
          title="Duplo"
          src={brand3}
          alt=""
        />
        <img
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          className="brands-bg object-contain h-[200px] border border-slate-400 p-4 rounded-sm"
          title="Duplo"
          src={brand4}
          alt=""
        />
        <img
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          className="brands-bg object-contain h-[200px] border border-slate-400 p-4 rounded-sm"
          title="Duplo"
          src={brand5}
          alt=""
        />
        <img
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          className="brands-bg object-contain h-[200px] border border-slate-400 p-4 rounded-sm"
          title="Duplo"
          src={brand6}
          alt=""
        />
      </div>
    </>
  );
};

export default Brands;

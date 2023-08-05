import { Pagination } from "swiper";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import person1 from "../../assets/persons/person1.jpg";
import person2 from "../../assets/persons/person2.jpg";
import person3 from "../../assets/persons/person3.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div className="swiper-container">
      <Swiper
        // slidesPerView={3}
        // spaceBetween={30}
        // pagination={{
        //   clickable: true,
        // }}
        // modules={[Pagination]}
        // className="mySwiper">
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <SwiperSlide className="my-10 lg:mx-10">
            <div className="border rounded-lg shadow-2xl border-fuchsia-400 p-6">
              <img
                className="w-[150px] rounded-full border-2 border-blue-300 p-2 shadow-xl mx-auto mb-3"
                src={person1}
                alt=""
              />
              <small>
                The variety of Disney dolls available is truly impressive.
                Whether you're a fan of classic characters like Mickey Mouse and
                Cinderella or you prefer the latest additions to the Disney
                family, you'll find an extensive collection to choose from.{" "}
              </small>
              <p className="font-bold text-fuchsia-500">
                Name: Benjamin Anderson{" "}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="my-10 lg:mx-10">
            <div className="border rounded-lg shadow-2xl border-fuchsia-400 p-6">
              <img
                className="w-[150px] rounded-full border-2 border-blue-300 p-2 shadow-xl mx-auto mb-3"
                src={person2}
                alt=""
              />
              <small>
                The descriptions and images of the dolls were clear and
                accurate, allowing me to make informed decisions about my
                purchases. The ordering process was seamless, and the checkout
                was secure and hassle-free.{" "}
              </small>
              <p className="font-bold text-fuchsia-500">Name: Olivia Morgan </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="my-10 lg:mx-10  min-h-[280px]">
            <div className="border rounded-lg shadow-2xl border-fuchsia-400 p-6">
              <img
                className="w-[150px] rounded-full border-2 border-blue-300 p-2 shadow-xl mx-auto mb-3"
                src={person3}
                alt=""
              />
              <small>
                The Disney Doll Toys website is a magical wonderland for Disney
                fans and collectors of all ages. From the moment I landed on the
                homepage, I was greeted with vibrant colors, enchanting designs,
                and a user-friendly interface that made navigating the site a
                breeze.{" "}
              </small>
              <p className="font-bold text-fuchsia-500">Name: Ava Reynolds </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="my-10 lg:mx-10">
            <div className="border rounded-lg shadow-2xl border-fuchsia-400 p-6">
              <img
                className="w-[150px] rounded-full border-2 border-blue-300 p-2 shadow-xl mx-auto mb-3"
                src={person1}
                alt=""
              />
              <small>
                The ordering process was seamless, and the checkout was secure
                and hassle-free. I also appreciate that the website offers
                multiple payment options, making it convenient for everyone.{" "}
              </small>
              <p className="font-bold text-fuchsia-500">
                Name: Ethan Mitchell{" "}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="my-10 lg:mx-10">
            <div className="border rounded-lg shadow-2xl border-fuchsia-400 p-6">
              <img
                className="w-[150px] rounded-full border-2 border-blue-300 p-2 shadow-xl mx-auto mb-3"
                src={person2}
                alt=""
              />
              <small>
                The customer service I received was exceptional. I had a few
                questions about shipping and availability, and the support team
                was prompt, friendly, and knowledgeable. It's evident that the
                website values its customers and strives to provide the best
                experience possible.{" "}
              </small>
              <p className="font-bold text-fuchsia-500">
                Name: Sophia Roberts{" "}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="my-10 lg:mx-10">
            <div className="border rounded-lg shadow-2xl border-fuchsia-400 p-6">
              <img
                className="w-[150px] rounded-full border-2 border-blue-300 p-2 shadow-xl mx-auto mb-3"
                src={person3}
                alt=""
              />
              <small>
                Whether you're a collector, a parent looking to surprise your
                child, or a Disney fan wanting to add a touch of magic to your
                life, this website is a must-visit. I highly recommend it to
                anyone seeking enchanting Disney dolls and an exceptional online
                shopping experience.{" "}
              </small>
              <p className="font-bold text-fuchsia-500">Name: Mia Williams </p>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};

export default Testimonials;

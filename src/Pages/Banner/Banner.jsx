import React from 'react';
import banner1 from '../../assets/banner/banner1.jpg'
import banner2 from '../../assets/banner/banner2.jpg'
import banner3 from '../../assets/banner/banner3.jpg'
import Gallary from '../Gallary/Gallary';
import Testimonials from '../Testimonials/Testimonials';
import Services from '../Services/Services';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
    <img src={banner3} className="w-[100%] object-cover h-[90vh]" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src={banner2} className="w-[100%] object-cover h-[90vh]" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src={banner1} className="w-[100%] object-cover h-[90vh]" />
  </div> 
  
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs bg-blue-600">1</a> 
  <a href="#item2" className="btn btn-xs bg-blue-600">2</a> 
  <a href="#item3" className="btn btn-xs bg-blue-600">3</a> 
  
</div>
<Gallary></Gallary>
<div>
  <h1 className='text-center text-5xl font-bold'>Clients Feedback About us: </h1>
<Testimonials></Testimonials>
</div>
<Services></Services>
        </div>
    );
};

export default Banner;
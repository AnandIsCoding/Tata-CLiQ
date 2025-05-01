import { useEffect, useState } from 'react';
import React from 'react';

// static slides image urls array of objects, each object with image url
const slides = [
  {
    image: 'https://assets.tatacliq.com/medias/sys_master/images/64869480988702.jpg'
  },
  {
    image: 'https://assets.tatacliq.com/medias/sys_master/images/64869481054238.jpg'
   
  },
  {
    image:'https://assets.tatacliq.com/medias/sys_master/images/64869481316382.jpg'
  },
  {
    image: 'https://assets.tatacliq.com/medias/sys_master/images/64869481119774.jpg'    
  },
  {
    image:'https://assets.tatacliq.com/medias/sys_master/images/64869481185310.jpg'
  },
  {
    image:'https://assets.tatacliq.com/medias/sys_master/images/64869481381918.jpg'
  }
];

export default function Slider() {
  // current to keep track of current image url
  const [current, setCurrent] = useState(0);

  // increment current value by 1 of current is not equal to slides.length-1 (2), if current is 2 than setCurrent to 0
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 2500);
  
    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);
  

  const prevSlide = () => {
    // if current is 1 than (((1-1)+3)%3) = 3%3 = 0
    setCurrent((current - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    // if current is 1 than ((1+1) % 3) = 2%3 = 2
    setCurrent((current + 1) % slides.length);
  };


  return (
    <div className="relative  h-[60vh] overflow-hidden mx-2 md:mx-14 rounded-xl cursor-pointer">
      {slides.map((slide, index) => (
        <div
          data-testid="slide"
          key={index}
          className={`absolute inset-0 w-full h-full object-cover bg-cover bg-center transition-opacity duration-700 ${index === current ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${slide.image}) ` }}
        >
        </div>
      ))}

      {/* Arrows to naxt and previous slides */}
      <div className="absolute top-1/2 w-full flex justify-between items-center px-5 transform -translate-y-1/2">
        <button onClick={prevSlide} className="bg-[#f2e5e59d] bg-opacity-70 rounded-full cursor-pointer w-14 h-14 flex justify-center items-center text-2xl hover:bg-opacity-100">
          &#10094;
        </button>
        <button onClick={nextSlide} className="bg-[#f2e5e59d] bg-opacity-70 rounded-full cursor-pointer w-14 h-14 flex justify-center items-center text-2xl hover:bg-opacity-100">
          &#10095;
        </button>
      </div>
    </div>
  );
}

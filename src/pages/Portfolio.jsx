import React, { useState, useRef } from 'react';
import { projects } from '../data/projects';
import Project from '../components/Project';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


export default function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const goToPrevSlide = () => {
    if (currentSlide === 0) {
      return;
    }
    setCurrentSlide(currentSlide - 1);
  };

  const goToNextSlide = () => {
    if (currentSlide === projects.length - 1) {
      return;
    }
    setCurrentSlide(currentSlide + 1);
  };

  return (
    <div className='main'>
      <div className="flex justify-center pt-3 my-10">
        <h2 className="text-center text-white font-bold mt-2 text-4xl">Portfolio</h2>
      </div>
      <div id="portfolioCarousel" className='flex items-center justify-center relative mx-5 my-8'>
        <div className="carousel-container">
          {projects.map((project, index) => (
            <div key={index} className="carousel-item" ref={sliderRef} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              <Project project={project} index={index} currentSlide={currentSlide} />
            </div>
          ))}
        </div>
        <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white rounded-full py-2 px-4 ml-2 hover:bg-gray-500 transition-colors duration-200" onClick={goToPrevSlide}><FaChevronLeft className="text-2xl" /></button>
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white rounded-full py-2 px-4 mr-2 hover:bg-gray-500 transition-colors duration-200" onClick={goToNextSlide}><FaChevronRight className="text-2xl" /></button>
      </div>
    </div>
  )
}

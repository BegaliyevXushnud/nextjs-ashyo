"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Img from "../../public/hero2.png";
import Img2 from "../../public/herodesktop.png";
import iphoneimg from "../../public/iphone.png";
import iphoneimg2 from "../../public/iphonenew.png";
import "../cssfolder/hero.css";

const carouselData = [
  {
    title: "Siz kutgan Xiaomi 12 Mi Laite",
    description: "Orginallik va qulay narxni o'zida jamlagan siz uchun eng yaxshi arziydigan takliflarimizdan biridir!",
    buttonText: "Batafsil",
    images: Img,
    images2: Img2,
    bgColor: "#F3F0F0", // Example background color for each slide
  },
  {
    title: "Siz kutgan Iphone 16 ",
    description: "Orginallik va qulay narxni o'zida jamlagan siz uchun eng yaxshi arziydigan takliflarimizdan biridir!",
    buttonText: "Batafsil",
    images: iphoneimg2,
    images2: iphoneimg2,
    bgColor: "#E1F5FE", // Light blue background
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fadeClass, setFadeClass] = useState(""); // Track fade state
  const [bgColor, setBgColor] = useState(carouselData[currentSlide].bgColor); // Track background color

  // Move to the next slide
  const nextSlide = () => {
    setFadeClass("fade-out"); // Trigger fade-out animation
    setTimeout(() => {
      const nextIndex = (currentSlide + 1) % carouselData.length;
      setCurrentSlide(nextIndex);
      setBgColor(carouselData[nextIndex].bgColor); // Update the background color
      setFadeClass(""); // Reset fade class after transition
    }, 1000); // Match the fade duration
  };

  // Move to the previous slide
  const prevSlide = () => {
    setFadeClass("fade-out"); // Trigger fade-out animation
    setTimeout(() => {
      const prevIndex = (currentSlide - 1 + carouselData.length) % carouselData.length;
      setCurrentSlide(prevIndex);
      setBgColor(carouselData[prevIndex].bgColor); // Update the background color
      setFadeClass(""); // Reset fade class after transition
    }, 1000); // Match the fade duration
  };

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [currentSlide]);

  // Handle dot click to change slides
  const goToSlide = (index: any) => {
    setFadeClass("fade-out");
    setTimeout(() => {
      setCurrentSlide(index);
      setBgColor(carouselData[index].bgColor); // Update the background color on dot click
      setFadeClass("");
    }, 1000);
  };

  return (
  
     <div className="flex flex-col items-center" style={{ backgroundColor: bgColor }}>
    <div className="relative w-full h-auto flex"> 
    <div className="secondfather ">
        {/* Matn bo'limi */}
        <div className={`herotext absolute p-3 flex flex-col gap-4 sm:p-12 sm:gap-6 md:gap-8 ${fadeClass}`}>
          <h2 className="text-[#203F68] text-[20px] font-bold leading-[26px] sm:text-[25px] md:text-[35px] lg:text-[43px] 2xl:text-[50px]">
            {carouselData[currentSlide].title}
          </h2>
          <h4 className="text-[#203F6899] text-[11px] font-sans leading-[15px] w-[65%] sm:text-[15px] sm:leading-[21px] md:leading-[28px] md:text-[20px] lg:leading-[35px] lg:text-[25px] 2xl:leading-[37px]">
            {carouselData[currentSlide].description}
          </h4>
          <button className="w-[90px] h-[32px] bg-[#0F4A97] rounded-[3px] font-serif text-[#FFFFFF] text-[11px] sm:h-[40px] sm:text-[13px] sm:w-[100px] md:w-[120px] md:h-[50px] md:text-[16px] lg:w-[150px] lg:h-[60px] lg:text-[22px]">
            {carouselData[currentSlide].buttonText}
          </button>
        </div>

        {/* Slide wrapper with sliding effect */}
        <div className="carousel-wrapper flex">
          {/* Slide */}
          <div className={`carousel-slide ${fadeClass}`}>
            <div className="heroimg mt-[40px] flex justify-end md:mt-[80px] 2xl:mt-[80px] ">
              <Image priority src={carouselData[currentSlide].images} alt="heroimg" className="w-[200px] h-[130px] sm:w-[250px] sm:h-[200px] md:w-[300px] md:h-[240px] lg:w-[600px] lg:h-[400px] 2xl:hidden" />
              <Image priority src={carouselData[currentSlide].images2} alt="heroimg" className="hrx scale-125 mb-[50px]" />
            </div>
          </div>
        </div>
         
         
      </div>
      <div className="pagination">
        {carouselData.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)} // Go to specific slide on dot click
          ></div>
        ))}
      </div>
    </div>

     
    </div>
 
  );
};

export default Hero;

"use client"
import { useRef } from "react";
import naushnuk from "../../public/naushnik.png"
import Image from "next/image";
import {FaBalanceScale, FaShoppingBag} from 'react-icons/fa'
const ProductCarousel = () => {
  const products = [
    { id: 1, title: "Смартфон Xiaomi 12 Lite 8/128Gb Қора ", price: "6 999 999", img: naushnuk },
    { id: 2, title: "Смартфон Xiaomi 12 Lite 8/128Gb Қора ", price: "6 999 999", img: naushnuk },
    { id: 3, title: "Смартфон Xiaomi 12 Lite 8/128Gb Қора ", price: "6 999 999", img: naushnuk },
    { id: 4, title: "Смартфон Xiaomi 12 Lite 8/128Gb Қора ", price: "6 999 999", img: naushnuk },
    { id: 6, title: "Смартфон Xiaomi 12 Lite 8/128Gb Қора ", price: "6 999 999", img: naushnuk },
    { id: 7, title: "Смартфон Xiaomi 12 Lite 8/128Gb Қора ", price: "6 999 999", img: naushnuk },
    { id: 8, title: "Смартфон Xiaomi 12 Lite 8/128Gb Қора ", price: "6 999 999", img: naushnuk },
    { id: 9, title: "Смартфон Xiaomi 12 Lite 8/128Gb Қора ", price: "6 999 999", img: naushnuk },
    { id: 10, title: "Смартфон Xiaomi 12 Lite 8/128Gb Қора ", price: "6 999 999", img: naushnuk },
  ];

  const carouselRef =useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full h-auto ">
<div className="relative w-full ">
      {/* Left Button */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300"
      >
        &#8592;
      </button>

      {/* Carousel */}
      <div
        ref={carouselRef}
        className="flex overflow-x-scroll scrollbar-hide space-x-4 p-4"
        style={{ scrollBehavior: "smooth" }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col FaShoppingBaw-[281px] h-[300px]"
          >
           <div className="w-[190px] h-[70%] bg-[#EBEFF3]  rounded-lg">
           <Image src={product.img} alt={product.title} className="w-full h-full " />
           </div>
           <div className="flex flex-col gap-3 ">
           <h3 className="text-[#06172DB2] font-sans text-[12px] leading-[15px]">{product.title}</h3>
           <div className="flex gap-3">
            <h3 className="text-[#06172D] font-bold text-[14px] leading-[14px] tracking-custom mt-2">{product.price}<span className="text-[11px]">uzs</span></h3>
            <h3 className="w-[70px] h-[23px] bg-[#F02C961A] text-[#F02C96] text-[10px] leading-[9px] font-sans p-2 ">
            6 X/568 999 
            </h3>
           </div>
           <div className="flex gap-3">
            <button className="w-[30%] h-[36px] border border-black rounded-[4px] flex items-center justify-center "><FaBalanceScale className="w-[16px] h-[16px] text-[#233C5FB2]"/></button>
            <button className="w-[70%] h-[36px] bg-[#134E9B] rounded-[4px] flex items-center justify-center gap-2 text-[12px] text-[#FFFFFF] leading-[11px] font-sans tracking-custom">Savatcha<FaShoppingBag className="w-[16px] h-[16px]"/></button>
           </div>
           </div>
          </div>
        ))}
      </div>

      {/* Right Button */}
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300"
      >
        &#8594;
      </button>
    </div>
    </div>
  );
};

export default ProductCarousel;

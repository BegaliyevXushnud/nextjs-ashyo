"use client";
import { useState, useRef } from "react";
import naushnuk from "../../public/naushnik.png";
import Image from "next/image";
import { FaBalanceScale, FaShoppingBag, FaHeart } from "react-icons/fa";

const ProductCarousel = () => {
  const [liked, setLiked] = useState<boolean[]>(new Array(10).fill(false)); // Like tugmasi holatini saqlash
  const products = [
    { id: 1, title: "Смартфон Xiaomi 12 Lite 8/128Gb Қора ", price: "6 999 999", img: naushnuk },
    { id: 2, title: "Смартфон Xiaomi 12 Lite 8/128Gb Қора ", price: "6 999 999", img: naushnuk },
    { id: 3, title: "Смартфон Xiaomi 12 Lite 8/128Gb Қора ", price: "6 999 999", img: naushnuk },
    { id: 4, title: "Смартфон Xiaomi 12 Lite 8/128Gb Қора ", price: "6 999 999", img: naushnuk },
    { id: 5, title: "Смартфон Xiaomi 12 Lite 8/128Gb Қора ", price: "6 999 999", img: naushnuk },
    { id: 6, title: "Смартфон Xiaomi 12 Lite 8/128Gb Қора ", price: "6 999 999", img: naushnuk },
    { id: 7, title: "Смартфон Xiaomi 12 Lite 8/128Gb Қора ", price: "6 999 999", img: naushnuk },
    { id: 8, title: "Смартфон Xiaomi 12 Lite 8/128Gb Қора ", price: "6 999 999", img: naushnuk },
    { id: 9, title: "Смартфон Xiaomi 12 Lite 8/128Gb Қора ", price: "6 999 999", img: naushnuk },
    { id: 10, title: "Смартфон Xiaomi 12 Lite 8/128Gb Қора ", price: "6 999 999", img: naushnuk },
  ];

  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      const lastProduct = carouselRef.current.lastElementChild as HTMLElement;

      if (carouselRef.current.scrollLeft === 0) {
        carouselRef.current.scrollTo({
          left: lastProduct.offsetLeft,
          behavior: "smooth",
        });
      } else {
        carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
      }
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const lastProduct = carouselRef.current.lastElementChild as HTMLElement;

      if (
        carouselRef.current.scrollLeft + carouselRef.current.offsetWidth >=
        lastProduct.offsetLeft + lastProduct.offsetWidth
      ) {
        carouselRef.current.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
      }
    }
  };

  const handleLikeClick = (index: number) => {
    const newLikedState = [...liked];
    newLikedState[index] = !newLikedState[index];
    setLiked(newLikedState);
  };

  return (
    <div className="relative w-full flex justify-center items-center overflow-hidden">
      
    <button
      onClick={scrollLeft}
      className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white w-[44px] h-[44px] text-[22px] rounded-full shadow hover:bg-gray-300 z-10"
    >
      &#8592;
    </button>
  
    <div
      ref={carouselRef}
      className="flex sm:space-x-4 p-4 justify-center items-center gap-[13px] overflow-x-hidden"
    >
      {products.map((product, index) => (
        <div
          key={product.id}
          className="flex flex-col w-[281px] h-[300px] relative transition-transform transform hover:scale-105 hover:shadow-lg"
        >
          <div className="w-[145px] h-[70%] bg-[#EBEFF3] rounded-lg md:w-[230px] xl:w-[240px] 2xl:w-[273px] relative overflow-hidden">
            <Image
              src={product.img}
              alt={product.title}
              className="w-full h-full"
            />
            <button
              onClick={() => handleLikeClick(index)}
              className={`absolute top-2 right-2 text-2xl ${
                liked[index] ? "text-red-600" : "text-white"
              }`}
            >
              <FaHeart />
            </button>
            <span className="absolute top-2 left-2 text-white bg-red-500 text-xs py-1 px-2 rounded-full">
              Aksiya
            </span>
          </div>
          <div className="flex flex-col gap-3 mt-2">
            <h3 className="text-[#06172DB2] font-sans text-[12px] leading-[15px]">
              {product.title}
            </h3>
            <div className="flex gap-3">
              <h3 className="text-[#06172D] font-bold text-[12px] leading-[15px] tracking-custom mt-2 lg:text-[15px]">
                {product.price}
                <span className="text-[11px]">uzs</span>
              </h3>
              <h3 className="w-[50px] h-[23px] bg-[#F02C961A] text-[#F02C96] text-[7px] leading-[9px] font-sans p-2 md:text-[8px] md:w-[60px] lg:text-[9px] lg:w-[70px] xl:text-[11px] xl:w-[75px]">
                6 X/568 999
              </h3>
            </div>
            <div className="flex gap-3">
              <button className="w-[30%] h-[36px] border border-black rounded-[4px] flex items-center justify-center">
                <FaBalanceScale className="w-[16px] h-[16px] text-[#233C5FB2]" />
              </button>
              <button className="w-[70%] h-[36px] bg-[#134E9B] rounded-[4px] flex items-center justify-center gap-2 text-[12px] text-[#FFFFFF] leading-[11px] font-sans tracking-custom">
                Savatcha
                <FaShoppingBag className="w-[16px] h-[16px]" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  
    <button
      onClick={scrollRight}
      className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white w-[44px] h-[44px] text-[22px] rounded-full shadow hover:bg-gray-300 z-10"
    >
      &#8594;
    </button>
  </div>
  
  );
};

export default ProductCarousel;

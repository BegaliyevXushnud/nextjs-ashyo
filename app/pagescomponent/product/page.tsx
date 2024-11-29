'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { FaBalanceScale, FaHeart, FaShoppingBag } from 'react-icons/fa';

interface Post {
  id: number;
  name: string;
  images: string[];
  price: string;
  brand_id: number;
}

export default function Posts() {
  const [liked, setLiked] = useState<boolean[]>(new Array(10).fill(false)); // Like tugmasi holatini saqlash
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [posts, setPosts] = useState<Post[] | null>(null); 
  const [isClient, setIsClient] = useState<boolean>(false); 

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClient(true); 
    }
    
    async function fetchPosts() {
      const res = await fetch('https://texnoark.ilyosbekdev.uz/products/search');
      const data = await res.json();
      setPosts(data?.data?.products || []);
    }  
    if (isClient) {
      fetchPosts(); 
    }
  }, [isClient]); 

  const handleLikeClick = (index: number) => {
    const newLikedState = [...liked];
    newLikedState[index] = !newLikedState[index];
    setLiked(newLikedState);
  };

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

  if (!isClient || !posts) return <div>Loading...</div>; 

  return (
    <div className='relative w-full flex justify-center items-center overflow-hidden'>
      <button
        onClick={scrollLeft} // Corrected here
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white w-[44px] h-[44px] text-[22px] rounded-full shadow hover:bg-gray-300 z-10"
      >
        &#8592;
      </button>
      <div className="flex sm:space-x-4 p-4 justify-center items-center gap-[13px] overflow-x-hidden" ref={carouselRef}>
          {posts.map((product, index) => (
            <div key={product.id} className="flex flex-col w-[281px] h-[300px] relative">
              <div className='w-[145px] h-[70%] bg-[#EBEFF3] rounded-lg md:w-[230px] xl:w-[240px] 2xl:w-[273px] relative overflow-hidden'>
                <img
                  src={product?.images?.[0] || "/apple.svg"}
                  alt={product.name}
                  className="w-full h-full hover:scale-105 transition-transform duration-300"
                />
                <button
                  className={`absolute top-2 right-2 text-2xl ${liked[index] ? "text-red-600" : "text-white"} transition-colors`}
                  onClick={() => handleLikeClick(index)}
                >
                  <FaHeart />
                </button>
              </div>
              {/* Produkt ma'lumotlari */}
              <div className="flex flex-col gap-3 mt-2">
                <h3 className="text-[#06172DB2] font-sans text-[12px] leading-[15px]">{product.name}</h3>
                <div className="flex gap-3">
                  <h3 className="text-[#06172D] font-bold text-[11px] leading-[14px] tracking-[0.2em] mt-2 lg:text-[15px]">
                    {product.price}
                    <span className="text-[11px]">uzs</span>
                  </h3>
                  <h3 className="w-[60px] h-[20px] bg-[#F02C961A] text-[#F02C96] text-[8px] leading-[9px] font-sans p-2 md:text-[8px] md:w-[60px] lg:text-[9px] lg:w-[70px] xl:text-[11px] xl:w-[75px]">
                    6 X/568 999
                  </h3>
                </div>
                <div className="flex gap-3">
                  {/* BalanceScale Button */}
                  <button className="w-[30%] h-[36px] border border-black text-[#233C5FB2] rounded-[4px] flex items-center justify-center hover:bg-[#134E9B] hover:text-white transition-colors duration-300">
                    <FaBalanceScale className="w-[16px] h-[16px]" />
                  </button>
                  {/* Savatcha Button */}
                  <button className="w-[70%] h-[36px] bg-[#134E9B] rounded-[4px] flex items-center justify-center gap-2 text-[12px] text-[#FFFFFF] leading-[11px] font-sans tracking-custom hover:bg-[#0f3c74] transition-colors duration-300">
                    Savatcha
                    <FaShoppingBag className="w-[16px] h-[16px]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
        onClick={scrollRight} // Corrected here
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white w-[44px] h-[44px] text-[22px] rounded-full shadow hover:bg-gray-300 z-10"
      >
        &#8594;
      </button>
    </div>
  );
}

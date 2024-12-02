// pages/liked-products.tsx
"use client";
import { useEffect, useState, useRef } from 'react';
import { FaBalanceScale, FaShoppingBag } from 'react-icons/fa';
import { AiFillHeart, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  price: string;
  images: string[];
}

const LikedPage = () => {
  const [likedProducts, setLikedProducts] = useState<Product[]>([]);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Read liked products directly from localStorage
    const savedLikes = JSON.parse(localStorage.getItem('likedProducts') || '{}');
    const likedItems = Object.entries(savedLikes)
      .filter(([ liked]) => liked) // Only true values
      .map(([id]) => parseInt(id)); // Get list of liked product IDs

    // Fetch products based on liked IDs from API
    async function fetchLikedProducts() {
      const res = await fetch('https://texnoark.ilyosbekdev.uz/products/search');
      const data = await res.json();
      const products: Product[] = data?.data?.products || [];
      const filteredProducts = products.filter((product) => likedItems.includes(product.id));
      setLikedProducts(filteredProducts);
    }

    fetchLikedProducts();
  }, []);  // Runs once on component mount
  const scrollLeft = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;

      if (scrollLeft === 0) {
        carouselRef.current.scrollTo({
          left: scrollWidth - clientWidth,
          behavior: 'instant',
        });
      } else {
        carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
      }
    }
  };
  

  const scrollRight = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;

      if (scrollLeft + clientWidth >= scrollWidth) {
        carouselRef.current.scrollTo({ left: 0, behavior: 'instant' });
      } else {
        carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
      }
    }
  };

  if (!likedProducts.length) return <div>No liked products found!</div>;

  return (
    <div className='relative w-full flex justify-start items-center overflow-hidden'>
    <button
      onClick={scrollLeft}
      className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white w-[44px] h-[44px] text-[22px] flex items-center justify-center p-3 text-[#545D6A] rounded-full shadow hover:bg-gray-300 z-10"
    >
      <AiOutlineLeft />
    </button>
    <div
      className="flex sm:space-x-4 p-4 justify-center  items-center gap-[13px] overflow-x-hidden ml-5"
      ref={carouselRef}
    >
      {likedProducts.map((product, index) => (
        
        <div key={`${product.id}-${index}`} className="flex flex-col w-[251px] h-[300px] relative 2xl:w-[333px] 2xl:h-[390px] ">
          <div className='w-full flex items-center justify-center h-[70%] bg-[#EBEFF3] rounded-lg md:w-[230px] xl:w-[240px] 2xl:w-[333px] relative overflow-hidden'>
            <Link href={`/product/${product.id}`} passHref className='flex items-center justify-center w-full h-full'>
              <Image
                src={product?.images?.[0] || '/apple.svg'}
                alt={product?.name || 'Product Image'}
                width={500}
                height={500}
                className="w-[100%] h-[90%] object-contain hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <div
              className="absolute top-4 right-4 cursor-pointer text-2xl text-red-500"
            >
            <AiFillHeart /> 
            </div>
          </div>
          <div className="flex flex-col gap-3 mt-2">
            <h3 className="text-[#06172DB2] font-sans text-[12px] leading-[15px] md:text-[13px] lg:text-[15px] lg:leading-[20px]">{product.name}</h3>
            <div className='flex flex-col gap-3 2xl:flex-row 2xl:items-end'>
              <div className="flex gap-3 2xl:flex-col">
                <h3 className="text-[#06172D] font-bold text-[15px] leading-[14px] tracking-[0.2em] mt-2 md:text-[18px] lg:text-[22px]">
                  {product.price}
                  <span className="text-[11px] md:text-[15px] tracking-wide">uzs</span>
                </h3>
                <h3 className="w-[70px] h-[20px] bg-[#F02C961A] text-[#F02C96] flex items-center justify-center text-[8px] leading-[9px] font-sans p-2 md:text-[8px] md:w-[70px] lg:text-[9px] lg:w-[80px] xl:text-[11px] xl:w-[95px] 2xl:w-[151px] 2xl:h-[27px] 2xl:text-[14px] tracking-[0.1em]">
                  10 oy/{parseFloat(product.price) / 10}usz
                    
                </h3>
              </div>
              <div className="2xl:w-[50%] flex gap-3">
                <button className="w-[30%] h-[36px] border border-black text-[#233C5FB2] rounded-[4px] flex items-center justify-center hover:bg-[#134E9B] hover:text-white transition-colors duration-300">
                  <FaBalanceScale className="w-[16px] h-[16px]" />
                </button>
                <button className="w-[70%] h-[36px] bg-[#134E9B] rounded-[4px] flex items-center justify-center gap-2 text-[12px] text-[#FFFFFF] leading-[11px] font-sans tracking-custom hover:bg-[#0f3c74] transition-colors duration-300">
                  Savatcha
                  <FaShoppingBag className="w-[16px] h-[16px]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    <button
      onClick={scrollRight}
      className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white w-[44px] h-[44px] text-[22px] flex items-center justify-center p-3 text-[#545D6A] rounded-full shadow hover:bg-gray-300 z-10"
    >
      <AiOutlineRight />
    </button>
  </div>
  );
};

export default LikedPage;

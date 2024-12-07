"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { FaBalanceScale, FaShoppingBag } from "react-icons/fa";
import { AiFillHeart, AiOutlineLeft, AiOutlineRight,AiOutlineHeart  } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/navigation";
type Post2 = {
  id: number;
  name: string;
  images: string[];
  price: string;
};

type LikesType = {
  id: number;
  product_id: Post2;
};

const Page = () => {
  const [like, setLike] = useState<LikesType[]>([]);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [likedProducts, setLikedProducts] = useState<Record<number, boolean>>({});
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedLikes = JSON.parse(localStorage.getItem("likedProducts") || "{}");
      setLikedProducts(storedLikes);
      const getLikes = async () => {
        const userId = localStorage.getItem("user_id");
        if (!userId) return;
        
        const response = await fetch(`https://texnoark.ilyosbekdev.uz/likes/user/likes/${userId}`);
        const data = await response.json();
        setLike(data?.data?.likes || []);
      };

      getLikes();
    }
  }, []);

  const scrollLeft = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;

      if (scrollLeft === 0) {
        carouselRef.current.scrollTo({
          left: scrollWidth - clientWidth,
          behavior: "smooth",
        });
      } else {
        carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
      }
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;

      if (scrollLeft + clientWidth >= scrollWidth) {
        carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
      }
    }
  };
  const toggleLike = async (productId: number) => {
    const newLikedState = { ...likedProducts, [productId]: !likedProducts[productId] };
     setLikedProducts(newLikedState);
     
     typeof window !== "undefined"? localStorage.setItem("likedProducts", JSON.stringify(newLikedState)) : ''
       const access_token = typeof window !== "undefined"?    localStorage.getItem('access_token'):""
      if (!access_token) {
        console.log('Access token not found');
        router.push('/login'); 
        return;
      }
     
    
    
 
     
     try {
       const response = await fetch('https://texnoark.ilyosbekdev.uz/likes/create', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
           'Authorization': `Bearer ${access_token}`, 
         },
         body: JSON.stringify({ product_id: productId }),
       });
 
       if (!response.ok) {
         console.log('Failed to toggle like');
         setLikedProducts(likedProducts);
       }
     } catch (error) {
       console.log('Error:', error);
       setLikedProducts(likedProducts); 
     }
   };
  return (
    <div className="mt-5 flex items-start flex-col " >
       <h3 className="text-[#B6BABF] text-[14px] font-sans tracking-widest md:text-[18px] ml-4"> <Link href="/" className="hover:underline">Bosh sahifa</Link> / likes </h3>
     <div className="relative w-full flex justify-start items-center overflow-hidden">
     <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white w-[44px] h-[44px] text-[22px] flex items-center justify-center p-3 text-[#545D6A] rounded-full shadow hover:bg-gray-300 z-10"
      >
        <AiOutlineLeft />
      </button>
      <div
        className="flex sm:space-x-4 p-4 justify-start items-start gap-[13px] overflow-x-hidden "
        ref={carouselRef}
      >
        {like.length > 0 &&
          like.map((product) => (
            <div
              key={product.product_id.id}
              className="flex flex-col w-[251px] h-[300px] relative 2xl:w-[333px] 2xl:h-[390px]"
            >
              <div className="w-full flex items-center justify-center h-[70%] bg-[#EBEFF3] rounded-lg relative overflow-hidden">
                <Link
                  href={`/product/${product.id}`}
                  passHref
                  className="flex items-center justify-center w-full h-full"
                >
                  <Image
                    src={product.product_id.images[0] || "/12.png"}
                    alt={product.product_id.name || "Product Image"}
                    width={500}
                    height={500}
                    className="w-[100%] h-[90%] object-contain hover:scale-105 transition-transform duration-300"
                  />
                </Link>
                <div
                onClick={() => toggleLike(product.product_id.id)}
                className="absolute top-4 right-4 cursor-pointer text-2xl text-red-500"
              >
                {likedProducts[product.product_id.id] ? <AiOutlineHeart />  :  <AiFillHeart />}
              </div>
              </div>
              <div className="flex flex-col gap-3 mt-2">
                <h3 className="text-[#06172DB2] font-sans text-[12px] leading-[15px] md:text-[13px] lg:text-[15px] lg:leading-[20px]">
                  {product.product_id.name}
                </h3>
                <div className="flex flex-col gap-3 2xl:flex-row 2xl:items-end">
                  <div className="flex gap-3 2xl:flex-col">
                    <h3 className="text-[#06172D] font-bold text-[15px] leading-[14px] tracking-[0.2em] mt-2 md:text-[18px] lg:text-[22px]">
                      {product.product_id.price}
                      <span className="text-[11px] md:text-[15px] tracking-wide">
                        uzs
                      </span>
                    </h3>
                    <h3 className="w-[70px] h-[20px] bg-[#F02C961A] text-[#F02C96] flex items-center justify-center text-[8px] leading-[9px] font-sans p-2 md:text-[8px] lg:text-[9px] xl:text-[11px] xl:w-[95px] 2xl:w-[151px] 2xl:h-[27px] 2xl:text-[14px] tracking-[0.1em]">
                      10 oy/{parseFloat(product.product_id.price) / 10} uzs
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
    </div>
  );
};

export default Page;

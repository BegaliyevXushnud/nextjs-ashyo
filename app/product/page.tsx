"use client";
import { useState, useEffect, useRef } from 'react';
import { FaBalanceScale, FaShoppingBag } from 'react-icons/fa';
import { AiFillHeart, AiOutlineHeart, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from "next/navigation";

export interface  Post2 {
  id: number;
  name: string;
  images: string;
  price: string;
  brand_id: number;
  isSale?: boolean;
  liked?: boolean;
}

export default function CardsCarousel() {
  const [likedProducts, setLikedProducts] = useState<Record<number, boolean>>({});
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [posts, setPosts] = useState<Post2[]>([]);
  const router = useRouter();

  useEffect(() => {
    const storedLikes = typeof window !== "undefined"? JSON.parse(localStorage.getItem("likedProducts") || "{}") : "";
    setLikedProducts(storedLikes);

   
    async function fetchLikedProducts() {
      try {
        const user_id = typeof window !== "undefined" ? localStorage.getItem('user_id') : "";
        if (!user_id) {
          console.log('User ID not found');
          return;
        }
  
        const res = await fetch(`https://texnoark.ilyosbekdev.uz/likes/user/likes/${user_id}`);
        const data = await res.json();
        
        const likedProductIds = data?.data?.map((like: { product_id: number }) => like.product_id) || [];
        const likedState: Record<number, boolean> = {};
        likedProductIds.forEach((productId:number) => {
          likedState[productId] = true;
        });
  
        setLikedProducts(likedState);
      } catch (error) {
        console.log('Error fetching liked products:', error);
      }
    }
  

 
    async function fetchPosts() {
      try {
        const res = await fetch('https://texnoark.ilyosbekdev.uz/products/search');
        const data = await res.json();
        const products = data?.data?.products || [];
        setPosts(products);
      } catch (error) {
        console.log('Error fetching posts:', error);
      }
    }
  
    fetchLikedProducts();
    fetchPosts();
  }, []);
  
  const toggleLike = async (productId: number) => {
    const access_token = typeof window !== "undefined" ? localStorage.getItem('access_token') : "";
    if (!access_token) {
      console.log('Access token not found');
      router.push('/login'); 
      return;
    }
  
    const newLikedState = { ...likedProducts, [productId]: !likedProducts[productId] };
    setLikedProducts(newLikedState);
    localStorage.setItem("likedProducts", JSON.stringify(newLikedState));
  
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
  const addToCart = async (productId: number) => {
    const access_token = typeof window !== "undefined"? localStorage.getItem('access_token'):""
    if (!access_token) {
      console.log('Access token not found');
      router.push('/login'); 
      return;
    }
  
    try {
      const response = await fetch('https://texnoark.ilyosbekdev.uz/carts/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${access_token}`,
        },
        body: JSON.stringify({ product_id: productId }),
      });
  
      if (response.ok) {
        console.log('Product added to cart successfully');
      } else {
        console.log('Failed to add product to cart');
      }
    } catch (error) {
      console.log('Error adding product to cart:', error);
    }
  };

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

  if (!posts.length) return <div>Loading...</div>;

  return (
    <div className='relative w-full flex justify-center items-center overflow-hidden'>
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white w-[44px] h-[44px] text-[22px] flex items-center justify-center p-3 text-[#545D6A] rounded-full shadow hover:bg-gray-300 z-10"
      >
        <AiOutlineLeft />
      </button>
      <div
        className="flex sm:space-x-4 p-4 justify-center items-center gap-[13px] overflow-x-hidden"
        ref={carouselRef}
      >
        {posts.map((product, index) => (
          <div key={`${product.id}-${index}`} className="flex flex-col w-[251px] h-[300px] relative 2xl:w-[333px] 2xl:h-[390px]">
            <div className='w-full flex items-center justify-center h-[70%] bg-[#EBEFF3] rounded-lg md:w-[230px] xl:w-[240px] 2xl:w-[333px] relative overflow-hidden'>
              <Link href={`/product/${product.id}`} passHref className='flex items-center justify-center w-full h-full'>
                <Image
                  src={product?.images?.[0] || '/12.png'}
                  alt={product?.name || 'Product Image'}
                  width={500}
                  height={500}
                  className="w-[100%] h-[90%] object-contain hover:scale-105 transition-transform duration-300"
                />
              </Link>
              <div
                onClick={() => toggleLike(product.id)}
                className="absolute top-4 right-4 cursor-pointer text-2xl text-red-500"
              >
                {likedProducts[product.id] ? <AiFillHeart /> : <AiOutlineHeart />}
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
                  <button 
                   onClick={() => addToCart(product.id)}
                  className="w-[70%] h-[36px] bg-[#134E9B] rounded-[4px] flex items-center justify-center gap-2 text-[12px] text-[#FFFFFF] leading-[11px] font-sans tracking-custom hover:bg-[#0f3c74] transition-colors duration-300">
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
}
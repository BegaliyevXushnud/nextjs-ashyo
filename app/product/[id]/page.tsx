"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { AiFillHeart, AiOutlineHeart,AiOutlineLeft,AiOutlineRight } from "react-icons/ai"; 
import caricon from "../../../public/yetkazishicon.svg"
import storeicon from "../../../public/storeicon.svg"
import timeicon from "../../../public/time.svg"
import "../../cssfolder/single-page.css"
import CardsCarousel from "../page";
const Page = () => {
  type ProductType = {
    id: number;
    name: string;
    price: string;
    images: string;
  };

  const { id } = useParams();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [liked, setLiked] = useState(false); 
 

  const toggleLike = () => {
    setLiked(!liked);
  };

 
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
         ` https://texnoark.ilyosbekdev.uz/products/${id}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProduct(data.data?.product || null);
      } catch (error) {
        console.log("Error fetching product data:", error);
      }
    };

    if (id) {
      getData();
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }
 
  const monthlyPayment = parseFloat(product.price) / 10;
  
  return (
 <div className="w-full h-auto flex flex-col mt-[20px] sm:mt-[55px] md:mt-[30px] gap-3">
 <h1 className="text-[16px] leading-[20px] text-[#06172D] font-semibold md:text-[20px] md:leading-[25px] lg:text-[25px] lg:leading-[30px] xl:text-[34px] xl:leading-[41px]"> {product.name}</h1>
 <div className="w-full h-auto flex flex-col  gap-6 lg:flex-row">
  
<div className="w-full h-auto flex gap-2 relative 2xl:h-[600px]">
<button
     className="absolute left-1 top-[50%] w-[30px] lg:w-[44px] lg:h-[44px] transform -translate-y-[50%] z-10  flex items-center justify-center bg-[#FFFFFF] p-2 rounded-full text-[#545D6A]"
          >
            <AiOutlineLeft/>
          </button>
<div className="w-4/5 bg-gray-200 flex items-center justify-center relative">
    <Image src={product.images?.[0]} alt="dfds" width={800} height={800}  className=" sm:w-[60%] 2xl:w-[80%] h-[100%]" />
    <div
              onClick={toggleLike}
              className="absolute top-4 right-4 cursor-pointer text-2xl text-red-500"
            >
              {liked ? <AiFillHeart /> : <AiOutlineHeart />}
            </div>
            <button
     className="absolute right-1 top-[50%] w-[30px] lg:w-[44px] lg:h-[44px] transform -translate-y-[50%] z-10  flex items-center justify-center bg-[#FFFFFF] p-2 rounded-full text-[#545D6A]"
          >
            <AiOutlineRight/>
          </button>
</div>

<div className="w-[20%] h-full  flex flex-col justify-between gap-2">
<div className="w-full h-[25%] 2xl:h-[24%] bg-[#EBEFF3] flex flex-col items-center justify-center rounded-lg">
  <Image src={product.images?.[0]} alt="dfds" width={500} height={500} className=" 2xl:w-[80%] h-[90%]" /> 
</div>
<div className="w-full h-[25%] 2xl:h-[24%] bg-[#EBEFF3] flex flex-col items-center justify-center rounded-lg">
  <Image src={product.images?.[0]} alt="dfds" width={500} height={500} className=" 2xl:w-[80%] h-[90%]" /> 
</div> 
<div className="w-full h-[25%] 2xl:h-[24%] bg-[#EBEFF3] flex flex-col items-center justify-center rounded-lg">
  <Image src={product.images?.[0]} alt="dfds" width={500} height={500} className=" 2xl:w-[80%] h-[90%]" /> 
</div>
<div className="w-full h-[25%] 2xl:h-[24%] bg-[#EBEFF3] flex flex-col items-center justify-center rounded-lg  ">
  <Image src={product.images?.[0]} alt="dfds" width={200} height={200} className="  2xl:w-[80%] h-[90%]" /> 
</div>
</div>
</div>

<div className=" w-[100%] lg:w-[40%] flex flex-col gap-3 xl:gap-[40px] justify-start pt-6 ">
<h2 className="text-[12px] text-[#515D6C] leading-[28px] flex gap-2 lg:gap-4 lg:text-[14px] 2xl:text-[16px]">Narx <span className="text-[20px] text-[#06172D] leading-[28px] font-semibold lg:text-[25px] 2xl:text-[32px]">{product.price}</span>uzs </h2>
<h2 className="res text-[12px] text-[#515D6C] leading-[28px] flex gap-2">Bo‘lib to‘lash 6 oy  <span className="text-[20px] text-[#06172D] leading-[28px] font-semibold ">{monthlyPayment}</span> uzsdan </h2>

<div className="flex flex-col gap-2 lg:gap-4">
<button className="res2 w-[100%] h-[40px] xl:h-[56px] bg-[#EBEFF3] rounded-md text-[#515D6C] text-[16px] items-center justify-center  font-sans leading-[18px]">Oyiga {monthlyPayment} uszdan muddatli to’lov</button>
  <button className="res w-full h-[40px] bg-[#134E9B] rounded-sm items-center justify-center  text-[#FFFFFF] text-[14px] leading-[18px] font-serif">Hoziroq sotib olish</button>
  <div className="flex gap-5">
    <button className="w-[50%] h-[40px] xl:h-[56px]  bg-[#EBEFF3] rounded-md text-[#515D6C] text-[14px] lg:text-[16px] font-sans leading-[18px]">Savatcha qo‘shish</button>
    <button className="res w-[50%] h-[40px]  items-center justify-center bg-transparent border border-[#134E9B] rounded-sm text-[#134E9B] text-[14px] font-sans leading-[18px]">Bolib to‘lang</button>
    <button className="res2 w-[50%] h-[40px] xl:h-[56px] items-center justify-center bg-[#134E9B] rounded-md text-[#FFFFFF] text-[16px] font-sans leading-[18px]">Xarid qilish</button>
   
  </div>
</div>

<div className="flex flex-col gap-3 xl:gap-5">
<div className="flex gap-3 items-center ">
    <Image src={caricon} alt="caricon" />
    <h3 className="text-[#06172DB2] text-[12px] lg:text-[14px] xl:text-[16px]">Yetkazib berish O’zbekiston bo’ylab</h3>
</div>
<div className="flex gap-3 items-center ">
    <Image src={storeicon} alt="caricon" />
    <h3 className="text-[#06172DB2] text-[12px] lg:text-[14px] xl:text-[16px]">Do’kondi o’zidan olib ketishingiz mumkin</h3>
</div>
<div className="flex gap-3 items-center ">
    <Image src={timeicon} alt="caricon" />
    <h3 className="text-[#06172DB2] text-[12px] lg:text-[14px] xl:text-[16px]">Tahminiy yetkazib berish vaqti 1 kundan 3 kungacha......</h3>
</div>
</div>
</div>
 </div>
 <CardsCarousel/>
 </div>
  );
};

export default Page;
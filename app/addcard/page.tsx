"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AiOutlineHeart, AiOutlineDelete } from "react-icons/ai";

type Post2 = {
  id: number;
  name: string;
  images: string[];
  price: string;
};

type AddType = {
  id: number;
  product_id: Post2;
};

const Page = () => {
  const [add, setAdd] = useState<AddType[]>([]);
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  useEffect(() => {
    const getAddCard = async () => {
      if (typeof window !== "undefined") {
        const userId = localStorage.getItem("user_id");
        const response = await fetch(
          `https://texnoark.ilyosbekdev.uz/carts/user/${userId}`
        );
        const data = await response.json();
        setAdd(data?.data?.carts || []);
      }
    };

    getAddCard();
  }, []);

  const handleQuantityChange = (id: number, change: number) => {
    setQuantities((prevQuantities) => {
      const currentQuantity = prevQuantities[id] || 0;
      const newQuantity = Math.max(currentQuantity + change, 0); // Ensures quantity is not negative
      return { ...prevQuantities, [id]: newQuantity };
    });
  };

  return (
    <div className="w-full h-auto flex flex-col mt-5 sm:mt-14">
      <div className="flex flex-col">
        <div className="flex flex-col gap-3">
          {add.length > 0 &&
            add.map((item) => {
              const quantity = quantities[item.product_id.id] || 0;

              return (
                <div key={item.product_id.id} className="w-full h-[120px] lg:h-[180px] flex">
                  <div className="w-[110px] sm:w-[200px] lg:w-[280px] h-full flex items-center justify-center bg-[#EBEFF3] relative overflow-hidden">
                    <Image
                      src={item.product_id.images[0] || "/12.png"}
                      alt={item.product_id.name || "Product Image"}
                      width={500}
                      height={500}
                      className="w-[80%] h-[90%] object-contain hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="w-[70%] h-full flex flex-col justify-between p-2">
                    <div className="w-full h-full flex justify-between">
                      <h2 className="text-[#515D6C] text-[12px] sm:text-[15px] leading-[18px] font-sans">
                        {item.product_id.name}
                      </h2>
                      <h2 className="text-[#06172D] text-[14px] sm:text-[17px] leading-[18px] font-semibold">
                        {item.product_id.price} usz
                      </h2>
                    </div>
                    <div className="w-full flex justify-between">
                      <div className="flex gap-2">
                        <div className="w-[37px] h-[25px] sm:w-[45px] sm:h-[33px] bg-[#EBEFF3] flex items-center justify-center">
                          <AiOutlineHeart className="sm:text-[20px]" />
                        </div>
                        <div className="w-[37px] h-[25px]  sm:w-[45px] sm:h-[33px] bg-[#EBEFF3] flex items-center justify-center">
                          <AiOutlineDelete className="sm:text-[20px]" />
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          className="w-[35px] h-[25px] sm:w-[45px] sm:h-[33px] bg-[#EBEFF3] sm:text-[20px]"
                          onClick={() => handleQuantityChange(item.product_id.id, -1)}
                        >
                          -
                        </button>
                        <h2 className="sm:text-[20px]">{quantity}</h2>
                        <button
                          className="w-[35px] h-[25px] sm:w-[45px] sm:h-[33px] bg-[#EBEFF3] sm:text-[20px]"
                          onClick={() => handleQuantityChange(item.product_id.id, 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div>
                     
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Page;
    
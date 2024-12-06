"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AiOutlineHeart, AiOutlineDelete,AiFillHeart } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [likedProducts, setLikedProducts] = useState<Record<number, boolean>>({});
  const router = useRouter();
  useEffect(() => {
    const getAddCard = async () => {
      if (typeof window !== "undefined") {
        const userId = localStorage.getItem("user_id");
        const response = await fetch(
          `https://texnoark.ilyosbekdev.uz/carts/user/${userId}`
        );
        const data = await response.json();
        setAdd(data?.data?.carts || []);

        // Initial quantity and total price
        const initialQuantities: { [key: number]: number } = {};
        let initialTotal = 0;

        data?.data?.carts.forEach((item: AddType) => {
          initialQuantities[item.product_id.id] = 1; // Default quantity 1
          initialTotal += parseFloat(item.product_id.price);
        });

        setQuantities(initialQuantities);
        setTotalPrice(initialTotal);
      }
    };

    getAddCard();
  }, []);

  const handleQuantityChange = (id: number, change: number) => {
    setQuantities((prevQuantities) => {
      const currentQuantity = prevQuantities[id] || 0;
      const newQuantity = Math.max(currentQuantity + change, 0); // Ensures quantity is not negative

      // Update total price
      const updatedPrice = add.reduce((total, item) => {
        const quantity = id === item.product_id.id ? newQuantity : prevQuantities[item.product_id.id] || 0;
        return total + quantity * parseFloat(item.product_id.price);
      }, 0);

      setTotalPrice(updatedPrice);

      return { ...prevQuantities, [id]: newQuantity };
    });
  };

  useEffect(() => {
    const storedLikes = JSON.parse(localStorage.getItem("likedProducts") || "{}");
    setLikedProducts(storedLikes);

    const userId = localStorage.getItem("user_id");
    if (!userId) {
      console.log("User ID not found");
      router.push("/login");
      return;
    }

    // Fetch liked products
    
   ;
  }, []);

  const toggleLike = async (productId: number) => {
    const newLikedState = { ...likedProducts, [productId]: !likedProducts[productId] };
    setLikedProducts(newLikedState);
    localStorage.setItem("likedProducts", JSON.stringify(newLikedState));

    const accessToken = localStorage.getItem("access_token");
    if (!accessToken) {
      console.log("Access token not found");
      router.push("/login");
      return;
    }

    try {
      await fetch("https://texnoark.ilyosbekdev.uz/likes/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`, // Tokenni tekshirish
        },
        body: JSON.stringify({ product_id: productId }),
      });
      
    } catch (error) {
      console.log("Error toggling like:", error);
      setLikedProducts(likedProducts); // Revert if error
    }
  };

  return (
    <div className="w-full h-auto flex flex-col mt-3 sm:mt-14 md:mt-1 lg:mt-10 gap-7  ">
      <h3 className="text-[#B6BABF] text-[14px] font-sans tracking-widest md:text-[18px]"> <Link href="/" className="hover:underline">Bosh sahifa</Link> / Savat Savat </h3>
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="w-full lg:w-[70%] flex flex-col gap-3">
          {add.length > 0 &&
            add.map((item,index) => {
              const quantity = quantities[item.product_id.id] || 0;

              return (
                <div key={item.product_id.id +index} className="w-full h-[120px] lg:h-[180px] 2xl:h-[230px] flex">
                  <div className="w-[110px] sm:w-[200px] lg:w-[280px] 2xl:w-[370px] h-full flex items-center justify-center bg-[#EBEFF3] relative overflow-hidden">
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
                      <h2 className="text-[#515D6C] text-[12px] sm:text-[15px] lg:text-[20px] 2xl:text-[25px] leading-[18px] font-sans">
                        {item.product_id.name}
                      </h2>
                      <h2 className="text-[#06172D] text-[12px] sm:text-[17px] lg:text-[22px] 2xl:text-[30px] leading-[18px] font-semibold">
    {(parseFloat(item.product_id.price) * quantity).toFixed(2)} usz
  </h2>
                    </div>
                    <div className="w-full flex justify-between">
                      <div className="flex gap-2">
                        <div className="w-[37px] h-[25px] sm:w-[45px] sm:h-[33px] lg:w-[55px] lg:h-[40px] 2xl:w-[65px] 2xl:h-[50px] bg-[#EBEFF3] flex items-center justify-center">
                        <button onClick={() => toggleLike(item.product_id.id)}>
            {likedProducts[item.product_id.id] ? (
            
             <AiFillHeart className="text-red-500 sm:text-[20px] lg:text-[25px]  2xl:text-[30px]" />
            ) : (
              
              <AiOutlineHeart className="text-gray-500 sm:text-[20px] lg:text-[25px]  2xl:text-[30px]" />
            )}
          </button>
                        </div>
                        <div
  className="w-[37px] h-[25px] sm:w-[45px] sm:h-[33px] lg:w-[55px] lg:h-[40px] 2xl:w-[65px] 2xl:h-[50px] bg-[#EBEFF3] flex items-center justify-center cursor-pointer"
  onClick={async () => {
    try {
      const response = await fetch(`https://texnoark.ilyosbekdev.uz/carts/delete/${item.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
          body: JSON.stringify({ user_id: localStorage.getItem("user_id") }),
      });

      if (response.ok) {
        // Remove the item from the state after successful deletion
        setAdd((prev) => prev.filter((cartItem) => cartItem.product_id.id !== item.product_id.id));
        alert("Item successfully deleted.");
      } else {
        console.error("Failed to delete item.");
        alert("Failed to delete item.");
      }
    } catch (error) {
      console.error("Error deleting item:", error);
      alert("Error deleting item. Please try again.");
    }
  }}
>
  <AiOutlineDelete className="sm:text-[20px] lg:text-[25px]  2xl:text-[30px]" />
</div>

                      </div>
                      <div className="flex gap-2">
                        <button
                          className="w-[35px] h-[25px] sm:w-[45px] sm:h-[33px] lg:w-[55px] lg:h-[40px] 2xl:w-[65px] 2xl:h-[50px] bg-[#EBEFF3] sm:text-[20px] lg:text-[25px]  2xl:text-[30px]"
                          onClick={() => handleQuantityChange(item.product_id.id, -1)}
                        >
                          -
                        </button>
                        <h2 className="sm:text-[20px] lg:text-[25px]  2xl:text-[30px]">{quantity}</h2>
                        <button
                          className="w-[35px] h-[25px] sm:w-[45px] sm:h-[33px] lg:w-[55px] lg:h-[40px] 2xl:w-[65px] 2xl:h-[50px] bg-[#EBEFF3] sm:text-[20px] lg:text-[25px]  2xl:text-[30px]"
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
        <div className="w-full lg:w-[35%] 2xl:w-[25%] h-[250px] 2xl:h-[300px] bg-[#EBEFF3] rounded-[8px] flex flex-col items-center gap-5 p-5 ">
          <h1 className="text-[#000000] text-[18px] font-semibold sm:text-[23px]  md:text-[27px] ">Sizni haridingiz</h1>
          <div className="w-full h-auto flex justify-between md:justify-around lg:justify-between">
            <h2 className="text-[#00000099] text-[12px] font-sans sm:text-[15px] md:text-[20px]">Yetkazib berish:</h2>
            <h2 className="text-[#00000099] text-[18px] font-semibold sm:text-[23px] md:text-[27px] ">Bepul</h2>
          </div>
          <div className="w-full h-auto flex justify-between md:justify-around lg:justify-between">
            <h2 className="text-[#00000099] text-[12px] font-sans sm:text-[15px] md:text-[20px]">Jami summa:</h2>
            <h2 className="text-[#00000099] text-[18px] font-semibold sm:text-[23px]">{totalPrice.toFixed(2)} usz</h2>
          </div>
          <button className="w-[274px] h-[56px] bg-[#134E9B] text-[#FFFFFF] rounded-[6px] text-[16px] font-sans">Hoziroq sotib olish</button>
        </div>
      </div>
    </div>
  );
};

export default Page;
    
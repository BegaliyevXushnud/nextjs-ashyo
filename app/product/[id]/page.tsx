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
    id: string;
    name: string;
    price: string;
    images: string;
  };
  type CommentType = {
    id: string;
    username: string;
    text: string;
  };
  type RouteParams = {
    id?:string | undefined ;
  };
  type CommentResponseType = {
    id: string;
    user_id: {
      first_name: string;
      last_name: string;
    };
    comment: string;
  };
  const { id } = useParams<RouteParams>();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [liked, setLiked] = useState(false); 
  const [comments, setComments] = useState<CommentType[]>([]);
  const [newComment, setNewComment] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const commentsPerPage = 5;  // Adjust this number as needed

  const toggleLike = () => {
    setLiked(!liked);
  };

  const handleNewCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment(e.target.value);
  }; 
  const fetchComments = async () => {
    try {
      const token = localStorage.getItem("access_token");
      if (!token) {
        throw new Error("Access token is missing.");
      }
  
      const response = await fetch(`https://texnoark.ilyosbekdev.uz/comment/product/${id}?page=${currentPage}&limit=${commentsPerPage}`, {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch comments");
      }
  
      const data = await response.json();
  
      if (data?.data?.comment) {
        const formattedComments = data.data.comment.map((comment:CommentResponseType) => ({
          id: comment.id,
          username: `${comment.user_id.first_name} ${comment.user_id.last_name}`,
          text: comment.comment,
        }));
  
        setComments(formattedComments);
        setTotalPages(Math.ceil(data.data.count / commentsPerPage));  // Calculate total pages
      } else {
        console.log("No comments found");
      }
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const handleAddComment = async () => {
    if (newComment.trim() === "") return;
  
    try {
      const token = localStorage.getItem("access_token"); 
      if (!token) {
        throw new Error("Access token is missing.");
      }
  
      const productId = id ? parseInt(id, 10) : NaN;

  
      if (isNaN(productId)) {
        throw new Error("Invalid product ID");
      }
  
      const response = await fetch('https://texnoark.ilyosbekdev.uz/comment/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          product_id: productId, 
          comment: newComment, 
        }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to post comment');
      }
  
      setNewComment('');
      fetchComments(); 
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`https://texnoark.ilyosbekdev.uz/products/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProduct(data.data?.product || null);
      } catch (error) {
        console.log("Error fetching product data:", error);
      }
    };

    getData();
    fetchComments(); // Fetch comments when the page loads
  }, [id]); // Ensure fetch is always called when `id` changes

  useEffect(() => {
    if (id) {
      fetchComments();  // Fetch comments when the page or currentPage changes
    }
  }, [currentPage]); // Fetch comments when `currentPage` changes
  
  if (!product) {
    return <div>Loading...</div>;
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  
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
    <Image src={product.images?.[0] || '/12.png'} alt="dfds" width={800} height={800}  className=" sm:w-[60%] 2xl:w-[80%] h-[100%]" />
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
  <Image src={product.images?.[0] || '/12.png'} alt="dfds" width={200} height={200} className=" 2xl:w-[80%] h-[90%]" /> 
</div>
<div className="w-full h-[25%] 2xl:h-[24%] bg-[#EBEFF3] flex flex-col items-center justify-center rounded-lg">
  <Image src={product.images?.[0]  || '/12.png'} alt="dfds" width={200} height={200} className=" 2xl:w-[80%] h-[90%]" /> 
</div> 
<div className="w-full h-[25%] 2xl:h-[24%] bg-[#EBEFF3] flex flex-col items-center justify-center rounded-lg">
  <Image src={product.images?.[0] || '/12.png'} alt="dfds" width={200} height={200} className=" 2xl:w-[80%] h-[90%]" /> 
</div>
<div className="w-full h-[25%] 2xl:h-[24%] bg-[#EBEFF3] flex flex-col items-center justify-center rounded-lg  ">
  <Image src={product.images?.[0] || '/12.png'} alt="dfds" width={200} height={200} className="  2xl:w-[80%] h-[90%]" /> 
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
 <h2 className="text-[18px] font-semibold">Kommentlar</h2>
        <div className="comment-input mt-4">
          <input
            type="text"
            value={newComment}
            onChange={handleNewCommentChange}
            placeholder="Yangi komment qoldiring..."
            className="w-full p-2 border rounded"
          />
          <button
            onClick={handleAddComment}
            className="mt-2 w-full p-2 bg-blue-500 text-white rounded"
          >
            Komment yuborish
          </button>
        </div>

      
        <div className="comments-list mt-4">
          {comments.length > 0 ? (
            comments.map(comment => (
              <div key={comment.id} className="comment-item p-2 border-b">
                <p className="font-semibold">{comment.username}</p>
                <p>{comment.text}</p>
              </div>
            ))
          ) : (
            <p>No comments available</p>
          )}
        </div>
        <div className="pagination flex justify-center mt-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-300 rounded-l-md"
          >
            Prev
          </button>
          <span className="px-4 py-2">{`${currentPage} / ${totalPages}`}</span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-300 rounded-r-md"
          >
            Next
          </button>
        </div>
 <CardsCarousel/>
 </div>
  );
};

export default Page;
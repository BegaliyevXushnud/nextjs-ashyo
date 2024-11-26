'use client';

import React from 'react';
import { useParams } from 'next/navigation';



import Header from '../../../../component/header';
import Footer from '../../../../component/footer';

const ProductPage = () => {
  const { id } = useParams();

  // Example data for demonstration
  const cardData = [
    {
      id: '1',
      title: 'Смартфон Xiaomi 12 Lite 8/128Gb Қора',
     
      product_detail: '128Gb, AMOLED дисплей, Snapdragon 778G',
      price: '6 999 999 UZS',
      sale: '7 500 000 UZS',
      credit: '6 X / 1 166 667 UZS',
      more_info: 'Батарея 4300мАч, 108МП камера, 6.55” AMOLED дисплей',
    },
    // Add more items as needed
  ];

  const card = cardData.find((item) => item.id === id);

  if (!card) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Header />
      <div className="container grid grid-cols-1 gap-5 py-10">
        {/* Product Section */}
        <div className="grid grid-cols-1 gap-3 lg:flex xl:justify-around">
          <div className="flex flex-col lg:w-[60%]">
            <h1 className="text-[25px] order-2 sm:order-1 sm:text-[30px] md:text-[35px] lg:text-[40px] font-bold">
              {card.title}
            </h1>
           
          </div>
          {/* Price and Details */}
          <div className="flex flex-col gap-3 lg:w-[40%] xl:w-[30%] xl:gap-5">
            <div className="w-[100%] lg:h-[400px] flex flex-col gap-1 p-4 border-[1px] rounded-md border-black">
              <h2 className="sm:text-[20px]">Деталь: {card.product_detail}</h2>
              <h1 className="font-bold text-[25px] sm:text-[30px] lg:text-[35px]">{card.price}</h1>
              <s className="sm:text-[18px] xl:text-[22px] text-gray-500">{card.sale}</s>
              <button className="w-full font-bold bg-slate-200 sm:h-[45px] lg:h-[60px] rounded-md p-2">
                {card.credit}
              </button>
              <div className="flex items-center gap-2">
                <button className="w-full sm:h-[45px] font-bold bg-slate-300 rounded-md lg:h-[60px] lg:text-[20px] h-[40px] p-2">
                  Купить в 1 клик
                </button>
                <button className="w-[40px] sm:h-[45px] lg:h-[60px] flex items-center justify-center rounded-md h-[40px] p-2 bg-slate-300">
                  <i className="fa-regular fa-heart fa-lg"></i>
                </button>
              </div>
              <button className="w-full h-[40px] sm:h-[45px] lg:h-[60px] bg-[#7000FF] hover:bg-[#722cce] text-white rounded-md">
                Добавить в корзину
              </button>
            </div>
            <div className="w-[100%] lg:h-[400px] flex flex-col gap-1 p-4 border-[1px] rounded-md border-black">
              <h2 className="font-bold">Доставка от 1 дня</h2>
              <p>В пункте выдачи Узум или курьером</p>
              <hr />
              <div className="flex flex-col gap-2">
                <h2 className="font-bold">Безопасная оплата удобным способом</h2>
                <p>Оплачивайте картой, наличными или в рассрочку</p>
              
                <hr />
                <h2>Простой и быстрый возврат</h2>
                <p>Примем товары в течение 10 дней и сразу вернём деньги. Подробнее</p>
              </div>
            </div>
          </div>
        </div>
        {/* Description */}
        <div className="flex flex-col items-center justify-center gap-2">
          <button className="bg-[#7000FF] hover:bg-[#6f00ffe0] w-[200px] p-2 text-white rounded-md h-[40px]">
            Описание
          </button>
          <p>{card.more_info}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;

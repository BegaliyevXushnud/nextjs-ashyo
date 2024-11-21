import Image from 'next/image';
import React from 'react';
import MusicImg from '../../public/music.svg';

const Music = () => {
  return (
    <div className="relative w-full h-auto bg-[#282828] gap-7 lg:gap-1 flex p-5 items-center justify-between 2xl:justify-around  text-white">
      {/* Image Container */}
      <div className="relative w-1/2  flex items-end justify-center md:pt-8 ">
        <Image src={MusicImg} alt="music" className=" w-full h-full  2xl:mt-3 md:w-[300px] md:h-[293px] lg:w-[400px] lg:h-[393px]  2xl:w-[570px] 2xl:h-[493px]  mt-5 scale-125 " />
      </div>

      {/* Text and Button */}
      <div className="w-1/2 flex flex-col items-start justify-start pr-8  gap-[5px] lg:gap-[20px] 2xl:gap-[30px]  ">
        <h2 className="text-[12px]  md:text-2xl lg:text-[23px] lg:leading-[40px] font-semibold leading-snug  md:text-[22px] md:leading-[30px] xl:text-[30px] xl:leading-[40px] 2xl:text-[40px] 2xl:leading-[60px] ">
        Musiqa zavqini his qilish uchun ko&#39;p mablag&#39; sarflash shart emas!
        </h2>
        <button className="mt-4 bg-white text-black py-2 px-4 rounded hover:bg-gray-300 w-[94px] h-[32] text-[11px] md:text-[13px] lg:w-[161px] lg:h-[40px] lg:text-[17px]  xl:w-[141px] xl:h-[44px] xl:text-[12px] 2xl:w-[161px] 2xl:h-[54px] 2xl:text-[16px]">
          Batafsil
        </button>
      </div>
    </div>
  );
};

export default Music;

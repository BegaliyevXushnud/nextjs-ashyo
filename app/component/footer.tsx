
import React from 'react'
import appstore from "../../public/appstore.svg"
import playstore from "../../public/playmarket.svg"
import facebook from "../../public/facebook.svg"
import youtube from "../../public/youtube.svg"
import telegram from "../../public/telegram.svg"
import twiter from "../../public/twiter.svg"
import instagram from "../../public/instagram.svg"
import Image from 'next/image'
const footer = () => {
  return (
    <div className='w-full h-auto flex flex-col gap-5 mt-5'>
      <h2 className='text-[#000000B2] text-[14px] font-semibold font-sans'>Mobil ilovani yuklab oling</h2>
      <div className='flex gap-3'>
      <div className='w-[50%] h-[44px] bg-[#EBEFF3] flex items-center justify-center gap-3'>
<Image src={appstore} alt='appstore' />
<h2 className='text-[12px] text-[#000000] font-serif'>App Store </h2>
      </div>
      <div className='w-[50%] h-[44px] bg-[#EBEFF3] flex items-center justify-center gap-3'>
<Image src={playstore} alt='appstore' />
<h2 className='text-[12px] text-[#000000] font-serif'>Google Play </h2>
      </div>
      </div>
      <div className='flex justify-between '>
      <div className='flex flex-col gap-4'>
        <h2 className='text-[#000000B2] text-[14px] font-semibold leading-[18px]'>Menu</h2>
        <ul className='flex flex-col gap-3'>
          <li className='text-[#000000B2] text-[11px] font-sans leading-[15px]'>Ashyo haqida</li>
          <li className='text-[#000000B2] text-[11px] font-sans leading-[15px]'>Foydalanish shartlari</li>
          <li className='text-[#000000B2] text-[11px] font-sans leading-[15px]'> Maxfiylik va hafsizlik siyosati</li>
          <li className='text-[#000000B2] text-[11px] font-sans leading-[15px]'>Mahsulotlarni va tovarlarni qaytarish siyosati</li>
          <li className='text-[#000000B2] text-[11px] font-sans leading-[15px]'>Biz bilan aloqa</li>
        </ul>
      </div>
      <div className='flex flex-col gap-5'>
      <h2 className='text-[#000000B2] text-[14px] font-semibold leading-[18px]'>Menu</h2>
      <h2 className='text-[#00000080] text-[16px] font-semibold leading-[18px]'>+998 (71) 123-45-67</h2>
      <div className='flex flex-wrap gap-4'>
    <button className='w-[50px] h-[45px] bg-[#EBEFF3] flex items-center justify-center rounded-[7px]'>
      <Image src={facebook} alt='facebook' />
    </button>
    <button className='w-[50px] h-[45px] bg-[#EBEFF3] flex items-center justify-center rounded-[7px]'>
      <Image src={youtube} alt='youtube' />
    </button>
    <button className='w-[50px] h-[45px] bg-[#EBEFF3] flex items-center justify-center rounded-[7px]'>
      <Image src={telegram} alt='telegram' />
    </button>
    <button className='w-[50px] h-[45px] bg-[#EBEFF3] flex items-center justify-center rounded-[7px]'>
      <Image src={twiter} alt='twiter' />
    </button>
    <button className='w-[50px] h-[45px] bg-[#EBEFF3] flex items-center justify-center rounded-[7px]'>
      <Image src={instagram} alt='instagram' />
    </button>
      </div>
      </div>
      </div>
      <h2 className='text-[#00000066] text-[12px] text-center font-sans leading-[15px]'>© 2022 Ashyo ro’hatdan otgan litsenzalangan bu brend.</h2>
    </div>
  )
}

export default footer

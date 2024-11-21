// import React from 'react'
// import appstore from "../../public/appstore.svg"
// import playstore from "../../public/playmarket.svg"
// import facebook from "../../public/facebook.svg"
// import youtube from "../../public/youtube.svg"
// import telegram from "../../public/telegram.svg"
// import twiter from "../../public/twiter.svg"
// import instagram from "../../public/instagram.svg"
// import Image from 'next/image'
import {FaComment} from 'react-icons/fa'
import "../cssfolder/footer.css"

// const footer = () => {
//   const socialMedia = [
//     { src: facebook, alt: 'facebook' },
//     { src: youtube, alt: 'youtube' },
//     { src: telegram, alt: 'telegram' },
//     { src: twiter, alt: 'twiter' },
//     { src: instagram, alt: 'instagram' }
//   ];

//   const menuItems = [
//     "Ashyo haqida",
//     "Foydalanish shartlari",
//     "Maxfiylik va hafsizlik siyosati",
//     "Mahsulotlarni va tovarlarni qaytarish siyosati",
//     "Biz bilan aloqa"
//   ];

//   return (
//     <div className='w-full h-auto flex flex-col  gap-5 mt-5'>
//       <div className='flex justify-between'>
//      <div className='flex flex-col'>
//      <div className='flex flex-col'>
//         <h2>Bizning ijtimoiy tarmoqlarda</h2>
//         <div className='flex flex-wrap gap-4'>
//             {socialMedia.map((social, index) => (
//               <button key={index} className='w-[50px] h-[45px] bg-[#EBEFF3] flex items-center justify-center rounded-[7px]'>
//                 <Image src={social.src} alt={social.alt} />
//               </button>
//             ))}
//           </div>
//       </div>
//      <div>
//      <h2 className='text-[#000000B2] text-[14px] font-semibold font-sans'>Mobil ilovani yuklab oling</h2>
//       <div className='flex gap-3'>
//         <div className='w-[50%] h-[44px] bg-[#EBEFF3] flex items-center justify-center gap-3'>
//           <Image src={appstore} alt='appstore' />
//           <h2 className='text-[12px] text-[#000000] font-serif'>App Store</h2>
//         </div>
//         <div className='w-[50%] h-[44px] bg-[#EBEFF3] flex items-center justify-center gap-3'>
//           <Image src={playstore} alt='playstore' />
//           <h2 className='text-[12px] text-[#000000] font-serif'>Google Play</h2>
//         </div>
//       </div>
//      </div>
//      </div>

//       <div className='flex flex-col'>
//       <h2 className='text-[#000000B2] text-[14px] font-semibold leading-[18px]'>Menu</h2>
//           <ul className='flex flex-col gap-3'>
//             {menuItems.map((item, index) => (
//               <li key={index} className='text-[#000000B2] text-[11px] font-sans leading-[15px]'>
//                 {item}
//               </li>
//             ))}
//           </ul>
// <div/>
//         <div className='flex flex-col gap-5'>
//           <h2 className='text-[#000000B2] text-[14px] font-semibold leading-[18px]'>Aloqa</h2>
//           <h2 className='text-[#00000080] text-[16px] font-semibold leading-[18px]'>+998 (71) 123-45-67</h2>
//           <div className='ts flex flex-wrap gap-4'>
//             {socialMedia.map((social, index) => (
//               <button key={index} className='w-[50px] h-[45px] bg-[#EBEFF3] flex items-center justify-center rounded-[7px]'>
//                 <Image src={social.src} alt={social.alt} />
//               </button>
//             ))}
//           </div>
//           <div className='st flex flex-col gap-3'>
//             <h3 className='text-[16px] text-[#000000B2] font-sans leading-[20px]'>Savolingiz bormi?</h3>
//             <div className='w-[314px] h-[54px] bg-[#EBEFF3] flex items-center px-4 rounded-[6px]'>
//   <input 
//     type="text" 
//     placeholder="O’zingiz qiziqtirgan savollarni bering"
//     className="w-full h-full bg-transparent outline-none placeholder:text-[#0000004D]" 
//   />
//   <FaComment className="ml-2 text-gray-500 scale-150" />
// </div>


//           </div>
//         </div>
//       </div>

//       </div>


//       <h2 className='text-[#00000066] text-[12px] text-center font-sans leading-[15px]'>
//         © 2022 Ashyo ro’hatdan otgan litsenzalangan bu brend.
//       </h2>
//     </div>
//   )
// }

// export default footer

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
    <div className='w-full h-auto flex flex-col gap-5 lg:gap-[20px] 2xl:pag-[30px]'>
     <div className='w-full h-auto flex flex-col lg:flex-row lg:justify-between gap-5 '>
   <div className='flex flex-col gap-5 2xl:gap-[25px]'>
    <h2 className='text-[20px] text-[#000000B2] leading-[26px] font-semibold 2xl:text-[23px]'>Bizning ijtimoiy tarmoqlarda</h2>
   <div className='st  flex-wrap gap-4 2xl:gap-[30px]'>
    <button className='w-[50px] h-[45px] 2xl:w-[60px] 2xl:h-[55px] bg-[#EBEFF3] flex items-center justify-center rounded-[7px]'>
      <Image src={facebook} alt='facebook' className='2xl:scale-125' />
    </button>
    <button className='w-[50px] h-[45px]  2xl:w-[60px] 2xl:h-[55px] bg-[#EBEFF3] flex items-center justify-center rounded-[7px]'>
      <Image src={youtube} alt='youtube'  className='2xl:scale-125' />
    </button>
    <button className='w-[50px] h-[45px]  2xl:w-[60px] 2xl:h-[55px] bg-[#EBEFF3] flex items-center justify-center rounded-[7px]'>
      <Image src={telegram} alt='telegram'  className='2xl:scale-125' />
    </button>
    <button className='w-[50px] h-[45px]  2xl:w-[60px] 2xl:h-[55px] bg-[#EBEFF3] flex items-center justify-center rounded-[7px]'>
      <Image src={twiter} alt='twiter'  className='2xl:scale-125' />
    </button>
    <button className='w-[50px] h-[45px]  2xl:w-[60px] 2xl:h-[55px] bg-[#EBEFF3] flex items-center justify-center rounded-[7px]'>
      <Image src={instagram} alt='instagram'  className='2xl:scale-125' />
    </button>
      </div>
    <div className='flex flex-col gap-3 2xl:gap-[20px]'>
    <h2 className='text-[#000000B2] text-[14px] font-semibold font-sans lg:text-[20px] lg:leading-[26px]'>Mobil ilovani yuklab oling</h2>
      <div className='flex gap-3'>
      <div className='w-[50%] h-[44px] bg-[#EBEFF3] rounded-[10px] lg:h-[62px] flex items-center justify-center gap-3'>
<Image src={appstore} alt='appstore' className='lg:w-[32px] lg:h-[32] ' />
<h2 className='text-[12px] text-[#000000] font-serif lg:text-[16px]'>App Store </h2>
      </div>
      <div className='w-[50%] h-[44px] bg-[#EBEFF3] rounded-[10px] lg:h-[62px] flex items-center justify-center gap-3'>
<Image src={playstore} alt='appstore' className='lg:w-[32px] lg:h-[32] ' />
<h2 className='text-[12px]  text-[#000000] font-serif lg:text-[16px]'>Google Play </h2>
      </div>
      </div>
    </div>
   </div>
    <div className='st  flex-col gap-[24px]'>
       <h2 className='text-[#000000B2] text-[14px] font-semibold leading-[18px] lg:text-[20px] lgleading-[26px]'>Menu</h2>
        <ul className='flex flex-col gap-[27px]'>
          <li className='text-[#000000B2] text-[11px] font-sans leading-[15px] lg:text-[16px] lg:leading-[17px]'>Ashyo haqida</li>
          <li className='text-[#000000B2] text-[11px] font-sans leading-[15px] lg:text-[16px] lg:leading-[17px]'>Foydalanish shartlari</li>
          <li className='text-[#000000B2] text-[11px] font-sans leading-[15px] lg:text-[16px] lg:leading-[17px]'> Maxfiylik va hafsizlik siyosati</li>
          <li className='text-[#000000B2] text-[11px] font-sans leading-[15px] lg:text-[16px] lg:leading-[17px]'>Mahsulotlarni va tovarlarni qaytarish siyosati</li>
          <li className='text-[#000000B2] text-[11px] font-sans leading-[15px] lg:text-[16px] lg:leading-[17px]'>Biz bilan aloqa</li>
        </ul>
       </div>
      <div className='flex justify-between '>
      <div className='flex flex-col gap-4'>
       <div className='ts  flex-col gap-4'>
       <h2 className='text-[#000000B2] text-[14px] font-semibold leading-[18px]'>Menu</h2>
        <ul className='flex flex-col gap-3'>
          <li className='text-[#000000B2] text-[11px] font-sans leading-[15px]'>Ashyo haqida</li>
          <li className='text-[#000000B2] text-[11px] font-sans leading-[15px]'>Foydalanish shartlari</li>
          <li className='text-[#000000B2] text-[11px] font-sans leading-[15px]'> Maxfiylik va hafsizlik siyosati</li>
          <li className='text-[#000000B2] text-[11px] font-sans leading-[15px]'>Mahsulotlarni va tovarlarni qaytarish siyosati</li>
          <li className='text-[#000000B2] text-[11px] font-sans leading-[15px]'>Biz bilan aloqa</li>
        </ul>
       </div>
      </div>
      <div className='flex flex-col gap-5'>
      <h2 className='text-[#000000B2] text-[14px] font-semibold leading-[18px] lg:text-[20px] lg:leading-[26px]'>Aloqa</h2>
      <h2 className='text-[#00000080] text-[16px] font-semibold leading-[18px] lg:text-[24px] lg:text-[#06172D] lg:leading-[28px]'>+998 (71) 123-45-67</h2>
      <div className='st   flex-col gap-5'>
            <h3 className='text-[16px] text-[#000000B2] font-sans leading-[20px]'>Savolingiz bormi?</h3>
            <div className='w-[314px] h-[54px] bg-[#EBEFF3] flex items-center px-4 rounded-[6px]'>
  <input 
    type="text" 
    placeholder="O’zingiz qiziqtirgan savollarni bering"
    className="w-full h-full bg-transparent outline-none placeholder:text-[#0000004D]" 
  />
  <FaComment className="ml-2 text-gray-500 scale-150" />
</div>


          </div>
      <div className='ts  flex-wrap gap-4'>
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
     </div>
      <h2 className='text-[#00000066] text-[12px] text-center font-sans leading-[15px]'>© 2022 Ashyo ro’hatdan otgan litsenzalangan bu brend.</h2>
    </div>
  )
}

export default footer
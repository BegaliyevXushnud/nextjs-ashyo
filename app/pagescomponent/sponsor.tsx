
import React from 'react'
import artel from "../../public/arte.svg"
import apple from "../../public/apple.svg"
import samsung from "../../public/samsung.svg"
import vivo from "../../public/vivo.svg"
import nokia from "../../public/nokya.svg"
import mi from "../../public/mi.svg"
import huawei from "../../public/huaeei.svg"
import Image from 'next/image'
const sponsor = () => {
  return (
    <div className="parent grid grid-cols-2 grid-rows-5 gap-2 mt-5 2xl:grid-cols-4 2xl:grid-rows-2">
    <div className="div15 bg-[#67B43733] p-4">
    <div className='w-full h-full flex items-center justify-center '>
    <Image src={artel} alt='artel'/>
   </div>
    </div>
    <div className="div16 bg-[#034EA21A] p-4 row-span-2 2xl:col-start-2 2xl:row-start-1">
    <div className='w-full h-full flex items-center justify-center '>
    <Image src={samsung} alt='samsung'/>
   </div>
    </div>

    <div className="div17 bg-[#0000001A] p-4 row-span-2 2xl:col-start-1 2xl:row-start-2">
    <div className='w-full h-full flex items-center justify-center '>
    <Image src={apple} alt='apple'/>
   </div>
    </div>
    <div className="div18 bg-[#006DB833] p-4 ">
    <div className='w-full h-full flex items-center justify-center '>
    <Image src={vivo} alt='vivo'/>
   </div>
    </div>

    <div className="div19 bg-[#00439C1F] p-4 ">
    <div className='w-full h-full flex items-center justify-center '>
    <Image src={nokia} alt='nokia'/>
   </div>
    </div>
    <div className="div20 bg-[#0F4A97] p-4  ">
    <h2 className='text-[#FFFFFF] text-[14px] leading-[18px] font-sans text-center '>Ko'proq</h2>
    </div>
    <div className="div21 bg-[#FF1A1F33] p-4 row-span-2 col-start-1 row-start-5 2xl:col-start-3 2xl:row-start-2"> 
    <div className='w-full h-full flex items-center justify-center '>
    <Image src={huawei} alt='huawei'/>
   </div>
    </div>
    <div className="div22 bg-[#FF670033] p-4 row-span-2 col-start-2 row-start-4 2xl:col-start-4 2xl:row-start-1">
   <div className='w-full h-full flex items-center justify-center '>
   <Image src={mi} alt='mi'/>
   </div>
    </div>
  </div>
  )
}

export default sponsor

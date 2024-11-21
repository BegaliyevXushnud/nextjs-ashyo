
import Image from "next/image";
import notebookimg from "../../public/secondnotebookimg.svg"
import conesanerimg from "../../public/konssanerimg.png"
import kiryuvishmashinasiimg from "../../public/kiryuvishimg.svg"
import televizorimg from "../../public/televizorimg.png"
import xaladilnikimg from "../../public/xaladilnik.png"
import xaladilnikimg2 from "../../public/xaladilnik2.svg"
import telefonimg2 from "../../public/hero2.png"
import "../cssfolder/items.css"
export default function Items() {
    return (
     <div>
       <div className="grid grid-cols-3 grid-rows-[130px] gap-2 h-auto 2xl:grid-cols-5 2xl:grid-rows-4 ">
        <div className= " bg-[#5C4F8C] col-span-2 2xl:row-span-2 flex  rounded-[3px] xl:justify-center 2xl:gap-[60px] md:justify-between 2xl:justify-around text-white text-lg font-bold  overflow-hidden">
    <div className="w-[88px] h-[24px] md:w-[100px] md:h-[30px] 2xl:w-[120px] 2xl:h-[40px] bg-transparent flex justify-center items-center p-2 border border-white rounded-[16px] z-0 mt-3 ml-2 2xl:mt-5 " >
        <h2 className="font-sans text-[#FFFFFF] text-[10px] md:text-[13px] 2xl:text-[18px]">Noutbooklar</h2>
    </div>
    <Image src={notebookimg} alt="notebookimg" className=" 2xl:w-[50%] 2xl:h-full object-cover " />
        </div>
        <div className="bg-[#797C7D] 2xl:row-span-2  col-start-3 flex flex-col  gap-5  rounded-[3px]  text-white text-lg font-bold overflow-hidden">
        <div className="w-[98px] h-[24px] 2xl:w-[210px] 2xl:h-[40px] bg-transparent flex items-center justify-center mt-2 ml-2 2xl:mt-5 2xl:ml-5  border border-white rounded-[16px]  " >
        <h2 className="font-sans text-[#FFFFFF] text-[10px] md:text-[13px] 2xl:text-[18px]">Kondetsiyoner</h2>
    </div>
  <div className="w-full flex justify-end">
  <Image src={conesanerimg} alt="notebookimg" className=" 2xl:w-[250px] 2xl:h-[132px]" />
  </div>
        </div>
        <div className="bg-[#797C7D] 2xl:row-span-2 items-center  row-start-2 2xl:col-start-1 2xl:row-start-3  flex flex-col 2xl:items-center  rounded-[3px] justify-between 2xl:justify-between 2xl:p-2 text-white text-lg font-bold overflow-hidden">
        <div className="w-full flex items-center justify-center p-2">
        <div className="w-[114px] h-[25px] md:w-[144px] md:h-[30px] 2xl:w-[184px] 2xl:h-[40px] flex items-center justify-center bg-transparent   border border-white rounded-[16px]  " >
        <h2 className=" font-sans text-[#FFFFFF] text-[9px] md:text-[13px] 2xl:text-[18px]">Kiryuvish mashina</h2>
    </div>
        </div>
    <Image src={kiryuvishmashinasiimg} alt="notebookimg" className=" h-[50%] sm:w-[70%] 2xl:w-[210px] 2xl:h-[180px] object-cover"  />
        </div>
        <div className="bg-[#CEAF75] 2xl:row-span-2  col-span-2 row-start-2 2xl:col-start-2 2xl:row-start-3 flex flex-col   rounded-[3px] justify-around text-white text-lg font-bold">
        <div className="w-[98px] h-[24px]  lg:h-[38px] 2xl:w-[170px] 2xl:h-[35px] bg-transparent flex items-center justify-center  border border-white rounded-[16px] ml-2 2xl:mb-4" >
        <h2 className="font-sans text-[#FFFFFF] text-[10px] md:text-[13px] 2xl:text-[18px]">Televizorlar</h2>
    </div>
   <div className="w-full flex items-center  justify-center">
   <Image src={televizorimg} alt="notebookimg" className="w-[258px] md:w-[300px] md:h-[170px] h-[100px] 2xl:w-[350px] 2xl:h-[200px] object-cover" />
   </div>
        </div>
        <div className="bg-[#888380] col-span-2 row-span-3 col-start-2 2xl:col-start-5 2xl:row-start-2 row-start-3  flex items-end justify-end rounded-[3px]  text-white text-lg font-bold pt-8">
        <Image src={xaladilnikimg2} alt="notebookimg" className="rt sm:w-auto 2xl:h-[202px] " />
    <Image src={xaladilnikimg} alt="notebookimg" className="h-[282px] w-full 2xl:h-[390px]" />
        </div>
        <div className="bg-[#888380] row-span-2 col-start-1 2xl:col-start-4 2xl:row-start-3  pt-5 row-start-3 flex flex-col items-center justify-between sm:justify-start sm:items-start sm:p-5 shadow-custom overflow-hidden  rounded-[3px] text-white text-lg font-bold">
        <div className="p-1 md:p-2 lg:p-3  flex items-center justify-center bg-transparent   border border-white rounded-[16px] lg:rounded-[26px] " >
        <h2 className="font-sans text-[#FFFFFF] text-[10px] md:text-[13px] 2xl:text-[18px]">Muzlatgichlar</h2>
    </div>
    <div className="w-full flex items-end justify-end">
    <Image src={xaladilnikimg2} alt="notebookimg" className="rt2 ml-3" />
    </div>
        </div>
        <div className="bg-[#676D86] row-span-2 2xl:col-start-4 2xl:row-start-1 p-2 col-start-1 row-start-5 flex flex-col justify-between  rounded-[3px] text-white text-lg font-bold overflow-hidden">
        <div className="w-[98px] h-[24px]  lg:h-[38px] 2xl:w-[170px] 2xl:h-[35px] flex items-center justify-center bg-transparent   border border-white rounded-[16px]   " >
        <h2 className="font-sans text-[#FFFFFF] text-[10px] md:text-[13px] 2xl:text-[18px]">Telefonlar</h2>
    </div>
    
    <div className="w-full flex justify-end">
    <Image src={telefonimg2} alt="notebookimg" className=" scale-110  object-cover 2xl:w-[260px] 2xl:h-[190px] " />
    </div>
        </div>
        <div className=" bg-[#0F4A97] col-span-2 col-start-2 2xl:col-start-5  2xl:row-start-1 row-start-6 flex items-center justify-center  rounded-[3px] text-white text-[17px] 2xl:text-[25px] font-bold ">
          Ko'proq
        </div>
      
      </div>
     </div>
    );
  }
  
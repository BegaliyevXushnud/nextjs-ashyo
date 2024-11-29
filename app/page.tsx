
import dynamic from 'next/dynamic';

const Heropages = dynamic(() => import('./pagescomponent/hero'));
const Sponsor = dynamic(() => import('./pagescomponent/sponsor'));
const Items = dynamic(() => import('./pagescomponent/items'));
import CardsCarousel3 from './pagescomponent/product/page';
const Music = dynamic(() => import('./pagescomponent/music'));
import { Posts } from './pagescomponent/fetch';

export default function Home() {
  return (
    <div className='flex flex-col gap-[20px]'>
      <Heropages />
      <Sponsor />
     <div className='flex flex-col '>
     <h2 className="font-bold text-[16px] leading-[21px] text-[#000000] md:text-[18px] md:leading-[23px] md:ml-[23px] lg:text-[25px]  lg:leading-[25px] lg:ml-[1px]  2xl:text-[32px]  2xl:leading-[60px]">Most popular product</h2>

    <div className='flex flex-col gap-[30px] md:gap-[50px] lg:gap-[60px] 2xl:gap-[50px]'>
    <CardsCarousel3 />
    <CardsCarousel3 />
    <CardsCarousel3 />
    </div>
      <button className='md:hidden w-[200px] h-[40px] rounded-[6px] bg-[#EBEFF3] m-auto font-sans text-[14px] text-[#134E9B]'>Ko’proq</button>
     </div>
    <div className='flex flex-col gap-[20px] 2xl:gap-[50px]'>
    <Items/>
     <h2 className="font-bold text-[16px] ml-4 leading-[21px] text-[#000000] md:text-[18px] md:leading-[23px] md:ml-[23px] lg:text-[25px] lg:leading-[25px] lg:ml-[1px] 2xl:text-[32px] 2xl:leading-[60px]">
Aksiyadagi tovarlar
</h2>
<CardsCarousel3 />
     <CardsCarousel3 />
   
     <Music/>
    <div className='flex flex-col gap-2 mt-7'>
    <h2 className="font-bold text-[16px] leading-[21px] ml-4 text-[#000000] md:text-[18px] md:leading-[23px] md:ml-[23px] lg:text-[25px] lg:leading-[25px] lg:ml-[1px] 2xl:text-[32px] 2xl:leading-[60px]">
     Oxirgi ko’rgan mahsulotlar
</h2>
<CardsCarousel3 />
     <Posts/>
    </div>
    </div>
    
    </div>
  );
}

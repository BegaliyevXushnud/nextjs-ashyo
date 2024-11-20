import dynamic from 'next/dynamic';

const Heropages = dynamic(() => import('./pagescomponent/hero'));
const Sponsor = dynamic(() => import('./pagescomponent/sponsor'));
const CardsCarousel = dynamic(() => import('./pagescomponent/cardscarousel'));
// const Cool = dynamic(() => import('./pagescomponent/coll'));

export default function Home() {
  return (
    <div className='flex flex-col gap-[20px]'>
      <Heropages />
      <Sponsor />
     <div className='flex flex-col gap-7'>
     <CardsCarousel />
      <CardsCarousel />
      <CardsCarousel />
      {/* <Cool/> */}
     </div>
      <h1>Main</h1>
    </div>
  );
}

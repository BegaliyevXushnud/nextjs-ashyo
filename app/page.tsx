
import Heropages from "./pagescomponent/hero";
import Sponsor from "./pagescomponent/sponsor"
import CardsCarousel from "./pagescomponent/cardscarousel"
export default function Home() {
  return (
   <div>
    <Heropages/>
    <Sponsor/>
<CardsCarousel />
    <h1>Main</h1>
   </div>
  );
}

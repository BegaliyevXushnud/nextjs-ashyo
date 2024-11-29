"use client"
import headerlogo from '../../public/headelogo.png'
import headertextimg from '../../public/headerlogo2.png'
import phoneicon from '../../public/phoneicon.svg'
import televizoricon from '../../public/televizoricon.svg'
import muzlatgichicon from '../../public/muzlatgichicon.svg'
import notebookicon from '../../public/notebookicon.svg'
import consanericon from '../../public/konsanericon.svg'
import changyutgichicon from '../../public/changyutgichicon.svg'
import kiryuvishmashinasicon from '../../public/kiryuvishicon.svg'
import aksiyaicon from '../../public/aksyaicon.svg'
import locationicon from '../../public/location.svg'
import Image from 'next/image'
import { FaBars,FaTimes , FaChevronDown, FaSearch,FaBalanceScale, FaHeart, FaShoppingBag, FaUser } from 'react-icons/fa'
import { useState } from 'react'
import "../cssfolder/header.css"
const Header = () => {
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [previousBackgroundColor, setPreviousBackgroundColor] = useState('');
const [selectedCategory, setSelectedCategory] = useState("Smartfonlar va Aksessuarlar");


    const toggleCategoryMenu = () => {


        
        if (!isCategoryOpen) {
            setSelectedCategory("Smartfonlar va Aksessuarlar");
            setPreviousBackgroundColor(document.body.style.backgroundColor);
        }
        setIsCategoryOpen(!isCategoryOpen);
        if (!isCategoryOpen) {
          document.body.style.backgroundColor = '#e0e0e0';
      } else {
          document.body.style.backgroundColor = previousBackgroundColor || ''; 
      }
    }
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); 
       
    };

    const leftMenuCategories = [
        { icon: aksiyaicon, label: 'Aktsiyalar' },
        { icon: phoneicon, label: 'Smartfonlar va Aksessuarlar' },
        { icon: kiryuvishmashinasicon, label: 'Kir yuvish mashinalari' },
        { icon: televizoricon, label: 'Televizorlar' },
        { icon: consanericon, label: 'Konditsionerlar' },
        { icon: notebookicon, label: 'Kompyuter va jihozlar' },
        { icon: muzlatgichicon, label: 'Muzlatgichlar' },
        { icon: changyutgichicon, label: 'Chang yutgichlar' },
    ];
    // data.js
 const headercategories = [
    "Aksiyalar",
    "Smartfonlar",
    "Noutbooklar",
    "Kondetsionerlar",
    "Telivizorlar",
    "Muzlatgichlar",
    "Kiryuvish mashinalari",
    "Telivizorlar",
    "mashinalari",
  ];
  
    type CategoryContent = {
        title: string;
        items: string[];
    };
    const rightMenuContent: Record<string, CategoryContent[]>  = {
        "Smartfonlar va Aksessuarlar": [
            { title: "Smartfonlar", items: ["Oppo smartfonlar", "Vivo smartfonlar", "Realmi smartfonlar", "Redmi smartfonlar", "Xiaomi smartfonlar", "Artel smartfonlar", "Samsung smartfonlar", "Iphone smartfonlar", "Nokia smartfonlar"] },
            { title: "Telefon aksessuarlari", items: ["Quvvatlagich", "Telefon g‘iloflari", "Quloqchinlar", "Xotira chiplari", "Ekran himoya oynasi"] },
        ],
      
    }

    return (
        <div className='w-[90%] flex flex-col bg-white fixed z-50   2xl:p-1'>
            <div className='resp  w-full h-[40px] bg-[#EBEFF3] flex items-center justify-between p-5 '>
            <div className='flex gap-6'>
              <div className='flex gap-3'> 
              <Image src={locationicon} alt='location icon'/>
              <h2 className='text-[#545D6A] text-[14px] leading-[16px] font-thin'>Tashkent</h2>
              </div>
              <div className='flex gap-5'>
                <h2 className='text-[#545D6A] text-[14px] leading-[18px] font-thin'>About Us </h2>
                <h2 className='text-[#545D6A] text-[14px] leading-[18px] font-thin'>Products  </h2>
                <h2 className='text-[#545D6A] text-[14px] leading-[18px] font-thin'>Contacts </h2>
              </div>
            </div>
           <div className='flex items-center gap-5'>
           <h2 className='text-[14px] mr-4 text-[#203F68] leading-[18px] font-sans font-semibold '>+998 (71) 123-45-67</h2>
           <button className=' flex items-center gap-2 text-[#545D6A] text-[14px] font-sans '>
            Uz
            <FaChevronDown/>
           </button>
           </div>
            </div>
            
            <div className=' flex items-center justify-between bg-white p-3' >
                <div className='flex gap-1 items-center '>
                    <Image src={headerlogo} priority alt='ashyo' className='w-[20px] md:w-[30px]  xl:w-[48px] h-[30px] 2xl:h-[40px]' />
                    <Image src={headertextimg} priority alt='ashyotext'  className='w-[60px] md:w-[80px] xl:w-[112px] h-[32px] 2xl:h-[40px]'/>
                </div>
                
                <h2 className='resp2 text-[14px] mr-4 text-[#203F68] leading-[18px] font-sans font-semibold '>+998 (71) 123-45-67</h2>
                

                <div className='resp3 p-3 lg:w-[56%]  xl:w-[62%] 2xl:w-[] flex items-center justify-between gap-2'>
                <button onClick={toggleCategoryMenu} className='w-[20%] h-[48px] rounded-[5px] bg-[#134E9B] text-[#FFFFFF] text-[12px] font-sans flex items-center justify-center gap-4 xl:text-[16px] '>
                    Kategorya
                    <FaChevronDown className={`transition-transform duration-300 ${isCategoryOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className=" w-[80%] h-[48px] flex items-center rounded-[5px] bg-[#EBEFF3] justify-between ">
            <input
              type="text"
              placeholder="Что нужно сделать?"
              className="w-[100%]  flex-grow bg-transparent outline-none px-4  placeholder:font-roboto placeholder:font-light placeholder:leading-[11px] p-3' placeholder='What are you looking for?'"
            />
            <button className="w-[48px] h-full  rounded-[5px] bg-[#134E9B] text-[#FFFFFF] text-[16px] flex items-center justify-center">
             <FaSearch/>
            </button>
          </div>
            </div>
           
                <div className="respp flex gap-[16px] p-0  ">
             
      <div className="relative p-4 bg-[#EBEFF3] rounded-lg">
      <FaBalanceScale className="w-6 h-6 text-gray-600" />
      <span className="absolute top-[-10px] right-[-8px] bg-red-500 text-white text-xs rounded-full w-[20px] h-[20px] flex items-center justify-center">
        2
      </span>
    </div>
      <div className="relative p-4 bg-[#EBEFF3] rounded-lg">
      <FaHeart className="w-6 h-6 text-gray-600" />
      <span className="absolute top-[-10px]  right-[-8px] bg-red-500 text-white text-xs rounded-full w-[20px] h-[20px] flex items-center justify-center">
        11
      </span>
    </div>


      {/* Icon 3 */}
      <div className="relative p-4 bg-[#EBEFF3] rounded-lg">
      <FaShoppingBag className="w-6 h-6 text-gray-600" />
      <span className=" absolute top-[-10px]  right-[-8px] bg-red-500 text-white text-xs rounded-full w-[20px] h-[20px] flex items-center justify-center">
        7
      </span>
    </div>

      {/* Icon 4.2 */}
      <div className="relative p-4 bg-[#EBEFF3] rounded-lg">
        <FaUser className="w-6 h-6 text-gray-600" />

      </div>
    </div>
    <FaBars className='resp22 w-[24px] h-[24px]' onClick={toggleMenu} />
            </div>
            <div className="resp5 w-full p-3 justify-between text-[#545D6A] font-sans leading-[21px]">
  {headercategories.map((category, index) => (
    <h2
      key={index}
      className="xl:text-[16px] lg:text-[12px] cursor-pointer relative group hover:text-[#219ebc]"
    >
      {category}
      <span className="absolute left-0 bottom-[-4px] w-0 h-[2px]  bg-[#219ebc] transition-all duration-300 group-hover:w-full"></span>
    </h2>
  ))}
</div>

            <div className='resp4 flex items-center gap-2  '>
                <button onClick={toggleCategoryMenu} className='w-[30%] h-[40px] xl:w-[15%] rounded-[3px] bg-[#134E9B] text-[#FFFFFF] text-[12px] font-sans flex items-center justify-center gap-4 xl:text-[15px]'>
                    Kategorya
                    <FaChevronDown className={`transition-transform duration-300 ${isCategoryOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className='w-[70%]  flex xl:w-[85%]'>
                    <input type="text" className=' w-[100%] h-full bg-[#EBEFF3] placeholder:text-[10px] placeholder:font-roboto placeholder:font-light placeholder:leading-[11px] p-3' placeholder='What are you looking for?' />
                    <button className=' w-[40px] h-[42px] rounded-[3px] bg-[#134E9B] text-[#FFFFFF] text-[14px] flex items-center justify-center'>
                        <FaSearch />
                    </button>
                </div>
            </div>
            <div>
                {isCategoryOpen && (
                    <div className="  w-[90%] mt-2  shadow-lg flex z-20 fixed   ">
                        {/* Left menu */}
                        <div className="w-2/4 bg-[#EBEFF3] ">
                            <ul className="space-y-6 p-0 xl:p-5">
                                {leftMenuCategories.map((category, index) => (
                                    <li key={index}
                                        className={`flex items-center space-x-2 p-2 cursor-pointer text-[12px] sm:text-[15px]  xl:text-[20px] ${selectedCategory === category.label ? 'bg-white text-gray-700 ml-[2px]' : 'text-gray-700'}`}
                                        onClick={() => setSelectedCategory(category.label)}>
                                        <Image src={category.icon} alt={`${category.label} icon`} />
                                        <span>{category.label}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right menu */}
                        <div className="w-3/4 pl-8 bg-white p-4">
                            {selectedCategory && rightMenuContent[selectedCategory] ? (
                                <div className="grid grid-cols-2 gap-8">
                                    {rightMenuContent[selectedCategory].map((section, idx) => (
                                        <div key={idx} className='flex flex-col xl:gap-5'>
                                            <h3 className="text-[13px] sm:text-[15px] md:text-[18px] font-semibold text-gray-800 xl:text-[24px]">{section.title}</h3>
                                            <ul className="mt-2 space-y-2 text-gray-600 text-[11px] sm:text-[14px] md:text-[16px] xl:text-[20px] flex flex-col xl:gap-3">
                                                {section.items.map((item, idx) => (
                                                    <li key={idx}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-gray-600"> kategoriya mavzud emas</p>
                            )}
                        </div>
                    </div>
                    
                )}
                 
            </div>
            {isMenuOpen && (
                <>
               <div className=' w-full h-full flex fixed ml-[-25px] sm:ml-[-30px] md:ml-[-50px] z-30 '>
               <div className='w-[65%] h-full bg-[#EBEFF3]  p-5 flex flex-col gap-[20px] md:gap-[30px] md:p-9 z-50'>
                <div className='flex items-center justify-between'>
                <div className='flex gap-1 items-center '>
                    <Image  src={headerlogo} priority alt='ashyo' className='w-[15px] h-[33px] md:w-[50px] md:h-[45px] ' />
                    <Image  src={headertextimg} priority alt='ashyotext'  className='w-[70px] h-[33px] md:w-[120px] md:h-[45px]'/>
                </div>
                <div>
                    <FaTimes className='w-7 h-7 md:w-14 md:h-14'  onClick={toggleMenu} />
                </div>
                </div>
               <div className=" w-full p-2 flex flex-col  gap-[15px] md:gap-[40px]  text-[#545D6A] font-sans leading-[21px] ">
      {headercategories.map((category, index) => (
        <h2 key={index} className='text-[17px] md:text-[25px]' >{category}</h2>
      ))}
    </div>
    <div className=" flex justify-between p-2  ">
             
             <div className="relative p-3 sm:p-7 bg-white rounded-lg md:p-9">
             <FaBalanceScale className="w-6 h-6 text-gray-600 md:w-10 md:h-10" />
             <span className="absolute top-[-10px] right-[-8px] bg-red-500 text-white text-xs rounded-full w-[20px] h-[20px] md:w-[30px] md:h-[30px] md:text-[15px] flex items-center justify-center">
               2
             </span>
           </div>
             <div className="relative p-3 sm:p-7 bg-white rounded-lg md:p-9">
             <FaHeart className="w-6 h-6 text-gray-600 md:w-10 md:h-10" />
             <span className="absolute top-[-10px]  right-[-8px] bg-red-500 text-white text-xs rounded-full w-[20px] h-[20px] md:w-[30px] md:h-[30px] md:text-[15px] flex items-center justify-center">
               11
             </span>
           </div>
       
       
             {/* Icon 3 */}
             <div className="relative p-3 sm:p-7 bg-white rounded-lg md:p-9">
             <FaShoppingBag className="w-6 h-6 text-gray-600 md:w-10 md:h-10" />
             <span className=" absolute top-[-10px]  right-[-8px] bg-red-500 text-white text-xs rounded-full w-[20px] h-[20px] md:w-[30px] md:h-[30px] md:text-[15px] flex items-center justify-center">
               7
             </span>
           </div>
       
             {/* Icon 4 */}
             <div className="relative p-3 sm:p-7 bg-white rounded-lg md:p-9 ">
               <FaUser className="w-6 h-6 text-gray-600 md:w-10 md:h-10" />
       
             </div>
           </div>
               </div>
               <div className='w-[50%] h-full bg-white opacity-[0.7]'>
               </div>
               </div>
                </>
            )}
        </div>
        
    )
}

export default Header

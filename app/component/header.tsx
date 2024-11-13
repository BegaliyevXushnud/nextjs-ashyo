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
import { FaBars, FaChevronDown, FaSearch,FaBalanceScale, FaHeart, FaShoppingBag, FaUser } from 'react-icons/fa'
import { useState } from 'react'
import "../cssfolder/header.css"
const Header = () => {
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
const [selectedCategory, setSelectedCategory] = useState("Smartfonlar va Aksessuarlar");


    const toggleCategoryMenu = () => {
        setIsCategoryOpen(!isCategoryOpen)

        
        if (!isCategoryOpen) {
            setSelectedCategory("Smartfonlar va Aksessuarlar")
        }
    }

    const leftMenuCategories = [
        { icon: aksiyaicon, label: 'Aktsiyalar' },
        { icon: phoneicon, label: 'Smartfonlar va Aksessuarlar' },
        { icon: kiryuvishmashinasicon, label: 'Kir yuvish mashinalari' },
        { icon: televizoricon, label: 'Televizorlar' },
        { icon: consanericon, label: 'Konditsionerlar' },
        { icon: notebookicon, label: 'Kompyuter va jihozlar' },
        { icon: muzlatgichicon, label: 'Muzlatgichlar' },
        { icon: changyutgichicon, label: 'Chang yutgichlar' },
    ]
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
        <div className='w-full flex flex-col  '>
            <div className='resp  w-full h-[40px] bg-[#EBEFF3] flex items-center justify-between p-7'>
            <div className='flex gap-5'>
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
           <div className='flex items-center'>
           <h2 className='text-[14px] mr-4 text-[#203F68] leading-[18px] font-sans font-semibold '>+998 (71) 123-45-67</h2>
           <button className=' flex items-center gap-2 text-[#545D6A] text-[14px] font-sans '>
            Uz
            <FaChevronDown/>
           </button>
           </div>
            </div>
            <div className=' flex items-center justify-between p-2 2xl:p-0 ' >
                <div className='flex gap-1 items-center '>
                    <Image src={headerlogo} priority alt='ashyo' className='w-[48px] h-[48px]' />
                    <Image src={headertextimg} priority alt='ashyotext'  className='w-[102px] h-[42px]'/>
                </div>
                
                <h2 className='resp2 text-[14px] mr-4 text-[#203F68] leading-[18px] font-sans font-semibold '>+998 (71) 123-45-67</h2>
                <FaBars className='resp2 w-[24px] h-[24px]' />

                <div className='resp3   w-[70%] flex items-center justify-between gap-2 '>
                <button onClick={toggleCategoryMenu} className='w-[20%] h-[48px] rounded-[5px] bg-[#134E9B] text-[#FFFFFF] text-[12px] font-sans flex items-center justify-center gap-4 xl:text-[16px] '>
                    Kategorya
                    <FaChevronDown className={`transition-transform duration-300 ${isCategoryOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className=" w-[80%] h-[48px] flex items-center rounded-[5px] bg-[#EBEFF3] justify-between ">
            <input
              type="text"
              placeholder="Что нужно сделать?"
              className="w-[100%] flex-grow bg-transparent outline-none px-4  placeholder:font-roboto placeholder:font-light placeholder:leading-[11px] p-3' placeholder='What are you looking for?'"
            />
            <button className="w-[48px] h-full  rounded-[5px] bg-[#134E9B] text-[#FFFFFF] text-[14px] flex items-center justify-center">
             <FaSearch/>
            </button>
          </div>
            </div>
                <div className="resp flex gap-[15px] p-5 ">
             
      <div className="relative p-4 bg-[#EBEFF3] rounded-lg">
      <FaBalanceScale className="w-6 h-6 text-gray-600" />
      <span className="absolute top-[-8px] right-[-8px] bg-red-500 text-white text-xs rounded-full w-[20px] h-[20px] flex items-center justify-center">
        2
      </span>
    </div>
      <div className="relative p-4 bg-[#EBEFF3] rounded-lg">
      <FaHeart className="w-6 h-6 text-gray-600" />
      <span className="absolute top-[-8px] right-[-8px] bg-red-500 text-white text-xs rounded-full w-[20px] h-[20px] flex items-center justify-center">
        11
      </span>
    </div>


      {/* Icon 3 */}
      <div className="relative p-4 bg-[#EBEFF3] rounded-lg">
      <FaShoppingBag className="w-6 h-6 text-gray-600" />
      <span className=" absolute top-[-8px] right-[-8px] bg-red-500 text-white text-xs rounded-full w-[20px] h-[20px] flex items-center justify-center">
        7
      </span>
    </div>

      {/* Icon 4 */}
      <div className="relative p-4 bg-[#EBEFF3] rounded-lg">
        <FaUser className="w-6 h-6 text-gray-600" />

      </div>
    </div>
            </div>
            <div className='resp4 flex items-center gap-2 p-2 '>
                <button onClick={toggleCategoryMenu} className='w-[30%] h-[40px] xl:w-[15%] rounded-[3px] bg-[#134E9B] text-[#FFFFFF] text-[12px] font-sans flex items-center justify-center gap-4 xl:text-[15px]'>
                    Kategorya
                    <FaChevronDown className={`transition-transform duration-300 ${isCategoryOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className='w-[70%] flex xl:w-[85%]'>
                    <input type="text" className='w-[100%] bg-[#EBEFF3] placeholder:text-[10px] placeholder:font-roboto placeholder:font-light placeholder:leading-[11px] p-3' placeholder='What are you looking for?' />
                    <button className='w-[40px] h-[40px] rounded-[3px] bg-[#134E9B] text-[#FFFFFF] text-[14px] flex items-center justify-center'>
                        <FaSearch />
                    </button>
                </div>
            </div>
            <div>
                {isCategoryOpen && (
                    <div className="top-16 left-0 w-full shadow-lg flex">
                        {/* Left menu */}
                        <div className="w-2/4 bg-[#EBEFF3] ">
                            <ul className="space-y-6">
                                {leftMenuCategories.map((category, index) => (
                                    <li key={index}
                                        className={`flex items-center space-x-2 p-2 cursor-pointer ${selectedCategory === category.label ? 'bg-white text-gray-700 ml-[2px]' : 'text-gray-700'}`}
                                        onClick={() => setSelectedCategory(category.label)}>
                                        <Image src={category.icon} alt={`${category.label} icon`} />
                                        <span>{category.label}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right menu */}
                        <div className="w-3/4 pl-8 bg-white">
                            {selectedCategory && rightMenuContent[selectedCategory] ? (
                                <div className="grid grid-cols-2 gap-8">
                                    {rightMenuContent[selectedCategory].map((section, idx) => (
                                        <div key={idx}>
                                            <h3 className="text-lg font-semibold text-gray-800">{section.title}</h3>
                                            <ul className="mt-2 space-y-2 text-gray-600">
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
        </div>
    )
}

export default Header

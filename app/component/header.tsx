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
import { useEffect, useState } from 'react'
import "../cssfolder/header.css"
import Link from 'next/link'
export interface  Post2 {
  id: number;
  name: string;
}
const Header = () => {
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [count, setCount] = useState(0);
    const [add, setAdd] = useState(0);
    const [previousBackgroundColor, setPreviousBackgroundColor] = useState('');
    const [posts, setPosts] = useState<any[]>([]);
    const [selectedCategory, setSelectedCategory] = useState(null); 
    const [rightMenuContent, setRightMenuContent] = useState([]);


    const toggleCategoryMenu = () => {


        
        if (!isCategoryOpen) {
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
        { icon:  kiryuvishmashinasicon, label: 'Aktsiyalar' },
        { icon:aksiyaicon , label: 'Smartfonlar va Aksessuarlar' },
        { icon: phoneicon , label: 'Kir yuvish mashinalari' },
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
   
    const userId = typeof window !== "undefined"? localStorage.getItem('user_id'):""
    const getLikes = async () =>{
      const response = await fetch(`https://texnoark.ilyosbekdev.uz/likes/user/likes/${userId}`);
      const data = await response.json();
      console.log(data);
      
      setCount(data.data?.likes.length || 0)
      return data.length;
    }
    useEffect(() => {
      getLikes()
    },[])
    const getAddCard = async () =>{
      const response = await fetch(`https://texnoark.ilyosbekdev.uz/carts/user/${userId}`);
      const data = await response.json();
      console.log(data);
      
      setAdd(data.data?.count || 0)
      return data;
    }
    useEffect(() => {
      getAddCard()
    },[])
   
    useEffect(() => {
      async function fetchPosts() {
        const res = await fetch('https://texnoark.ilyosbekdev.uz/category/search');
        const data = await res.json();
        const products = Array.isArray(data?.data.categories) ? data.data.categories : [];  
        setPosts(products);
      }

  
      fetchPosts();
    }, []);
  
    if (!Array.isArray(posts)) {
      return <div>Loading...</div>;

      
    }
  
    const handleCategoryClick = async (category:any) => {
      try {
        // Tanlangan category nomini yangilash
        setSelectedCategory(category.name);
    
        // API so'rov
        const res = await fetch(
          `https://texnoark.ilyosbekdev.uz/sub-category/search/${category.id}`
        );
    
        // Javobni JSON formatida olish
        const response = await res.json();
    
        // "data" bo'limiga kirish
        const categories = response?.data?.subcategories;
    
        // Tekshirish va logga chiqarish
        if (categories && categories.length > 0) {
          console.log("Categories:", categories);
          setRightMenuContent(categories); // Olingan ma'lumotni yangilash
        } else {
          console.log("Kategoriyalar topilmadi.");
          setRightMenuContent([]); // Bo'sh qiymat qaytarish
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    
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
    <Link href="/likes">
      <div className="relative p-4 bg-[#EBEFF3] rounded-lg">
     
      <FaHeart className="w-6 h-6 text-gray-600 cursor-pointer" />
   
      <span className="absolute top-[-10px]  right-[-8px] bg-red-500 text-white text-xs rounded-full w-[20px] h-[20px] flex items-center justify-center">
        {count}
      </span>
    </div>
    </Link>


      {/* Icon 3 */}
      <Link href="/addcard">
      <div className="relative p-4 bg-[#EBEFF3] rounded-lg">
      <FaShoppingBag className="w-6 h-6 text-gray-600" />
      <span className=" absolute top-[-10px]  right-[-8px] bg-red-500 text-white text-xs rounded-full w-[20px] h-[20px] flex items-center justify-center">
        {add}
      </span>
    </div>
      </Link>

      {/* Icon 4.2 */}
     <Link href="/login">
     <div className="relative p-4 bg-[#EBEFF3] rounded-lg">
        <FaUser className="w-6 h-6 text-gray-600" />

      </div>
     </Link>
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
                            {posts.map((category, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-3 p-2 cursor-pointer hover:bg-gray-200"
                                        onClick={() => handleCategoryClick(category)}
                                    >
                                        <Image
                                            src={leftMenuCategories[index]?.icon || phoneicon} 
                                            alt={category.name}
                                            className="w-6 h-6"
                                        />
                                        <span className="text-[#545D6A] text-[14px] font-sans">{category.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right menu */}
                        <div className="w-3/4 pl-8 bg-white p-4">
        {rightMenuContent.length > 0 ? (
          <div className="grid grid-cols-2 gap-8">
            <div className="w-2/4 bg-white p-5">
                            {rightMenuContent.length > 0 ? (
                                rightMenuContent.map((item:any, index) => (
                                    <div
                                        key={index}
                                        className="text-[#545D6A] text-[14px] font-sans py-2 border-b border-gray-300 cursor-pointer hover:text-blue-600"
                                    >
                                        {item.title || item.name || 'Unnamed Item'}
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500 text-sm">Please select a category to see items.</p>
                            )}
                        </div>
          </div>
        ) : (
          <p className="text-gray-600">
            Kategoriya bo‘yicha hech qanday maʼlumot yo‘q
          </p>
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

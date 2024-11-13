"use client";

import headerlogo from '../../public/headelogo.png';
import headertextimg from '../../public/headerlogo2.png';
import phoneicon from '../../public/phoneicon.svg';
import televizoricon from '../../public/televizoricon.svg';
import muzlatgichicon from '../../public/muzlatgichicon.svg';
import notebookicon from '../../public/notebookicon.svg';
import consanericon from '../../public/konsanericon.svg';
import changyutgichicon from '../../public/changyutgichicon.svg';
import kiryuvishmashinasicon from '../../public/kiryuvishicon.svg';
import aksiyaicon from '../../public/aksyaicon.svg';
import locationicon from '../../public/location.svg';
import Image from 'next/image';
import { FaBars, FaChevronDown, FaSearch, FaBalanceScale, FaHeart, FaShoppingBag, FaUser } from 'react-icons/fa';
import { useState } from 'react';
import "../cssfolder/header.css";

const Header = () => {
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("Smartfonlar va Aksessuarlar");

    const toggleCategoryMenu = () => {
        setIsCategoryOpen(!isCategoryOpen);
        if (!isCategoryOpen) {
            setSelectedCategory("Smartfonlar va Aksessuarlar");
        }
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

    // Define a more specific type instead of `any`
    type CategoryContent = {
        title: string;
        items: string[];
    };

    const rightMenuContent: Record<string, CategoryContent[]> = {
        "Smartfonlar va Aksessuarlar": [
            { title: "Smartfonlar", items: ["Oppo smartfonlar", "Vivo smartfonlar", "Realmi smartfonlar", "Redmi smartfonlar", "Xiaomi smartfonlar", "Artel smartfonlar", "Samsung smartfonlar", "Iphone smartfonlar", "Nokia smartfonlar"] },
            { title: "Telefon aksessuarlari", items: ["Quvvatlagich", "Telefon g‘iloflari", "Quloqchinlar", "Xotira chiplari", "Ekran himoya oynasi"] },
        ],
    };

    return (
        <div className='w-full flex flex-col gap-3'>
            <div className='resp w-full h-[40px] bg-[#EBEFF3] flex items-center justify-between p-2'>
                <div className='flex gap-5'>
                    <div className='flex gap-3'> 
                        <Image src={locationicon} alt='location icon'/>
                        <h2 className='text-[#545D6A] text-[14px] leading-[16px] font-thin'>Tashkent</h2>
                    </div>
                    <div className='flex gap-5'>
                        <h2 className='text-[#545D6A] text-[14px] leading-[18px] font-thin'>About Us</h2>
                        <h2 className='text-[#545D6A] text-[14px] leading-[18px] font-thin'>Products</h2>
                        <h2 className='text-[#545D6A] text-[14px] leading-[18px] font-thin'>Contacts</h2>
                    </div>
                </div>
                <div className='flex items-center'>
                    <h2 className='text-[14px] mr-4 text-[#203F68] leading-[18px] font-sans font-semibold '>+998 (71) 123-45-67</h2>
                    <button className='flex items-center gap-2 text-[#545D6A] text-[14px] font-sans'>
                        Uz
                        <FaChevronDown />
                    </button>
                </div>
            </div>
            <div className='flex items-center justify-between p-2'>
                <div className='flex gap-1'>
                    <Image src={headerlogo} priority alt='ashyo' />
                    <Image src={headertextimg} priority alt='ashyotext' />
                </div>
                <h2 className='resp2 text-[14px] mr-4 text-[#203F68] leading-[18px] font-sans font-semibold '>+998 (71) 123-45-67</h2>
                <FaBars className='resp2 w-[24px] h-[24px]' />
                <div className='resp3 w-[70%] flex items-center gap-2 p-2'>
                    <button onClick={toggleCategoryMenu} className='w-[30%] h-[40px] rounded-[3px] bg-[#134E9B] text-[#FFFFFF] text-[12px] font-sans flex items-center justify-center gap-4'>
                        Kategorya
                        <FaChevronDown className={`transition-transform duration-300 ${isCategoryOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <div className='w-[70%] flex'>
                        <input type="text" className='w-full bg-[#EBEFF3] placeholder:text-[10px] placeholder:font-roboto placeholder:font-light placeholder:leading-[11px] p-3' placeholder='What are you looking for?' />
                        <button className='w-[40px] h-[40px] rounded-[3px] bg-[#134E9B] text-[#FFFFFF] text-[14px] flex items-center justify-center'>
                            <FaSearch />
                        </button>
                    </div>
                </div>
                <div className="resp flex gap-4">
                    <div className="relative p-4 bg-[#EBEFF3] rounded-lg">
                        <FaBalanceScale className="w-6 h-6 text-gray-600" />
                        <span className="absolute top-[-8px] right-[-8px] bg-red-500 text-white text-xs rounded-full w-[20px] h-[20px] flex items-center justify-center">2</span>
                    </div>
                    <div className="relative p-4 bg-[#EBEFF3] rounded-lg">
                        <FaHeart className="w-6 h-6 text-gray-600" />
                        <span className="absolute top-[-8px] right-[-8px] bg-red-500 text-white text-xs rounded-full w-[20px] h-[20px] flex items-center justify-center">11</span>
                    </div>
                    <div className="relative p-4 bg-[#EBEFF3] rounded-lg">
                        <FaShoppingBag className="w-6 h-6 text-gray-600" />
                        <span className="absolute top-[-8px] right-[-8px] bg-red-500 text-white text-xs rounded-full w-[20px] h-[20px] flex items-center justify-center">7</span>
                    </div>
                    <div className="relative p-4 bg-[#EBEFF3] rounded-lg">
                        <FaUser className="w-6 h-6 text-gray-600" />
                    </div>
                </div>
            </div>
            <div className='resp4 flex items-center gap-2 p-2'>
                <button onClick={toggleCategoryMenu} className='w-[30%] h-[40px] rounded-[3px] bg-[#134E9B] text-[#FFFFFF] text-[12px] font-sans flex items-center justify-center gap-4'>
                    Kategorya
                    <FaChevronDown className={`transition-transform duration-300 ${isCategoryOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className='w-[70%] flex'>
                    <input type="text" className='w-full bg-[#EBEFF3] placeholder:text-[10px] placeholder:font-roboto placeholder:font-light placeholder:leading-[11px] p-3' placeholder='What are you looking for?' />
                    <button className='w-[40px] h-[40px] rounded-[3px] bg-[#134E9B] text-[#FFFFFF] text-[14px] flex items-center justify-center'>
                        <FaSearch />
                    </button>
                </div>
            </div>
            <div>
                {isCategoryOpen && (
                    <div className='w-full flex justify-between'>
                        <div className='w-[25%]'>
                            {leftMenuCategories.map((category, index) => (
                                <div key={index} className="flex items-center gap-2 p-4 border-b-[1px] border-[#EBEFF3] cursor-pointer">
                                    <Image src={category.icon} alt={`${category.label} icon`} />
                                    <span className="text-gray-800 font-sans text-[12px] font-thin">{category.label}</span>
                                </div>
                            ))}
                        </div>
                        <div className='w-[75%]'>
                            {rightMenuContent[selectedCategory]?.map((section, sectionIndex) => (
                                <div key={sectionIndex} className="p-4">
                                    <h3 className="text-lg font-semibold">{section.title}</h3>
                                    <ul>
                                        {section.items.map((item, itemIndex) => (
                                            <li key={itemIndex} className="text-sm text-gray-700">{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;

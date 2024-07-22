
import { IconType } from 'react-icons';
import { FaSpa, FaHeart, FaGift, FaShoppingBag, FaRegSmile, FaLightbulb, FaLeaf, FaHandshake } from 'react-icons/fa';
import { FaSprayCanSparkles } from 'react-icons/fa6';
import { GiLipstick } from 'react-icons/gi';
import { IoDiamondSharp } from "react-icons/io5";


import CategoryBox from './CategoryBox';

interface Category {
  name: string;
  icon: IconType; 
}

export default function Categories() {
  // Actually this list could have been exported and used in other parts of the project
  // but for this one-page project it is unnecessary.
  const categories: Category[] = [
    { name: 'Makeup', icon: GiLipstick },
    { name: 'Skincare', icon: FaSpa },
    { name: 'Luxury', icon: IoDiamondSharp },   
    { name: 'Fragrance', icon: FaSprayCanSparkles },
    { name: 'Health & Wellness', icon: FaHeart },  
    { name: 'Eco-Friendly', icon: FaLeaf },
    { name: 'Gifts & Sets', icon: FaGift },  
    { name: 'Deals & Offers', icon: FaHandshake }
  ];

  return (
    <div className='pt-4 px-[16px] py-[20px] gap-4 lg:gap-6 text-[12px] lg:text-[14px] flex lg:max-w-6xl lg:mx-auto items-center justify-between overflow-x-auto hide-scrollbar cursor-pointer'>
      {categories.map((category) => (
        <CategoryBox key={category.name} name={category.name} icon={category.icon} />
      ))}
    </div>
  );
}

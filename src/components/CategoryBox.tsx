import React from 'react';
import { IconType } from 'react-icons';

interface CategoryTypeProps {
    name: string;
    icon: IconType; 
    
}

const CategoryBox: React.FC<CategoryTypeProps> = ({
    name, icon: Icon
}) => {
    
    return (
        <div
        
         className={`
            flex flex-col items-center justify-center gap-2 p-3 cursor-pointer border-b-2
        `}>
            <div className='text-pink-500 text-[14px] lg:text-[20px]'>
            <Icon size={16} /> 
            </div>
            <div className='font-medium text-sm whitespace-nowrap'>
                {name}
            </div>
        </div>
    );
};

export default CategoryBox;

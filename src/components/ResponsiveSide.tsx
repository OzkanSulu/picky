"use client";
import React, { useState } from "react";
import Link from "next/link";


interface NavItem {
  title: string;
  subItems?: NavItem[];
}

const navItems: NavItem[] = [
  {
    title: "Daily Best",
    subItems: [
      { title: "Skin Concern" },
      { title: "Routine Help" },
      { title: "Makeup Help" },
      { title: "Product Info" }
    ]
  },
  {
    title: "Featured",
    subItems: [
      { title: "All" },
      { title: "Picky Team" },
      { title: "Editor" },
      { title: "Expert Brand" }
    ]
  },
  {
    title: "Discuss",
    subItems: [
      { title: "All" },
      { title: "Product Info" },
      { title: "Brand Talk" },
      { title: "Skincare Help" },
      { title: "Makeup Help" },
      { title: "Other" }
    ]
  }
];

const Sidebar: React.FC = () => {
    return (
      <div >
        {navItems.map((item) => (
          <div key={item.title} className="hidden lg:flex lg:flex-col w-64 max-h-screen p-4 border-r border-zinc-400 ">
            <h4 className="text-medium font-semibold text-zinc-600">{item.title}</h4>
            <ul className="list-disc ml-4">
              {item.subItems?.map((subItem) => (
                <ul key={subItem.title}>
                    <li  className="my-1">
                  <Link href="/" className="text-[#F06384] text-[16px] hover:underline">
                    {subItem.title}
                  </Link>
                </li>
                </ul>
              ))}
            </ul>
          </div>
        ))}
        {/* We could use useSearchParams and genre to create a line under the current page title using Tailwind CSS, 
        providing the user with information about the page they are on. But, I am creating a single page for task, I am not implementing this to my project.
*/}
        <div className="lg:hidden flex  items-center w-full">
        {navItems.map((item) => (
          <div key={item.title} className="flex flex-col items-center w-full mb-4 p-2 cursor-pointer">
            <Link href={`/${item.title}`} className={`text-[16px] text-zinc-600 text-center cursor-pointer ${item.title === 'Discuss'?'border-b-2 border-pink-500 ':''}`}>{item.title}</Link>
          </div>
        ))}
        
      </div>
    </div>
      
    );
  };
     
 
export default Sidebar;

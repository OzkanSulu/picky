"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

interface NavLink {
  href: string;
  title: string;
}

const navLinks: NavLink[] = [
  {
    href: "/products",
    title: "products",
  },
  {
    href: "/curation",
    title: "curation",
  },
  {
    href: "/discussion",
    title: "discussion",
  },
  {
    href: "/creators",
    title: "creators",
  },
  {
    href: "/pickplus",
    title: "join Picky Plus",
  },
];

function NavLinks() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <ul className="hidden lg:flex gap-4 md:gap-6 lg:gap-8">
        {navLinks.map((link) => (
          <li key={link.href} className="flex list-none hover:text-[#F06384]">
            <Link href={link.href} className="text-md">
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center lg:hidden">
        {!menuOpen && (
          <div onClick={toggleMenu} className="cursor-pointer text-4xl opacity-60 z-50">
            <FiMenu />
          </div>
        )}

        <div
          className={`fixed inset-0 h-full w-full bg-black/60 transition-opacity duration-300 z-40 ${
            menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={toggleMenu}
        ></div>
        <div
          className={`fixed top-0 left-0 h-full w-[65%] bg-[#FFFFFF] px-4 py-4 transition-transform duration-300 transform z-50 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div
            onClick={toggleMenu}
            className="absolute top-4 right-4 cursor-pointer text-4xl text-[#F06384]"
          >
            <AiOutlineClose />
          </div>
          <div className="flex flex-col items-center justify-center h-full gap-6">
            {navLinks.map((link) => (
              <li key={link.href} className="flex list-none">
                <Link href={link.href} className="text-lg">
                  {link.title}
                </Link>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavLinks;

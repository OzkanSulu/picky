import React from 'react'
import NavLinks from './NavLinks'
import Image from 'next/image'
import SearchBox from './SearchBox'
import Link from 'next/link'


export default function Navbar() {
  return (
    <>
    <nav className='flex w-full px-5 border-b-[2px] mb-4 border-gray-300  lg:border-none lg:max-w-6xl items-center justify-between mx-auto py-6 z-50' >
      <Link href='/'>
      <Image src='/icon-picky@3x.png' alt='logo' width={36} height={36} className='rounded-md'/></Link>
        <NavLinks/>
        <div className='hidden lg:block'>
          <SearchBox />
        </div>
        
        
    </nav>
    </>
  )
}

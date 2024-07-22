'use client'
import React, { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import SearchButton from './SearchButton'

export default function SearchForm() {
  
    const [search,setSearch] = useState('')
    const router = useRouter()
    const handleSubmit =(e:FormEvent)=>{
        e.preventDefault();
        router.push(`/search/${search}`)
        setSearch('')
    }
    

  return (
    <form className='max-w-[440px] relative' onSubmit={handleSubmit}>
       
       <input type='search'
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        placeholder='Search Discuss' 
        className='relative bg-transparent w-full h-8 lg:h-10 outline-none pl-4 lg:pl-12 pr-4 focus:cursor-text placeholder:text-[12px] lg:placeholder:text-[14px] rounded-full border cursor-pointer'/>
       <div className='absolute right-3 top-1/2 transform -translate-y-1/2'>
        <SearchButton search={search}/>
      </div>
       
    </form>
  )
}

 
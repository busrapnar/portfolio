import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center h-16 pt-4'>
        <div className='flex gap-2 text-white '>
            <div >
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0.5H8V4.5H4H0V8.5V12.5V16.5H4H8V12.5H12H16V8.5V4.5V0.5H12ZM4 12.5H8V8.5H12V4.5H8V8.5H4V12.5Z" fill="white"/>
            </svg>
            </div>
            <h1 className='text-base font-bold '>Büşra</h1>
        </div>
        <div className='flex gap-8 '>
            <Link href={"#"}><span className='text-[#C778DD]'>#</span><span className='text-[#ABB2BF] hover:text-white'>home</span></Link>
            <Link href={"#"}><span className='text-[#C778DD]'>#</span><span className='text-[#ABB2BF] hover:text-white'>works</span></Link>
            <Link href={"#"}><span className='text-[#C778DD]'>#</span><span className='text-[#ABB2BF] hover:text-white'>about-me</span></Link>
            <Link href={"#"}><span className='text-[#C778DD]'>#</span><span className='text-[#ABB2BF] hover:text-white'>contact</span></Link>
        </div>
    </div>
  )
}

export default Header
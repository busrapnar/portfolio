import Link from 'next/link'
import React from 'react'
import Button from './Button'

const Description = () => {
  return (
    <div className='flex flex-col gap-8'>
        <div className='grid w-[537px] h-24 text-3xl font-semibold '>
        <div className='flex gap-2'>
        <p>Büşra is a</p>
        <p className='text-[#C778DD]'>Engineer</p>
        <p>and</p>
        </div>
        <p className='text-[#C778DD]'>Web Developer</p>

    </div>
    <div className='flex flex-col gap-6'>
    <div className='w-[463px] h-14 text-[#ABB2BF]'>
        <p>She crafts responsive websites where technologies meet creativity</p>
    </div>
    <div >
      <Button>{"Contact Me !!"}</Button>
    </div>
    </div>
    
    </div>
    
  )
}

export default Description
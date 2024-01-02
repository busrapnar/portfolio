import React from 'react'

const Title = ({title}) => {
  return (
    <div className='flex gap-4 mt-[74px]'>
        <div className='flex'>
        <h1 className='text-[32px] text-[#C778DD] '>#</h1>
        <h1 className='text-[32px]'>{title}</h1>
        </div>
        <div className='mt-6'>
        <svg xmlns="http://www.w3.org/2000/svg" width="511" height="2" viewBox="0 0 511 2" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M511 1.5H0V0.5H511V1.5Z" fill="#C778DD"/>
        </svg>
        </div>
        
    </div>
  )
}

export default Title
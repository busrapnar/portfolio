import Image from 'next/image'
import Link from 'next/link'
import React, { Children } from 'react'
import Ticket from './Ticket'
import Button from './Button'

const ProjectCard = ({content,children,image}) => {
  return (
    <div className='border border-[#ABB2BF] grid'>
        <div className='relative w-full h-52'> 
            <Image src={image} layout='fill' alt=' '></Image>
        </div>
        <div className='border-y border-[#ABB2BF] '>
            <div className='m-2 grid grid-cols-5 gap-3'>
            {children}
            </div>
            
        </div>
        <div className='flex flex-col gap-4 m-4'>
            <div className='grid gap-4'>
                <h1>ChertNodes</h1>
                <p>
                    {content}
                </p>
            </div>
            <div>
            <div className='flex gap-4'>
            <Button>{"Live <~>"}</Button>
            <Button>{"Cached >="}</Button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard
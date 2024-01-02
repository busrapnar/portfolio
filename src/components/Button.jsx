import Link from 'next/link'
import React, { Children } from 'react'

const Button = ({children}) => {
  return (
    <div>
        <Link href={""} className='w-36 h-9 border border-[#C778DD] px-4 py-2' >
                {children}
        </Link>
    </div>
  )
}

export default Button
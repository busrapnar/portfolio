import React from 'react'
import Title from './Title'

const SkillsCard = ({title,children}) => {
  return (
    <div className='border border-[ABB2BF] w-32 h-32'>
        <h1>{title}</h1>
        <div >
        {children}
        </div>
        
    </div>
  )
}

export default SkillsCard
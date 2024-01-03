import React, { Children } from 'react'
import Title from './Title'

const SkillsCard = ({title,children}) => {
  return (
    <div class="w-auto h-auto py-2 border border-gray-400 flex-col justify-start items-start gap-2 inline-flex">
    <div class="self-stretch px-2 justify-start items-start inline-flex border-b border-gray-499">
        <div class="text-white text-base font-semibold font-['Fira Code'] ">Languages</div>
    </div>
    {children}
</div>
  )
}

export default SkillsCard
import Description from '@/components/Description'
import Dots from '@/components/Dots'
import Logo from '@/components/Logo'
import Portfolio from '@/components/Portfolio'
import ProjectCard from '@/components/ProjectCard'
import Quote from '@/components/Quote'
import SkillsCard from '@/components/SkillsCard'
import Ticket from '@/components/Ticket'
import Title from '@/components/Title'
import Image from 'next/image'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <div className='tablet:flex grid justify-between mt-16 py-4'>
        <Description></Description>
        <Portfolio></Portfolio>

      </div>
      <div className='flex justify-center mt-28'>
        <Quote></Quote>
      </div>
      <div>
        <Title title={"projects"}></Title>
        <div className='grid tablet:grid-cols-3 grid-cols-1 gap-10 mt-10'>
          <ProjectCard image={"/ornek.png"} content={"Minecraft servers hosting Minecraft servers hosting"} >
            <Ticket>HTML</Ticket>
            <Ticket>SCSS</Ticket>
            <Ticket>Phyton</Ticket>
            <Ticket>Flask</Ticket>
          </ProjectCard>
          <ProjectCard image={"/Rectangle 22.png"} content={"Minecraft servers hosting"}>
          <Ticket>HTML</Ticket>
            <Ticket>SCSS</Ticket>
            <Ticket>Phyton</Ticket>
            <Ticket>Flask</Ticket>
            <Ticket>HTML</Ticket>
            <Ticket>SCSS</Ticket>
            <Ticket>Phyton</Ticket>
            <Ticket>Flask</Ticket>
          </ProjectCard>
          <ProjectCard image={"/Rectangle 22 (1).png"} content={"Minecraft servers hosting"}>
          <Ticket>HTML</Ticket>
            <Ticket>SCSS</Ticket>
            <Ticket>Phyton</Ticket>
          </ProjectCard>
        </div>
      </div>
      <div>
        <Title title={"skills"}></Title>
        <div className='flex justify-between relative'>
          <div>
            <div className='absolute top-12 left-8'>
            <Dots></Dots>
            </div>
            <div className='absolute top-[181px] left-12'>
              <Logo></Logo>
            </div>
            <div className='absolute top-44 left-52 '>
              <Dots></Dots>
            </div>
           
          </div>
          <div className='grid'>
          <SkillsCard></SkillsCard>
          <SkillsCard></SkillsCard>
          <SkillsCard></SkillsCard>
          </div>
        </div>
        
      </div>

    </div>

  )
}

export default HomePage
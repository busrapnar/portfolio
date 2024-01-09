import Description from "@/components/Description";
import Dots from "@/components/Dots";
import Logo from "@/components/Logo";
import Portfolio from "@/components/Portfolio";
import ProjectCard from "@/components/ProjectCard";
import Quote from "@/components/Quote";
import SkillsCard from "@/components/SkillsCard";
import Ticket from "@/components/Ticket";
import Title from "@/components/Title";
import Image from "next/image";
import React from "react";
import AboutMe from "../about-me/page";
import Contact from "../contact/page";
import Button from "@/components/Button";

const HomePage = () => {
  return (
    <div>
      <div className="tablet:flex grid justify-between mt-16 py-4">
        <Description></Description>
        <Portfolio></Portfolio>
      </div>
      <div className="flex justify-center mt-28">
        <Quote></Quote>
      </div>
      <div>
        <Title title={"projects"}></Title>
        <div className="grid tablet:grid-cols-3 grid-cols-1 gap-10 mt-10">
          <ProjectCard
            image={"/ornek.png"}
            content={"Minecraft servers hosting Minecraft servers hosting"}
          >
            <Ticket>HTML</Ticket>
            <Ticket>SCSS</Ticket>
            <Ticket>Phyton</Ticket>
            <Ticket>Flask</Ticket>
          </ProjectCard>
          <ProjectCard
            image={"/Rectangle 22.png"}
            content={"Minecraft servers hosting"}
          >
            <Ticket>HTML</Ticket>
            <Ticket>SCSS</Ticket>
            <Ticket>Phyton</Ticket>
            <Ticket>Flask</Ticket>
            <Ticket>HTML</Ticket>
            <Ticket>SCSS</Ticket>
            <Ticket>Phyton</Ticket>
            <Ticket>Flask</Ticket>
          </ProjectCard>
          <ProjectCard
            image={"/Rectangle 22 (1).png"}
            content={"Minecraft servers hosting"}
          >
            <Ticket>HTML</Ticket>
            <Ticket>HTML</Ticket>
            <Ticket>SCSS</Ticket>
            <Ticket>Phyton</Ticket>
            <Ticket>Flask</Ticket>
            <Ticket>SCSS</Ticket>
            <Ticket>Phyton</Ticket>
          </ProjectCard>
        </div>
      </div>
      <div>
        <Title title={"skills"}></Title>
        <div className="flex justify-between relative">
          <div>
            <div className="absolute top-12 left-8">
              <Dots></Dots>
            </div>
            <div className="absolute top-[181px] left-12">
              <Logo></Logo>
            </div>
            <div className="absolute top-44 left-52 ">
              <Dots></Dots>
            </div>
            <div className="flex flex-col gap-5 relative">
            <div className="w-[86px] h-[86px] border border-gray-400 absolute left-60 top-4" />
            <div className="w-[52px] h-[52px] border border-gray-400 absolute top-[269px] left-[329px]" />
            </div>
            
          </div>
          <div className="flex gap-x-4">
            <div>
              <SkillsCard title={"Languages"}>
                <div className="px-2 flex-col justify-start items-start gap-2 flex">
                  <div class="justify-start items-start gap-2 inline-flex">
                    <Ticket>TypeScript</Ticket>
                    <Ticket>Lua</Ticket>
                    <Ticket>JavaScript</Ticket>
                  </div>

                  <div class="justify-start items-start gap-2 inline-flex">
                    <Ticket>TypeScript</Ticket>
                    <Ticket>Lua</Ticket>
                    <Ticket>JavaScript</Ticket>
                  </div>
                  <div class="justify-start items-start gap-2 inline-flex">
                    <Ticket>TypeScript</Ticket>
                    <Ticket>Lua</Ticket>
                    <Ticket>JavaScript</Ticket>
                  </div>
                </div>
              </SkillsCard>
            </div>
            <div className="flex flex-col gap-y-2">
              <SkillsCard title={"Databases"}>
                <div className="px-2 flex-col justify-start items-start gap-2 flex">
                  <div class="justify-start items-start gap-2 inline-flex">
                    <Ticket>TypeScript</Ticket>

                    <Ticket>JavaScript</Ticket>
                  </div>

                  <div class="justify-start items-start gap-2 inline-flex">
                    <Ticket>TypeScript</Ticket>
                    <Ticket>Lua</Ticket>
                  </div>
                  <div class="justify-start items-start gap-2 inline-flex">
                    <Ticket>TypeScript</Ticket>

                    <Ticket>JavaScript</Ticket>
                  </div>
                </div>
              </SkillsCard>
              <SkillsCard title={"Other"}>
                <div className="px-2 flex-col justify-start items-start gap-2 flex">
                  <div class="justify-start items-start gap-2 inline-flex">
                    <Ticket>TypeScript</Ticket>
                    <Ticket>Lua</Ticket>
                  </div>

                  <div class="justify-start items-start gap-2 inline-flex">
                    <Ticket>TypeScript</Ticket>
                    <Ticket>Lua</Ticket>
                  </div>
                </div>
              </SkillsCard>
            </div>
            <div className="flex flex-col gap-y-2">
              <SkillsCard title={"Tools"}>
                <div className="px-2 flex-col justify-start items-start gap-2 flex">
                  <div class="justify-start items-start gap-2 inline-flex">
                    <Ticket>TypeScript</Ticket>
                    <Ticket>Lua</Ticket>
                    <Ticket>JavaScript</Ticket>
                  </div>

                  <div class="justify-start items-start gap-2 inline-flex">
                    <Ticket>TypeScript</Ticket>
                    <Ticket>Lua</Ticket>
                    <Ticket>JavaScript</Ticket>
                  </div>
                  <div class="justify-start items-start gap-2 inline-flex">
                    <Ticket>TypeScript</Ticket>
                    <Ticket>Lua</Ticket>
                    <Ticket>JavaScript</Ticket>
                  </div>
                  <div class="justify-start items-start gap-2 inline-flex">
                    <Ticket>TypeScript</Ticket>
                    <Ticket>Lua</Ticket>
                    <Ticket>JavaScript</Ticket>
                  </div>
                  <div class="justify-start items-start gap-2 inline-flex">
                    <Ticket>TypeScript</Ticket>
                    <Ticket>Lua</Ticket>
                    <Ticket>JavaScript</Ticket>
                  </div>
                </div>
              </SkillsCard>
              <SkillsCard title={"Framework"}>
                <div className="px-2 flex-col justify-start items-start gap-2 flex">
                  <div class="justify-start items-start gap-2 inline-flex">
                    <Ticket>TypeScript</Ticket>
                    <Ticket>Lua</Ticket>
                    <Ticket>JavaScript</Ticket>
                  </div>
                  <div class="justify-start items-start gap-2 inline-flex">
                    <Ticket>TypeScript</Ticket>
                    <Ticket>Lua</Ticket>
                    <Ticket>JavaScript</Ticket>
                  </div>
                  <div class="justify-start items-start gap-2 inline-flex">
                    <Ticket>TypeScript</Ticket>
                    <Ticket>Lua</Ticket>
                    <Ticket>JavaScript</Ticket>
                  </div>
                </div>
              </SkillsCard>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <Title title={"about-me"}></Title>
        <div className="flex justify-between">
          <div className="flex flex-col gap-7">
            <div class="w-[515px] text-gray-400 text-base font-normal font-['Fira Code'] leading-relaxed">
              Hello, i’m Büşra!
              <br />
              <br />
              I’m a self-taught front-end developer based in Kyiv, Ukraine. I
              can develop responsive websites from scratch and raise them into
              modern user-friendly web experiences. <br />
              <br />
              Transforming my creativity and knowledge into a websites has been
              my passion for over a year. I have been helping various clients to
              establish their presence online. I always strive to learn about
              the newest technologies and frameworks.
            </div>
            <Button>{"Read more ->"}</Button>
          </div>

          <div class="w-[343px] h-[508px] relative">
            <div class="w-[339px] h-[507px] left-[4px] top-0 absolute">
              <Image src="/Image (1).png" layout="fill" alt="" />
            </div>
            <div class="w-[84px] h-[84px] left-0 top-[59px] absolute flex-col justify-between items-start inline-flex">
              <Dots></Dots>
            </div>
            <div class="w-[104px] h-14 left-[223px] top-[279px] absolute flex-col justify-between items-start inline-flex">
              <Dots></Dots>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <Title title={"contacts"}></Title>
        <div className="flex justify-between">
          <div class="w-[505px] text-gray-400 text-base font-medium font-['Fira Code']">
            I’m interested in freelance opportunities. However, if you have
            other request or question, don’t hesitate to contact me
          </div>
          <div class="w-[204px] h-[141px] p-4 border border-gray-400 flex-col justify-start items-start gap-4 inline-flex">
            <div class="text-white text-base font-semibold font-['Fira Code']">
              Message me here
            </div>
            <div class="flex-col justify-start items-start gap-2 flex">
              <div class="justify-start items-center gap-[5px] inline-flex">
                <div class="w-8 h-8 relative"></div>
                <div class="text-gray-400 text-base font-normal font-['Fira Code']">
                  !Elias#3519
                </div>
              </div>
              <div class="justify-start items-center gap-[5px] inline-flex">
                <div class="w-8 h-8 relative"></div>
                <div class="text-gray-400 text-base font-normal font-['Fira Code']">
                  elias@elias.me
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

import Dots from "@/components/Dots";
import Image from "next/image";
import React from "react";

const AboutMe = () => {
    return (
        <div className="flex justify-between">
            <div class="w-[515px] text-gray-400 text-base font-normal font-['Fira Code'] leading-relaxed">
                Hello, i’m Elias!
                <br />
                <br />
                I’m a self-taught front-end developer based in Kyiv, Ukraine. I can
                develop responsive websites from scratch and raise them into modern
                user-friendly web experiences. <br />
                <br />
                Transforming my creativity and knowledge into a websites has been my
                passion for over a year. I have been helping various clients to establish
                their presence online. I always strive to learn about the newest
                technologies and frameworks.
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

    );
};

export default AboutMe;

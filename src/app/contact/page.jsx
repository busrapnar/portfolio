import { TitleUnlined } from "@/components/TitleUnlined";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="flex flex-col gap-4 mb-24">
        <TitleUnlined sign={"/"} title={"contacts"}></TitleUnlined>
        <div className="text-white text-base font-normal font-['Fira Code']">
          Who am i?
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-[505px] text-gray-400 text-base font-medium font-['Fira Code'] leading-relaxed">
          I’m interested in freelance opportunities. However, if you have other
          request or question, don’t hesitate to contact me
        </div>
        <div className="flex gap-4">
          <div className="w-[186px] h-[82px]  p-4 border border-gray-400 flex-col justify-start items-start gap-2 inline-flex">
            <div className="text-white text-base font-medium font-['Fira Code']">
              Support me here
            </div>
            <div className="text-gray-400 text-base font-normal font-['Fira Code']">
              4149500120690030
            </div>
          </div>
          <div className="w-[260px] h-[141px] p-4 border border-gray-400 flex-col justify-start items-start gap-4 inline-flex">
            <div className="text-white text-base font-semibold font-['Fira Code']">
              Message me here
            </div>

            <div className="flex-col justify-start items-start gap-2 flex">
              <div className="justify-start items-center gap-[5px] inline-flex">
                <div className="w-8 h-8 relative" />

                <Image
                  src={"/Discord.svg"}
                  alt=""
                  width={24}
                  height={24}
                ></Image>

                <div className="text-gray-400 text-base font-normal font-['Fira Code']">
                  Busra#1234
                </div>
              </div>
              <div className="justify-start items-center gap-[5px] inline-flex">
                <div className="w-8 h-8 relative" />
                <Image src={"/Email.svg"} alt="" width={24} height={24}></Image>
                <div className="text-gray-400 text-base font-normal font-['Fira Code']">
                  bsrapnrr@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6">
      <TitleUnlined sign={"#"} title={"all-media"}></TitleUnlined>
      </div>
    </div>
  );
};

export default Contact;

"use client";

import mic from "../public/images/mic.svg";
import footer_lash from "../public/images/footer_text.svg";
import half_mic from "../public/images/half_mic.png";

import content from "@/content/content";
import Image from "next/image";
import Link from "next/link";


import "../app/globals.css";
import Marquee from "react-fast-marquee";

function Footer() {
  return (
    <div className="bg-[#101010] relative z-30">
      <div className="md:flex md:justify-between md:pb-16 md:px-[100px] md:pt-10 relative z-10">
        {/* --------------------- */}
        <div className="md:w-[400px] ">
          <div className="px-[20px] md:px-0  flex pt-10 md:pt-0 md:justify-between">
            <h1 className="text-5xl md:text-3xl md:w-11 font-semibold text-white">
              LASHAN HERATH,
            </h1>
            <Image
              className="md:w-10"
              src={mic}
              alt="mic"
              width={80}
              height={80}
            />
          </div>
          <h1 className="px-[20px] md:px-0 text-sm mt-4 text-white">
            a rising star in Sinhala pop music. Passionate about music from an
            early age, I’m making waves with my unique style and captivating
            performances.
          </h1>
        </div>
        {/* ---------------------------------------- */}
        <div className="px-[20px] md:px-[100px]">
          <ul className="text-white flex flex-col gap-4 md:gap-8 w-full items-center md:items-start mt-10 md:mt-0">
            {Object.entries(content.nav_items).map(([key, item]) => (
              <li key={key} className="transition md:hover:bg-[#dedede] md:hover:text-black md:w-fit md:px-3 md:py-2 md: md:rounded-full">
                <Link href={item.route}>
                  <p>{item.text}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* ------------------------------------------ */}
        <div className="px-[20px] md:hidden">
          <div className="w-full h-px bg-white my-10"></div>
        </div>
        <div className="px-[20px] flex justify-between mb-8 md:flex md:flex-col md:gap-2 md:items-end">
          {Object.entries(content.socials).map(([key, social]) => (
            <Link key={key} href={social.link} className="md:bg-[#101010] md:px-3 md:py-3 md:rounded-full transition hover:invert active:invert-0">
              <Image src={social.logo} alt="logo" width={35} height={35}/>
            </Link>
          ))}
        </div>
      </div>
      {/* ------------------------------------------------ */}
      <div>
        <Marquee autoFill className="w-full bg-[#dedede]">
          <div className="flex py-5 uppercase">
            <p>
              • This website is not the official portfolio of Lashan Herath; it
              is solely for an academic project, developed with permission from
              Lashan Herath &nbsp;
            </p>
          </div>
        </Marquee>
      </div>
      <Image
        className="absolute bottom-[12%] z-0"
        src={footer_lash}
        alt="footer_lash_text"
        width={1000}
        height={1000}
      />
      <Image
        className="absolute md:hidden right-0 top-[20%]"
        src={half_mic}
        alt="half_mic"
        width={170}
        height={170}
      />
    </div>
  );
}

export default Footer;

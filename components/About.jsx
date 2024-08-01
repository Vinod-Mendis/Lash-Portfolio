"use client";

import Image from "next/image";
import wave_icon from "../public/icons/wave.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import SplitType from "split-type";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";

function About() {
  const wave = useRef();
  const text_reveal = useRef();

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const splitTypes = document.querySelectorAll(".reveal_type_1");

    splitTypes.forEach((char, i) => {
      const text = new SplitType(char, { type: "chars" });

      gsap.from(text.chars, {
        scrollTrigger: {
          trigger: char,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
          markers: false,
        },
        opacity: 0.2,
        stagger: 0.1,
      });
    });

    gsap.to(wave.current, {
      rotation: 40, // Rotate to 40 degrees
      duration: 0.8, // Duration to reach 40 degrees
      ease: "power1.inOut", // Smooth easing in and out
      repeat: -1, // Repeat indefinitely
      yoyo: true, // Alternate between 0 and 40 degrees
      transformOrigin: "right bottom", // Set the origin of rotation
    });
  });

  return (
    <div className="h-full bg-slate-white " id="about">
      <div className="px-[25px] md:px-[100px]">
        <div className="flex justify-center w-full ">
          <Image
            ref={wave}
            className="my-[25px] md:w-10"
            src={wave_icon}
            width={45}
            height={45}
            alt="wave_icon"
          />
        </div>
        <h1
          ref={text_reveal}
          className="reveal_type_1 text-[20px] md:text-[25px] leading-tight md:leading-none text-center"
        >
          I &apos; m{" "}
          <span className="text-[30px] md:text-[44px] font-semibold">
            Lashan Herath
          </span>
          , a rising star in Sinhala pop music. Passionate about
          <span className="text-[30px] md:text-[44px] font-semibold">
            music
          </span>{" "}
          from an early age, I&apos;m making waves with my{" "}
          <span className="text-[30px] md:text-[44px] font-semibold">
            unique
          </span>{" "}
          style and captivating performances.
        </h1>
      </div>
      <div className="w-full h-px bg-black my-[20px] md:my-[30px]"></div>
      <div className="w-full relative">
        <video autoPlay muted loop className="hidden md:flex w-full h-full ">
          <source src="/videos/about_video_2.mp4" type="video/mp4" />
        </video>
        <video autoPlay muted loop className="flex md:hidden w-full h-full ">
          <source src="/videos/mobile_about_video.mp4" type="video/mp4" />
        </video>
        <div className="w-full h-full flex justify-center items-center absolute top-0">
          <div className="text-[#dedede] flex flex-col items-center justify-center h-full">
            <h1 className="text-center w-full text-[74px] md:text-[100px] font-semibold leading-none">
              Musician.
            </h1>
            <Link href={'/about'}>
              <button className="active:bg-transparent active:text-[#dedede] hover:bg-[#dedede] transition hover:text-black font-semibold md:mt-0 mt-3 text-xl border-2 border-[#dedede] px-14 py-2 md:py-1 rounded-full flex justify-center items-center">
                more
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

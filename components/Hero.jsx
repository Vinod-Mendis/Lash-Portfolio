"use client";

import Image from "next/image";
import "../app/globals.css";
import dropdown_arrow from "../public/icons/dropdown-arrow.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

function Hero() {
  const lashan = useRef();
  const herath = useRef();
  const floatRef = useRef();
  const scroll = useRef();

  useGSAP(() => {
    const tl = gsap.timeline(); // creation of a new gsap animation timeline

    tl.fromTo(
      lashan.current,
      { y: "100%" }, // Start position (below the container)
      {
        y: "0%", // End position (inside the container)
        duration: 1, // Duration of the animation
        ease: "power1.out", // Easing function
        delay: 6.5, // Delay before this animation starts
      }
    )
      .fromTo(
        herath.current,
        { y: "-100%" }, // Start position (above the container)
        {
          y: "0%", // End position (inside the container)
          duration: 1, // Duration of the animation
          ease: "power1.out", // Easing function
          delay: 1, // Delay from the end of the previous animation
        },
        "<" // Makes this animation start at the same time as the end of the previous animation
      )
      .fromTo(
        scroll.current,
        {
          opacity: 0, // start at opacity : 0
        },
        {
          opacity: 1, // end at opacity : 1 (fully visible)
          duration: 2,
        }
      );

    gsap.to(floatRef.current, {
      y: "-10px",
      duration: 1,
      ease: "power1.inOut",
      repeat: -1, // repeat infinitely
      yoyo: true, // go back initial position
    });
  }, []);

  return (
    <div className="hero h-full bg-slate-800">
      <div className="w-full h-full relative">
        <video autoPlay muted loop className="hidden md:flex w-full h-full">
          <source src="/videos/hero_video.mp4" type="video/mp4" />
        </video>
        <video autoPlay muted loop className="flex md:hidden w-full h-full">
          <source src="/videos/mobile_hero_video.mp4" type="video/mp4" />
        </video>
        <div className="flex flex-col justify-center items-center w-full h-full absolute top-0">
          <div className="flex flex-col items-end">
            <div className=" leading-none overflow-hidden relative">
              <h1
                ref={lashan}
                className="text-[80px] md:text-[180px] font-semibold text-[#dedede] leading-none"
              >
                LASHAN
              </h1>
            </div>
            <div className="  overflow-hidden mt-[-8px] md:mt-[-20px]">
              <h1
                ref={herath}
                className="font-semibold text-[#dedede] text-[20px] md:text-[30px] leading-none "
              >
                HERATH.
              </h1>
            </div>
          </div>
        </div>
        <div
          ref={scroll}
          className="mt-[-45px] w-full flex flex-col items-center"
        >
          <h1 className="text-center text-white pb-2">get to know me</h1>
          <Image ref={floatRef} src={dropdown_arrow} width={20} height={20} />
        </div>
      </div>
    </div>
  );
}

export default Hero;

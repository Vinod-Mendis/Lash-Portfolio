"use client";

import Image from "next/image";
import play_icon from "../public/icons/play.svg";
import next from "../public/icons/next.svg";
import contact_image from "../public/images/contact_image.png";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useRef } from "react";
import SplitType from "split-type";

function Contact() {
  const reach = useRef();
  const icon = useRef();
  const out = useRef();

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: reach.current,
        markers: false,
        start: "top 80%",
        end: "top 30%",
        scrub: true,
      },
    });

    t1.fromTo(
      reach.current,
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
      }
    )
      .fromTo(
        icon.current,
        {
          x: -100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
        }
      )
      .fromTo(
        out.current,
        {
          x: -100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
        }
      );

    const splitTypes = document.querySelectorAll(".reveal_type_4");

    splitTypes.forEach((char, i) => {
      const text = new SplitType(char, { type: "chars" });

      gsap.from(text.chars, {
        scrollTrigger: {
          trigger: char,
          start: "top 100%",
          end: "top 60%",
          scrub: true,
          markers: false,
        },
        opacity: 0.2,
        stagger: 0.1,
      });
    });
  });

  return (
    <div className="h-full md:h-screen bg-[#101010] relative" id="reach-out">
      <div className="pt-2 justify-center flex flex-row items-center px-[20px] md:px-[100px] lg:gap-24 gap-6 w-full md:absolute md:z-10 ">
        <h1
          ref={reach}
          className="text-5xl md:text-[100px] lg:text-[150px] font-bold text-[#dedede]"
        >
          REACH
        </h1>
        <Image
          ref={icon}
          className="lg:pt-5 md:pt-3 pt-2 md:w-[40px] lg:w-[70px]"
          src={play_icon}
          alt="play_icon"
          width={25}
          height={25}
        />
        <h1
          ref={out}
          className="text-5xl md:text-[100px] lg:text-[150px] font-bold text-[#dedede]"
        >
          OUT.
        </h1>
      </div>

      <div className="md:flex h-full w-full ">
        <div className="relative hidden md:flex w-1/2">
          <Image
            className="object-cover h-auto w-full"
            src={contact_image}
            alt="contact_image"
            layout="responsive"
          />

          <div className="absolute bg-mobile-contact-gradient top-0 w-full h-screen flex items-center justify-end px-[20px]"></div>
        </div>
        <div className="w-full md:w-1/2 md:mt-44">
          <div className="px-[20px] md:pr-[100px] flex gap-4 items-center mt-14 mb-6 md:mb-10">
            <h1 className="font-regular text-white">
              Make your concert truly unforgettable!
            </h1>
            <Image src={next} alt="next_icon" width={20} height={20} />
          </div>
          <form className="px-[20px] md:pr-[100px] flex flex-col gap-4 mb-5">
            <div className="flex flex-col">
              <label className="text-gray-400">Your name</label>
              <input
                className="text-gray-200 bg-transparent outline-none border-b-2 border-gray-400 px-2 py-2"
                type="text"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-400">Your Email Address</label>
              <input
                className="text-gray-200 bg-transparent outline-none border-b-2 border-gray-400 px-2 py-2"
                type="text"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-400">Your Contact Number</label>
              <input
                className="text-gray-200 bg-transparent outline-none border-b-2 border-gray-400 px-2 py-2"
                type="text"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-400">Your message</label>
              <textarea className="text-gray-200 bg-transparent outline-none border-b-2 border-gray-400 px-2 py-2 h-48 md:h-32"></textarea>
            </div>
          </form>
            <div className="w-full">
              <button className="border-2 border-[#dedede] text-[#dedede] text-xl py-2 px-14 rounded-full mt-2 hover:bg-[#dedede] transition hover:text-[#101010]">
                Send
              </button>
            </div>
        </div>
      </div>

      <div className="relative md:hidden">
        <Image
          className="w-full"
          src={contact_image}
          alt="contact_image"
          width={400}
          height={400}
        />
        <div className="absolute bg-mobile-contact-gradient top-0 w-full h-full flex items-center justify-end px-[20px]">
          <h1 className="text-white text-right w-2/4 pb-32 font-medium reveal_type_4">
            “Music can change the world because it can change people.”
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Contact;

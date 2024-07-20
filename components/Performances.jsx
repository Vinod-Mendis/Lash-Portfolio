"use client";

import Image from "next/image";
import image1 from "../public/images/image_1.png";
import image2 from "../public/images/image_2.png";
import image3 from "../public/images/image_3.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import ScrollTrigger from "gsap/ScrollTrigger";

const images = {
  image_1: image1,
  image_2: image2,
  image_3: image3,
};

function Performances() {

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const splitTypes = document.querySelectorAll(".reveal_type");

    splitTypes.forEach((char, i) => {
      const text = new SplitType(char, { type: "chars" });

      gsap.from(text.chars, {
        scrollTrigger: {
          trigger: char,
          start: "top 90%",
          end: "top 65%",
          scrub: true,
          markers: false,
        },
        opacity: 0.2,
        stagger: 0.1,
      });
    });
    
  });

  return (
    <div className="h-full lg:h-screen bg-[#101010] relative overflow-hidden">
      {/* Header section
      ------------------------------------------------------------ */}
      <div className="w-full pt-5 flex flex-col px-[20px] md:px-[100px] absolute z-30">
        <h1 className="text-white text-[30px] font-semibold">Performances</h1>
        <div className="w-full h-px bg-white mb-10"></div>
      </div>

      {/* under content 
      --------------------------------------------------------------*/}
      <div className="flex flex-col lg:flex-row h-full relative">
        {/* left-container
        ---------------------------------------------- */}
        <div className="relative">
          <video autoPlay muted loop className="w-full h-auto md:flex z-10">
            <source src="/videos/performance_video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-mobile-gradient md:bg-desktop-gradient w-full h-full absolute top-0 z-20">
              <div className="absolute bottom-0 px-[20px] md:px-[100px] text-white mb-14">
                <h1 className="uppercase text-[40px] font-semibold leading-none">
                  premadari
                </h1>
                <p className="text-sm font-extralight">
                  cinematic musical concert
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* right-container
        ---------------------------------------------- */}
        <div className="text-white mb-10 md:mb-10 md:pr-[100px] w-full md:items-end flex flex-col px-[20px] md:mt-[140px] justify-center">
          <div className="flex gap-4">
            {Object.entries(images).map(([key, src]) => (
              <div key={key}>
                <Image src={src} alt={key} width={300} height={300} />
              </div>
            ))}
          </div>
          <div className="flex items-end leading-none justify-between w-full my-3">
            <h1 className="text-[48px] font-bold">16</h1>
            <div className="flex items-end">
              <h1 className=" text-sm">2024/</h1>
              <h1 className="text-[48px] font-bold">MARCH</h1>
            </div>
          </div>
          <p className="text-justify w-full h-full font-extralight leading-relaxed reveal_type">
            Premadari, a mesmerizing cinematic musical concert, took place on
            March 16th, showcasing a diverse lineup of talented artists
            including Me. The evening unfolded with spellbinding performances
            blending genres from lo-fi beats to soulful ballads, each artist
            bringing their unique style to the stage. The atmosphere was
            electric as attendees immersed themselves in the ethereal melodies
            and captivating visuals, creating an unforgettable experience that
            resonated long after the final note faded. Premadari, meaning "lover
            of melodies" in an ancient tongue, enchanted audiences with its
            fusion of music and visual storytelling, leaving all who attended
            inspired and uplifted by the power of music.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Performances;

"use client";

import gsap from "gsap";
import SplitType from "split-type";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import play from "../public/icons/play_2.svg";
import Image from "next/image";
import content from "@/content/content";
import "../app/globals.css";
import lash from "../public/images/lash.png";

function Songs() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const splitTypes = document.querySelectorAll(".reveal_type_2");

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
    <div className="h-full  md:px-[100px] relative pb-10">
      {/* header-section
      ---------------------------------------------------------------- */}
      <div className="flex w-full justify-between pt-10 mb-2 px-[20px]">
        <h1 className="text-[30px] font-semibold">Songs</h1>
        <Link href={"/songs"}>
          <button className="bg-white active:invert-0 hover:invert transition flex gap-2 items-center border-2 border-black px-5 py-1 rounded-full">
            <p>Listen</p>
            <Image src={play} alt="play_icon" width={10} height={10} />
          </button>
        </Link>
      </div>
      <div className="px-[20px]">
        <div className="w-full h-px bg-black mb-10"></div>
      </div>

      {/* songs :-- mobile : scrollable & desktop wrap down
      -------------------------------------------------------------------------------------------------------  */}
      <div className="scroll-smooth flex overflow-x-auto md:overflow-hidden md:flex-wrap w-full justify-around md:justify-between">
        {Object.entries(content.songs).map(([key, song]) => (
          <div className="flex flex-col items-center min-w-max mx-2" key={key}>
            <Image
              className="rounded-md"
              src={song.cover}
              alt="song_cover"
              width={280}
              height={280}
            />
            <h3 className="mt-2 font-semibold">{song.name}</h3>
            <p className="-mt-1 text-xs text-gray-400">({song.ver})</p>
          </div>
        ))}
      </div>

      {/* Paragraph with reveal animation
      --------------------------------------------------------------------------------- */}
      <p className="px-[20px] reveal_type_2 text-[26px] md:text-[28px] font-semibold leading-tight md:leading-normal w-[90%] md:w-[530px] mt-10 mb-3">
        Music is a world with a language we all understand, giving everyone a
        chance to sing, dance, and clap. A record's groove doesn't guarantee
        it's in the groove, but you can tell when people start to move.
      </p>

      {/* bottom section
      ------------------------------------------------------------------------------- */}
      <div className="px-[20px] flex flex-row items-center md:gap-2 w-full md:justify-center justify-end">
        <Link href={"/songs"}>
          <button className="flex gap-2 active:invert-0 items-center border-2 border-black px-3 md:px-6 py-1 md:py-2 rounded-full bg-white hover:invert transition">
            <p className="font-semibold">Harmonhear</p>
            <Image src={play} alt="play_icon" width={10} height={10}/>
          </button>
        </Link>
        <div className="flex md:flex-row flex-col w-full items-end md:items-center pt-6 md:pt-0 gap-2">
          <div className="w-[90%] md:w-[80%] h-px bg-black"></div>
          <p className="text-left md:text-center font-semibold text-xs md:text-sm">
            Enjoy the chill of my music.
          </p>
        </div>
      </div>

      {/* baclhround text 
      -----------------------------------------*/}
      <Image
        className="absolute right-0 bottom-0"
        src={lash}
        width={1000}
        height={1000}
      />
    </div>
  );
}

export default Songs;

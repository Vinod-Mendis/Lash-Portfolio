import Image from "next/image";
import wave_icon from "../public/icons/wave.png";

function About() {
  return (
    <div className="h-full bg-slate-white ">
      <div className="px-[25px] md:px-[100px]">
        <div className="flex justify-center w-full ">
          <Image
            className="my-[25px] md:w-10"
            src={wave_icon}
            width={45}
            height={45}
          />
        </div>
        <h1 className="text-[20px] md:text-[25px] leading-tight md:leading-none text-center">
          I'm{" "}
          <span className="text-[30px] md:text-[44px] font-semibold">
            Lashan Herath
          </span>
          , a rising star in Sinhala pop music. Passionate about
          <span className="text-[30px] md:text-[44px] font-semibold">
            music
          </span>{" "}
          from an early age, I’m making waves with my{" "}
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
            <h1 className="text-center w-full text-[82px] md:text-[100px] font-semibold leading-none">
              Musician.
            </h1>
            <button className=" font-semibold md:mt-0 mt-3 text-xl border-2 px-14 py-2 md:py-1 rounded-full flex justify-center items-center">
              more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

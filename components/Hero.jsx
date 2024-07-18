import Image from "next/image";
import "../app/globals.css";
import dropdown_arrow from "../public/icons/dropdown-arrow.svg";

function Hero() {
  return (
    <div className="hero h-full  bg-slate-800 ">
      <div className=" w-full h-full relative">
        <video autoPlay muted loop className="hidden md:flex w-full h-full ">
          <source src="/videos/hero_video.mp4" type="video/mp4" />
        </video>
        <video autoPlay muted loop className="flex md:hidden w-full h-full ">
          <source src="/videos/mobile_hero_video.mp4" type="video/mp4" />
        </video>
        <div className="flex flex-col justify-center items-center w-full h-full absolute top-0">
          <div className="flex flex-col items-end ">
            <h1 className=" text-[80px] md:text-[180px] font-semibold text-[#dedede] leading-none">
              LASHAN
            </h1>
            <h1 className=" font-semibold text-[#dedede] md:text-[30px] leading-none md:mt-[-10px]">
              HERATH.
            </h1>
          </div>
        </div>
        <div className="mt-[-40px] w-full flex flex-col items-center">
          <h1 className="text-center text-white">get to know me</h1>
          <Image src={dropdown_arrow} width={20} height={20} />
        </div>
      </div>
    </div>
  );
}

export default Hero;

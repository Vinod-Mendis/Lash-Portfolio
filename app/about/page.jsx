import Link from "next/link";
import play_icon from "/public/icons/play.svg";
import Image from "next/image";
import content from "@/content/content";
import Marquee from "react-fast-marquee";

function AboutPage() {
  return (
    <div className="relative bg-gray-800">
      <div className="px-[20px] md:px-[100px] pt-28 relative z-10">
        <div className="md:flex gap-10 text-[80px] leading-none md:text-8xl 2xl:text-9xl text-white font-bold">
          <h1>LASHAN</h1>
          <h1>HERATH.</h1>
        </div>
        <p className="w-72 md:w-full md:text-xl 2xl:text-2xl md:leading-relaxed text-white leading-relaxed mt-4">
          I am a rising star in Sri Lanka&apos;s music scene, celebrated for his
          soulful voice and magnetic performances. Hailing from Colombo, he
          blends traditional Sri Lankan melodies with contemporary global
          influences. With hit singles and a growing fan base, Lashan&apos;s
          music spans upbeat tracks and heartfelt ballads that resonate deeply.
          Known for his dynamic live shows, including a standout performance at
          the Premadari concert.
        </p>
        <Link href={"/#reach-out"}>
          <button className="border-2 border-[#dedede] text-[#dedede] text-xl py-2 px-8 rounded-full mt-2 md:mt-4 hover:bg-[#dedede] md:text-sm transition hover:text-[#101010]">
            Contact
          </button>
        </Link>
        <div className="w-full h-px bg-[#dedede] mt-24 mb-4 md:my-20"></div>
        <div className="flex text-[#dedede] w-full items-center justify-between text-5xl md:text-9xl font-bold">
          <h1>STILL</h1>
          <Image
            src={play_icon}
            alt="play_icon"
            width={30}
            height={30}
            className="md:w-16"
          />
          <h1>SPACE</h1>
        </div>
        <div className="w-full flex text-sm md:text-base text-[#dedede] justify-between mt-4">
          <p className="w-[45%] md:w-[30%]">
            Music expresses that which cannot be said and on which it is
            impossible to be silent.
          </p>
          <p className="w-[45%] md:w-[30%] text-right">
            One good thing about music, when it hits you, you feel no pain. So
            hit me with music, hit me with music now.
          </p>
        </div>
      </div>
      <div className="w-screen overflow-x-hidden mt-8">
        <Marquee autoFill>
          {Object.entries(content.marquee_images).map(([key, image]) => (
            <div key={key} className="w-64 h-64 md:w-80 md:h-80 mx-2">
              <Image
                src={image}
                alt="marquee_images"
                width={400}
                height={400}
                className="object-cover h-full rounded-md"
              />
            </div>
          ))}
        </Marquee>
      </div>
      <div className="w-screen overflow-x-hidden mt-8">
        <Marquee autoFill direction="right">
          {Object.entries(content.marquee_images)
            .reverse()
            .map(([key, image]) => (
              <div key={key} className="w-64 h-64 md:w-80 md:h-80 mx-2">
                <Image
                  src={image}
                  alt="marquee_images"
                  width={400}
                  height={400}
                  className="object-cover h-full rounded-md"
                />
              </div>
            ))}
        </Marquee>
        <div className="px-[20px] md:px-[100px]">
          <div className="w-full h-px bg-white my-10 relative z-10"></div>
        </div>
      </div>
      <div className="w-full h-screen z-0 absolute top-0">
        <video
          autoPlay
          muted
          loop
          className="hidden md:flex w-full h-full object-cover fixed"
        >
          <source src="/videos/about_desktop.mp4" type="video/mp4" />
        </video>
        <video
          autoPlay
          muted
          loop
          className="flex md:hidden w-full h-full object-cover fixed"
        >
          <source src="/videos/about_mobile.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default AboutPage;

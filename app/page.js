"use client";

import About from "@/components/About";
import Songs from "@/components/Songs";
import Performances from "@/components/Performances";
import Contact from "@/components/Contact";
import Preloader from "@/components/Preloader";
import Hero from "@/components/Hero";
import { useEffect } from "react";

import "./globals.css";

function Page() {
  useEffect(() => {
    window.scrollTo(0, 0); // scrolls to top of the page on each refresh

    // beta locomotive-scroll v5
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default; // imported in a useEffect hook, becuase it tries to access the window and in next js at first it wont exist because it initially runs in the server before going to the client

      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <>
      <Preloader />
      <div className="relative z-0 md:overflow-x-hidden">
        <Hero />
        <About />
        <Songs />
        <Performances />
        <Contact />
      </div>
    </>
  );
}

export default Page;

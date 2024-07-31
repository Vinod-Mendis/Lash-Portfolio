"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Preloader() {
  const [currentValue, setCurrentValue] = useState(0);

  const preloader = useRef();
  const counter = useRef();

  useGSAP(() => {
    // GSAP animations
    gsap.to(counter.current, {
      delay: 4.5,
      opacity: 0,
      duration: 1,
    });

    gsap.to(preloader.current, {
      delay: 6,
      opacity: 0,
      duration: 0.4,
      ease: "power1.easeOut",
      onComplete: () => {
        if (preloader.current) {
          preloader.current.style.display = "none";
        }
      },
    });
  });

  useEffect(() => {
    let isMounted = true;

    function updateCounter() {
      if (!isMounted) return;

      if (currentValue === 100) {
        return;
      }

      let newValue = currentValue + Math.floor(Math.random() * 10) + 1; // increment of random value
      if (newValue > 100) {
        newValue = 100;
      }

      setCurrentValue(newValue);

      let delay = Math.floor(Math.random() * 200) + 50;
      setTimeout(updateCounter, delay);
    }

    // Initial delay before starting the counter
    const initialDelay = 200; // 200 ms
    setTimeout(updateCounter, initialDelay);

    return () => {
      isMounted = false;
    };
  }, [currentValue]);

  
  return (
    <div
      ref={preloader}
      className="fixed bg-[#dedede] min-h-screen flex flex-col items-center justify-center inset-0 z-30 overflow-y-auto"
    >
      <h1 className="text-sm font-bold justify-center w-fit md:text-2xl md:font-semibold">
        FORGET ME, DON`T FORGET US.
      </h1>
      <div ref={counter} className="absolute bottom-0 w-full text-center mb-10">
        <h1>{currentValue}.</h1>
      </div>
    </div>
  );
}

export default Preloader;

"use client";

import { useState, useEffect } from "react";
import { gsap } from "gsap";

function Page() {
  const [currentValue, setCurrentValue] = useState(0);

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

    // GSAP animation
    gsap.to(".counter", { // counter disapper animation
      delay: 5,
      opacity: 0,
      duration: 0.25,
    });

    gsap.to(".upperdiv", { // whole preloader disappear animation
      delay: 6,
      opacity: 0,
      duration: 1,
    });

    return () => {
      isMounted = false;
    };
  }, [currentValue]);

  return (
    <>
      <div className="upperdiv bg-[#dedede] w-screen h-screen flex flex-col items-center justify-center absolute inset-0 z-10">
        <h1 className="text-sm font-bold justify-center md:text-2xl md:font-semibold">
          FORGET ME, DON`T FORGET US.
        </h1>
        <div className="counter absolute bottom-0 w-full text-center mb-10">
          <h1>{currentValue}.</h1>
        </div>
      </div>
      <div className="relative z-0 bg-red-400">
        <div className="text-center mt-20">this div should be under</div>
      </div>
    </>
  );
}

export default Page;

'use client';

import { useState, useEffect } from 'react';
import content from "@/content/content";
import Link from "next/link";
import Hamburger from "./Hamburger";
import "../app/globals.css";

function Navbar() {
  const [isScrolled1, setIsScrolled1] = useState(false);
  const [isScrolled2, setIsScrolled2] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled1(window.scrollY > 800 && window.scrollY < 2600);
      setIsScrolled2(window.scrollY > 2600);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed items-center px-[20px] md:px-[100px] w-full flex justify-between z-20 py-4 text-[#dedede] transition-colors ${isScrolled2 ? 'navbar-inverted2' : ''} ${isScrolled1 ? 'navbar-inverted' : ''}`}>
      <Link href={"/"}>
        <h1 className="text-xl">LASH.</h1>
      </Link>
      <ul className="hidden md:flex flex-col text-right md:flex-row gap-2 md:gap-6">
        {Object.entries(content.nav_items).map(([key, item]) => (
          <Link href={item.route} key={key}>
            <li>{item.text}</li>
          </Link>
        ))}
      </ul>
      <Hamburger/>
    </div>
  );
}

export default Navbar;

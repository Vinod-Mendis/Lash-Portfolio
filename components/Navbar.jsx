'use client';

import { useState, useEffect } from 'react';
import content from "@/content/content";
import Link from "next/link";
import Hamburger from "../components/Hamburger";
import "../app/globals.css";

function Navbar() {
  const [isScrolled1, setIsScrolled1] = useState(false);
  const [isScrolled2, setIsScrolled2] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled1(currentScrollY > 800 && currentScrollY < 2400);
      setIsScrolled2(currentScrollY > 2400);

      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      id='navbar'
      className={`fixed items-center px-[20px] md:px-[100px] w-full flex justify-between z-20 py-4 text-[#dedede] transition-colors ${isScrolled2 ? 'navbar-inverted2' : ''} ${isScrolled1 ? 'navbar-inverted' : ''} ${scrollDirection === 'down' ? 'hidden' : ''}`}
    >
      <Link href={"/"}>
        <h1 className="text-xl">LASH.</h1>
      </Link>
      <ul className="hidden md:flex flex-col text-right md:flex-row gap-0 md:gap-2">
        {Object.entries(content.nav_items).map(([key, item]) => (
          <Link href={item.route} key={key}>
            <li className='bg-transparent hover:bg-[#dedede] hover:text-black transition px-4 py-2 rounded-full' >{item.text}</li>
          </Link>
        ))}
      </ul>
      <Hamburger />
    </nav>
  );
}

export default Navbar;

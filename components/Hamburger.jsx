"use client";

import content from "@/content/content";
import hamburger_menu_icon from "../public/icons/hamburger_menu.svg";
import close_icon from "../public/icons/close.svg";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

import "../app/globals.css";

function Hamburger() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navItemsRef = useRef([]);
  const navItemsTween = useRef(null);

  const dropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const [isScrolled1, setIsScrolled1] = useState(false);
  const [isScrolled2, setIsScrolled2] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled1(window.scrollY > 800 && window.scrollY < 2600);
      setIsScrolled2(window.scrollY > 2600);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (dropdownOpen) {
      navItemsTween.current = gsap.fromTo(
        navItemsRef.current,
        { x: 100, opacity: 0, display: "none" },
        {
          duration: 0.5,
          x: 0,
          opacity: 1,
          display: "block",
          stagger: 0.2,
          ease: "power3.out",
          paused: true,
        }
      );
      navItemsTween.current.play();
    } else if (navItemsTween.current) {
      gsap.to(navItemsRef.current, {
        duration: 0.5,
        x: 100,
        opacity: 0,
        opacity: 0,
        stagger: 0.2,
        ease: "power3.in",
      });
    }
  }, [dropdownOpen]);

  return (
    <div className={`md:hidden ${isScrolled1 ? "invert" : ""}`}>
      {!dropdownOpen ? (
        <Image
          onClick={dropdown}
          src={hamburger_menu_icon}
          alt="hamburger_menu_icon"
          width={35}
          height={35}
        />
      ) : (
        <Image
          onClick={dropdown}
          src={close_icon}
          alt="hamburger_menu_icon"
          width={35}
          height={35}
          className="px-2 py-2"
        />
      )}
      <div className="absolute w-fit text-right right-0 px-[20px] pt-4">
        <ul className={`gap-4 flex flex-col ${isScrolled1 ? "invert" : ""}`}>
          {Object.entries(content.nav_items).map(([key, item], index) => (
            <Link href={item.route} key={key}>
              <li
                ref={(el) => (navItemsRef.current[index] = el)}
                style={{ display: "none" }}
              >
                {item.text}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Hamburger;

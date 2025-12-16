import React, { useRef } from "react";

import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);

  const sideMenuRef = useRef<HTMLUListElement>(null);

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
  };
  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 dark:text-white dark:bg-black ${
          isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm " : ""
        }`}
      >
        <a href="#top">Halo</a>
        <ul
          className={` hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 dark:text-white dark:bg-black ${
            isScroll
              ? ""
              : "bg-white shadow-sm bg-opacity-50 dark:text-white dark:bg-blacks"
          } `}
        >
          <li>
            <a href="#about" className="font-Ovo">
              About me
            </a>
          </li>
          <li>
            <a href="#services" className="font-Ovo">
              Services
            </a>
          </li>
          <li>
            <a href="#sertifikat" className="font-Ovo">
              My Certificate
            </a>
          </li>
          <li>
            <a href="#kontak" className="font-Ovo">
              Contact me
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <ThemeToggle />

          <button className="block md:hidden ml-3 " onClick={openMenu}>
            <RiMenu3Fill />
          </button>
        </div>

        {/* --------------------Mobile Menu --------------------- */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 "
        >
          {" "}
          <div className="absolute top-5 right-5 " onClick={closeMenu}>
            <IoCloseOutline className="w-5 cursor-pointer" />
          </div>
          <li>
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>
              About me
            </a>
          </li>
          <li>
            <a href="#services" onClick={closeMenu}>
              Services
            </a>
          </li>
          <li>
            <a href="#work" onClick={closeMenu}>
              My work
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

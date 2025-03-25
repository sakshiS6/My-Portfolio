import {
  IconMenu2,
  IconMessageChatbotFilled,
  IconMoon,
  IconSun,
  IconX,
} from "@tabler/icons-react";
import Link from "next/link";
import React, { useRef } from "react";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translate(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translate(16rem)";
  };

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <img src="" alt="bg" className="w-full" />
      </div>

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 `}
      >
        <Link href="#top">
          <img
            src={isDarkMode ? "/Icon2.png" : "/Icon.png"}
            alt="Icon"
            className="w-10 cursor-pointer mr-14"
          />
        </Link>

        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-lg bg-opacity-50 dark: border dark:border-white/50 dark:bg-transparent">
          <li>
            <Link href="#top" className="font- Nunito">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="font- Nunito">
              About me
            </Link>
          </li>
          <li>
            <Link href="#project" className="font- Nunito">
              My Projects
            </Link>
          </li>
          <li>
            <Link href="#certification" className="font- Nunito">
              My Certifications
            </Link>
          </li>
          <li>
            <Link href="#contact" className="font- Nunito">
              Contact me
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button onClick={() => setIsDarkMode((prev) => !prev)}>
            {isDarkMode ? (
              <IconSun className="w-6 text-yellow-100" />
            ) : (
              <IconMoon className="w-6 text-gray-800" />
            )}
          </button>

          <Link
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 font-bold py-2.5 border border-gray-500 rounded-full ml-14 font-Nunito dark:border-white/50"
          >
            Contact <IconMessageChatbotFilled className="w-6" />
          </Link>

          <button className="block md:hidden ml-3 lg:hidden" onClick={openMenu}>
            <IconMenu2 className="w-6" />
          </button>
        </div>

        {/* Mobile menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 trnsition duration-500 dark:bg-darkhover dark:text-white"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <IconX className="w-8 cursor-pointer" />
          </div>
          <li>
            <Link href="#top" className="font- Nunito" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="font- Nunito" onClick={closeMenu}>
              About me
            </Link>
          </li>
          <li>
            <Link href="#certification" className="font- Nunito" onClick={closeMenu}>
              Certifications
            </Link>
          </li>
          <li>
            <Link href="#project" className="font- Nunito" onClick={closeMenu}>
              My Work
            </Link>
          </li>
          <li>
            <Link href="#contact" className="font-Nunito" onClick={closeMenu}>
              Contact me
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

"use client";

import Image from "next/image";
import Logo from "@/assets/images/logo.png";
import MenuIcon from "@/assets/icons/menu.svg";
import Link from "next/link";
import { useState } from "react";
import { useTheme } from "next-themes";
import { BsSun, BsMoon } from "react-icons/bs";
import clsx from "clsx";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleOpen = () => setOpen(!open);

  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur-sm">
      <nav
        className={`py-5 ${
          theme === "light" ? "bg-transparent" : "bg-transparent"
        }`}
        id="lg-nav"
      >
        <div className="px-4 md:px-6 lg:px-8 xl:px-10 flex justify-between items-center">
          <Image
            src={Logo}
            alt="my sass logo"
            height={40}
            width={40}
            className="z-[999]"
          />
          <div className="flex items-center gap-6">
            <MenuIcon
              className={`size-5 cursor-pointer min-[670px]:hidden relative z-[999] ${
                open ? "delay-150" : "delay-150"
              }`}
              onClick={toggleOpen}
            />
            <ul className="hidden min-[670px]:flex gap-6 items-center desktopNavList"></ul>
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className={clsx(
                "flex items-center justify-center w-10 h-10 p-1 rounded-full transition-colors duration-300",
                theme === "light"
                  ? "bg-cyan-700 hover:bg-cyan-600"
                  : "bg-white hover:bg-white/90" // Fondos dinámicos según el tema
              )}
            >
              {theme === "light" ? (
                <BsMoon className="text-xl text-black" />
              ) : (
                <BsSun className="text-xl text-yellow-600" />
              )}
            </button>
          </div>
        </div>
      </nav>
      <nav
        className={`fixed top-0 left-0 w-full h-screen ${
          theme === "light" ? "bg-white/80" : "bg-black/80"
        } transition-all duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        id="mobile-nav"
      >
        <ul className="w-full h-screen pl-5 flex flex-col justify-center items-center gap-y-5 text-2xl">
          <li>
            <Link
              href="#"
              onClick={toggleOpen}
              className={`opacity-0 -translate-y-2 transition-all duration-500 delay-300 ${
                open && "opacity-100 -translate-y-0"
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#"
              onClick={toggleOpen}
              className={`opacity-0 -translate-y-2 transition-all duration-500 delay-[350ms] ${
                open && "opacity-100 -translate-y-0"
              }`}
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              href="#"
              onClick={toggleOpen}
              className={`opacity-0 -translate-y-2 transition-all duration-500 delay-[400ms] ${
                open && "opacity-100 -translate-y-0"
              }`}
            >
              Customers
            </Link>
          </li>
          <li>
            <Link
              href="#"
              onClick={toggleOpen}
              className={`opacity-0 -translate-y-2 transition-all duration-500 delay-[450ms] ${
                open && "opacity-100 -translate-y-0"
              }`}
            >
              Updates
            </Link>
          </li>
          <li>
            <Link
              href="#"
              onClick={toggleOpen}
              className={`opacity-0 -translate-y-2 transition-all duration-500 delay-500 ${
                open && "opacity-100 -translate-y-0"
              }`}
            >
              Help
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Menu } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-row items-center justify-between px-10 md:px-20 py-4 bg-[#000000]">
      <div className="flex flex-col md:mr-20">
        <Image
          src="/heman-logo.jpg"
          width={150}
          height={100}
          alt="Heman mining Logo"
        />
      </div>
      <div className="flex ">
        <div
          className={`flex gap-5 text-white ${
            isOpen ? "flex-col" : "hidden"
          } md:flex md:flex-row`}
        >
          <Link href="/" className="relative group">
            <span className="relative before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:bg-current before:scale-x-0 before:origin-left before:transition-transform before:duration-300 group-hover:before:scale-x-100 ">
              Home
            </span>
          </Link>
          <Link href="#about" className="relaive group">
            <span className="relative before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:bg-current before:scale-x-0 before:origin-left before:transition-transform before:duration-300 group-hover:before:scale-x-100 ">
              About
            </span>
          </Link>
          <Link href="#services" className="relative group">
            <span className="relative before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:bg-current before:scale-x-0 before:origin-left before:transition-transform before:duration-300 group-hover:before:scale-x-100 ">
              Services
            </span>
          </Link>
          <Link href="#contact" className="relative group">
            <span className="relative before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:bg-current before:scale-x-0 before:origin-left before:transition-transform before:duration-300 group-hover:before:scale-x-100 ">
              Contact
            </span>
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <Menu color="white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

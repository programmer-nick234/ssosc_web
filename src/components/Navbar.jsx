"use client";
import Link from "next/link";
import Image from "next/image";
import { SetStateAction, useState } from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white/10 backdrop-blur-md border-b border-white/20 shadow-sm">
      <div className="font-montserratR flex justify-between flex-wrap p-4 flex-col md:flex-row items-center md:px-[3.5rem] max-w-7xl mx-auto">
        
        <Link
          href="/"
          className="md:flex hidden title-font items-center text-gray-900 md:my-0"
        >
          <Image
            src={"https://firebasestorage.googleapis.com/v0/b/picture-07.appspot.com/o/SSOSC.PLAIN.png?alt=media&token=ef245ff7-4154-4a22-8da4-f74eaae67d07"}
            alt={"SSOSC Logo"}
            width={120}
            height={20}
            className="w-full"
          />
          
        </Link>
        <nav className="flex flex-wrap items-center md:py-0 md:w-auto px-[1rem] md:px-0 w-full justify-between text-base md:justify-center">
          <Link
            href="/"
            onClick={() => handleLinkClick("home")}
            className={`hover:bg-white/20 focus:bg-white/20 md:ml-10 lg:ml-20 py-2 px-4 rounded-full flex justify-center text-white transition-all duration-300 hover:scale-105 ${activeLink === "home" ? "bg-white/30 shadow-lg" : ""}`}
          >
            <span className="text-[#ff7b01] font-semibold text-lg">Home</span>
          </Link>
          
          <Link
            href="/team"
            onClick={() => handleLinkClick("team")}
            className={`hover:bg-white/20 focus:bg-white/20 md:ml-10 lg:ml-20 py-2 px-4 rounded-full flex justify-center text-white transition-all duration-300 hover:scale-105 ${activeLink === "team" ? "bg-white/30 shadow-lg" : ""}`}
          >
            <span className="text-[#ff7b01] font-semibold text-lg">Team</span>
          </Link>
          <Link
            href="/events"
            onClick={() => handleLinkClick("events")}
            className={`hover:bg-white/20 focus:bg-white/20 md:ml-10 lg:ml-20 py-2 px-4 rounded-full flex justify-center text-white transition-all duration-300 hover:scale-105 ${activeLink === "events" ? "bg-white/30 shadow-lg" : ""}`}
          >
            <span className="text-[#ff7b01] font-semibold text-lg">Event</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

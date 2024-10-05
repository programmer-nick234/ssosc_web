"use client";
import React, { useEffect, useRef } from "react";
import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import gsap from "gsap";
import HorizontailScroll from "@/components/Home/HorizontailScroll";
import Image from "next/image";

const page = () => {
  const cursorRef = useRef();
  const handleMouseMove = (e) => {
    gsap.to(cursorRef.current, {
      x: e.pageX, // Account for scrolling by using pageX
      y: e.pageY, // Account for scrolling by using pageY
      duration: 0.5,
      ease: "power2.out",
    });
  };

  useEffect(() => {
    const app = document.querySelector(".App");

    // Add event listener for mouse movement
    app.addEventListener("mousemove", handleMouseMove);
    // Clean up event listener on unmount
    return () => {
      app.removeEventListener("mouseleave", handleMouseMove);
    };
  }, []);

  return (
    <div className="App   ">
      <Hero />
      <About />
      <HorizontailScroll />
    </div>
  );
};

export default page;

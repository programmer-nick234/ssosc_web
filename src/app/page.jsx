"use client";

import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import HorizontailScroll from "@/components/Home/HorizontailScroll";

const page = () => {

  return (
    <div className="App   ">
      <Hero />
      <About />
      <HorizontailScroll />
    </div>
  );
};

export default page;

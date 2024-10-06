import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";

const HeroSection = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".head-top", {
      opacity: -1,
      duration: 1,
      y: 300,
    });
    tl.from(".headings", {
      opacity: -1,
      duration: 0.2,
      y: 300,
    });
    tl.from(".dec", {
      opacity: -1,
      duration: 1,
      y: 300,
    });
  });

  return (
    <div>
      <section className="min-h-screen flex items-center xl:px-4 py-5">
        <div className="xl:mx-12 lg:px-9 md:px-14 px-7 font-montserratB text-white font-black ">
          <div className=" head-top lg:text-7xl heading  translate-y-24 md:text-6xl text-5xl md:leading-[4rem] lg:leading-[4.96rem]">
            Srinivas Student Open Source{" "}
            <span className="  headings text-[#ff7b01]">Community</span>
          </div>{" "}
          <div className="dec">
            <p className="  md:grow clip-path  translate-y-24 form grow font-montserratR lg:w-[50rem] pt-5 text-white">
              A community driven by tech enthusiasts and open-source
              contributors, to help young students to be part of the open-source
              ecosystem by providing training and skill development.
            </p>
            <Link
              href="/"
              className="md:grow clip-path  translate-y-24 form flex mt-7 text-sm justify-center rounded-full items-center bg-chartreuse-200 hover:bg-[#ff7b01]  hover:text-white text-[#ff7b01] w-[7.25rem] h-[2.125rem]"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

HeroSection.displayName = "HeroSection";
export default HeroSection;

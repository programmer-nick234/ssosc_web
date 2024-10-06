"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function HorizontailScroll() {
  const scroller = useRef();
  const scroll = useRef();

  useEffect(() => {
    let scrollLevel = gsap.utils.toArray(".scroll-part");

    let to = gsap.to(scrollLevel, {
      xPercent: () => -100 * (scrollLevel.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: scroller.current,
        markers: false,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        snap: 1 / (scrollLevel.length - 1),

        end: () => "+=" + window.innerWidth,
      },
    });

    return () => {
      to.kill();
    };
  }, []);

  return (
    <div className="overflow-hidden flex">
      <div className="overflow-hidden ">
      <h1 className="font-montserratB text-9xl ml-20 md:text-5xl my-5 text-[#ff7b01]" >Gallery </h1>
        <div
          id="scroll"
          ref={scroller}
          className=" flex overflow-x-hidden text-white w-[400vw] m-0  relative h-screen"
        >
          <section
            ref={scroll}
            className="scroll-part  px-12 w-screen h-full bg-transparent ns-horizontal-section__item flex items-center z-50"
          >
            <Image
              width={800}
              height={800}
              alt="1stimage"
              src='/SSOSC.LOGO-WHITE.png'
              className="max-w-[100vw] max-h-[80vh] m-auto object-contain"
            />
          </section>
          <section
            ref={scroll}
            className="scroll-part px-12 w-screen h-full bg-transparent ns-horizontal-section__item flex items-center z-50"
          >
            <Image
              width={800}
              height={800}
              src="/event/BugHunt.jpg"
               alt="2ndimage"
              className="max-w-[100vw] max-h-[80vh] m-auto object-contain"
            />
          </section>
          <section
            ref={scroll}
            className="scroll-part  px-12 w-screen h-full bg-transparent ns-horizontal-section__item flex items-center z-50"
          >
            <Image
              width={800}
              height={800}
              src="/event/ReverseCoding.jpg"
              alt="3ndimage"
              className="max-w-[100vw] max-h-[80vh] m-auto object-contain"
            />
          </section>
          <section
            ref={scroll}
            className="scroll-part  px-12 w-screen h-full bg-transparent ns-horizontal-section__item flex items-center z-50"
          >
            <Image
              width={800}
              height={800}
              src="/event/coderelay.jpg"
              alt="4ndimage"
              className="max-w-[100vw] max-h-[80vh] m-auto object-contain"
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export default HorizontailScroll;

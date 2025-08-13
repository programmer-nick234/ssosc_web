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
    <div className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ff7b01]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-400/3 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 px-4">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#ff7b01] mb-6">
            Our Gallery
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#ff7b01] to-orange-400 mx-auto rounded-full shadow-lg shadow-[#ff7b01]/50 mb-8"></div>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Explore the vibrant moments and achievements from our community events and activities
          </p>
        </div>
        
        {/* Gallery Container */}
        <div className="overflow-hidden">
          <div
            id="scroll"
            ref={scroller}
            className="flex overflow-x-hidden text-white w-[400vw] m-0 relative h-screen"
          >
            {/* Gallery Item 1 - SSOSC Logo */}
            <section className="scroll-part px-4 sm:px-8 md:px-12 w-screen h-full bg-transparent flex items-center justify-center">
              <div className="text-center space-y-6">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ff7b01]/20 to-orange-500/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                  <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/20 shadow-2xl">
                    <Image
                      width={600}
                      height={600}
                      alt="SSOSC Logo"
                      src="/SSOSC.LOGO-WHITE.png"
                      className="max-w-[60vw] max-h-[60vh] object-contain transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">SSOSC Community</h3>
                <p className="text-white/70 text-lg max-w-md mx-auto">Building the future of open source technology</p>
              </div>
            </section>
            
            {/* Gallery Item 2 - Bug Hunt */}
            <section className="scroll-part px-4 sm:px-8 md:px-12 w-screen h-full bg-transparent flex items-center justify-center">
              <div className="text-center space-y-6">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ff7b01]/20 to-orange-500/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                  <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl overflow-hidden">
                    <Image
                      width={800}
                      height={800}
                      src="/event/BugHunt.jpg"
                      alt="Bug Hunt Event"
                      className="max-w-[70vw] max-h-[70vh] object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Bug Hunt Challenge</h3>
                <p className="text-white/70 text-lg max-w-md mx-auto">Find and fix bugs in code within time limits</p>
              </div>
            </section>
            
            {/* Gallery Item 3 - Reverse Coding */}
            <section className="scroll-part px-4 sm:px-8 md:px-12 w-screen h-full bg-transparent flex items-center justify-center">
              <div className="text-center space-y-6">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ff7b01]/20 to-orange-500/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                  <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl overflow-hidden">
                    <Image
                      width={800}
                      height={800}
                      src="/event/ReverseCoding.jpg"
                      alt="Reverse Coding Event"
                      className="max-w-[70vw] max-h-[70vh] object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Reverse Coding</h3>
                <p className="text-white/70 text-lg max-w-md mx-auto">Reverse-engineer programs from their output</p>
              </div>
            </section>
            
            {/* Gallery Item 4 - Code Relay */}
            <section className="scroll-part px-4 sm:px-8 md:px-12 w-screen h-full bg-transparent flex items-center justify-center">
              <div className="text-center space-y-6">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ff7b01]/20 to-orange-500/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                  <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl overflow-hidden">
                    <Image
                      width={800}
                      height={800}
                      src="/event/coderelay.jpg"
                      alt="Code Relay Event"
                      className="max-w-[70vw] max-h-[70vh] object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Code Relay</h3>
                <p className="text-white/70 text-lg max-w-md mx-auto">Team collaboration in coding challenges</p>
              </div>
            </section>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center space-x-2 text-white/60">
            <div className="w-2 h-2 bg-[#ff7b01] rounded-full animate-pulse"></div>
            <span className="text-sm">Scroll to explore</span>
            <div className="w-2 h-2 bg-[#ff7b01] rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HorizontailScroll;

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";

const About = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });
    
    // Ensure elements start visible
    gsap.set([".about-title", ".about-text", ".about-image"], { 
      opacity: 1, 
      x: 0, 
      scale: 1 
    });
    
    // Then animate them in
    tl.from(".about-title", {
      opacity: 0,
      duration: 1,
      y: 50,
      ease: "power3.out"
    });
    tl.from(".about-text", {
      opacity: 0,
      duration: 1,
      x: -50,
      ease: "power3.out"
    }, "-=0.5");
    tl.from(".about-image", {
      opacity: 0,
      duration: 1,
      x: 50,
      scale: 0.9,
      ease: "power3.out"
    }, "-=0.5");
  }, []);

  return (
    <div className="about-section relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-black/5"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#ff7b01]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-400/3 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#ff7b01] mb-6 about-title opacity-100">
              What We Do?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#ff7b01] to-orange-400 mx-auto rounded-full shadow-lg shadow-[#ff7b01]/50"></div>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Text Content */}
            <div className="lg:w-1/2 space-y-8">
              <div className="about-text opacity-100">
                <p className="text-lg md:text-xl text-white/90 leading-relaxed text-justify">
                  Introducing SSOSC, a hub for the brightest minds to explore, create,
                  and contribute to the open-source ecosystem. Powered by the passion
                  for technology and a vision to drive change, SSOSC stands at the
                  forefront of a movement that transcends classrooms, bringing
                  real-world solutions to life.
                </p>
                
                <p className="text-lg md:text-xl text-white/90 leading-relaxed text-justify mt-6">
                  With the spirit of teamwork and the power of open-source, we're 
                  setting the stage for a revolution in tech, unlocking the potential 
                  of students, developers, and innovators alike. 💡💻
                </p>
                
                {/* Feature Points */}
                <div className="mt-8 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#ff7b01] rounded-full"></div>
                    <span className="text-white/80 text-lg">Open Source Collaboration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#ff7b01] rounded-full"></div>
                    <span className="text-white/80 text-lg">Skill Development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#ff7b01] rounded-full"></div>
                    <span className="text-white/80 text-lg">Innovation & Creativity</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Image Section */}
            <div className="lg:w-1/2 flex justify-center">
              <div className="about-image relative group opacity-100">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff7b01]/20 to-orange-500/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                
                {/* Main Image */}
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
                  <Image
                    className="w-full h-auto max-w-md transform group-hover:scale-105 transition-transform duration-500"
                    width={900}
                    height={900}
                    src="/SSOSC.LOGO-WHITE.png"
                    alt="SSOSC Logo"
                  />
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#ff7b01] rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-orange-400 rounded-full animate-bounce delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

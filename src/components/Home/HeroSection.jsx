import Link from "next/link";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative">
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-[#ff7b01]/10 rounded-full blur-xl animate-pulse-fast"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-[#ff7b01]/5 rounded-full blur-2xl animate-pulse-fast delay-200"></div>
      <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-[#ff7b01]/15 rounded-full blur-lg animate-pulse-fast delay-400"></div>
      
      <section className="min-h-screen flex items-center relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-6xl mx-auto">
            {/* Main Heading */}
            <div className="text-center mb-12 animate-fade-in-fast">
              <div className="lg:text-7xl md:text-6xl text-5xl md:leading-[4rem] lg:leading-[5rem] font-black text-white mb-6">
                Srinivas Student Open Source{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff7b01] to-orange-400">
                  Community
                </span>
              </div>
              
              {/* Decorative Line */}
              <div className="w-32 h-1 bg-gradient-to-r from-[#ff7b01] to-orange-400 mx-auto rounded-full shadow-lg shadow-[#ff7b01]/50 mb-8"></div>
            </div>
            
            {/* Description and CTA */}
            <div className="text-center max-w-4xl mx-auto animate-fade-in-fast delay-200">
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-10 font-light">
                A collaborative community of tech enthusiasts and open-source
                advocates, dedicated to empowering young students by offering
                training and skill development, fostering their integration into
                the open-source ecosystem.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/events"
                  className="group relative px-8 py-4 bg-gradient-to-r from-[#ff7b01] to-orange-500 text-white font-semibold rounded-full text-lg shadow-lg shadow-[#ff7b01]/30 hover:shadow-xl hover:shadow-[#ff7b01]/40 transform hover:scale-105 transition-all duration-300"
                >
                  <span className="relative z-10">Explore Events</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-[#ff7b01] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                
                <Link
                  href="/team"
                  className="group px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full text-lg hover:bg-white/10 hover:border-white/50 backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
                >
                  Meet Our Team
                </Link>
              </div>
            </div>
            
            {/* Stats Section */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto animate-fade-in-fast delay-400">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#ff7b01] mb-2">20+</div>
                <div className="text-white/70 text-sm md:text-base">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#ff7b01] mb-2">5+</div>
                <div className="text-white/70 text-sm md:text-base">Events Hosted</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

HeroSection.displayName = "HeroSection";
export default HeroSection;

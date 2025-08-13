import React from "react";
import { teamMembers } from "../Constant";
import Link from "next/link";
import Image from "next/image";

const TeamIntroduction = () => {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-black/5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ff7b01]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-400/3 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff7b01] to-orange-400">Awesome</span> Team
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-[#ff7b01] to-orange-400 mx-auto rounded-full shadow-lg shadow-[#ff7b01]/50 mb-8"></div>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Meet the passionate individuals who drive innovation and foster the open-source community at SSOSC
          </p>
        </div>
        
        {/* Team Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {teamMembers.map((member, index) => (
            <Link key={index} href={member.LInk} target="_blank" rel="noopener noreferrer">
              <div className="group relative">
                {/* Card Background with Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff7b01]/20 to-orange-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                
                {/* Main Card */}
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl hover:shadow-2xl hover:shadow-[#ff7b01]/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
                  
                  {/* Member Image */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#ff7b01] to-orange-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                      <Image
                        src={member.imageUrl}
                        alt={member?.Name}
                        width={120}
                        height={120}
                        className="relative h-24 w-24 rounded-full object-cover border-4 border-white/20 group-hover:border-[#ff7b01]/50 transition-all duration-500"
                      />
                    </div>
                  </div>
                  
                  {/* Member Info */}
                  <div className="text-center space-y-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#ff7b01] transition-colors duration-300">
                      {member.Name}
                    </h3>
                    <p className="text-[#ff7b01] font-semibold text-sm bg-white/10 rounded-full px-4 py-2 border border-white/20 group-hover:border-[#ff7b01]/30 transition-all duration-300">
                      {member.Role}
                    </p>
                    
                    {/* Contact Info */}
                    {member.Email && (
                      <div className="text-white/60 text-xs group-hover:text-white/80 transition-colors duration-300">
                        {member.Email}
                      </div>
                    )}
                    
                    {/* Social Link Indicator */}
                    <div className="flex justify-center">
                      <div className="w-2 h-2 bg-[#ff7b01] rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ff7b01]/5 to-orange-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Join Our Community</h3>
            <p className="text-white/80 mb-6">
              Ready to be part of something amazing? Connect with us and start your open-source journey!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/events"
                className="px-6 py-3 bg-gradient-to-r from-[#ff7b01] to-orange-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#ff7b01]/30 transform hover:scale-105 transition-all duration-300"
              >
                Explore Events
              </Link>
              <Link
                href="https://github.com/SSOSC-SIT"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/50 backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
              >
                View on GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamIntroduction;

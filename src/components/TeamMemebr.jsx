import React from "react";
import {teamMembers} from "../Constant";
import Link from "next/link";
import Image from "next/image";

const TeamIntroduction = () => {
  
  return (
    <div className=" min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl font-extrabold text-white text-center my-12">
          Our Awesome Team
        </h2>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <Link key={index} href={member.LInk}>
              <div
                key={index}
                className="border-2 overflow-hidden shadow-sm rounded-lg transition ease-in-out hover:scale-105 hover:shadow-md  hover:duration-300"
              >
                <div className="p-6 flex items-center space-x-4">
                  
                  <Image
                    src={member.imageUrl}
                    alt={member?.Name}
                    width={1900}
                    height={100}
                    className="h-20 w-20 rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-medium text-white">
                      {member.Name}
                    </h3>
                    <p className="text-sm text-gray-300">{member.Role}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
         
    </div>
  );
};

export default TeamIntroduction;

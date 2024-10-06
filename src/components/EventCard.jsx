import Image from "next/image";
import React from "react";
import { Events } from "@/Constant";
const EventCard = () => {
  return (
    <>
      <div  className="w-full ">
        <h2 className="text-7xl z-50 font-extrabold text-white text-center mb-24 hover:underline mt-20">
          Up Comming Events
        </h2>
      </div>
      {Events.map((event) => (
        <div className=" max-w-sm  overflow-hidden shadow-xl border-2 m-9 p-3 rounded-lg  transition ease-in-out m-4 hover:-translate-y-1 hover:scale-105 hover:border-4  duration-700  hover:shadow-lg hover:shadow-[#ff7b01] ">
          <Image
            src={event.imageUrl}
            alt={event.title}
            width={600}
            height={400}
            className="w-full"
          />
          <div className="px-6 py-4">
            <h2 className="font-bold text-xl mb-2 text-white">
              {event.title}
            </h2>
            <p className="text-gray-200 text-base">{event.description}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #tech
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #conference
            </span>
          </div>
        </div>
      ))}
    </>
  );
};

export default EventCard;

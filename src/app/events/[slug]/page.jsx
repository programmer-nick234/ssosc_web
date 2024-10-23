"use client"; // Ensure this is a Client Component

import { notFound } from "next/navigation";
import { Events } from "@/Constant"; // Assuming this is the path to your Events data
import { useRouter } from "next/navigation"; // Updated to next/navigation

const EventDetails = ({ params }) => {
  const { slug } = params;
  const router = useRouter();

  // Find the event matching the slug
  const event = Events.find((event) => event.slug === slug);

  if (!event) {
    return notFound(); // Show the 404 page if no event is found
  }

  // Handle card click to navigate back to event listing or main events page
  const handleCardClick = () => {
    router.push("/events"); // Redirects back to the events page
  };

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center">
      {/* Adjusted Title */}
      <h1 className="text-5xl font-extrabold text-[#ff7b01] mb-12 mt-8 text-center">
        {event.title}
      </h1>

      {/* Card Wrapper with Shadow and Hover Effect */}
      <div
        onClick={handleCardClick} // Call redirection on click
        className="bg-white rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl p-6 max-w-3xl cursor-pointer transform transition duration-500 hover:-translate-y-1 hover:scale-105"
      >
        {/* Foreground Image */}
        <img
          src={event.imageUrl}
          alt={event.title}
          className="w-full h-auto object-cover rounded-lg mb-4" // Ensure image is rounded and has margin below
        />

        {/* Tags */}
        <div className="mt-4 flex flex-wrap justify-center mb-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 transition-all duration-300 transform hover:scale-105 hover:bg-[#ff7b01] hover:text-white">
            {event.tag1}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 transition-all duration-300 transform hover:scale-105 hover:bg-[#ff7b01] hover:text-white">
            {event.tag2}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-center max-w-2xl mb-8">
          {event.description}
        </p>
      </div>
    </div>
  );
};

export default EventDetails;

import { notFound } from "next/navigation";
import { Events } from "@/Constant"; // Assuming this is the path to your Events data

const EventDetails = ({ params }) => {
  const { slug } = params;

  // Find the event matching the slug
  const event = Events.find((event) => event.slug === slug);

  if (!event) {
    return notFound(); // Show the 404 page if no event is found
  }

  return (
    <div className="container mx-auto px-4 py-12 flex items-center justify-center">
      {/* Main Card Container with Hover Effect and Transparent Background */}
      <div className="flex flex-col lg:flex-row max-w-6xl shadow-2xl hover:shadow-3xl border-4 rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-500 bg-gray-800 bg-opacity-20 text-white">

        {/* Left Side: Image */}
        <div className="lg:w-1/2">
          <img
            src={event.imageUrl}
            alt={event.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Right Side: Title and Description */}
        <div className="lg:w-1/2 p-8 flex flex-col justify-center">
          {/* Title */}
          <h1 className="text-6xl font-extrabold mb-8 text-[#ff7b01]">
            {event.title}
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-xl mb-8">
            {event.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;

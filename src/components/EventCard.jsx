"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Events } from "@/Constant"; // Past Events
import { newEvents } from "@/Constant"; // Upcoming Events

const EventCard = ({ showOnly }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleCardClick = (slug) => {
    // Get current view and tab from URL params
    const currentView = searchParams.get('view') || 'cards';
    const currentTab = searchParams.get('tab') || 'upcoming';
    
    // Navigate to event detail with return parameters
    router.push(`/events/${slug}?returnView=${currentView}&returnTab=${currentTab}`);
  };

  // --- Helper function to render event cards to avoid repetition ---
  const renderEventCards = (events, cardType) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
      {events.map((event) => (
        <div
          key={event.title}
          onClick={() => handleCardClick(event.slug)}
          className={`bg-black/30 backdrop-blur-md border ${
            cardType === "upcoming" ? "border-[#ff7b01]/50" : "border-orange-500/50"
          } rounded-2xl shadow-2xl cursor-pointer hover:scale-[1.02] transition-all duration-300 overflow-hidden hover:shadow-[#ff7b01]/20 group`}
        >
          {/* --- UPDATED: Top Header with Thumbnail --- */}
          <div
            className="p-4 border-b ${cardType === 'upcoming' ? 'border-[#ff7b01]/50' : 'border-orange-500/50'} relative bg-cover bg-center"
            style={{ backgroundImage: `url(${event.thumbnail})` }}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded border border-white/20 flex items-center justify-center">
                    <span className="text-xs font-bold text-white">
                      S
                    </span>
                  </div>
                  <div className="text-[10px] text-white/90 leading-tight">
                    <div>SRINIVAS INSTITUTE OF TECHNOLOGY</div>
                    <div>VALACHIL, MANGALORE</div>
                  </div>
                </div>
                <div
                  className={`w-8 h-8 ${
                    cardType === "upcoming" ? "bg-[#ff7b01]" : "bg-orange-500"
                  } rounded flex items-center justify-center shadow-lg`}
                >
                  <span className="text-sm font-bold text-white">
                    {cardType === "upcoming" ? "U" : "S"}
                  </span>
                </div>
              </div>

              <h2 className="text-xl font-bold text-white mb-4">SSOSC</h2>

              <div className="space-y-1">
                <div
                  className={`${
                    cardType === "upcoming" ? "bg-[#ff7b01]" : "bg-orange-500"
                  } px-4 py-2 text-white font-bold text-lg tracking-wide shadow-lg`}
                >
                  {event.title}
                </div>
                <div
                  className={`${
                    cardType === "upcoming" ? "bg-[#ff7b01]/80" : "bg-orange-600"
                  } px-4 py-1 text-white font-semibold text-sm uppercase tracking-wider`}
                >
                  {event.tag1}
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="p-4 space-y-4">
            <p className="text-white/90 text-sm leading-relaxed">
              {event.description}
            </p>
            {event.subtitle && (
              <p className="text-white/70 text-xs leading-relaxed italic">
                {event.subtitle}
              </p>
            )}
            <div className="flex flex-wrap gap-2 pt-2">
              {event.tag1 && (
                <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                  cardType === "upcoming" 
                    ? "bg-[#ff7b01]/20 text-[#ff7b01] border border-[#ff7b01]/30" 
                    : "bg-orange-500/20 text-orange-400 border border-orange-500/30"
                }`}>
                  {event.tag1}
                </span>
              )}
              {event.tag2 && (
                <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                  cardType === "upcoming" 
                    ? "bg-[#ff7b01]/20 text-[#ff7b01] border border-[#ff7b01]/30" 
                    : "bg-orange-500/20 text-orange-400 border border-orange-500/30"
                }`}>
                  {event.tag2}
                </span>
              )}
            </div>
          </div>

          {/* Bottom CTA */}
          <div
            className={`${
              cardType === "upcoming"
                ? "bg-[#ff7b01] hover:bg-[#ff7b01]/80"
                : "bg-orange-500 hover:bg-orange-600"
            } mx-4 mb-4 px-4 py-2 text-white font-bold text-lg text-center rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl`}
          >
            {event.title}
          </div>
        </div>
      ))}
    </div>
  );

  // If showOnly is specified, render only that type
  if (showOnly === "upcoming") {
    return newEvents.length > 0 ? renderEventCards(newEvents, "upcoming") : (
      <div className="text-center py-12 sm:py-16">
        <p className="text-white/70 text-lg sm:text-xl">No upcoming events at the moment.</p>
      </div>
    );
  }

  if (showOnly === "past") {
    return Events.length > 0 ? renderEventCards(Events, "past") : (
      <div className="text-center py-12 sm:py-16">
        <p className="text-white/70 text-lg sm:text-xl">No past events available.</p>
      </div>
    );
  }

  // Default behavior - render both sections (for backward compatibility)
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 space-y-16 sm:space-y-20 lg:space-y-24">
      {/* --- Upcoming Events Section --- */}
      {newEvents.length > 0 && (
        <div>
          <div className="mb-16 sm:mb-20 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6">
              <span className="text-[#ff7b01]">Upcoming</span> Events
            </h1>
            <div className="w-24 h-1 bg-[#ff7b01] mx-auto rounded-full shadow-lg shadow-[#ff7b01]/50"></div>
          </div>
          {renderEventCards(newEvents, "upcoming")}
        </div>
      )}

      {/* --- Past Events Section --- */}
      {Events.length > 0 && (
        <div>
          <div className="mb-16 sm:mb-20 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6">
              <span className="text-[#ff7b01]">Past</span> Events
            </h1>
            <div className="w-24 h-1 bg-[#ff7b01] mx-auto rounded-full shadow-lg shadow-[#ff7b01]/50"></div>
          </div>
          {renderEventCards(Events, "past")}
        </div>
      )}
    </div>
  );
};

export default EventCard;

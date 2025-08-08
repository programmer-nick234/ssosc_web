"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Events } from "@/Constant"; // Past Events
import { newEvents } from "@/Constant"; // Upcoming Events

const EventCard = () => {
  const router = useRouter();

  const handleCardClick = (slug) => {
    router.push(`/events/${slug}`);
  };

  // --- Helper function to render event cards to avoid repetition ---
  const renderEventCards = (events, cardType) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {events.map((event) => (
        <div
          key={event.title}
          onClick={() => handleCardClick(event.slug)}
          className={`bg-card border ${
            cardType === "upcoming" ? "border-yellow-500" : "border-orange"
          } rounded-xl shadow-xl cursor-pointer hover:scale-[1.01] transition-all duration-300 overflow-hidden`}
        >
          {/* --- UPDATED: Top Header with Thumbnail --- */}
          <div
            className="p-4 border-b ${cardType === 'upcoming' ? 'border-yellow-500' : 'border-orange'} relative bg-cover bg-center"
            style={{ backgroundImage: `url(${event.thumbnail})` }}
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-muted rounded border border-border flex items-center justify-center">
                    <span className="text-xs font-bold text-muted-foreground">
                      S
                    </span>
                  </div>
                  <div className="text-[10px] text-white/80 leading-tight">
                    <div>SRINIVAS INSTITUTE OF TECHNOLOGY</div>
                    <div>VALACHIL, MANGALORE</div>
                  </div>
                </div>
                <div
                  className={`w-8 h-8 ${
                    cardType === "upcoming" ? "bg-yellow-500" : "bg-orange"
                  } rounded flex items-center justify-center`}
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
                    cardType === "upcoming" ? "bg-yellow-500" : "bg-orange"
                  } px-4 py-2 text-white font-bold text-lg tracking-wide`}
                >
                  {event.title}
                </div>
                <div
                  className={`${
                    cardType === "upcoming" ? "bg-yellow-600" : "bg-orange-600"
                  } px-4 py-1 text-white font-semibold text-sm uppercase tracking-wider`}
                >
                  {event.tag1}
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="p-4 space-y-4">
            <p className="text-foreground text-sm leading-relaxed">
              {event.description}
            </p>
            {event.subtitle && (
              <p className="text-muted-foreground text-xs leading-relaxed italic">
                {event.subtitle}
              </p>
            )}
            <div className="flex flex-wrap gap-2 pt-2">
              {event.tag1 && (
                <span className="inline-block bg-muted rounded-full px-3 py-1 text-xs font-semibold text-muted-foreground">
                  {event.tag1}
                </span>
              )}
              {event.tag2 && (
                <span className="inline-block bg-muted rounded-full px-3 py-1 text-xs font-semibold text-muted-foreground">
                  {event.tag2}
                </span>
              )}
            </div>
          </div>

          {/* Bottom CTA */}
          <div
            className={`${
              cardType === "upcoming"
                ? "bg-yellow-500 hover:bg-yellow-600"
                : "bg-orange hover:bg-orange-500"
            } mx-4 mb-4 px-4 py-2 text-white font-bold text-lg text-center rounded transition-colors`}
          >
            {event.title}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="container mx-auto px-6 py-12 space-y-24">
      {/* --- Upcoming Events Section --- */}
      {newEvents.length > 0 && (
        <div>
          <div className="mb-16 text-center">
            <h1 className="text-6xl lg:text-7xl font-extrabold text-foreground hover:underline">
              Upcoming Event
            </h1>
          </div>
          {renderEventCards(newEvents, "upcoming")}
        </div>
      )}

      {/* --- Past Events Section --- */}
      {Events.length > 0 && (
        <div>
          <div className="mb-16 text-center">
            <h1 className="text-6xl lg:text-7xl font-extrabold text-foreground hover:underline">
              Past Event
            </h1>
          </div>
          {renderEventCards(Events, "past")}
        </div>
      )}
    </div>
  );
};

export default EventCard;

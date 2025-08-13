"use client";

import EventCard from "@/components/EventCard";
import EventCalendar from "@/components/EventCalendar";
import React, { useState, useEffect, useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Events, newEvents } from "@/Constant";

const EventsPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeView, setActiveView] = useState("calendar"); // "calendar" or "cards"
  const [activeTab, setActiveTab] = useState("upcoming"); // "upcoming" or "past"
  const [isInitialized, setIsInitialized] = useState(false);

  // Check URL parameters to restore the previous state when navigating back
  useEffect(() => {
    const view = searchParams.get('view');
    const tab = searchParams.get('tab');
    
    if (view && (view === "calendar" || view === "cards")) {
      setActiveView(view);
    }
    
    if (tab && (tab === "upcoming" || tab === "past")) {
      setActiveTab(tab);
    }
    
    setIsInitialized(true);
  }, [searchParams]);

  // Update URL when state changes to preserve navigation state (only after initialization)
  useEffect(() => {
    if (!isInitialized) return;
    
    const currentView = searchParams.get('view');
    const currentTab = searchParams.get('tab');
    
    // Only update URL if the values have actually changed
    if (currentView !== activeView || currentTab !== activeTab) {
      const url = new URL(window.location);
      url.searchParams.set('view', activeView);
      url.searchParams.set('tab', activeTab);
      window.history.replaceState({}, '', url);
    }
  }, [activeView, activeTab, isInitialized, searchParams]);

  const handleViewChange = useCallback((view) => {
    setActiveView(view);
  }, []);

  const handleTabChange = useCallback((tab) => {
    setActiveTab(tab);
  }, []);

  return (
    <div className="min-h-screen bg-[url('/topo1.svg')] bg-cover bg-fixed">
      {/* Enhanced Page Header */}
      <div className="relative">
        {/* Background Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/40 backdrop-blur-sm"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#ff7b01]/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="text-center max-w-5xl mx-auto">
            {/* Main Title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff7b01] to-orange-400">Events</span>
            </h1>
            
            {/* Decorative Line */}
            <div className="w-32 h-1 bg-gradient-to-r from-[#ff7b01] to-orange-400 mx-auto rounded-full shadow-lg shadow-[#ff7b01]/50 mb-8"></div>
            
            {/* Description */}
            <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12">
              Discover our exciting upcoming events and explore past event highlights. 
              Join us in building the future of open source technology.
            </p>
            
            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#ff7b01] mb-2">{newEvents.length}+</div>
                <div className="text-white/70 text-sm md:text-base">Upcoming Events</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#ff7b01] mb-2">{Events.length}+</div>
                <div className="text-white/70 text-sm md:text-base">Past Events</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#ff7b01] mb-2">500+</div>
                <div className="text-white/70 text-sm md:text-base">Participants</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced View Toggle and Navigation */}
      <div className="relative">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-8">
            {/* Calendar/Card View Toggle */}
            <div className="glass rounded-2xl p-2 shadow-2xl">
              <button
                onClick={() => handleViewChange("calendar")}
                className={`px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 ${
                  activeView === "calendar"
                    ? "bg-gradient-to-r from-[#ff7b01] to-orange-500 text-white shadow-lg shadow-[#ff7b01]/30 transform scale-105"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                📅 Calendar View
              </button>
              <button
                onClick={() => handleViewChange("cards")}
                className={`px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 ${
                  activeView === "cards"
                    ? "bg-gradient-to-r from-[#ff7b01] to-orange-500 text-white shadow-lg shadow-[#ff7b01]/30 transform scale-105"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                🃏 Card View
              </button>
            </div>

            {/* Upcoming/Past Events Navigation */}
            <div className="glass rounded-2xl p-2 shadow-2xl">
              <button
                onClick={() => handleTabChange("upcoming")}
                className={`px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg lg:text-xl transition-all duration-300 ${
                  activeTab === "upcoming"
                    ? "bg-gradient-to-r from-[#ff7b01] to-orange-500 text-white shadow-lg shadow-[#ff7b01]/30 transform scale-105"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                🚀 Upcoming Events
              </button>
              <button
                onClick={() => handleTabChange("past")}
                className={`px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg lg:text-xl transition-all duration-300 ${
                  activeTab === "past"
                    ? "bg-gradient-to-r from-[#ff7b01] to-orange-500 text-white shadow-lg shadow-[#ff7b01]/30 transform scale-105"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                📚 Past Events
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {activeView === "calendar" ? (
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Calendar Section */}
              <div className="lg:w-2/3">
                <EventCalendar activeTab={activeTab} />
              </div>
              
              {/* Side Events Section */}
              <div className="lg:w-1/3">
                <div className="glass rounded-2xl shadow-2xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">
                    {activeTab === "upcoming" ? "🚀 Upcoming" : "📚 Past"} Events 
                    <span className="text-sm text-white/60 ml-2">
                      ({(activeTab === "upcoming" ? newEvents : Events).length} events)
                    </span>
                  </h3>
                  <div className="space-y-4">
                    {(activeTab === "upcoming" ? newEvents : Events).map((event, index) => (
                      <div
                        key={index}
                        onClick={() => {
                          const currentView = searchParams.get('view') || 'calendar';
                          const currentTab = activeTab;
                          router.push(`/events/${event.slug}?returnView=${currentView}&returnTab=${currentTab}`);
                        }}
                        className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl cursor-pointer hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-[#ff7b01]/20 group"
                      >
                        <h4 className="font-semibold text-white mb-2 group-hover:text-[#ff7b01] transition-colors">
                          {event.title}
                        </h4>
                        <p className="text-xs text-white/70 mb-2">
                          {event.description.substring(0, 80)}...
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            activeTab === "upcoming" 
                              ? "bg-[#ff7b01]/20 text-[#ff7b01] border border-[#ff7b01]/30" 
                              : "bg-orange-500/20 text-orange-400 border border-orange-500/30"
                          }`}>
                            {event.tag1}
                          </span>
                          {event.tag2 && (
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              activeTab === "upcoming" 
                                ? "bg-[#ff7b01]/20 text-[#ff7b01] border border-[#ff7b01]/30" 
                                : "bg-orange-500/20 text-orange-400 border border-orange-500/30"
                            }`}>
                              {event.tag2}
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-white/50 mt-2">
                          Date: {event.date}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-16 sm:space-y-20 lg:space-y-24">
              {/* Conditional Event Cards */}
              {activeTab === "upcoming" ? (
                <div>
                  <div className="mb-16 sm:mb-20 text-center">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff7b01] to-orange-400">Upcoming</span> Events
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#ff7b01] to-orange-400 mx-auto rounded-full shadow-lg shadow-[#ff7b01]/50"></div>
                  </div>
                  <div className="flex flex-wrap justify-center">
                    <EventCard showOnly="upcoming" />
                  </div>
                </div>
              ) : (
                <div>
                  <div className="mb-16 sm:mb-20 text-center">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff7b01] to-orange-400">Past</span> Events
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#ff7b01] to-orange-400 mx-auto rounded-full shadow-lg shadow-[#ff7b01]/50"></div>
                  </div>
                  <div className="flex flex-wrap justify-center">
                    <EventCard showOnly="past" />
                  </div>
                </div>
              )}
            </div>
          )}
          
          {/* Enhanced Bottom Section */}
          <div className="mt-16">
            <div className="glass rounded-2xl p-8 text-center">
              <div className="w-24 h-1 bg-gradient-to-r from-[#ff7b01] to-orange-400 mx-auto rounded-full mb-6"></div>
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Join?</h3>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                Don't miss out on our exciting events! Stay updated and be part of the open-source revolution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-gradient-to-r from-[#ff7b01] to-orange-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#ff7b01]/30 transform hover:scale-105 transition-all duration-300">
                  Get Notifications
                </button>
                <button className="px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/50 backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;

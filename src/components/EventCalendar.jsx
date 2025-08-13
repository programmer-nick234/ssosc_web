"use client";

import React, { useState, useEffect } from "react";
import { Events, newEvents } from "@/Constant";
import { useRouter, useSearchParams } from "next/navigation";

const EventCalendar = ({ activeTab }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const [viewMode, setViewMode] = useState("date"); // "year", "month", "date"
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  // Combine all events and add dates
  const allEvents = [
    ...newEvents.map(event => ({ ...event, type: "upcoming" })),
    ...Events.map(event => ({ ...event, type: "past" }))
  ];

  // Get current date for comparison
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Reset time to start of day

  // Categorize events based on current date
  const upcomingEvents = allEvents.filter(event => {
    if (!event.date) return false;
    const eventDate = new Date(event.date);
    eventDate.setHours(0, 0, 0, 0);
    return eventDate >= today;
  });

  const pastEvents = allEvents.filter(event => {
    if (!event.date) return false;
    const eventDate = new Date(event.date);
    eventDate.setHours(0, 0, 0, 0);
    return eventDate < today;
  });

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const years = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - 5 + i);

  const daysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const firstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const getEventsForDate = (date) => {
    const currentEvents = activeTab === "upcoming" ? upcomingEvents : pastEvents;
    const filteredEvents = currentEvents.filter(event => {
      if (!event.date) return false;
      const eventDate = new Date(event.date);
      return eventDate.getDate() === date && 
             eventDate.getMonth() === selectedMonth.getMonth() && 
             eventDate.getFullYear() === selectedMonth.getFullYear();
    });
    
    return filteredEvents;
  };

  const getEventsForMonth = (year, month) => {
    const currentEvents = activeTab === "upcoming" ? upcomingEvents : pastEvents;
    return currentEvents.filter(event => {
      if (!event.date) return false;
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month;
    });
  };

  const getEventsForYear = (year) => {
    const currentEvents = activeTab === "upcoming" ? upcomingEvents : pastEvents;
    return currentEvents.filter(event => {
      if (!event.date) return false;
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year;
    });
  };

  const handleDateClick = (date) => {
    const events = getEventsForDate(date);
    if (events.length > 0) {
      const currentView = searchParams.get('view') || 'calendar';
      const currentTab = activeTab;
      router.push(`/events/${events[0].slug}?returnView=${currentView}&returnTab=${currentTab}`);
    }
  };

  const handleMonthClick = (year, month) => {
    setSelectedYear(year);
    setSelectedMonth(new Date(year, month, 1));
    setViewMode("date");
  };

  const handleYearClick = (year) => {
    setSelectedYear(year);
    setViewMode("month");
  };

  const nextPeriod = () => {
    if (viewMode === "year") {
      setSelectedYear(selectedYear + 10);
    } else if (viewMode === "month") {
      setSelectedYear(selectedYear + 1);
    } else {
      setSelectedMonth(new Date(selectedYear, selectedMonth.getMonth() + 1, 1));
    }
  };

  const prevPeriod = () => {
    if (viewMode === "year") {
      setSelectedYear(selectedYear - 10);
    } else if (viewMode === "month") {
      setSelectedYear(selectedYear - 1);
    } else {
      setSelectedMonth(new Date(selectedYear, selectedMonth.getMonth() - 1, 1));
    }
  };

  const goToToday = () => {
    const today = new Date();
    setSelectedYear(today.getFullYear());
    setSelectedMonth(today);
    setViewMode("date");
  };

  const renderYearView = () => {
    const yearGroups = [];
    for (let i = 0; i < years.length; i += 4) {
      yearGroups.push(years.slice(i, i + 4));
    }

    return (
      <div className="grid grid-cols-4 gap-4">
        {yearGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="grid grid-cols-1 gap-2">
            {group.map((year) => {
              const eventCount = getEventsForYear(year).length;
              return (
                <div
                  key={year}
                  onClick={() => handleYearClick(year)}
                  className={`p-4 rounded-xl cursor-pointer transition-all duration-300 hover:bg-white/10 border ${
                    eventCount > 0 
                      ? 'bg-[#ff7b01]/20 border-[#ff7b01]/50' 
                      : 'bg-white/5 border-white/20'
                  } ${selectedYear === year ? 'ring-2 ring-[#ff7b01]' : ''}`}
                >
                  <div className="text-lg font-bold text-white text-center">{year}</div>
                  <div className="text-xs text-white/60 text-center">
                    {eventCount} event{eventCount !== 1 ? 's' : ''}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    );
  };

  const renderMonthView = () => {
    return (
      <div className="grid grid-cols-3 gap-4">
        {months.map((month, index) => {
          const eventCount = getEventsForMonth(selectedYear, index).length;
          return (
            <div
              key={month}
              onClick={() => handleMonthClick(selectedYear, index)}
              className={`p-4 rounded-xl cursor-pointer transition-all duration-300 hover:bg-white/10 border ${
                eventCount > 0 
                  ? 'bg-[#ff7b01]/20 border-[#ff7b01]/50' 
                  : 'bg-white/5 border-white/20'
              } ${selectedMonth.getMonth() === index && selectedMonth.getFullYear() === selectedYear ? 'ring-2 ring-[#ff7b01]' : ''}`}
            >
              <div className="text-lg font-bold text-white text-center">{month}</div>
              <div className="text-xs text-white/60 text-center">
                {eventCount} event{eventCount !== 1 ? 's' : ''}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const renderDateView = () => {
    const daysInCurrentMonth = daysInMonth(selectedMonth);
    const firstDay = firstDayOfMonth(selectedMonth);
    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="p-2"></div>);
    }

    // Add days of the month
    for (let day = 1; day <= daysInCurrentMonth; day++) {
      const events = getEventsForDate(day);
      const hasEvents = events.length > 0;
      const isToday = day === currentDate.getDate() && 
                     selectedMonth.getMonth() === currentDate.getMonth() && 
                     selectedMonth.getFullYear() === currentDate.getFullYear();

      days.push(
        <div
          key={day}
          onClick={() => handleDateClick(day)}
          className={`p-1 sm:p-2 min-h-[60px] sm:min-h-[80px] border border-white/20 cursor-pointer transition-all duration-300 hover:bg-white/10 ${
            hasEvents ? 'bg-[#ff7b01]/20 border-[#ff7b01]/50' : ''
          } ${isToday ? 'bg-[#ff7b01]/30 border-[#ff7b01]' : ''}`}
        >
          <div className="text-xs sm:text-sm font-medium text-white mb-1">{day}</div>
          {hasEvents && (
            <div className="space-y-1">
              {events.slice(0, 2).map((event, index) => (
                <div
                  key={index}
                  className={`text-xs p-1 rounded truncate ${
                    activeTab === "upcoming" 
                      ? "bg-[#ff7b01]/30 text-white border border-[#ff7b01]/50" 
                      : "bg-orange-500/30 text-white border border-orange-500/50"
                  }`}
                  title={event.title}
                >
                  {event.title}
                </div>
              ))}
              {events.length > 2 && (
                <div className="text-xs text-white/60">+{events.length - 2}</div>
              )}
            </div>
          )}
        </div>
      );
    }

    return days;
  };

  const getViewTitle = () => {
    if (viewMode === "year") {
      return `${Math.floor(selectedYear / 10) * 10}s`;
    } else if (viewMode === "month") {
      return selectedYear.toString();
    } else {
      return `${months[selectedMonth.getMonth()]} ${selectedMonth.getFullYear()}`;
    }
  };

  const getNavigationButtons = () => {
    return (
      <div className="flex justify-center sm:justify-end space-x-2">
        <button
          onClick={prevPeriod}
          className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors border border-white/20"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={goToToday}
          className="px-3 sm:px-4 py-2 rounded-lg bg-[#ff7b01] hover:bg-[#ff7b01]/80 text-white transition-colors text-sm sm:text-base font-semibold shadow-lg shadow-[#ff7b01]/30"
        >
          Today
        </button>
        <button
          onClick={nextPeriod}
          className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors border border-white/20"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    );
  };

  const getViewToggleButtons = () => {
    return (
      <div className="flex justify-center sm:justify-start space-x-2 mb-4">
        <button
          onClick={() => setViewMode("year")}
          className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
            viewMode === "year"
              ? "bg-[#ff7b01] text-white shadow-lg shadow-[#ff7b01]/30"
              : "bg-white/10 text-white/80 hover:bg-white/20"
          }`}
        >
          Year
        </button>
        <button
          onClick={() => setViewMode("month")}
          className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
            viewMode === "month"
              ? "bg-[#ff7b01] text-white shadow-lg shadow-[#ff7b01]/30"
              : "bg-white/10 text-white/80 hover:bg-white/20"
          }`}
        >
          Month
        </button>
        <button
          onClick={() => setViewMode("date")}
          className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
            viewMode === "date"
              ? "bg-[#ff7b01] text-white shadow-lg shadow-[#ff7b01]/30"
              : "bg-white/10 text-white/80 hover:bg-white/20"
          }`}
        >
          Date
        </button>
      </div>
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-2 sm:p-4">
      {/* Debug Info */}
      <div className="bg-black/20 backdrop-blur-sm rounded-xl p-3 mb-4 border border-white/10">
        <div className="text-xs text-white/70">
          <div>Active Tab: <span className="text-[#ff7b01] font-semibold">{activeTab}</span></div>
          <div>View Mode: <span className="text-[#ff7b01] font-semibold">{viewMode}</span></div>
          <div>Upcoming Events: <span className="text-[#ff7b01]">{upcomingEvents.length}</span></div>
          <div>Past Events: <span className="text-orange-400">{pastEvents.length}</span></div>
          <div>Current Month: <span className="text-white">{months[selectedMonth.getMonth()]} {selectedMonth.getFullYear()}</span></div>
        </div>
      </div>

      {/* Calendar Header */}
      <div className="bg-black/30 backdrop-blur-md rounded-2xl shadow-2xl p-4 sm:p-6 mb-4 sm:mb-6 border border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white text-center sm:text-left">
            {getViewTitle()}
          </h2>
          {getViewToggleButtons()}
          {getNavigationButtons()}
        </div>

        {viewMode === "year" && renderYearView()}
        {viewMode === "month" && renderMonthView()}
        {viewMode === "date" && (
          <div className="grid grid-cols-7 gap-px bg-white/20 rounded-xl overflow-hidden border border-white/20">
            {/* Day Headers */}
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="bg-black/40 backdrop-blur-sm p-2 sm:p-3 text-center border-r border-white/10 last:border-r-0">
                <div className="text-xs sm:text-sm font-semibold text-white/90">{day}</div>
              </div>
            ))}
            
            {/* Calendar Days */}
            {renderDateView()}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventCalendar;

import React, { useState } from 'react';
import { HeroDestination } from '../../types';

interface BookingWidgetProps {
  isBookingOpen: boolean;
  setIsBookingOpen: (isOpen: boolean) => void;
  destinations: HeroDestination[];
}

const BookingWidget: React.FC<BookingWidgetProps> = ({ isBookingOpen, setIsBookingOpen, destinations }) => {
  const [activeField, setActiveField] = useState<string | null>(null);

  const [selectedDestination, setSelectedDestination] = useState("");
  
  const [selectedTravelers, setSelectedTravelers] = useState("2 Guests");

  const [dateRange, setDateRange] = useState<{ start: number | null; end: number | null }>({ start: null, end: null });
  const [selectedBudget, setSelectedBudget] = useState("");

  const budgetOptions = [
    { label: "Keeping it Tight", sub: "Watching every penny", value: "constrained" },
    { label: "Comfortably Numb", sub: "Quality over cost", value: "good" },
    { label: "Make It Rain", sub: "Luxury overdrive (YOLO)", value: "overspend" }
  ];

  const toggleField = (field: string) => {
    setActiveField(activeField === field ? null : field);
  };

  // Simple Custom Calendar Logic
  const generateCalendarDays = () => {
    const days = [];
    for (let i = 1; i <= 31; i++) days.push(i);
    return days;
  };

  const handleDateClick = (day: number) => {
    if (!dateRange.start || (dateRange.start && dateRange.end)) {
      // Start new selection
      setDateRange({ start: day, end: null });
    } else {
      // Complete selection
      const start = dateRange.start;
      const end = day;
      if (end < start) {
        setDateRange({ start: end, end: start });
      } else {
        setDateRange({ start, end });
      }
      setActiveField(null); // Close after selection
    }
  };

  const getDateDisplay = () => {
    if (dateRange.start && dateRange.end) {
      if (dateRange.start === dateRange.end) return `June ${dateRange.start}`;
      return `June ${dateRange.start} - ${dateRange.end}`;
    }
    if (dateRange.start) return `June ${dateRange.start} - ...`;
    return "Select Dates";
  };

  return (
    <>
      {/* Minimized Trigger Button */}
        <button 
            onClick={() => setIsBookingOpen(true)}
            className={`group bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white h-14 md:h-16 px-8 md:px-10 rounded-full flex items-center gap-4 transition-all duration-300 shadow-2xl hover:scale-105 ${isBookingOpen ? 'opacity-0 pointer-events-none translate-y-10' : 'opacity-100 translate-y-0'}`}
        >
            <span className="font-black uppercase tracking-widest text-[10px] md:text-sm">Start Your Journey</span>
            <div className="w-8 h-8 md:w-10 md:h-10 bg-[#f29100] rounded-full flex items-center justify-center group-hover:rotate-90 transition-transform duration-300">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </div>
        </button>

        {/* Premium Expanded Booking Modal */}
        <div className={`fixed inset-0 flex items-center justify-center z-[200] transition-all duration-500 px-4 ${isBookingOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsBookingOpen(false)}></div>
                
                <div className={`w-full max-w-6xl bg-[#fdf8f0] rounded-[2rem] shadow-2xl transform transition-all duration-500 flex flex-col relative ${isBookingOpen ? 'scale-100 translate-y-0' : 'scale-90 translate-y-10'}`}>
                   
                   {/* Modal Header */}
                   <div className="flex justify-between items-center p-6 md:p-8 border-b border-[#eecfaa]/30 bg-white/50 rounded-t-[2rem]">
                       <div>
                            <span className="text-[#f29100] text-[10px] font-black uppercase tracking-widest mb-1 block">Plan Your Trip</span>
                            <h3 className="text-xl md:text-3xl font-serif font-black italic text-[#222]">Design Your Escape</h3>
                       </div>
                       <button onClick={() => setIsBookingOpen(false)} className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-slate-200 hover:bg-[#f29100] hover:text-white hover:border-[#f29100] transition-all text-slate-400">
                           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                       </button>
                   </div>

                   {/* Modal Body */}
                   <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 bg-[#fdf8f0]">
                       
                       {/* 1. Destination */}
                       <div className="relative group/field z-[40]">
                           <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2 pl-2">Where To?</label>
                           <button 
                                type="button"
                                onClick={() => toggleField('destination')}
                                className={`w-full text-left bg-white border border-slate-200 hover:border-[#f29100]/50 rounded-2xl px-5 py-4 flex items-center justify-between transition-all shadow-sm hover:shadow-md ${activeField === 'destination' ? 'ring-2 ring-[#f29100]/20 border-[#f29100]' : ''}`}
                           >
                               <div className="flex flex-col truncate">
                                   <span className={`font-bold text-sm truncate ${selectedDestination ? 'text-[#222]' : 'text-slate-400'}`}>
                                       {selectedDestination || "Select Region"}
                                   </span>
                               </div>
                               <svg className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${activeField === 'destination' ? 'rotate-180 text-[#f29100]' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                           </button>

                           {/* Dropdown Menu */}
                           <div className={`absolute top-full left-0 w-full mt-3 bg-white border border-slate-100 rounded-2xl shadow-xl z-50 overflow-hidden transition-all duration-300 origin-top ${activeField === 'destination' ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                               <div className="max-h-[300px] overflow-y-auto">
                                   {destinations.map((dest) => (
                                       <div 
                                            key={dest.name} 
                                            onClick={() => { setSelectedDestination(dest.name); setActiveField(null); }}
                                            className="flex items-center gap-3 p-3 hover:bg-[#fdf8f0] cursor-pointer transition-colors border-b border-slate-50 last:border-0 group/item"
                                       >
                                           <img src={dest.image} alt={dest.name} className="w-10 h-10 rounded-lg object-cover group-hover/item:scale-105 transition-transform" />
                                           <div>
                                               <p className="text-sm font-bold text-[#222]">{dest.name}</p>
                                               <p className="text-[10px] text-slate-400 uppercase tracking-wider">{dest.country}</p>
                                           </div>
                                       </div>
                                   ))}
                               </div>
                           </div>
                       </div>

                       {/* 2. Date Picker (Range) */}
                       <div className="relative group/field z-[30]">
                           <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2 pl-2">When?</label>
                           <button 
                                type="button"
                                onClick={() => toggleField('date')}
                                className={`w-full text-left bg-white border border-slate-200 hover:border-[#f29100]/50 rounded-2xl px-5 py-4 flex items-center justify-between transition-all shadow-sm hover:shadow-md ${activeField === 'date' ? 'ring-2 ring-[#f29100]/20 border-[#f29100]' : ''}`}
                           >
                               <span className={`font-bold text-sm truncate ${dateRange.start ? 'text-[#222]' : 'text-slate-400'}`}>
                                   {getDateDisplay()}
                               </span>
                               <svg className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${activeField === 'date' ? 'text-[#f29100]' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                           </button>

                           {/* Custom Calendar Dropdown */}
                           <div className={`absolute top-full left-0 w-[300px] md:w-[340px] mt-3 bg-white border border-slate-100 rounded-2xl shadow-xl z-50 p-5 transition-all duration-300 origin-top ${activeField === 'date' ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                               <div className="flex justify-between items-center mb-4 pb-4 border-b border-slate-100">
                                   <span className="text-sm font-bold text-[#222]">June 2026</span>
                                   <div className="flex gap-2">
                                       <button className="p-1.5 hover:bg-slate-50 rounded-lg text-slate-400 hover:text-[#222] transition-colors"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg></button>
                                       <button className="p-1.5 hover:bg-slate-50 rounded-lg text-slate-400 hover:text-[#222] transition-colors"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></button>
                                   </div>
                               </div>
                               <div className="grid grid-cols-7 gap-1 text-center mb-2">
                                   {['S','M','T','W','T','F','S'].map((d, i) => <span key={i} className="text-[10px] text-slate-400 font-bold">{d}</span>)}
                               </div>
                               <div className="grid grid-cols-7 gap-1">
                                   {generateCalendarDays().map(d => {
                                       const isStart = dateRange.start === d;
                                       const isEnd = dateRange.end === d;
                                       const inRange = dateRange.start && dateRange.end && d > dateRange.start && d < dateRange.end;
                                       
                                       let bgClass = "text-slate-600 hover:bg-[#fdf8f0] hover:text-[#f29100]";
                                       if (isStart) bgClass = "bg-[#f29100] text-white shadow-md rounded-l-full";
                                       else if (isEnd) bgClass = "bg-[#f29100] text-white shadow-md rounded-r-full";
                                       else if (inRange) bgClass = "bg-[#fff7ed] text-[#f29100]";
                                       else bgClass += " rounded-full"; // Standard rounded for non-range

                                       // Override for single day selection or when end is not selected yet
                                       if (isStart && !dateRange.end) bgClass = "bg-[#f29100] text-white shadow-md rounded-full";

                                       return (
                                           <button 
                                                key={d} 
                                                onClick={() => handleDateClick(d)}
                                                className={`h-9 w-9 text-xs font-bold transition-all flex items-center justify-center ${bgClass}`}
                                            >
                                               {d}
                                           </button>
                                       );
                                   })}
                               </div>
                               <div className="mt-4 pt-4 border-t border-slate-50 text-center">
                                   <p className="text-[10px] text-slate-400 uppercase tracking-wider font-medium">
                                       {!dateRange.start ? "Select Check-in" : !dateRange.end ? "Select Check-out" : `${dateRange.end - dateRange.start} Nights Selected`}
                                   </p>
                               </div>
                           </div>
                       </div>

                       {/* 3. Travelers */}
                       <div className="relative group/field z-[20]">
                           <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2 pl-2">Who?</label>
                           <button 
                                type="button"
                                onClick={() => toggleField('travelers')}
                                className={`w-full text-left bg-white border border-slate-200 hover:border-[#f29100]/50 rounded-2xl px-5 py-4 flex items-center justify-between transition-all shadow-sm hover:shadow-md ${activeField === 'travelers' ? 'ring-2 ring-[#f29100]/20 border-[#f29100]' : ''}`}
                           >
                               <span className="font-bold text-sm text-[#222]">{selectedTravelers}</span>
                               <svg className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${activeField === 'travelers' ? 'rotate-180 text-[#f29100]' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                           </button>

                           {/* Dropdown Menu */}
                           <div className={`absolute top-full left-0 w-full mt-3 bg-white border border-slate-100 rounded-2xl shadow-xl z-50 overflow-hidden transition-all duration-300 origin-top ${activeField === 'travelers' ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                               {['1 Guest', '2 Guests', '4 Guests', 'Family (2+2)', 'Group (5+)'].map(opt => (
                                   <div 
                                        key={opt}
                                        onClick={() => { setSelectedTravelers(opt); setActiveField(null); }}
                                        className="p-3 hover:bg-[#fdf8f0] cursor-pointer transition-colors border-b border-slate-50 last:border-0 flex justify-between items-center group/item"
                                   >
                                       <p className="text-sm font-bold text-[#222]">{opt}</p>
                                       {selectedTravelers === opt && <svg className="w-4 h-4 text-[#f29100]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>}
                                   </div>
                               ))}
                           </div>
                       </div>

                       {/* 4. Budget (New Field) */}
                       <div className="relative group/field z-[10]">
                           <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2 pl-2">Budget?</label>
                           <button 
                                type="button"
                                onClick={() => toggleField('budget')}
                                className={`w-full text-left bg-white border border-slate-200 hover:border-[#f29100]/50 rounded-2xl px-5 py-4 flex items-center justify-between transition-all shadow-sm hover:shadow-md ${activeField === 'budget' ? 'ring-2 ring-[#f29100]/20 border-[#f29100]' : ''}`}
                           >
                               <span className={`font-bold text-sm truncate ${selectedBudget ? 'text-[#222]' : 'text-slate-400'}`}>
                                   {budgetOptions.find(b => b.value === selectedBudget)?.label || "Select Budget"}
                               </span>
                               <svg className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${activeField === 'budget' ? 'rotate-180 text-[#f29100]' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                           </button>

                           {/* Dropdown Menu */}
                           <div className={`absolute top-full right-0 md:right-auto md:left-0 w-[260px] md:w-full mt-3 bg-white border border-slate-100 rounded-2xl shadow-xl z-50 overflow-hidden transition-all duration-300 origin-top ${activeField === 'budget' ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                               {budgetOptions.map((opt) => (
                                   <div 
                                        key={opt.value}
                                        onClick={() => { setSelectedBudget(opt.value); setActiveField(null); }}
                                        className={`p-4 cursor-pointer transition-all border-b border-slate-50 last:border-0 group/item ${selectedBudget === opt.value ? 'bg-[#fff7ed]' : 'hover:bg-[#fdf8f0]'}`}
                                   >
                                       <div className="flex justify-between items-start">
                                            <div>
                                                <p className={`text-sm font-bold ${selectedBudget === opt.value ? 'text-[#f29100]' : 'text-[#222]'}`}>{opt.label}</p>
                                                <p className="text-[11px] text-slate-500 font-medium mt-0.5 group-hover/item:text-[#f29100]/80 transition-colors">{opt.sub}</p>
                                            </div>
                                            {selectedBudget === opt.value && <svg className="w-4 h-4 text-[#f29100]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>}
                                       </div>
                                   </div>
                               ))}
                           </div>
                       </div>

                   </div>
                   
                   {/* Modal Footer */}
                   <div className="p-6 md:p-8 bg-white border-t border-[#eecfaa]/20 flex flex-col md:flex-row justify-between items-center gap-4 rounded-b-[2rem]">
                       <p className="text-xs text-slate-400 text-center md:text-left">
                           *We'll craft a custom itinerary based on your preferences. No payment required yet.
                       </p>
                       <button className="w-full md:w-auto bg-[#f29100] hover:bg-[#d98200] text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-3">
                           Check Availability
                           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                       </button>
                   </div>

                </div>
        </div>
    </>
  );
};

export default BookingWidget;
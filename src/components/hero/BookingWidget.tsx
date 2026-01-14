import React, { useState } from 'react';
import { HeroDestination } from '../../types';

interface BookingWidgetProps {
  isBookingOpen: boolean;
  setIsBookingOpen: (isOpen: boolean) => void;
  destinations: HeroDestination[];
}

const BookingWidget: React.FC<BookingWidgetProps> = ({ isBookingOpen, setIsBookingOpen, destinations }) => {
  const [destinationOpen, setDestinationOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState("");
  
  const [travelersOpen, setTravelersOpen] = useState(false);
  const [selectedTravelers, setSelectedTravelers] = useState("2 Guests");

  const [dateOpen, setDateOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  // Simple Custom Calendar Logic
  const generateCalendarDays = () => {
    const days = [];
    for (let i = 1; i <= 31; i++) days.push(i);
    return days;
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
                <div className="absolute inset-0 bg-black/40" onClick={() => setIsBookingOpen(false)}></div>
                
                <div className={`w-full max-w-4xl bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-2xl transform transition-all duration-500 flex flex-col relative ${isBookingOpen ? 'scale-100 translate-y-0' : 'scale-90 translate-y-10'}`}>
                   
                   {/* Modal Header */}
                   <div className="flex justify-between items-center p-6 md:p-4 border-b border-slate-100 bg-slate-50/50 rounded-t-[2rem] md:rounded-t-[2.5rem]">
                       <div>
                            <span className="text-[#f29100] text-[10px] font-black uppercase tracking-widest">Plan Your Trip</span>
                            <h3 className="text-xl md:text-3xl font-serif font-black italic text-[#222]">Design Your Escape</h3>
                       </div>
                       <button onClick={() => setIsBookingOpen(false)} className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-slate-200 hover:bg-slate-100 hover:scale-110 transition-all text-slate-500">
                           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                       </button>
                   </div>

                   {/* Modal Body */}
                   <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 bg-white min-h-[100px]">
                       
                       {/* Custom Destination Dropdown */}
                       <div className="relative group/field z-[30]">
                           <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Where To?</label>
                           <button 
                                type="button"
                                onClick={() => { setDestinationOpen(!destinationOpen); setDateOpen(false); setTravelersOpen(false); }}
                                className={`w-full text-left bg-slate-50 border border-slate-200 hover:border-[#f29100] rounded-2xl px-5 py-4 flex items-center justify-between transition-all ${destinationOpen ? 'ring-2 ring-[#f29100]/20 border-[#f29100]' : ''}`}
                           >
                               <span className={`font-bold text-sm ${selectedDestination ? 'text-[#222]' : 'text-slate-400'}`}>
                                   {selectedDestination || "Select Region"}
                               </span>
                               <svg className={`w-4 h-4 text-slate-400 transition-transform ${destinationOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                           </button>

                           {/* Dropdown Menu */}
                           <div className={`absolute top-full left-0 w-full mt-2 bg-white border border-slate-100 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] z-50 overflow-hidden transition-all duration-300 origin-top ${destinationOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                               {destinations.map((dest) => (
                                   <div 
                                        key={dest.name} 
                                        onClick={() => { setSelectedDestination(dest.name); setDestinationOpen(false); }}
                                        className="flex items-center gap-3 p-3 hover:bg-slate-50 cursor-pointer transition-colors border-b border-slate-50 last:border-0"
                                   >
                                       <img src={dest.image} alt={dest.name} className="w-10 h-10 rounded-lg object-cover" />
                                       <div>
                                           <p className="text-sm font-bold text-[#222]">{dest.name}</p>
                                           <p className="text-[10px] text-slate-400 uppercase tracking-wider">{dest.country}</p>
                                       </div>
                                   </div>
                               ))}
                           </div>
                       </div>

                       {/* Custom Date Picker */}
                       <div className="relative group/field z-[20]">
                           <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">When?</label>
                           <button 
                                type="button"
                                onClick={() => { setDateOpen(!dateOpen); setDestinationOpen(false); setTravelersOpen(false); }}
                                className={`w-full text-left bg-slate-50 border border-slate-200 hover:border-[#f29100] rounded-2xl px-5 py-4 flex items-center justify-between transition-all ${dateOpen ? 'ring-2 ring-[#f29100]/20 border-[#f29100]' : ''}`}
                           >
                               <span className={`font-bold text-sm ${selectedDate ? 'text-[#222]' : 'text-slate-400'}`}>
                                   {selectedDate || "Select Dates"}
                               </span>
                               <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                           </button>

                           {/* Custom Calendar Dropdown */}
                           <div className={`absolute top-full left-0 w-full md:w-[320px] mt-2 bg-white border border-slate-100 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] z-50 p-5 transition-all duration-300 origin-top ${dateOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                               <div className="flex justify-between items-center mb-4">
                                   <span className="text-sm font-bold text-[#222]">June 2026</span>
                                   <div className="flex gap-2">
                                       <button className="p-1 hover:bg-slate-100 rounded"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg></button>
                                       <button className="p-1 hover:bg-slate-100 rounded"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></button>
                                   </div>
                               </div>
                               <div className="grid grid-cols-7 gap-1 text-center mb-2">
                                   {['S','M','T','W','T','F','S'].map((d, i) => <span key={i} className="text-[10px] text-slate-400 font-bold">{d}</span>)}
                               </div>
                               <div className="grid grid-cols-7 gap-1">
                                   {generateCalendarDays().map(d => (
                                       <button 
                                            key={d} 
                                            onClick={() => { setSelectedDate(`June ${d}`); setDateOpen(false); }}
                                            className="h-8 w-8 rounded-full text-xs font-medium text-slate-600 hover:bg-[#f29100] hover:text-white transition-colors flex items-center justify-center"
                                        >
                                           {d}
                                       </button>
                                   ))}
                               </div>
                           </div>
                       </div>

                       {/* Custom Travelers Dropdown */}
                       <div className="relative group/field z-[10]">
                           <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Who?</label>
                           <button 
                                type="button"
                                onClick={() => { setTravelersOpen(!travelersOpen); setDestinationOpen(false); setDateOpen(false); }}
                                className={`w-full text-left bg-slate-50 border border-slate-200 hover:border-[#f29100] rounded-2xl px-5 py-4 flex items-center justify-between transition-all ${travelersOpen ? 'ring-2 ring-[#f29100]/20 border-[#f29100]' : ''}`}
                           >
                               <span className="font-bold text-sm text-[#222]">{selectedTravelers}</span>
                               <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                           </button>

                           {/* Dropdown Menu */}
                           <div className={`absolute top-full left-0 w-full mt-2 bg-white border border-slate-100 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] z-50 overflow-hidden transition-all duration-300 origin-top ${travelersOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                               {['1 Guest', '2 Guests', '4 Guests', 'Family (2+2)', 'Group (5+)'].map(opt => (
                                   <div 
                                        key={opt}
                                        onClick={() => { setSelectedTravelers(opt); setTravelersOpen(false); }}
                                        className="p-3 hover:bg-slate-50 cursor-pointer transition-colors border-b border-slate-50 last:border-0"
                                   >
                                       <p className="text-sm font-bold text-[#222]">{opt}</p>
                                   </div>
                               ))}
                           </div>
                       </div>

                   </div>
                   
                   {/* Modal Footer */}
                   <div className="p-6 md:p-6 bg-slate-50 flex justify-end rounded-b-[2rem] md:rounded-b-[2.5rem]">
                       <button className="w-full md:w-auto bg-[#f29100] hover:bg-[#d98200] text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-sm shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3">
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
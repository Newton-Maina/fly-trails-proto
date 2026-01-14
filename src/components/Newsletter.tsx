import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <section className="py-24 bg-[#fdf8f0] px-6 md:px-24 section-overlap rounded-t-[3rem] md:rounded-t-[5rem] shadow-overlap z-20">
      <div className="max-w-[1440px] mx-auto text-center reveal-up">
        <h2 className="text-4xl md:text-6xl font-serif font-black italic text-[#222] mb-8">Adventure in Your Inbox</h2>
        <p className="text-slate-500 text-lg mb-12 max-w-2xl mx-auto">Get exclusive tour launches, early-bird pricing, and travel inspiration delivered weekly.</p>
        
        <form className="max-w-xl mx-auto flex flex-col md:flex-row gap-4">
          <input 
            type="email" 
            placeholder="YOUR EMAIL ADDRESS" 
            className="flex-1 px-8 py-4 rounded-full border border-slate-200 bg-white text-xs font-black uppercase tracking-widest focus:outline-none focus:border-[#f29100] transition-colors"
          />
          <button className="bg-[#0c3154] text-white px-10 py-4 rounded-full text-[13px] font-black uppercase tracking-widest shadow-xl hover:bg-slate-700 transition-all">
            SUBSCRIBE
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
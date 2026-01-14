import React from 'react';
import { featuredStory, sideStories } from '../data/stories';

const TravelStories: React.FC = () => {
  return (
    <section className="py-32 bg-[#fdf5e6] px-6 md:px-24 relative overflow-hidden section-overlap rounded-t-[3rem] md:rounded-t-[5rem] shadow-overlap z-20">
      {/* Background Blobs */}
      <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-[#f29100]/5 rounded-full blur-3xl opacity-60 parallax-layer" data-speed="0.2"></div>

      <div className="max-w-[1500px] mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-14 mb-16 md:mb-24 reveal-right">
          <h2 className="text-5xl md:text-8xl font-serif font-black italic text-[#222]">Safari Journal</h2>
          <button className="bg-[#0c3154] text-white px-12 py-4 rounded-full text-[14px] font-black uppercase tracking-[0.25em] hover:bg-slate-700 transition-all shadow-xl">
            VIEW ALL STORIES
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
          {/* Featured Story */}
          <div className="relative group cursor-pointer reveal-zoom">
            <div className="overflow-hidden rounded-sm shadow-2xl h-[400px] md:h-[550px]">
              <img 
                src={featuredStory.imageUrl} 
                alt={featuredStory.title} 
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
              />
            </div>
            <div className="absolute -bottom-12 -left-4 bg-white p-8 md:p-12 shadow-2xl rounded-sm border-l-[8px] border-[#e11d48] max-w-[95%]">
              <span className="inline-block text-[#888] text-[11px] font-black uppercase tracking-widest mb-4">By {featuredStory.author}</span>
              <h3 className="text-2xl md:text-3xl font-black text-[#222] mb-4 leading-tight group-hover:text-[#f29100] transition-colors">{featuredStory.title}</h3>
              <p className="text-[#666] text-base leading-relaxed mb-8 line-clamp-3">{featuredStory.desc}</p>
              <a href="#" className="flex items-center gap-4 text-[#e11d48] font-black text-[13px] uppercase tracking-widest hover:underline group/link">
                 <span className="w-6 h-6 rounded-full border-[2.5px] border-[#e11d48] flex items-center justify-center text-[11px] leading-none transition-transform group-hover/link:translate-x-1">➔</span>
                 Read Story
              </a>
            </div>
          </div>

          {/* List side stories */}
          <div className="flex flex-col gap-14 lg:pt-0 pt-32 reveal-up" style={{ transitionDelay: '300ms' }}>
            {sideStories.map((story, i) => (
              <div key={i} className="border-t-[1.5px] border-slate-200 pt-10 group cursor-pointer first:border-t-0 first:pt-0">
                <span className="inline-block bg-[#e11d48] text-white text-[10px] font-black px-4 py-1.5 rounded-sm uppercase tracking-[0.2em] mb-5 shadow-sm">
                  {story.author}
                </span>
                <h4 className="text-2xl font-black text-[#222] mb-4 group-hover:text-[#f29100] transition-colors leading-tight">{story.title}</h4>
                <p className="text-[#666] text-[15px] leading-relaxed mb-6 line-clamp-2">{story.desc}</p>
                <a href="#" className="flex items-center gap-4 text-[#e11d48] font-black text-[13px] uppercase tracking-widest group/link">
                   <span className="w-6 h-6 rounded-full border-[2.5px] border-[#e11d48] flex items-center justify-center text-[11px] leading-none transition-transform group-hover/link:translate-x-1">➔</span>
                   Read more
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelStories;
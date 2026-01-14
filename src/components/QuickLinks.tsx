import React from 'react';

const links = [
  { label: "Mes Démarches", icon: "briefcase", color: "text-slate-500" },
  { label: "Numéros Utiles", icon: "phone", color: "text-slate-500" },
  { label: "Associations", icon: "group", color: "text-[#e11d48]" },
  { label: "Portail Famille", icon: "home", color: "text-[#e11d48]" },
  { label: "Publications Légales", icon: "document", color: "text-slate-500" }
];

const Icon: React.FC<{ type: string; color: string }> = ({ type, color }) => {
  const sizeClass = "w-10 h-10";
  switch(type) {
    case 'briefcase': return <svg className={`${sizeClass} ${color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>;
    case 'phone': return <svg className={`${sizeClass} ${color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>;
    case 'group': return <svg className={`${sizeClass} ${color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>;
    case 'home': return <svg className={`${sizeClass} ${color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>;
    case 'document': return <svg className={`${sizeClass} ${color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>;
    default: return null;
  }
};

const QuickLinks: React.FC = () => {
  return (
    <section className="bg-white py-20 px-4 relative z-30">
      <div className="max-w-[1400px] mx-auto flex flex-wrap justify-center gap-8 md:gap-12">
        {links.map((link, idx) => (
          <div key={idx} className="flex flex-col items-center gap-6 group cursor-pointer w-44">
            <div className="w-28 h-28 flex items-center justify-center rounded-full border-[1.5px] border-slate-100 bg-white shadow-md transition-all group-hover:shadow-lg">
              <Icon type={link.icon} color={link.color} />
            </div>
            <span className="text-[13px] font-bold text-[#333] text-center uppercase tracking-wider">
              {link.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuickLinks;
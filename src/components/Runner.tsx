"use client"
import React from 'react';
import Portal from './portal';
// adjust path to wherever MISSIONS lives

const MISSIONS = [
  {
    area: "cr",
    variant: "hero",
    category: "Hackathon",
    group: "Technical",
    title: "CodeRush",
    subtitle: "24-Hour Hackathon",
    description:
      "50 Teams. 24 Hours. Dive into a full-day innovation sprint where ideas turn into impactful tech solutions. Build, debug, and deliver under pressure.",
    icon: "💻",
    fee: "₹2000",
    mode: "Offline",
    difficulty: "MAXIMUM THREAT",
    agents: "Team of 3-5",
    reward: "₹70,000",
    formLink: "", // no link provided for Hackathon (CodeRush) yet
  },
  {
    area: "bc",
    variant: "wide",
    category: "Competition",
    group: "Sports",
    title: "Box Cricket",
    subtitle: "Turf Battle",
    description: "Short-format cricket matches packed with excitement and energy.",
    icon: "🏏",
    fee: "₹550",
    mode: "Offline",
    difficulty: "Medium",
    agents: "6/team + 2 subs",
    reward: "₹5000",
    formLink: "https://forms.gle/HcRPxVj5PKsxsmix9",
  },
  {
    area: "aw",
    variant: "compact",
    category: "Competition",
    group: "Sports",
    title: "Free Fire",
    subtitle: "Test your Strength",
    description: "Squad up and drop into the battlegrounds — last one standing takes it all.",
    icon: "💪",
    fee: "₹150",
    mode: "Offline",
    difficulty: "Medium",
    agents: "Individual",
    reward: "₹4000",
    formLink: "https://forms.gle/NdV79yRLNjcgRhX2A",
  },
  {
    area: "bg",
    variant: "compact",
    category: "Competition",
    group: "Sports",
    title: "BGMI: BattleZone",
    subtitle: "Ultimate Survival",
    description: "Drop in, gear up, and outlast every squad in the shrinking zone.",
    icon: "🎮",
    fee: "₹200",
    mode: "Online",
    difficulty: "Easy",
    agents: "Team of 4",
    reward: "₹2500",
    formLink: "https://forms.gle/6MjM5JvksHf2hoVdA",
  },
  {
    area: "vs",
    variant: "compact",
    category: "Competition",
    group: "Sports",
    title: "Chess",
    subtitle: "Battle of the Masterminds",
    description: "A quiet board, a loud mind — outthink your opponent move by move.",
    icon: "⚔️",
    fee: "₹150",
    mode: "Offline",
    difficulty: "Medium",
    agents: "Team of 2",
    reward: "₹2000",
    formLink: "https://forms.gle/RpwdEMgFRFjpA2fr7",
  },
  {
    area: "vi",
    variant: "compact",
    category: "Hackathon",
    group: "Technical",
    title: "Hack ML",
    subtitle: "AI & ML expertise",
    description: "Train, tune, and deploy models to crack real-world ML challenges.",
    icon: "👁️",
    fee: "₹150",
    mode: "Offline",
    difficulty: "Medium",
    agents: "Team of 2",
    reward: "₹3000",
    formLink: "https://forms.gle/wnM6PjNczkuyiVjH7",
  },
  {
    area: "pa",
    variant: "wide  ",
    category: "Hackathon",
    group: "Technical",
    title: "Prompt-a-Thon",
    subtitle: "Master the Art of Prompt",
    description: "Craft the sharpest prompts to push AI models to their creative limits.",
    icon: "🪄",
    fee: "₹50",
    mode: "Offline",
    difficulty: "Easy",
    agents: "Individual",
    reward: "₹5000",
    formLink: "https://forms.gle/SK1acedBVdL92TNq5",
  },
  {
    area: "qz",
    variant: "compact",
    category: "Quiz",
    group: "Technical",
    title: "Tech Quiz",
    subtitle: "Learn from the Best",
    description: "Industry professionals share real-world experiences and insights.",
    icon: "🧠",
    fee: "₹150",
    mode: "Offline",
    difficulty: "Easy",
    agents: "Team of 2-3",
    reward: "₹4500",
    formLink: "https://forms.gle/S3zABit4vWWVP6v99",
  },
  {
    area: "vx",
    variant: "compact",
    category: "Competition",
    group: "Technical",
    title: "Versus Coding",
    subtitle: "Battle of the Coders",
    description: "Head-to-head coding duels under the clock — fastest, cleanest code wins.",
    icon: "⚔️",
    fee: "₹150",
    mode: "Offline",
    difficulty: "Medium",
    agents: "Team of 2",
    reward: "₹3500",
    formLink: "https://forms.gle/LZ9T8FoB2h32cRPd6",
  },
];

function Runner() {
  return (
    <div className='w-full'>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-slow-marquee { animation: marquee 20s linear infinite; }
      `}</style>

      {/* Marquee Section */}
      <div className="w-full h-12 bg-green-600 border-t-4 border-green-800 overflow-hidden flex items-end">
        <div className="flex animate-slow-marquee whitespace-nowrap gap-4 px-4">
          {[...Array(40)].map((_, i) => (
            <div key={i} className="w-8 h-8 bg-green-500 mb-2 opacity-50 flex-shrink-0"></div>
          ))}
          {[...Array(40)].map((_, i) => (
            <div key={`copy-${i}`} className="w-8 h-8 bg-green-500 mb-2 opacity-50 flex-shrink-0"></div>
          ))}
        </div>
      </div>

      {/* Events Section */}
      <div
        className='w-full min-h-screen bg-red-100 bg-cover bg-center py-10'
        style={{ backgroundImage: "url('/bg-dirt.png')" }}
      >
        <h1 className='text-5xl text-white text-center mb-10 mt-20' style={{ fontFamily: "MineCraft" }}>
          Events
        </h1>

        <div className='flex items-center justify-center flex-wrap gap-10 w-full p-10'>
          {MISSIONS.map((mission) => (
            <Portal key={mission.area} mission={mission} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Runner;
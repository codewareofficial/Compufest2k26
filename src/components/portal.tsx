import React from 'react';

interface Mission {
  area: string;
  variant: string;
  category: string;
  group: string;
  title: string;
  subtitle?: string;
  description?: string;
  icon: string;
  fee?: string;
  mode?: string;
  difficulty: string;
  agents?: string;
  reward: string;
  formLink: string;
}

interface EventCardProps {
  mission: Mission;
  imageUrl?: string;
}

const DIFFICULTY_COLOR: Record<string, string> = {
  Easy: "text-green-400",
  Medium: "text-yellow-400",
  "MAXIMUM THREAT": "text-red-500",
};

const EventCard = ({ mission, imageUrl = "/portal.png" }: EventCardProps) => {
  const {
    title,
    subtitle,
    description,
    icon,
    fee,
    mode,
    difficulty,
    agents,
    reward,
    formLink,
  } = mission;

  const hasLink = Boolean(formLink);

  return (
    <div className="group relative w-90 h-[500px] border-[30px] border-[#1a1a1a] bg-black shadow-[0_0_20px_rgba(147,51,234,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(147,51,234,0.8)] overflow-hidden font-['Minecraft']">

      {/* Animated Portal Background */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-pulse opacity-70"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-between h-full p-6 bg-black/60 backdrop-blur-sm text-white">

        <div className="text-center">
          <div className="text-3xl mb-1">{icon}</div>
          <h1 className="text-3xl font-bold tracking-widest text-white drop-shadow-[0_2px_2px_rgba(147,51,234,1)] mb-2">
            {title.toUpperCase()}
          </h1>
          {subtitle && (
            <span className="inline-block bg-purple-700 px-3 py-1 text-xs uppercase font-bold tracking-tighter">
              {subtitle}
            </span>
          )}
        </div>

        {description && (
          <p className="text-xs text-gray-200 text-center leading-relaxed px-2">
            {description}
          </p>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 w-full text-[10px] bg-black/40 p-3 border-2 border-purple-900/50">
          <div><p className="text-purple-400">💰 FEE</p><p>{fee}</p></div>
          <div><p className="text-purple-400">📍 MODE</p><p>{mode}</p></div>
          <div className="col-span-2 text-center">
            <p className={`font-bold ${DIFFICULTY_COLOR[difficulty] || "text-red-500"}`}>
              ⚠️ {difficulty}
            </p>
          </div>
          <div><p className="text-purple-400">🧑‍🤝‍🧑 TEAM</p><p>{agents}</p></div>
          <div><p className="text-purple-400">🏆 REWARD</p><p>{reward}</p></div>
        </div>

        {/* CTA Button */}
        {hasLink ? (
          <a href={formLink} target="_blank" rel="noopener noreferrer" className="w-full">
            <button className="w-full bg-gradient-to-r from-purple-800 to-purple-600 border-b-4 border-purple-900 hover:brightness-125 transition-all active:border-b-0 active:translate-y-1 flex items-center justify-center p-2">
              <span className="text-sm font-bold">ENTER THE PORTAL →</span>
            </button>
          </a>
        ) : (
          <button
            disabled
            className="w-full bg-gray-700 border-b-4 border-gray-800 opacity-60 cursor-not-allowed flex items-center justify-center p-2"
          >
            <span className="text-sm font-bold">COMING SOON</span>
          </button>
        )}

      </div>
    </div>
  );
};

export default EventCard;
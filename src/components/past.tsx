'use client';

import React from 'react';

/* ─── Past-events data ──────────────────────────────────────────────── */
const PAST_EVENTS = [
  { img: '/2k25 memories/2.webp' },
  { img: '/2k25 memories/3.webp' },
  { img: '/2k25 memories/4.webp' },
  { img: '/2k25 memories/6.webp' },
  { img: '/2k25 memories/7.webp' },
  { img: '/2k25 memories/9.webp' },
  { img: '/2k25 memories/10.webp' },
  { img: '/2k25 memories/11.webp' },
  { img: '/2k25 memories/12.webp' },
  { img: '/2k25 memories/13.webp' },
  { img: '/2k25 memories/14.webp' },
  { img: '/2k25 memories/15.webp' },
  { img: '/2k25 memories/16.webp' },
  { img: '/2k25 memories/17.webp' },
  { img: '/2k25 memories/18.webp' },
  { img: '/2k25 memories/19.webp' },
  { img: '/2k25 memories/20.webp' },
  { img: '/2k25 memories/21.webp' },
  { img: '/2k25 memories/22.webp' },
  { img: '/2k25 memories/23.webp' },
  { img: '/2k25 memories/24.webp' },
  { img: '/2k25 memories/25.webp' },
  { img: '/2k25 memories/26.webp' },
];

/* Exactly two copies back-to-back so translate(-50%) is one seamless
   loop. Only a handful of leading cards are eager-loaded; everything
   else is lazy, so we're not forcing 46 decodes up front. */
const ROW_ITEMS = [...PAST_EVENTS, ...PAST_EVENTS];

/* ─── Single card ─────────────────────────────────────────────────────
   Explicit width/height so the browser doesn't reflow while images
   stream in. loading/decoding hints keep image work off the critical
   path so the compositor thread (which drives the animation) never
   stalls waiting on the main thread.                                */
function EventCard({
  ev,
  eager,
}: {
  ev: (typeof PAST_EVENTS)[0];
  eager?: boolean;
}) {
  return (
    <div
      className="relative flex-shrink-0 w-56 h-36 md:w-72 md:h-44 rounded-xl overflow-hidden select-none"
      style={{ border: '2px solid rgba(168,85,247,0.4)' }}
    >
      <img
        src={ev.img}
        alt=""
        width={288}
        height={176}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        className="w-full h-full object-cover"
        draggable={false}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
    </div>
  );
}

/* ─── GPU-accelerated marquee row ────────────────────────────────────
   Pure CSS transform animation (translate3d), which runs on the
   compositor thread — not the layout/paint thread — so it stays
   smooth regardless of how many images are on screen. This is the
   thing that was actually causing the lag with <marquee>: browsers
   implement it via repeated reflows, which gets expensive fast at
   this image count. `will-change: transform` hints the browser to
   promote the track to its own GPU layer up front.                  */
function MarqueeRow({
  reverse,
  duration = 40,
}: {
  reverse?: boolean;
  duration?: number;
}) {
  const wrapRef = React.useRef<HTMLDivElement>(null);
  const trackRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const wrap = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track) return;

    // Pause when off-screen so it doesn't burn GPU/battery in the background.
    const io = new IntersectionObserver(
      ([entry]) => {
        track.style.animationPlayState = entry.isIntersecting ? 'running' : 'paused';
      },
      { threshold: 0 }
    );
    io.observe(wrap);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrapRef} className="overflow-hidden w-full">
      <div
        ref={trackRef}
        className="flex gap-4 w-max"
        style={{
          animation: `compufest-marquee ${duration}s linear infinite`,
          animationDirection: reverse ? 'reverse' : 'normal',
          willChange: 'transform',
          backfaceVisibility: 'hidden',
        }}
      >
        {ROW_ITEMS.map((ev, i) => (
          <EventCard key={i} ev={ev} eager={i < 6} />
        ))}
      </div>
    </div>
  );
}

/* ─── Main export ───────────────────────────────────────────────────── */
export default function Past() {
  return (
    <>
      <style>{`
        @keyframes marquee {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-50%, 0, 0); }
        }
        .animate-slow-marquee { animation: marquee 20s linear infinite; }

        @keyframes compufest-marquee {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(-50%, 0, 0); }
        }
      `}</style>

      {/* Header / Video Section */}
      <div className='h-40 flex w-full relative'>

        <div className='h-40 w-full'>
          <img src="./31.png" className="object-cover h-full w-full"></img>
        </div>

         <div className='h-40 w-full '>
          <img src="/31.png" className="object-cover   h-full w-full"></img>
        </div>

         <div className='h-40 w-full '>
          <img src="./32.png" className="object-cover   h-full w-full"></img>
        </div>

          <div className='h-40 w-full '>
          <img src="./31.png" className="object-cover   h-full w-full"></img>
        </div>
      </div>

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

    <section
      className="w-full py-20 overflow-hidden relative"
      style={{
        background: 'linear-gradient(180deg, #0a0a1a 0%, #120820 50%, #0a0a1a 100%)',
        borderTop: '3px solid rgba(168,85,247,0.35)',
        borderBottom: '3px solid rgba(168,85,247,0.35)',
      }}
    >
      {/* Ambient glow blobs */}
      <div
        className="pointer-events-none absolute -top-20 left-1/4 w-96 h-96 rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, #7c3aed, transparent 70%)' }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-15"
        style={{ background: 'radial-gradient(circle, #4f46e5, transparent 70%)' }}
      />

      {/* Header */}
      <div className="text-center mb-12 px-4">
        <p className="text-xs tracking-[0.3em] uppercase text-purple-400 mb-3" style={{ fontFamily: 'MineCraft' }}>
          Relive the legacy
        </p>
        <h2
          className="text-3xl md:text-5xl text-white"
          style={{ fontFamily: 'MineCraft', textShadow: '3px 3px 0 #000, 0 0 30px rgba(168,85,247,0.5)' }}
        >
          Past Events
        </h2>
        <div
          className="mx-auto mt-4 w-24 h-1 rounded-full"
          style={{ background: 'linear-gradient(90deg, transparent, #a855f7, transparent)' }}
        />
      </div>

      {/* Row 1 — scrolls left to right */}
      <div className="mb-5">
        <MarqueeRow duration={45} />
      </div>

      {/* Row 2 — scrolls right to left */}
      <div>
        <MarqueeRow reverse duration={45} />
      </div>
    </section>
    </>
  );
}
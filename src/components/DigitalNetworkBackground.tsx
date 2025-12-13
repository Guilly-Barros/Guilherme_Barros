import { useEffect, useRef } from 'react';

const DigitalNetworkBackground = ({ className = '' }: { className?: string }) => {
  const layerRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const el = layerRef.current;
    if (!el) return;

    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
    if (reduceMotion) return;

    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX / window.innerWidth;
      mouse.current.y = e.clientY / window.innerHeight;
    };

    window.addEventListener('mousemove', onMove, { passive: true });

    const start = performance.now();
    const amplitude = 18;
    const speed = 0.0006;
    const parallaxAmp = 10;

    const tick = (now: number) => {
      const t = now - start;
      const baseX = Math.sin(t * speed) * amplitude;
      const parallaxX = (mouse.current.x - 0.5) * parallaxAmp;

      el.style.transform = `translate3d(${baseX + parallaxX}px, 0, 0)`;
      raf.current = requestAnimationFrame(tick);
    };

    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden>
      <div
        className="floating-shape animate-float w-72 h-72 -top-24 -right-8"
        style={{ background: 'linear-gradient(135deg, hsl(48 96% 60% / 0.16) 0%, hsl(48 96% 53% / 0.1) 100%)' }}
      />

      <div
        className="floating-shape animate-float-delayed w-96 h-96 -bottom-32 -left-24"
        style={{ background: 'linear-gradient(135deg, hsl(48 96% 62% / 0.14) 0%, hsl(48 96% 53% / 0.08) 100%)' }}
      />

      <div
        className="floating-shape animate-float-slow w-60 h-60 top-1/3 right-10"
        style={{ background: 'radial-gradient(circle at 30% 30%, hsl(48 96% 65% / 0.18), transparent 60%)' }}
      />

      <div
        ref={layerRef}
        className="pointer-events-none absolute inset-0 z-0 will-change-transform"
      >
        <svg className="absolute inset-0 w-full h-full opacity-[0.14]" viewBox="0 0 1440 900" xmlns="http://www.w3.org/2000/svg" role="presentation">
          <defs>
            <linearGradient id="digital-network-stroke" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="hsl(48 96% 70%)" stopOpacity="0.55" />
              <stop offset="100%" stopColor="hsl(48 96% 53%)" stopOpacity="0.45" />
            </linearGradient>
            <radialGradient id="digital-network-node" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="hsl(48 96% 70%)" stopOpacity="0.9" />
              <stop offset="100%" stopColor="hsl(48 96% 53%)" stopOpacity="0.15" />
            </radialGradient>
          </defs>

          <g stroke="url(#digital-network-stroke)" strokeWidth="1.5" strokeLinecap="round" fill="none">
            <path d="M80 640 L260 520 L420 600 L620 480 L820 560 L1040 460 L1260 560" />
            <path d="M140 360 L320 300 L520 360 L660 260 L880 320 L1100 260 L1300 340" strokeDasharray="6 10" />
            <path d="M220 820 L420 700 L640 760 L860 660 L1080 720 L1260 640" />
            <path d="M180 200 L360 140 L560 200 L760 140 L960 220 L1180 160 L1360 220" strokeDasharray="8 12" />
            <path d="M300 520 L420 380 L600 420 L760 320 L940 380 L1120 340" />
          </g>

          <g fill="url(#digital-network-node)">
            {[{ x: 260, y: 520 }, { x: 420, y: 600 }, { x: 620, y: 480 }, { x: 820, y: 560 }, { x: 1040, y: 460 }, { x: 1260, y: 560 }, { x: 320, y: 300 }, { x: 660, y: 260 }, { x: 880, y: 320 }, { x: 1100, y: 260 }, { x: 420, y: 700 }, { x: 640, y: 760 }, { x: 860, y: 660 }, { x: 1080, y: 720 }].map((node) => (
              <circle key={`${node.x}-${node.y}`} cx={node.x} cy={node.y} r="8" />
            ))}
          </g>

          <g fill="hsl(48 96% 70% / 0.45)">
            {[{ x: 120, y: 620 }, { x: 340, y: 420 }, { x: 540, y: 540 }, { x: 740, y: 430 }, { x: 980, y: 520 }, { x: 1220, y: 420 }, { x: 300, y: 180 }, { x: 520, y: 180 }, { x: 960, y: 180 }, { x: 1180, y: 220 }].map((dot) => (
              <circle key={`${dot.x}-${dot.y}`} cx={dot.x} cy={dot.y} r="3" />
            ))}
          </g>
        </svg>
      </div>
    </div>
  );
};

export default DigitalNetworkBackground;

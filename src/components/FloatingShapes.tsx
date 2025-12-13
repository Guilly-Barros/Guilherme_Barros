const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Shape 1 - Top right */}
      <div 
        className="floating-shape animate-float w-64 h-64 -top-20 -right-20"
        style={{ background: 'linear-gradient(135deg, hsl(210 100% 45% / 0.15) 0%, hsl(200 100% 50% / 0.1) 100%)' }}
      />
      
      {/* Shape 2 - Bottom left */}
      <div 
        className="floating-shape animate-float-delayed w-96 h-96 -bottom-40 -left-40"
        style={{ background: 'linear-gradient(135deg, hsl(200 100% 50% / 0.1) 0%, hsl(210 100% 45% / 0.15) 100%)' }}
      />
      
      {/* Shape 3 - Center right */}
      <div 
        className="floating-shape animate-float-slow w-48 h-48 top-1/3 right-10"
        style={{ background: 'linear-gradient(135deg, hsl(210 100% 45% / 0.1) 0%, hsl(200 100% 50% / 0.05) 100%)' }}
      />
      
      {/* Small decorative circles */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-primary/20 animate-pulse-glow" />
      <div className="absolute top-2/3 right-1/3 w-3 h-3 rounded-full bg-accent/20 animate-pulse-glow" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-primary/30 animate-pulse-glow" style={{ animationDelay: '2s' }} />
      
      {/* Tech grid lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
};

export default FloatingShapes;

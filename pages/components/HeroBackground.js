export default function HeroBackground({ className = '' }) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {/* Primary aurora blob — top-left, dominant teal */}
      <div
        className="absolute rounded-full animate-aurora-1"
        style={{
          width: '75%',
          height: '75%',
          top: '-30%',
          left: '-15%',
          background:
            'radial-gradient(ellipse, rgba(6,182,212,0.16) 0%, rgba(6,182,212,0.06) 40%, transparent 70%)',
          filter: 'blur(72px)',
          willChange: 'transform',
        }}
      />

      {/* Secondary blob — center-right, deeper blue-teal */}
      <div
        className="absolute rounded-full animate-aurora-2"
        style={{
          width: '60%',
          height: '60%',
          top: '5%',
          right: '-20%',
          background:
            'radial-gradient(ellipse, rgba(8,145,178,0.12) 0%, rgba(8,145,178,0.04) 50%, transparent 70%)',
          filter: 'blur(90px)',
          willChange: 'transform',
        }}
      />

      {/* Tertiary blob — bottom-center, subtle accent */}
      <div
        className="absolute rounded-full animate-aurora-3"
        style={{
          width: '50%',
          height: '50%',
          bottom: '-20%',
          left: '20%',
          background:
            'radial-gradient(ellipse, rgba(14,165,233,0.09) 0%, transparent 65%)',
          filter: 'blur(80px)',
          willChange: 'transform',
        }}
      />

      {/* Subtle dot grid texture */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(rgba(6,182,212,0.08) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Vignette — keeps edges dark */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, oklch(0.09 0.008 195) 100%)',
        }}
      />
    </div>
  );
}

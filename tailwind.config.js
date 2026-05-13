/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tx: {
          bg:         'oklch(0.09 0.008 195)',
          surface:    'oklch(0.13 0.008 195)',
          border:     'oklch(0.20 0.010 195)',
          brand:      'oklch(0.65 0.14 195)',
          'brand-dim':'oklch(0.45 0.10 195)',
          text:       'oklch(0.94 0.005 195)',
          muted:      'oklch(0.55 0.005 195)',
          faint:      'oklch(0.28 0.008 195)',
        },
        // legacy compat
        secondary:    '#06B6D4',
        neon_green:   '#06B6D4',
        light:        '#EEEEEE',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        sans:    ['var(--font-body)',    'sans-serif'],
      },
      animation: {
        'float':       'float 6s ease-in-out infinite',
        'aurora-1':    'aurora1 14s ease-in-out infinite',
        'aurora-2':    'aurora2 18s ease-in-out infinite',
        'aurora-3':    'aurora3 11s ease-in-out infinite',
        'glow-pulse':  'glowPulse 3s ease-in-out infinite',
        'spin-slow':   'spin 20s linear infinite',
        'fade-in-up':  'fadeInUp 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-18px)' },
        },
        aurora1: {
          '0%,100%': { transform: 'translate(0,0) scale(1)',       opacity: '0.70' },
          '33%':     { transform: 'translate(4%,3%) scale(1.08)',   opacity: '0.90' },
          '66%':     { transform: 'translate(-3%,5%) scale(0.96)',  opacity: '0.80' },
        },
        aurora2: {
          '0%,100%': { transform: 'translate(0,0) scale(1)',       opacity: '0.55' },
          '40%':     { transform: 'translate(-5%,-4%) scale(1.1)', opacity: '0.75' },
          '70%':     { transform: 'translate(3%,-6%) scale(1.05)', opacity: '0.65' },
        },
        aurora3: {
          '0%,100%': { transform: 'translate(0,0) scale(1)',       opacity: '0.45' },
          '50%':     { transform: 'translate(-3%,4%) scale(1.07)', opacity: '0.65' },
        },
        glowPulse: {
          '0%,100%': { boxShadow: '0 0 20px rgba(6,182,212,0.25)' },
          '50%':     { boxShadow: '0 0 45px rgba(6,182,212,0.55)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'grid-faint': `linear-gradient(rgba(6,182,212,0.03) 1px, transparent 1px),
                       linear-gradient(90deg, rgba(6,182,212,0.03) 1px, transparent 1px)`,
      },
      backgroundSize: {
        'grid-60': '60px 60px',
      },
      boxShadow: {
        'brand-sm':  '0 0 16px rgba(6,182,212,0.20)',
        'brand-md':  '0 0 32px rgba(6,182,212,0.30)',
        'brand-lg':  '0 0 60px rgba(6,182,212,0.40)',
        'card':      '0 1px 3px rgba(0,0,0,0.4), 0 0 0 1px oklch(0.20 0.010 195)',
        'card-hover':'0 4px 24px rgba(0,0,0,0.5), 0 0 0 1px oklch(0.65 0.14 195 / 0.3)',
      },
    },
  },
  plugins: [],
};

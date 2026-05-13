import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Timer, BarChart2, ShieldCheck, Smartphone, ArrowRight } from 'lucide-react';
import HeroBackground from '../components/HeroBackground';

const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: 'blur(6px)' },
  show:   { opacity: 1, y: 0,  filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 80, damping: 18 } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

const highlights = [
  { icon: Timer,      title: 'Pre-open Timers',      desc: 'Pause apps before you fall into the rabbit hole.' },
  { icon: BarChart2,  title: 'Usage Reports',        desc: 'Daily and weekly breakdowns, at a glance.' },
  { icon: ShieldCheck, title: 'No Data Sold',        desc: 'Your habits stay private. Always.' },
  { icon: Smartphone, title: 'Android 8+',           desc: 'Works on most Android phones without root.' },
];

export default function Download() {
  return (
    <div className="bg-tx-bg text-tx-text">

      {/* ── HERO ── */}
      <section className="relative min-h-[60vh] flex flex-col items-center justify-center text-center px-6 pt-28 pb-20 overflow-hidden">
        <HeroBackground />
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-2xl"
        >
          <motion.p variants={fadeUp} className="text-tx-brand text-sm font-semibold tracking-widest uppercase mb-4">
            Free download
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-display text-5xl md:text-6xl font-800 text-tx-text leading-tight"
            style={{ fontWeight: 800 }}
          >
            Take back your time
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-5 text-tx-muted text-lg leading-relaxed">
            One tap is all it takes. TimerX is free, requires no account, and starts working immediately.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10">
            <Link
              href="https://play.google.com/store/apps/details?id=com.equinoxdev.timerx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:opacity-90 transition-opacity hover:scale-105 duration-200"
            >
              <Image
                src="/images/google-play-badge.svg"
                alt="Get it on Google Play"
                width={220}
                height={66}
                className="mx-auto"
                style={{
                  filter: 'drop-shadow(0 0 24px rgba(6,182,212,0.35))',
                }}
              />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ── FEATURE HIGHLIGHTS ── */}
      <section className="py-20 px-6 md:px-12 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="flex gap-4 p-5 rounded-2xl"
              style={{
                background: 'oklch(0.13 0.008 195)',
                border: '1px solid oklch(0.20 0.010 195)',
              }}
            >
              <div
                className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ background: 'oklch(0.65 0.14 195 / 0.12)' }}
              >
                <h.icon size={18} className="text-tx-brand" />
              </div>
              <div>
                <h3 className="font-display font-700 text-tx-text mb-1" style={{ fontWeight: 700 }}>{h.title}</h3>
                <p className="text-tx-muted text-sm leading-relaxed">{h.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── TRANSPARENCY / ACCESSIBILITY PERMISSION ── */}
      <section className="py-16 px-6 md:px-12 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl p-8 md:p-10"
          style={{
            background: 'oklch(0.11 0.008 195)',
            border: '1px solid oklch(0.20 0.010 195)',
          }}
        >
          <h2 className="font-display text-2xl font-700 text-tx-text mb-2" style={{ fontWeight: 700 }}>
            Before you install
          </h2>
          <p className="text-tx-muted text-sm mb-6 leading-relaxed">
            TimerX will ask for Accessibility Service permission during setup. Here&apos;s exactly what that means — and what it doesn&apos;t.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'oklch(0.72 0.18 25)' }}>
                What we DON&apos;T do
              </p>
              <ul className="space-y-2.5">
                {[
                  'Read your screen content or keystrokes',
                  'Access passwords, messages, or financial data',
                  'Collect or sell personal information',
                  'Upload your data to any server',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-tx-muted">
                    <span className="flex-shrink-0 mt-0.5 font-bold" style={{ color: 'oklch(0.72 0.18 25)' }}>✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-3 text-tx-brand">
                What we DO
              </p>
              <ul className="space-y-2.5">
                {[
                  'Detect which app is in the foreground',
                  'Show overlays and timers at the right moment',
                  'Collect anonymous crash and usage analytics',
                  'Store all your timer data locally on-device',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-tx-muted">
                    <span className="flex-shrink-0 mt-0.5 font-bold text-tx-brand">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 pt-6" style={{ borderTop: '1px solid oklch(0.20 0.010 195)' }}>
            <Link
              href="/privacy-policy"
              className="inline-flex items-center gap-1.5 text-sm text-tx-brand hover:opacity-80 transition-opacity"
            >
              Read the full Privacy Policy <ArrowRight size={13} />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

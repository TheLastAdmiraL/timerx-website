import HeroBackground from './components/HeroBackground';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Timer, BarChart2, ShieldCheck, Brain,
  Clock, CheckCircle2, ArrowRight,
} from 'lucide-react';

/* ─── animation helpers ──────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 32, filter: 'blur(6px)' },
  show:   { opacity: 1, y: 0,  filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 80, damping: 18 } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };

/* ─── data ───────────────────────────────────────────── */
const features = [
  {
    icon: Brain,
    title: 'Ask AI Reason Unlock',
    desc: 'When your timer runs out, TimerX asks why you want to open the app. A good reason earns you more time. No good reason? You get a nudge to close it.',
    highlight: true,
    image: '/images/reason-unlock-screen.png',
  },
  {
    icon: Timer,
    title: 'Pre-open Wait Screen',
    desc: 'Before a monitored app launches, a brief pause gives your brain a moment to reconsider. 5 seconds can break a habit loop.',
    highlight: false,
    image: '/overlay-screen.gif',
  },
  {
    icon: BarChart2,
    title: 'Usage Analytics',
    desc: 'See daily and weekly breakdowns of every app you track. Spot patterns, measure improvement, stay honest with yourself.',
    highlight: false,
    image: null,
  },
  {
    icon: ShieldCheck,
    title: 'Privacy First',
    desc: 'Everything stays on your phone. We use Accessibility Service only to show overlays — we never read screen content or personal data.',
    highlight: false,
    image: null,
  },
];

const steps = [
  { num: '01', icon: Clock,        title: 'Pick your apps',      desc: 'Choose the apps you want to limit — social media, games, anything.' },
  { num: '02', icon: Timer,        title: 'Set your limits',      desc: 'Define daily time budgets and optional wait screens per app.' },
  { num: '03', icon: CheckCircle2, title: 'TimerX does the rest', desc: 'When limits are hit, the app pauses, asks your reason, and you decide.' },
];

/* ─── component ─────────────────────────────────────── */
export default function Home() {
  return (
    <div className="bg-tx-bg text-tx-text">

      {/* ── HERO ── */}
      <section className="relative min-h-screen overflow-hidden">
        <HeroBackground />

        {/* Constrained container — fixes the wide-screen dead-center gap */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 min-h-screen flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 w-full pt-28 pb-20">

            {/* Left: text */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              className="flex flex-col justify-center"
            >
              <motion.p variants={fadeUp} className="text-tx-brand text-sm font-semibold tracking-widest uppercase mb-4">
                Available on Android
              </motion.p>
              <motion.h1
                variants={fadeUp}
                className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-none tracking-tight text-tx-text"
                style={{ fontWeight: 800 }}
              >
                Your time<br />
                <span className="text-tx-brand">back.</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="mt-6 text-tx-muted text-lg leading-relaxed max-w-lg">
                TimerX slows down the apps you can&apos;t stop opening — so the rest of your day has room to breathe.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/download"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-black bg-tx-brand hover:opacity-90 transition-all duration-200 animate-glow-pulse font-display"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
                >
                  Download Free
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/journey"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-medium text-tx-muted hover:text-tx-text transition-all duration-200"
                  style={{ border: '1px solid oklch(0.20 0.010 195)' }}
                >
                  Our Story
                </Link>
              </motion.div>
            </motion.div>

            {/* Right: phone mockup */}
            <motion.div
              className="flex items-center justify-center md:justify-end"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Ambient glow */}
              <div
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: '420px',
                  height: '420px',
                  background: 'radial-gradient(circle, rgba(6,182,212,0.16) 0%, transparent 65%)',
                  filter: 'blur(50px)',
                }}
              />
              <div className="animate-float relative">
                <Image
                  src="/new-hero-image.png"
                  alt="TimerX app interface on Android"
                  width={1130}
                  height={1536}
                  className="relative z-10 w-[280px] sm:w-[340px] md:w-[420px] lg:w-[500px] xl:w-[540px] h-auto"
                  priority
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} className="text-tx-brand text-sm font-semibold tracking-widest uppercase mb-3">
            What it does
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-800 text-tx-text" style={{ fontWeight: 800 }}>
            Built differently
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-tx-muted text-lg max-w-xl mx-auto">
            Most screen-time apps just lock you out. TimerX makes you think.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.08 }}
              className="group relative rounded-2xl p-6 overflow-hidden"
              style={{
                background: 'oklch(0.13 0.008 195)',
                border: f.highlight
                  ? '1px solid oklch(0.65 0.14 195 / 0.45)'
                  : '1px solid oklch(0.20 0.010 195)',
                transition: 'border-color 0.2s, box-shadow 0.2s',
              }}
              whileHover={{
                borderColor: 'oklch(0.65 0.14 195 / 0.50)',
                boxShadow: '0 0 36px rgba(6,182,212,0.15)',
              }}
            >
              {f.highlight && (
                <span
                  className="absolute top-4 right-4 text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{ background: 'oklch(0.65 0.14 195 / 0.15)', color: 'oklch(0.65 0.14 195)' }}
                >
                  New
                </span>
              )}

              <div className="flex gap-5">
                {/* Icon */}
                <div
                  className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: 'oklch(0.65 0.14 195 / 0.12)' }}
                >
                  <f.icon size={20} className="text-tx-brand" />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-700 text-3xl text-tx-text mb-2" style={{ fontWeight: 700 }}>
                    {f.title}
                  </h3>
                  <p className="text-tx-muted text-xl leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>

              {/* App screen mockup */}
              {f.image && (
                <div className="mt-6 flex justify-center">
                  <div
                    className="relative rounded-3xl overflow-hidden"
                    style={{
                      boxShadow: '0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)',
                    }}
                  >
                    {f.image.endsWith('.gif') ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={f.image}
                        alt={f.title}
                        className="w-[200px] sm:w-[240px] h-auto"
                        loading="lazy"
                      />
                    ) : (
                      <Image
                        src={f.image}
                        alt={f.title}
                        width={260}
                        height={560}
                        className="w-[200px] sm:w-[220px] h-auto"
                      />
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section
        className="py-24 px-6 md:px-12"
        style={{ background: 'oklch(0.11 0.008 195)' }}
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="text-tx-brand text-sm font-semibold tracking-widest uppercase mb-3">
              Three steps
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-800" style={{ fontWeight: 800 }}>
              Simple to start
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col gap-4"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="font-display text-4xl font-800 leading-none"
                    style={{ color: 'oklch(0.65 0.14 195 / 0.30)', fontWeight: 800 }}
                  >
                    {s.num}
                  </span>
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{ background: 'oklch(0.65 0.14 195 / 0.12)' }}
                  >
                    <s.icon size={17} className="text-tx-brand" />
                  </div>
                </div>
                <h3 className="font-display font-700 text-xl text-tx-text" style={{ fontWeight: 700 }}>
                  {s.title}
                </h3>
                <p className="text-tx-muted text-xl leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST / PERMISSION CALLOUT ── */}
      <section className="py-20 px-6 md:px-12 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl p-8 md:p-10"
          style={{
            background: 'oklch(0.13 0.008 195)',
            border: '1px solid oklch(0.20 0.010 195)',
          }}
        >
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div
              className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: 'oklch(0.65 0.14 195 / 0.12)' }}
            >
              <ShieldCheck size={22} className="text-tx-brand" />
            </div>
            <div>
              <h3 className="font-display font-700 text-xl text-tx-text mb-3" style={{ fontWeight: 700 }}>
                About the Accessibility permission
              </h3>
              <p className="text-tx-muted text-xl leading-relaxed mb-4">
                TimerX needs Android&apos;s Accessibility Service to detect when you open a monitored app and show overlays at the right moment. It&apos;s the only way to do this without root access.
              </p>
              <ul className="space-y-2 text-xl">
                {[
                  { ok: false, text: "We don't read your screen content, passwords, or personal data" },
                  { ok: false, text: "We don't collect or sell personal information" },
                  { ok: true,  text: "We collect anonymous crash reports and feature usage to fix bugs" },
                  { ok: true,  text: "All your app data and timers stay on your device" },
                ].map((item) => (
                  <li key={item.text} className="flex items-start gap-2.5">
                    <span
                      className="flex-shrink-0 mt-0.5 text-xs font-bold"
                      style={{ color: item.ok ? 'oklch(0.65 0.14 195)' : 'oklch(0.72 0.18 25)' }}
                    >
                      {item.ok ? '✓' : '✕'}
                    </span>
                    <span className="text-tx-muted">{item.text}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/privacy-policy"
                className="inline-flex items-center gap-1.5 mt-5 text-xl text-tx-brand hover:opacity-80 transition-opacity"
              >
                Read our full Privacy Policy <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── DOWNLOAD CTA ── */}
      <section className="py-24 px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="font-display text-4xl md:text-5xl font-800 text-tx-text mb-6" style={{ fontWeight: 800 }}>
            Ready to take it back?
          </h2>
          <p className="text-tx-muted text-lg mb-10">
            Free to download. No account required. Works on Android 8 and up.
          </p>
          <Link
            href="https://play.google.com/store/apps/details?id=com.equinoxdev.timerx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/google-play-badge.svg"
              alt="Get it on Google Play"
              width={200}
              height={60}
              className="mx-auto hover:opacity-90 transition-opacity"
            />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

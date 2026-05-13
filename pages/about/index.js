import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, Heart, Shield, Zap } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: 'blur(4px)' },
  show:   { opacity: 1, y: 0,  filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 80, damping: 18 } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

const values = [
  { icon: Heart,   title: 'Human first', desc: 'We built this because we were distracted too. TimerX isn\'t about punishment — it\'s about building habits that feel good.' },
  { icon: Shield,  title: 'Private by design', desc: 'Your usage data never leaves your phone. No accounts, no profiles, no selling your habits to advertisers.' },
  { icon: Zap,     title: 'Simple enough to stick', desc: 'A tool you don\'t use is useless. We keep TimerX lightweight and obvious so you actually return to it.' },
];

export default function About() {
  return (
    <>
      <Head>
        <title>About | TimerX</title>
        <meta name="description" content="TimerX was built to help people reclaim focus and build healthier digital habits." />
      </Head>

      <div className="bg-tx-bg text-tx-text min-h-screen">

        {/* ── HERO ── */}
        <section className="relative pt-32 pb-20 px-6 md:px-12 max-w-4xl mx-auto">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.p variants={fadeUp} className="text-tx-brand text-sm font-semibold tracking-widest uppercase mb-4">
              Who we are
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-display text-5xl md:text-6xl font-800 text-tx-text leading-tight mb-8"
              style={{ fontWeight: 800 }}
            >
              Built by people<br />
              <span className="text-tx-brand">who were distracted.</span>
            </motion.h1>
            <motion.div variants={fadeUp} className="space-y-5 text-tx-muted text-lg leading-relaxed max-w-2xl">
              <p>
                TimerX was created to help people build healthier digital habits by promoting mindful use of social media and mobile apps.
              </p>
              <p>
                We believe small changes in daily technology habits lead to massive improvements in focus, productivity, and mental wellbeing. TimerX is our contribution to that.
              </p>
              <p>
                Built with simplicity, efficiency, and user privacy at its core — designed for students, professionals, entrepreneurs, and anyone who wants to take control of their time.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* ── DIVIDER ── */}
        <div style={{ height: '1px', background: 'oklch(0.17 0.009 195)', maxWidth: '80%', margin: '0 auto' }} />

        {/* ── VALUES ── */}
        <section className="py-20 px-6 md:px-12 max-w-5xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            <motion.p variants={fadeUp} className="text-tx-brand text-sm font-semibold tracking-widest uppercase mb-3">
              What we stand for
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-4xl font-800 mb-12" style={{ fontWeight: 800 }}>
              Our values
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  variants={fadeUp}
                  transition={{ delay: i * 0.08 }}
                  className="p-6 rounded-2xl"
                  style={{
                    background: 'oklch(0.13 0.008 195)',
                    border: '1px solid oklch(0.20 0.010 195)',
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: 'oklch(0.65 0.14 195 / 0.12)' }}
                  >
                    <v.icon size={18} className="text-tx-brand" />
                  </div>
                  <h3 className="font-display font-700 text-tx-text mb-2" style={{ fontWeight: 700 }}>{v.title}</h3>
                  <p className="text-tx-muted text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── THANK YOU ── */}
        <section className="py-16 px-6 md:px-12 max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl"
            style={{
              background: 'oklch(0.65 0.14 195 / 0.07)',
              border: '1px solid oklch(0.65 0.14 195 / 0.20)',
            }}
          >
            <p className="text-tx-text text-lg leading-relaxed mb-6">
              Thank you for trusting TimerX to be part of your self-improvement journey.
            </p>
            <Link
              href="/journey"
              className="inline-flex items-center gap-2 text-sm font-semibold text-tx-brand hover:opacity-80 transition-opacity"
            >
              Read our story <ArrowRight size={14} />
            </Link>
          </motion.div>
        </section>
      </div>
    </>
  );
}

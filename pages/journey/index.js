import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { ArrowRight } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 36, filter: 'blur(6px)' },
  show:   { opacity: 1, y: 0,  filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 70, damping: 18 } },
};

const chapters = [
  {
    image: '/images/quarantine.png',
    alt: 'Quarantine era',
    title: 'It started during quarantine',
    body: 'When lockdown hit, we quickly realized our phones had become constant companions. Endless scrolling was the new normal — even a few minutes away from the feed felt impossible. We knew something had to change, but no existing tool spoke to why we were stuck in that loop.',
  },
  {
    image: '/images/apps.png',
    alt: 'Tried existing apps',
    title: 'We tried everything',
    body: 'From simple timers to full-blown app lockers, we tested them all — yet each one felt like a band-aid. They would freeze our screen or count down seconds, but offered no context about why we were really here. We craved a tool that didn\'t just say "stop," but helped us remember what to do instead.',
    reverse: true,
  },
  {
    image: '/images/idea.png',
    alt: 'The idea spark',
    title: 'Then came the idea',
    body: 'One evening we asked: what if every enforced pause reminded us of our real goals? Instead of a blank lock screen, we could surface tasks, habits, and motivational prompts. That light-bulb moment sparked the core concept behind TimerX\'s unique productivity-first approach.',
  },
  {
    image: '/images/dev.png',
    alt: 'Building something better',
    title: 'Building something better',
    body: 'We sketched, prototyped, and iterated — combining code with user feedback at every step. Our wait-screen became a digital nudge, surfacing your tasks and habits precisely when you need it. Today, TimerX empowers you to reclaim your attention and focus on what truly matters.',
    reverse: true,
  },
];

export default function Journey() {
  return (
    <>
      <Head>
        <title>Our Journey | TimerX</title>
        <meta name="description" content="From screen-time struggles to meaningful change — this is how TimerX came to life." />
      </Head>

      <div className="bg-tx-bg text-tx-text">

        {/* ── HERO ── */}
        <section className="pt-32 pb-20 px-6 md:px-12 max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.p variants={fadeUp} className="text-tx-brand text-sm font-semibold tracking-widest uppercase mb-4">
              Our story
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-display text-5xl md:text-6xl font-800 text-tx-text leading-tight mb-6"
              style={{ fontWeight: 800 }}
            >
              From distraction<br />
              <span className="text-tx-brand">to clarity.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-tx-muted text-xl leading-relaxed max-w-2xl">
              Every product has a story. Ours began with small frustrations, late-night conversations, and the relentless urge to build something better.
            </motion.p>
          </motion.div>
        </section>

        {/* ── TIMELINE ── */}
        <section className="px-6 md:px-12 max-w-5xl mx-auto space-y-24 pb-24">
          {chapters.map((ch, i) => (
            <motion.div
              key={ch.title}
              initial={{ opacity: 0, y: 48, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ type: 'spring', stiffness: 60, damping: 18, delay: 0.05 }}
              className={`flex flex-col ${ch.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-16`}
            >
              {/* Image */}
              <div className="flex-shrink-0 relative">
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: 'radial-gradient(circle, rgba(6,182,212,0.14) 0%, transparent 70%)',
                    filter: 'blur(20px)',
                    transform: 'scale(1.1)',
                  }}
                />
                <div
                  className="relative rounded-2xl overflow-hidden p-2"
                  style={{
                    background: 'oklch(0.13 0.008 195)',
                    border: '1px solid oklch(0.20 0.010 195)',
                  }}
                >
                  <Image
                    src={ch.image}
                    alt={ch.alt}
                    width={180}
                    height={180}
                    className="w-[140px] sm:w-[160px] h-auto object-contain"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="flex-1">
                <span
                  className="font-display text-6xl font-800 leading-none block mb-3"
                  style={{ color: 'oklch(0.65 0.14 195 / 0.18)', fontWeight: 800 }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-700 text-tx-text mb-4" style={{ fontWeight: 700 }}>
                  {ch.title}
                </h2>
                <p className="text-tx-muted text-lg leading-relaxed">
                  {ch.body}
                </p>
              </div>
            </motion.div>
          ))}
        </section>

        {/* ── CTA ── */}
        <section className="py-20 px-6 text-center" style={{ background: 'oklch(0.11 0.008 195)' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-display text-4xl md:text-5xl font-800 text-tx-text mb-4" style={{ fontWeight: 800 }}>
              And we&apos;re just getting started.
            </h2>
            <p className="text-tx-muted text-lg mb-10">
              Join the movement to take back your time — one tap at a time.
            </p>
            <Link
              href="/download"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-black bg-tx-brand hover:opacity-90 transition-all duration-200 font-display"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
            >
              Download TimerX <ArrowRight size={16} />
            </Link>
          </motion.div>
        </section>
      </div>
    </>
  );
}

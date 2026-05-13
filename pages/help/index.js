import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageSquare } from 'lucide-react';

const faqs = [
  {
    q: 'What does TimerX do in a nutshell?',
    a: 'TimerX reduces doom-scrolling with per-app session timers and a brief Wait Screen before opening distracting apps. When a session ends, a gentle overlay nudges you to close — no harsh lock-outs.',
  },
  {
    q: 'How do I set a timer for an app?',
    a: 'Open TimerX → add the app → choose a session length and optional goals (minutes/day or number of opens). Use your phone normally — TimerX tracks sessions automatically.',
  },
  {
    q: 'What is the Wait Screen and can I customise it?',
    a: "It's a short pause you set (e.g. 5–15 s) before a target app opens. Add a motivational line or reminder — great for interrupting impulse taps.",
  },
  {
    q: 'What is the Reason Unlock feature?',
    a: "When your timer runs out, TimerX can ask you why you want to open the app. Type a reason — if it's genuine, you get extra time. If it isn't compelling, you're nudged to close. This uses an AI check to evaluate your reasoning.",
  },
  {
    q: 'Can I pause timers?',
    a: 'Yes. Use Pause for emergencies or deep work. Limits are temporarily disabled but your stats still record.',
  },
  {
    q: 'Which permissions are required?',
    a: "Accessibility Service and Usage Access — so TimerX can detect the foreground app and show overlays at the right time. We don't read your screen content or personal data.",
  },
  {
    q: 'What data do you collect?',
    a: 'Minimal anonymous analytics to improve TimerX (crashes, feature adoption). No personal data. Everything else stays on your device. See our Privacy Policy.',
  },
  {
    q: 'How do I upgrade to Premium?',
    a: 'Open the Premium tab in the app to view plans and subscribe. Premium unlocks advanced analytics, weekly insights, and more.',
  },
  {
    q: "I'm stuck — how do I get help?",
    a: 'Use the Contact page and include your device model, Android version, and a short description of the issue.',
  },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{
        background: 'oklch(0.13 0.008 195)',
        border: `1px solid ${open ? 'oklch(0.65 0.14 195 / 0.35)' : 'oklch(0.20 0.010 195)'}`,
        transition: 'border-color 0.2s',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="font-display font-600 text-tx-text text-base" style={{ fontWeight: 600 }}>
          {q}
        </span>
        <span
          className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-200"
          style={{ background: open ? 'oklch(0.65 0.14 195 / 0.18)' : 'oklch(0.20 0.010 195)' }}
        >
          {open
            ? <Minus size={12} className="text-tx-brand" />
            : <Plus  size={12} className="text-tx-muted" />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div className="px-5 pb-5 pt-0">
              <div style={{ height: '1px', background: 'oklch(0.20 0.010 195)', marginBottom: '14px' }} />
              <p className="text-tx-muted text-sm leading-relaxed">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function HelpPage({ lastUpdated }) {
  return (
    <>
      <Head>
        <title>Help & FAQ | TimerX</title>
        <meta name="description" content="Quick answers and how-tos for TimerX." />
      </Head>

      <div className="bg-tx-bg text-tx-text min-h-screen pt-28 pb-20 px-6 md:px-12">

        {/* ── HEADER ── */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-tx-brand text-sm font-semibold tracking-widest uppercase mb-4"
          >
            Support
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="font-display text-4xl md:text-5xl font-800 text-tx-text mb-5"
            style={{ fontWeight: 800 }}
          >
            Help & FAQ
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-tx-muted text-lg"
          >
            Short answers to common questions. Click any item to expand.
          </motion.p>
        </div>

        {/* ── VIDEO SECTION (coming soon) ── */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="font-display text-2xl font-700 text-tx-text mb-6" style={{ fontWeight: 700 }}>
            Video tutorials
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Set Up TimerX',
              'Set Your First App Timer',
              'How the Wait Screen Helps',
              'Reason Unlock Explained',
              'Pause Timers',
              'Report Issues',
            ].map((title, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="rounded-xl overflow-hidden"
                style={{
                  background: 'oklch(0.13 0.008 195)',
                  border: '1px solid oklch(0.20 0.010 195)',
                }}
              >
                <div
                  className="flex items-center justify-center"
                  style={{
                    height: '130px',
                    background: 'oklch(0.11 0.008 195)',
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ background: 'oklch(0.65 0.14 195 / 0.15)', border: '1px solid oklch(0.65 0.14 195 / 0.30)' }}
                  >
                    <span className="text-tx-brand text-lg">▶</span>
                  </div>
                </div>
                <div className="px-4 py-3">
                  <p className="text-sm font-medium text-tx-text">{title}</p>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full mt-1 inline-block"
                    style={{ background: 'oklch(0.65 0.14 195 / 0.10)', color: 'oklch(0.65 0.14 195)' }}
                  >
                    Coming soon
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── FAQ ── */}
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl font-700 text-tx-text mb-6" style={{ fontWeight: 700 }}>
            Frequently asked questions
          </h2>
          <div className="space-y-3">
            {faqs.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>

        {/* ── STILL NEED HELP ── */}
        <div className="max-w-3xl mx-auto mt-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-5 p-6 rounded-2xl"
            style={{
              background: 'oklch(0.13 0.008 195)',
              border: '1px solid oklch(0.20 0.010 195)',
            }}
          >
            <div
              className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
              style={{ background: 'oklch(0.65 0.14 195 / 0.12)' }}
            >
              <MessageSquare size={20} className="text-tx-brand" />
            </div>
            <div className="flex-1">
              <h3 className="font-display font-700 text-tx-text mb-1" style={{ fontWeight: 700 }}>Still need help?</h3>
              <p className="text-tx-muted text-sm">We reply on weekdays, usually within 24–48 hours.</p>
            </div>
            <Link
              href="/contact"
              className="flex-shrink-0 px-5 py-2.5 rounded-xl text-sm font-semibold text-black bg-tx-brand hover:opacity-90 transition-opacity font-display"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
            >
              Contact support
            </Link>
          </motion.div>
          <p className="mt-6 text-xs text-tx-faint text-center">Last updated: {lastUpdated}</p>
        </div>
      </div>
    </>
  );
}

export function getStaticProps() {
  const lastUpdated = new Intl.DateTimeFormat('en-GB', {
    day: '2-digit', month: 'short', year: 'numeric',
  }).format(new Date());
  return { props: { lastUpdated } };
}

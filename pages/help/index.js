import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

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
    a: 'It is a short pause you set (e.g. 5–15 s) before a target app opens. Add a motivational line or reminder — great for interrupting impulse taps.',
  },
  {
    q: 'What is the Reason Unlock feature?',
    a: 'When your timer runs out, TimerX can ask you why you want to open the app. Type a reason — if it is genuine, you get extra time. If it is not compelling, you are nudged to close. This uses an AI check to evaluate your reasoning.',
  },
  {
    q: 'Can I pause timers?',
    a: 'Yes. Use Pause for emergencies or deep work. Limits are temporarily disabled but your stats still record.',
  },
  {
    q: 'Which permissions are required?',
    a: 'Accessibility Service and Usage Access — so TimerX can detect the foreground app and show overlays at the right time. We do not read your screen content or personal data.',
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
    q: 'I am stuck — how do I get help?',
    a: 'Use the Contact page or email us at timerxapp@gmail.com and include your device model, Android version, and a short description of the issue.',
  },
];

export default function HelpPage({ lastUpdated }) {
  return (
    <>
      <Head>
        <title>Help & FAQ | TimerX</title>
        <meta name="description" content="Quick answers and how-tos for TimerX." />
      </Head>

      <div className="bg-tx-bg text-tx-text min-h-screen pt-28 pb-20 px-6 md:px-12">

        {/* ── HEADER ── */}
        <div className="max-w-3xl mx-auto mb-14 text-center">
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
            Help &amp; FAQ
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-tx-muted text-lg"
          >
            Answers to common questions about TimerX.
          </motion.p>
        </div>

        {/* ── VIDEO SECTION — hidden until videos are ready ── */}
        {/*
        <div className="max-w-4xl mx-auto mb-16">
          <h2>Video tutorials</h2>
          ...coming soon cards...
        </div>
        */}

        {/* ── FAQ — all expanded ── */}
        <div className="max-w-3xl mx-auto space-y-5">
          {faqs.map((item, i) => (
            <motion.div
              key={item.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="rounded-xl p-6"
              style={{
                background: 'oklch(0.13 0.008 195)',
                border: '1px solid oklch(0.20 0.010 195)',
              }}
            >
              <h3
                className="font-display text-base font-700 text-tx-text mb-3"
                style={{ fontWeight: 700 }}
              >
                {item.q}
              </h3>
              <div style={{ height: '1px', background: 'oklch(0.20 0.010 195)', marginBottom: '12px' }} />
              <p className="text-tx-muted text-sm leading-relaxed">{item.a}</p>
            </motion.div>
          ))}
        </div>

        {/* ── STILL NEED HELP ── */}
        <div className="max-w-3xl mx-auto mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-5 p-6 rounded-2xl"
            style={{
              background: 'oklch(0.65 0.14 195 / 0.07)',
              border: '1px solid oklch(0.65 0.14 195 / 0.25)',
            }}
          >
            <div
              className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
              style={{ background: 'oklch(0.65 0.14 195 / 0.15)' }}
            >
              <MessageSquare size={20} className="text-tx-brand" />
            </div>
            <div className="flex-1">
              <h3 className="font-display font-700 text-tx-text mb-1" style={{ fontWeight: 700 }}>
                Still need help?
              </h3>
              <p className="text-tx-muted text-sm">
                Email us at{' '}
                <a
                  href="mailto:timerxapp@gmail.com"
                  className="text-tx-brand hover:opacity-80 transition-opacity"
                >
                  timerxapp@gmail.com
                </a>
                {' '}or use the contact page. We reply on weekdays within 24–48 hours.
              </p>
            </div>
            <Link
              href="/contact"
              className="flex-shrink-0 px-5 py-2.5 rounded-xl text-sm font-semibold text-black bg-tx-brand hover:opacity-90 transition-opacity font-display"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
            >
              Contact us
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

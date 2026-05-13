import Head from 'next/head';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Clock, Bug } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

const reasons = [
  { icon: Bug,           title: 'Bug report',       desc: 'Include your device model and Android version.' },
  { icon: MessageSquare, title: 'Feature request',  desc: 'Tell us what would make TimerX better for you.' },
  { icon: Clock,         title: 'General question', desc: 'Anything about the app, permissions, or pricing.' },
];

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | TimerX</title>
        <meta name="description" content="Get in touch with the TimerX team." />
      </Head>

      <div className="bg-tx-bg text-tx-text min-h-screen pt-28 pb-20 px-6 md:px-12">
        <div className="max-w-2xl mx-auto">

          {/* Header */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="text-center mb-14"
          >
            <motion.p variants={fadeUp} className="text-tx-brand text-sm font-semibold tracking-widest uppercase mb-4">
              Get in touch
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-display text-4xl md:text-5xl font-800 text-tx-text leading-tight mb-5"
              style={{ fontWeight: 800 }}
            >
              Contact us
            </motion.h1>
            <motion.p variants={fadeUp} className="text-tx-muted text-lg leading-relaxed">
              The fastest way to reach us is by email. We reply on weekdays, usually within 24–48 hours.
            </motion.p>
          </motion.div>

          {/* Email CTA — the main action */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12"
          >
            <a
              href="mailto:timerxapp@gmail.com"
              className="group flex items-center justify-between w-full p-6 rounded-2xl transition-all duration-200"
              style={{
                background: 'oklch(0.13 0.008 195)',
                border: '1px solid oklch(0.65 0.14 195 / 0.40)',
                boxShadow: '0 0 0 0 rgba(6,182,212,0)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 32px rgba(6,182,212,0.18)';
                e.currentTarget.style.borderColor = 'oklch(0.65 0.14 195 / 0.70)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 0 0 rgba(6,182,212,0)';
                e.currentTarget.style.borderColor = 'oklch(0.65 0.14 195 / 0.40)';
              }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'oklch(0.65 0.14 195 / 0.15)' }}
                >
                  <Mail size={22} className="text-tx-brand" />
                </div>
                <div>
                  <p className="text-tx-muted text-xs font-semibold uppercase tracking-widest mb-0.5">
                    Email us at
                  </p>
                  <p
                    className="font-display text-xl md:text-2xl text-tx-brand"
                    style={{ fontWeight: 700 }}
                  >
                    timerxapp@gmail.com
                  </p>
                </div>
              </div>
              <span
                className="text-tx-muted group-hover:text-tx-brand group-hover:translate-x-1 transition-all duration-200 text-xl"
              >
                →
              </span>
            </a>
          </motion.div>

          {/* Divider */}
          <div
            className="flex items-center gap-4 mb-10"
            style={{ color: 'oklch(0.28 0.008 195)' }}
          >
            <div style={{ flex: 1, height: '1px', background: 'oklch(0.20 0.010 195)' }} />
            <span className="text-xs uppercase tracking-widest">What to include</span>
            <div style={{ flex: 1, height: '1px', background: 'oklch(0.20 0.010 195)' }} />
          </div>

          {/* Reason cards */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-3"
          >
            {reasons.map((r) => (
              <motion.div
                key={r.title}
                variants={fadeUp}
                className="flex items-start gap-4 p-5 rounded-xl"
                style={{
                  background: 'oklch(0.11 0.008 195)',
                  border: '1px solid oklch(0.20 0.010 195)',
                }}
              >
                <div
                  className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center mt-0.5"
                  style={{ background: 'oklch(0.65 0.14 195 / 0.10)' }}
                >
                  <r.icon size={16} className="text-tx-brand" />
                </div>
                <div>
                  <p className="font-display font-600 text-tx-text text-sm mb-0.5" style={{ fontWeight: 600 }}>
                    {r.title}
                  </p>
                  <p className="text-tx-muted text-sm">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Response time note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-10 text-center text-tx-faint text-sm"
          >
            We reply on weekdays · usually within 24–48 hours
          </motion.p>
        </div>
      </div>
    </>
  );
}

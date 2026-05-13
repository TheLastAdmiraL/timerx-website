import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const sections = [
  {
    title: 'Usage',
    body: 'TimerX is provided for personal productivity purposes. You agree not to misuse the app, attempt unauthorized access, or use the app for illegal activities.',
  },
  {
    title: 'Liability',
    body: 'TimerX is provided "as is." We are not responsible for any loss, productivity decline, or damages resulting from app usage or malfunction.',
  },
  {
    title: 'Termination',
    body: 'We reserve the right to terminate or suspend access to TimerX without prior notice for any violation of these Terms.',
  },
  {
    title: 'Changes to Terms',
    body: 'We may update these Terms at any time. Continued use of TimerX after changes constitutes acceptance of the new Terms.',
  },
];

export default function TermsAndConditions() {
  return (
    <>
      <Head>
        <title>Terms & Conditions | TimerX</title>
      </Head>

      <div className="bg-tx-bg text-tx-text min-h-screen pt-28 pb-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-tx-muted hover:text-tx-brand transition-colors mb-10"
          >
            <ArrowLeft size={14} /> Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div
              className="w-12 h-1 rounded-full mb-6"
              style={{ background: 'oklch(0.65 0.14 195)' }}
            />
            <h1 className="font-display text-4xl md:text-5xl font-800 text-tx-text mb-4" style={{ fontWeight: 800 }}>
              Terms &amp; Conditions
            </h1>
            <p className="text-tx-muted">
              By downloading or using TimerX, you agree to be bound by the following terms.
            </p>
          </motion.div>

          <div className="space-y-10">
            {sections.map((s, i) => (
              <motion.section
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.45 }}
              >
                <h2 className="font-display text-xl font-700 text-tx-text mb-3" style={{ fontWeight: 700 }}>
                  {s.title}
                </h2>
                <p className="text-tx-muted text-sm leading-relaxed">{s.body}</p>
              </motion.section>
            ))}
          </div>

          <div
            className="mt-14 pt-8"
            style={{ borderTop: '1px solid oklch(0.20 0.010 195)' }}
          >
            <p className="text-tx-muted text-sm">
              Questions?{' '}
              <Link href="/contact" className="text-tx-brand hover:opacity-80 transition-opacity underline">
                Contact us
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

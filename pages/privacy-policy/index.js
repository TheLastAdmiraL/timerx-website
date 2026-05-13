import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const sections = [
  {
    title: 'Information We Collect',
    body: `TimerX does not collect personally identifiable information such as your name, email, or contact details unless you voluntarily provide them through our contact page.

We may collect anonymous usage statistics — amount of time spent in the app, features used, and crash reports — to improve TimerX. Basic device information (model, OS version, language settings) may also be collected to ensure compatibility.`,
  },
  {
    title: 'How We Use Your Information',
    body: `We use collected data to monitor app performance and user engagement, fix bugs and improve stability, communicate important updates if you have voluntarily subscribed, and comply with legal obligations if necessary.`,
  },
  {
    title: 'Accessibility Service',
    body: `TimerX requires Android's Accessibility Service to detect which app is in the foreground and display overlays at the right time. This permission is used only for that purpose. We do not read screen content, keystrokes, passwords, messages, or any personal data through this permission.`,
  },
  {
    title: 'Data Protection and Security',
    body: `TimerX uses industry-standard security practices to protect your data. All analytics data is anonymized and secured. We do not sell, rent, or trade user information to third parties.`,
  },
  {
    title: 'Third-Party Services',
    body: `TimerX may use third-party services like Google Analytics for anonymous usage tracking. These services are bound by their own privacy policies and terms.`,
  },
  {
    title: 'User Control',
    body: `You have full control over your use of TimerX. You can uninstall the app at any time. You can also revoke Accessibility Service permission in your Android settings at any time.`,
  },
  {
    title: 'Changes to This Policy',
    body: `TimerX may update this privacy policy from time to time. We encourage users to review this page periodically. Changes are effective immediately upon posting.`,
  },
  {
    title: 'Contact Us',
    body: `If you have questions about this Privacy Policy, contact us through the TimerX Contact page.`,
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | TimerX</title>
      </Head>

      <div className="bg-tx-bg text-tx-text min-h-screen pt-28 pb-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">

          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-tx-muted hover:text-tx-brand transition-colors mb-10"
          >
            <ArrowLeft size={14} /> Home
          </Link>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            {/* Teal accent line */}
            <div
              className="w-12 h-1 rounded-full mb-6"
              style={{ background: 'oklch(0.65 0.14 195)' }}
            />
            <h1 className="font-display text-4xl md:text-5xl font-800 text-tx-text mb-4" style={{ fontWeight: 800 }}>
              Privacy Policy
            </h1>
            <p className="text-tx-muted">
              At TimerX, your privacy is extremely important to us.
            </p>
          </motion.div>

          {/* Sections */}
          <div className="space-y-10">
            {sections.map((s, i) => (
              <motion.section
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.45 }}
              >
                <h2 className="font-display text-xl font-700 text-tx-text mb-3" style={{ fontWeight: 700 }}>
                  {s.title}
                </h2>
                <p className="text-tx-muted text-sm leading-relaxed whitespace-pre-line">
                  {s.body}
                </p>
              </motion.section>
            ))}
          </div>

          {/* Contact link */}
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

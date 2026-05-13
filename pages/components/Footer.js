import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

export default function Footer() {
  return (
    <footer
      style={{
        background: 'oklch(0.09 0.008 195)',
        borderTop: '1px solid oklch(0.17 0.009 195)',
      }}
    >
      <motion.div
        className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* Brand column */}
        <motion.div variants={fadeUp} className="space-y-4 max-w-sm">
          <Link href="/" className="font-display text-3xl font-800 text-tx-text" style={{ fontWeight: 800 }}>
            Timer<span className="text-tx-brand">X</span>
          </Link>
          <p className="text-tx-muted text-xl leading-relaxed">
            An Android app that helps you reclaim focus by setting limits on the apps that pull your attention.
          </p>
          <p className="text-tx-muted text-lg">
            No personal data collected. Everything stays on your phone.
          </p>
          <Link
            href="https://play.google.com/store/apps/details?id=com.equinoxdev.timerx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xl font-semibold text-tx-brand hover:opacity-80 transition-opacity"
          >
            Download on Google Play →
          </Link>
        </motion.div>

        {/* Links column */}
        <motion.div variants={fadeUp} className="space-y-4 md:justify-self-end">
          <h3 className="font-display font-600 text-tx-text text-lg uppercase tracking-widest" style={{ fontWeight: 600 }}>
            Links
          </h3>
          <ul className="space-y-2.5">
            {[
              { href: '/about',              label: 'About' },
              { href: '/journey',            label: 'Our Journey' },
              { href: '/help',               label: 'Help & FAQ' },
              { href: '/privacy-policy',     label: 'Privacy Policy' },
              { href: '/terms-and-conditions', label: 'Terms' },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-xl text-tx-muted hover:text-tx-brand transition-colors duration-200"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      <div
        className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-center text-base text-tx-muted"
        style={{ borderTop: '1px solid oklch(0.17 0.009 195)' }}
      >
        <span>© {new Date().getFullYear()} TimerX. All rights reserved.</span>
      </div>
    </footer>
  );
}

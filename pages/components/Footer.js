import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

export default function Footer() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const res = await fetch('https://formspree.io/f/mjkwgajp', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: data,
    });
    const result = await res.json();
    if (result.ok || res.status === 200) {
      setStatus('success');
      form.reset();
    } else {
      setStatus('error');
    }
  };

  return (
    <footer
      style={{
        background: 'oklch(0.09 0.008 195)',
        borderTop: '1px solid oklch(0.17 0.009 195)',
      }}
    >
      <motion.div
        className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* Brand column */}
        <motion.div variants={fadeUp} className="space-y-4">
          <Link href="/" className="font-display text-xl font-800 text-tx-text" style={{ fontWeight: 800 }}>
            Timer<span className="text-tx-brand">X</span>
          </Link>
          <p className="text-tx-muted text-sm leading-relaxed max-w-xs">
            An Android app that helps you reclaim focus by setting limits on the apps that pull your attention.
          </p>
          <p className="text-tx-faint text-xs">
            No personal data collected. Everything stays on your phone.
          </p>
        </motion.div>

        {/* Newsletter column */}
        <motion.div variants={fadeUp} className="space-y-4">
          <h3 className="font-display font-600 text-tx-text text-sm uppercase tracking-widest" style={{ fontWeight: 600 }}>
            Newsletter
          </h3>
          <p className="text-tx-muted text-sm leading-relaxed">
            Tips on managing screen time, delivered occasionally. No spam.
          </p>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              name="email"
              required
              placeholder="your@email.com"
              className="flex-1 min-w-0 px-4 py-2.5 rounded-lg text-sm text-tx-text placeholder:text-tx-faint focus:outline-none transition-all"
              style={{
                background: 'oklch(0.13 0.008 195)',
                border: '1px solid oklch(0.20 0.010 195)',
              }}
              onFocus={(e) => (e.target.style.borderColor = 'oklch(0.65 0.14 195 / 0.6)')}
              onBlur={(e)  => (e.target.style.borderColor = 'oklch(0.20 0.010 195)')}
            />
            <button
              type="submit"
              className="flex-shrink-0 p-2.5 rounded-lg bg-tx-brand text-black hover:opacity-90 transition-opacity"
              aria-label="Subscribe"
            >
              <ArrowRight size={16} />
            </button>
          </form>
          {status === 'success' && (
            <p className="text-xs text-tx-brand">Thanks for subscribing.</p>
          )}
          {status === 'error' && (
            <p className="text-xs" style={{ color: 'oklch(0.72 0.18 25)' }}>
              Something went wrong. Try again.
            </p>
          )}
        </motion.div>

        {/* Links column */}
        <motion.div variants={fadeUp} className="space-y-4">
          <h3 className="font-display font-600 text-tx-text text-sm uppercase tracking-widest" style={{ fontWeight: 600 }}>
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
                  className="text-sm text-tx-muted hover:text-tx-brand transition-colors duration-200"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      <div
        className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-tx-faint"
        style={{ borderTop: '1px solid oklch(0.17 0.009 195)' }}
      >
        <span>© {new Date().getFullYear()} TimerX. All rights reserved.</span>
        <span>
          Follow us on{' '}
          {['Instagram', 'Twitter', 'LinkedIn'].map((s, i) => (
            <span key={s}>
              <span className="opacity-40 cursor-not-allowed" title="Coming soon">{s}</span>
              {i < 2 && <span className="mx-1.5">·</span>}
            </span>
          ))}
        </span>
      </div>
    </footer>
  );
}

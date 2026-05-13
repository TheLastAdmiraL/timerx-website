'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '/',          label: 'Home'          },
  { href: '/journey',   label: 'Our Journey'   },
  { href: '/download',  label: 'Download'      },
  { href: '/help',      label: 'Help'          },
  { href: '/contact',   label: 'Contact'       },
];

export default function Navbar() {
  const [open,      setOpen]      = useState(false);
  const [scrolled,  setScrolled]  = useState(false);
  const { pathname } = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? 'oklch(0.09 0.008 195 / 0.85)'
          : 'oklch(0.09 0.008 195 / 0.0)',
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        borderBottom: scrolled ? '1px solid oklch(0.20 0.010 195)' : '1px solid transparent',
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-display font-800 text-5xl tracking-tight text-tx-text hover:text-tx-brand transition-colors duration-200"
          style={{ fontWeight: 800 }}
        >
          Timer<span className="text-tx-brand">X</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-xl font-medium transition-all duration-200 hover:bg-tx-faint ${
                    active ? 'text-tx-brand' : 'text-tx-muted hover:text-tx-text'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/download"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-tx-brand text-black hover:opacity-90 transition-all duration-200 animate-glow-pulse"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Download
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg text-tx-muted hover:text-tx-text hover:bg-tx-faint transition-all"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
            className="md:hidden overflow-hidden"
            style={{
              background: 'oklch(0.09 0.008 195 / 0.96)',
              borderTop: '1px solid oklch(0.20 0.010 195)',
            }}
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {links.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`px-3 py-3 rounded-lg text-base font-medium transition-all duration-200 hover:bg-tx-faint ${
                      active ? 'text-tx-brand' : 'text-tx-muted hover:text-tx-text'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/download"
                onClick={() => setOpen(false)}
                className="mt-3 px-4 py-3 rounded-lg text-sm font-semibold bg-tx-brand text-black text-center transition-all duration-200"
              >
                Download TimerX
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

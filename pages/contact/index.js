import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageSquare, Mail, Clock } from 'lucide-react';
import Head from 'next/head';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

const inputStyle = {
  width: '100%',
  background: 'oklch(0.13 0.008 195)',
  border: '1px solid oklch(0.20 0.010 195)',
  borderRadius: '12px',
  padding: '12px 16px',
  color: 'oklch(0.94 0.005 195)',
  fontSize: '15px',
  outline: 'none',
  transition: 'border-color 0.2s',
};

export default function Contact() {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
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
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contact | TimerX</title>
      </Head>
      <div className="bg-tx-bg text-tx-text min-h-screen pt-28 pb-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: info */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            <motion.p variants={fadeUp} className="text-tx-brand text-sm font-semibold tracking-widest uppercase mb-4">
              Get in touch
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-display text-4xl md:text-5xl font-800 text-tx-text leading-tight mb-6"
              style={{ fontWeight: 800 }}
            >
              We&apos;re here<br />to help.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-tx-muted leading-relaxed mb-10">
              Have a question, hit a bug, or want to share feedback? Send us a message and we&apos;ll get back to you.
            </motion.p>

            <motion.div variants={stagger} className="space-y-5">
              {[
                { icon: MessageSquare, title: 'App feedback',  desc: 'Feature requests and UX thoughts always welcome.' },
                { icon: Mail,          title: 'Bug reports',   desc: 'Include your device model and Android version.' },
                { icon: Clock,         title: 'Response time', desc: 'We reply on weekdays, usually within 24–48 hours.' },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="flex gap-4 items-start"
                >
                  <div
                    className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{ background: 'oklch(0.65 0.14 195 / 0.12)' }}
                  >
                    <item.icon size={16} className="text-tx-brand" />
                  </div>
                  <div>
                    <p className="font-display font-600 text-tx-text text-sm" style={{ fontWeight: 600 }}>{item.title}</p>
                    <p className="text-tx-muted text-sm mt-0.5">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="rounded-2xl p-6 md:p-8"
            style={{
              background: 'oklch(0.13 0.008 195)',
              border: '1px solid oklch(0.20 0.010 195)',
            }}
          >
            {status === 'success' ? (
              <div className="text-center py-10">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: 'oklch(0.65 0.14 195 / 0.15)' }}
                >
                  <Send size={22} className="text-tx-brand" />
                </div>
                <h3 className="font-display font-700 text-xl text-tx-text mb-2" style={{ fontWeight: 700 }}>Message sent</h3>
                <p className="text-tx-muted text-sm">We&apos;ll get back to you within 24–48 hours.</p>
                <button
                  onClick={() => setStatus('')}
                  className="mt-6 text-sm text-tx-brand hover:opacity-80 transition-opacity"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-tx-muted mb-1.5">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = 'oklch(0.65 0.14 195 / 0.6)')}
                    onBlur={(e)  => (e.target.style.borderColor = 'oklch(0.20 0.010 195)')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-tx-muted mb-1.5">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = 'oklch(0.65 0.14 195 / 0.6)')}
                    onBlur={(e)  => (e.target.style.borderColor = 'oklch(0.20 0.010 195)')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-tx-muted mb-1.5">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us what's on your mind..."
                    style={{ ...inputStyle, resize: 'vertical' }}
                    onFocus={(e) => (e.target.style.borderColor = 'oklch(0.65 0.14 195 / 0.6)')}
                    onBlur={(e)  => (e.target.style.borderColor = 'oklch(0.20 0.010 195)')}
                  />
                </div>

                {status === 'error' && (
                  <p className="text-sm" style={{ color: 'oklch(0.72 0.18 25)' }}>
                    Something went wrong. Please try again.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-black bg-tx-brand hover:opacity-90 transition-all duration-200 disabled:opacity-60 font-display"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
                >
                  {loading ? 'Sending…' : (
                    <>Send message <Send size={15} /></>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
}

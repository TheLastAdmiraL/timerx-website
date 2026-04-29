// pages/journey/index.js
import Image from 'next/image'
import Link from 'next/link'

export default function Journey() {
  return (
    <div className="bg-black text-white">
      {/* HERO (smaller height, tighter padding) */}
      <section className="relative overflow-hidden">
        {/* Separation under navbar */}
        <div className="pointer-events-none absolute inset-x-0 -top-1 h-6 bg-gradient-to-b from-black to-transparent" />

        {/* Dark hero base */}
        <div className="relative px-6 pt-16 pb-16 text-center">
          {/* Cyan angled ribbon behind title */}
          <div className="relative inline-block">
            <div
              className="absolute inset-0 -z-10 translate-y-1"
              aria-hidden="true"
              style={{
                height: '2.75rem',
                top: '50%',
                transform: 'translateY(-50%) skewY(-4deg)',
                background:
                  'linear-gradient(90deg, rgba(6,182,212,0.95), rgba(6,182,212,0.75))',
                boxShadow: '0 8px 30px -8px rgba(6,182,212,0.5)',
                borderRadius: '8px',
              }}
            />
            <h1 className="relative text-4xl md:text-5xl font-extrabold tracking-tight px-4">
              Our Journey
            </h1>
          </div>

          <p className="mt-4 text-lg max-w-2xl mx-auto text-white/80">
            From screen-time struggles to meaningful change — this is how TimerX came to life.
          </p>
        </div>

        <div className="h-px w-full bg-white/10" />
      </section>

      {/* INTRO SECTION (new filler text) */}
      <section className="px-6 py-12 md:py-14 max-w-3xl mx-auto text-center space-y-4">
        <p className="text-lg text-white/80">
          Every product has a story — ours began with small frustrations, late-night conversations,
          and the relentless urge to build something better. We weren’t just chasing productivity,
          we were searching for balance.
        </p>
        <p className="text-lg text-white/80">
          What started as a passing thought slowly turned into sketches, notes, and experiments.
          Before we knew it, our idea began taking shape into what you now know as TimerX.
        </p>
      </section>

      {/* TIMELINE */}
      <div className="px-6 py-12 md:py-16 max-w-4xl mx-auto space-y-12">
        {/* Step 1 */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <Image
            src="/images/quarantine.png"
            alt="Quarantine Era Cartoon"
            width={160}
            height={160}
            className="rounded-xl shadow-lg flex-shrink-0 object-contain bg-white/5 p-2"
          />
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-secondary">
              It started during Quarantine
            </h2>
            <p className="mt-2 text-lg text-white/90">
              When lockdown hit, we quickly realized our phones had become our constant companions.
              Endless scrolling became the new normal—even a few minutes away from the feed felt
              impossible. We knew something had to change, but no existing tool spoke to why we were
              stuck in that loop.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-6">
          <Image
            src="/images/apps.png"
            alt="Tried Existing Apps Cartoon"
            width={160}
            height={160}
            className="rounded-xl shadow-lg flex-shrink-0 object-contain bg-white/5 p-2"
          />
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-secondary">
              We tried existing apps
            </h2>
            <p className="mt-2 text-lg text-white/90">
              From simple timers to full-blown app lockers, we tested them all—yet each one felt like
              a band-aid solution. They would freeze our screen or count down seconds, but offered no
              context about why we were really here. We craved a tool that didn’t just say “stop,” but
              helped us remember what to do instead.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <Image
            src="/images/idea.png"
            alt="Idea Spark Cartoon"
            width={160}
            height={160}
            className="rounded-xl shadow-lg flex-shrink-0 object-contain bg-white/5 p-2"
          />
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-secondary">
              Then came the idea
            </h2>
            <p className="mt-2 text-lg text-white/90">
              One evening we asked ourselves: what if every enforced pause reminded us of our real
              goals? Instead of a blank lock screen, we could surface tasks, habits, and motivational
              prompts. That light-bulb moment sparked the core concept behind TimerX’s unique,
              productivity-first approach.
            </p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-6">
          <Image
            src="/images/dev.png"
            alt="Building Something Better Cartoon"
            width={160}
            height={160}
            className="rounded-xl shadow-lg flex-shrink-0 object-contain bg-white/5 p-2"
          />
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-secondary">
              Building something better
            </h2>
            <p className="mt-2 text-lg text-white/90">
              We sketched, prototyped, and iterated—combining code with user feedback at every step.
              Our wait-screen became a digital nudge, surfacing your tasks and habits precisely when
              you need it. Today, TimerX empowers you to reclaim your attention and focus on what
              truly matters.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="relative text-center p-10 md:p-14 bg-secondary text-black">
        <h2 className="text-3xl md:text-4xl font-bold">And we’re just getting started</h2>
        <p className="mt-2 text-lg">Join the movement to take back your time — one tap at a time.</p>
        <Link
          href="/download"
          className="inline-block mt-5 px-6 py-3 rounded-md font-medium bg-black text-secondary hover:bg-white hover:text-black transition"
        >
          Download TimerX
        </Link>
      </div>
    </div>
  )
}

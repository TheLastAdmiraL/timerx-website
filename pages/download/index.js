// pages/download.js

import Image from 'next/image'

export default function Download() {
  return (
    // Your background image stays on the parent
    <div className="bg-[url('/images/hero-bg.jpg')] bg-cover bg-center">
      
      {/* Full-width translucent bar */}
      <section className="w-full bg-black/70">
        {/* Content wrapper stays centred */}
        <div className="px-6 py-12 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-white">
            Download TimerX
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Take back control of your screen time—in just one tap.
          </p>

          {/* Play Store badge */}
          <a
            href="https://play.google.com/store/apps/details?id=com.equinoxdev.timerx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6"
          >
            <Image
              src="/images/google-play-badge.svg"
              alt="Get it on Google Play"
              width={200}
              height={60}
            />
          </a>

          {/* Feature list */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8 text-white">
            <div>
              <h3 className="text-xl font-semibold">⏳ Pre-open Timers</h3>
              <p className="mt-1 text-sm">
                Pause apps before you fall down the rabbit hole.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">📈 Usage Reports</h3>
              <p className="mt-1 text-sm">
                See daily and weekly breakdowns at a glance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

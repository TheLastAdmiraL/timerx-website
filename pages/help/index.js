// pages/help/index.js
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";

function VideoCard({ title, youtubeId }) {
    return (
        <div className="rounded-md border border-secondary bg-black shadow-md overflow-hidden">
            <div className="relative h-0 pb-[56.25%]">
                <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${youtubeId}`}
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            </div>
            <div className="p-4">
                <h4 className="font-semibold text-light">{title}</h4>
            </div>
        </div>
    );
}

function FaqItem({ q, a }) {
    return (
        <details className="group border border-secondary/60 rounded-md p-4 bg-black">
            <summary className="flex cursor-pointer items-center justify-between">
                <h3 className="text-lg font-semibold text-light">{q}</h3>
                <span className="ml-4 inline-flex h-6 w-6 items-center justify-center rounded-full border border-secondary text-neon_green transition-transform duration-200 group-open:rotate-45">
                    +
                </span>
            </summary>
            <div className="mt-3 text-light/85 leading-relaxed">{a}</div>
        </details>
    );
}

export default function HelpPage({ lastUpdated }) {
    // Add a page-specific class to <body> so we can override the global background rules
    useEffect(() => {
        document.body.classList.add("help-bg-fit");
        return () => document.body.classList.remove("help-bg-fit");
    }, []);

    return (
        <>
            <Head>
                <title>Help & How-tos | TimerX</title>
                <meta
                    name="description"
                    content="Quick-start videos and FAQs to help you get the most out of TimerX."
                />
            </Head>

            {/* Transparent wrapper so the global html/body background shows */}
            <div className="text-light relative isolate min-h-screen bg-transparent">
                {/* QUICK-START VIDEOS */}
                <section id="videos" className="relative px-6 pt-10 pb-0 md:py-10">
                    <h1 className="text-4xl font-bold text-center mb-2 text-neon_green">
                        Quick-start Videos
                    </h1>
                    <p className="text-center text-light/80 mb-10">
                        Two-minute walkthroughs to master the basics.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Ordered list of videos */}
                        <VideoCard title="Set Up TimerX" youtubeId="SwSxbYj1FDY" />
                        <VideoCard title="Set Your First App Timer" youtubeId="VIDEO_ID_FIRST_TIMER" />
                        <VideoCard title="How the Wait Screen Helps" youtubeId="VIDEO_ID_WAIT_SCREEN" />
                        <VideoCard title="Overlay When the Timer’s Up" youtubeId="VIDEO_ID_OVERLAY" />
                        <VideoCard title="Pause Timers (When Life Gets in the Way)" youtubeId="VIDEO_ID_PAUSE" />
                        <VideoCard title="Report Issues or Give Feedback" youtubeId="VIDEO_ID_FEEDBACK" />

                    </div>

                   
                </section>

                {/* Divider */}
                <div className="w-full border-t border-secondary"></div>

                {/* FAQs */}
                <section className="py-16 px-6">
                    <h2 className="text-4xl font-bold text-center mb-6 text-neon_green">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-center mb-10 text-light/80">
                        Short answers to common questions. Click to expand.
                    </p>

                    <div className="max-w-4xl mx-auto space-y-4">
                        <FaqItem
                            q="What does TimerX do in a nutshell?"
                            a={
                                <>
                                    TimerX reduces doom-scrolling with per-app session timers and a
                                    brief <em>Wait Screen</em> before opening distracting apps. When
                                    a session ends, a gentle overlay nudges you to close—no harsh
                                    lock-outs.
                                </>
                            }
                        />
                        <FaqItem
                            q="How do I set a timer for an app?"
                            a={
                                <>
                                    Open TimerX → add the app → choose a session length and optional
                                    goals (minutes/day or number of opens). Use your phone normally—
                                    TimerX tracks sessions automatically.
                                </>
                            }
                        />
                        <FaqItem
                            q="What is the Wait Screen and can I customise it?"
                            a={
                                <>
                                    It’s a short pause you set (e.g., 5–15 s) before a target app
                                    opens. Add a motivational line or reminder—great for
                                    interrupting impulse taps.
                                </>
                            }
                        />
                        <FaqItem
                            q="Can I pause timers?"
                            a={
                                <>
                                    Yes. Use <strong>Pause</strong> for emergencies or deep work.
                                    Limits are temporarily disabled but your stats still record.
                                </>
                            }
                        />
                        <FaqItem
                            q="Which permissions are required?"
                            a={
                                <>
                                    Accessibility and Usage Access—so TimerX can detect the
                                    foreground app and show overlays at the right time. We don’t
                                    read your screen content.
                                </>
                            }
                        />
                        <FaqItem
                            q="What data do you collect?"
                            a={
                                <>
                                    Minimal analytics to improve TimerX (crashes, feature adoption).
                                    See our{" "}
                                    <Link href="/privacy-policy" className="underline">
                                        Privacy Policy
                                    </Link>
                                    .
                                </>
                            }
                        />
                        <FaqItem
                            q="How do I upgrade to Premium?"
                            a={
                                <>
                                    Open the <em>Premium</em> tab in the app to view plans and
                                    subscribe. Premium unlocks advanced analytics, weekly insights,
                                    and multi-device sync.
                                </>
                            }
                        />
                        <FaqItem
                            q="I’m stuck—how do I get help?"
                            a={
                                <>
                                    Use the{" "}
                                    <Link href="/contact" className="underline">
                                        Contact
                                    </Link>{" "}
                                    page and include your device model, Android version, and a
                                    short description.
                                </>
                            }
                        />
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 px-6">
                    <div className="max-w-4xl mx-auto bg-black border border-secondary rounded-md p-8">
                        <h3 className="text-2xl font-semibold text-neon_green">
                            Still need a hand?
                        </h3>
                        <p className="mt-3 text-light/85">
                            We reply on weekdays, usually within 24–48 hours.
                        </p>
                        <div className="mt-6">
                            <Link
                                href="/contact"
                                className="inline-block bg-neon_green text-black px-6 py-3 rounded-md font-semibold hover:opacity-90 transition"
                            >
                                Contact Support
                            </Link>
                        </div>
                        <p className="mt-6 text-sm text-light/60">
                            Last updated: {lastUpdated}
                        </p>
                    </div>
                </section>
            </div>

            {/* Route-scoped global CSS override:
         - Switch the body background from `cover` to `contain` (fit)
         - Center it and disable repeat
         - Use the mobile asset + contain on small screens too */}
            <style jsx global>{`
        body.help-bg-fit {
          background-repeat: no-repeat !important;
          background-position: top center !important;
          background-size: cover !important; /* FIT the whole image */
        }
        @media (max-width: 640px) {
          body.help-bg-fit {
            background-image: url("/images/bg-mobile.png") !important;
            background-repeat: no-repeat !important;
            background-position: top center !important;
            background-size: cover !important;
          }
        }
      `}</style>
        </>
    );
}

// Build-time (SSR-safe) date string so hydration matches
export function getStaticProps() {
    const lastUpdated = new Intl.DateTimeFormat("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    }).format(new Date()); // e.g., "22 Aug 2025"
    return { props: { lastUpdated } };
}

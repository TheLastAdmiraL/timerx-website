import HeroBackground from "./components/HeroBackground";

export default function Home() {
  return (
    <div className="bg-black text-light relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col md:flex-row items-center px-6 py-10 overflow-hidden">
        {/* Background SVG for Desktop */}
        <div className="hidden md:block absolute inset-0 -z-0">
          <HeroBackground />
        </div>

        {/* Background SVG for Mobile (only behind TimerX text) */}
        <div className="block md:hidden relative w-full">
          <div className="absolute inset-0 -z-10">
            <HeroBackground />
          </div>
          <div className="relative z-10 px-6 py-10">
            <h1 className="text-5xl font-bold text-secondary">TimerX</h1>
            <p className="mt-4 text-2xl">
              Your ultimate tool to control <br />
              screen time and boost productivity.
            </p>
          </div>
        </div>

        {/* TimerX Text Column for Desktop */}
        <div className="hidden md:flex flex-1 pl-20">
          <div>
            <h1 className="text-5xl font-bold text-secondary">TimerX</h1>
            <p className="mt-4 text-2xl">
              Your ultimate tool to control <br />
              screen time and boost productivity.
            </p>
          </div>
        </div>

        {/* Mockup Container */}
        <div className="w-full md:flex-1 flex items-center justify-center mt-8 md:mt-0">
          <div className="z-10 border-4 border-secondary p-8">
            <p className="text-xl">Mockups of app</p>
          </div>
        </div>
      </section>

      {/* Visual Divider */}
      <div className="w-full border-t border-secondary my-8"></div>

      {/* Main Features Section */}
      <section className="py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-secondary">
          Main Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <div className="text-6xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold mb-2 text-secondary">
              Fast Performance
            </h3>
            <p className="text-center">
              Experience lightning fast performance with TimerX.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-6xl mb-4">📊</div>
            <h3 className="text-2xl font-bold mb-2 text-secondary">
              Detailed Analytics
            </h3>
            <p className="text-center">
              Get insights on your app usage and stay productive.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-6xl mb-4">🔒</div>
            <h3 className="text-2xl font-bold mb-2 text-secondary">
              Secure
            </h3>
            <p className="text-center">
              Your data is protected with advanced security measures.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews / Testimonials Section */}
      <section className="py-16 px-6 bg-gray-900">
        <h2 className="text-4xl font-bold text-center mb-10 text-secondary">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-black p-6 rounded-md shadow-md border border-secondary">
            <p className="italic">
              &quot;TimerX transformed my daily routine and boosted my productivity!&quot;
            </p>
            <div className="flex justify-between items-center mt-4">
              <p>⭐⭐⭐⭐⭐</p>
              <p className="text-sm">- John Doe</p>
            </div>
          </div>
          <div className="bg-black p-6 rounded-md shadow-md border border-secondary">
            <p className="italic">
              &quot;An amazing tool for anyone looking to manage their screen time.&quot;
            </p>
            <div className="flex justify-between items-center mt-4">
              <p>⭐⭐⭐⭐☆</p>
              <p className="text-sm">- Jane Smith</p>
            </div>
          </div>
          <div className="bg-black p-6 rounded-md shadow-md border border-secondary">
            <p className="italic">
              &quot;I highly recommend TimerX for a balanced digital life.&quot;
            </p>
            <div className="flex justify-between items-center mt-4">
              <p>⭐⭐⭐⭐⭐</p>
              <p className="text-sm">- Alex Johnson</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why You Should Use TimerX Section */}
      <section className="py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-secondary">
          Why You Should Use TimerX
        </h2>
        <p className="text-center mb-10">
          Enhance your productivity and reclaim your time.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="flex flex-col items-center">
            <div className="text-5xl mb-4">⏰</div>
            <h3 className="font-bold mb-2 text-secondary">Time Management</h3>
            <p className="text-center text-sm">
              Efficiently manage your screen time.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-5xl mb-4">📈</div>
            <h3 className="font-bold mb-2 text-secondary">Boost Productivity</h3>
            <p className="text-center text-sm">
              Increase productivity with smart tracking.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-5xl mb-4">🔒</div>
            <h3 className="font-bold mb-2 text-secondary">Enhanced Security</h3>
            <p className="text-center text-sm">
              Your data remains secure at all times.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="font-bold mb-2 text-secondary">Focus</h3>
            <p className="text-center text-sm">
              Minimize distractions and stay on track.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-5xl mb-4">💡</div>
            <h3 className="font-bold mb-2 text-secondary">Insightful Analytics</h3>
            <p className="text-center text-sm">
              Understand your habits with detailed insights.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

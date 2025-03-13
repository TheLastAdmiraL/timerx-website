import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-secondary p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-black pl-6">TimerX</h1>
      <div className="space-x-6 pr-6">
        <Link 
          href="/" 
          className="text-lg text-black px-3 py-1 rounded-xl transition duration-300 hover:bg-nav_bar_hover/40 hover:scale-105"
        >
          Home
        </Link>
        <Link 
          href="/journey" 
          className="text-lg text-black px-3 py-1 rounded-xl transition duration-300 hover:bg-nav_bar_hover/40 hover:scale-105"
        >
          Our Journey
        </Link>
        <Link 
          href="/download" 
          className="text-lg text-black px-3 py-1 rounded-xl transition duration-300 hover:bg-nav_bar_hover/40 hover:scale-105"
        >
          Download TimerX
        </Link>
        <Link 
          href="/contact" 
          className="text-lg text-black px-3 py-1 rounded-xl transition duration-300 hover:bg-nav_bar_hover/40 hover:scale-105"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
}

import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [status, setStatus] = useState(""); // success | error | ""

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/mjkwgajp", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: data,
    });

    const result = await res.json();
    if (result.ok || res.status === 200) {
      setStatus("success");
      form.reset(); // clear the form
    } else {
      setStatus("error");
    }
  };

  return (
    <footer className="bg-gray-900 text-white px-6 py-12 mt-12 text-sm md:text-base">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="text-xl font-semibold text-neon_green mb-2">Join our Newsletter</h3>
            <p className="mb-4 text-gray-400">
              Get tips on managing your time effectively, delivered straight to your inbox.
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md text-black w-full sm:w-auto flex-grow"
              />
              <button
                type="submit"
                className="bg-neon_green text-black px-4 py-2 rounded-md font-semibold hover:opacity-90 transition"
              >
                Subscribe
              </button>
            </form>
            {status === "success" && (
              <p className="mt-2 text-green-400">Thanks for subscribing!</p>
            )}
            {status === "error" && (
              <p className="mt-2 text-red-500">Something went wrong. Please try again.</p>
            )}
          </div>

         
          <div>
            <h4 className="text-lg font-semibold text-neon_green mb-2">Follow us</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-neon_green transition">Instagram</a>
              <a href="#" className="hover:text-neon_green transition">Twitter</a>
              <a href="#" className="hover:text-neon_green transition">LinkedIn</a>
            </div>
          </div>
        </div>

        
        <div className="flex flex-col items-start md:items-end gap-2 text-gray-300">
          <h3 className="text-lg font-semibold text-neon_green mb-2">Quick Links</h3>
          <Link href="/about" className="hover:text-neon_green transition">About Us</Link>
          <Link href="/privacy-policy" className="hover:text-neon_green transition">Privacy Policy</Link>
          <Link href="/terms-and-conditions" className="hover:text-neon_green transition">Terms & Conditions</Link>
          <p className="text-xs text-gray-500 mt-6">
            © {new Date().getFullYear()} TimerX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

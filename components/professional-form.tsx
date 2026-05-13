"use client";
import { useForm, ValidationError } from "@formspree/react";

export function ProfessionalForm() {
  const [state, handleSubmit] = useForm("xkoyeeqa");

  return (
    <section
      className="w-full max-w-2xl mx-auto my-16 p-10 rounded-3xl shadow-2xl border border-zinc-200/30 dark:border-zinc-700/40 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl"
      style={{ boxShadow: "0 12px 48px 0 rgba(31, 38, 135, 0.18)" }}
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="bg-gradient-to-tr from-blue-500 to-pink-400 rounded-2xl p-4 shadow-lg">
          <svg width="40" height="40" fill="none" viewBox="0 0 24 24" className="text-white">
            <path fill="currentColor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
          </svg>
        </div>
        <div>
          <h2 className="text-4xl font-extrabold tracking-tight mb-1 text-zinc-900 dark:text-white">Contact Me</h2>
        </div>
      </div>
      {state.succeeded ? (
        <p className="text-green-600 text-center text-lg font-semibold">Thank you! Your message has been sent.</p>
      ) : (
        <form className="flex flex-col md:flex-row gap-6" onSubmit={handleSubmit}>
          {/* Left side: Name, Email, Subject */}
          <div className="flex flex-col gap-4 flex-1">
            <div>
              <label htmlFor="name" className="block font-semibold mb-1 text-zinc-700 dark:text-zinc-200">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white/90 dark:bg-zinc-800/90 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>
            <div>
              <label htmlFor="email" className="block font-semibold mb-1 text-zinc-700 dark:text-zinc-200">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white/90 dark:bg-zinc-800/90 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <div>
              <label htmlFor="subject" className="block font-semibold mb-1 text-zinc-700 dark:text-zinc-200">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                placeholder="Subject"
                className="w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white/90 dark:bg-zinc-800/90 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
              />
              <ValidationError prefix="Subject" field="subject" errors={state.errors} />
            </div>
          </div>
          {/* Right side: Message */}
          <div className="flex-1 flex flex-col">
            <label htmlFor="message" className="block font-semibold mb-1 text-zinc-700 dark:text-zinc-200">Message</label>
            <textarea
              id="message"
              name="message"
              rows={10}
              required
              placeholder="Your Message"
              className="w-full h-full min-h-[180px] px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white/90 dark:bg-zinc-800/90 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition resize-none"
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-gradient-to-r from-blue-600 via-pink-500 to-cyan-500 text-white font-bold rounded-xl shadow-lg hover:from-blue-700 hover:to-pink-600 transition-all text-lg tracking-wide"
          >
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24" className="inline-block">
              <path fill="currentColor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
            {state.submitting ? "Sending..." : "Send Message"}
          </button>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 text-center mt-2">
            <span className="inline-block align-middle mr-1">🔒</span>
            Your information is kept private and secure.
          </p>
        </form>
      )}
    </section>
  );
}

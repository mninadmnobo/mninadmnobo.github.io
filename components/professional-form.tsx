"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export function ProfessionalForm() {
  const [subject, setSubject] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const serviceId = "service_pwa7i9a";
    const templateId = "template_ughtohx";
    const publicKey = "pvZuKpjsmwgZAosMl";

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      setErrorMessage("Email service is not configured yet.");
      return;
    }

    try {
      await emailjs.sendForm(serviceId, templateId, event.currentTarget, publicKey);
      event.currentTarget.reset();
      setSubject("");
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again soon.");
    }
  };

  return (
    <section
      className="relative w-full max-w-5xl mx-auto my-10 p-10 rounded-3xl border border-zinc-200/40 dark:border-zinc-700/50 bg-white/80 dark:bg-zinc-900/70 backdrop-blur-xl shadow-2xl glow-card"
      style={{ boxShadow: "0 18px 60px 0 rgba(15, 23, 42, 0.25)" }}
    >
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/60 via-transparent to-transparent dark:from-white/5" />
      <div className="relative">
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <div className="h-px w-10 bg-gradient-to-r from-blue-500 via-pink-500 to-cyan-400" />
            <p className="text-sm font-semibold uppercase tracking-widest text-zinc-700 dark:text-zinc-300">
              Connect with Me
            </p>
          </div>
          <p className="mt-2 text-sm md:text-base text-zinc-600 dark:text-zinc-300 max-w-2xl">
            Share your ideas, opportunity, or question. I will reply as soon as possible.
          </p>
        </div>

      {status === "success" ? (
        <p className="text-green-600 text-center text-lg font-semibold">Thank you! Your message has been sent.</p>
      ) : (
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full" onSubmit={handleSubmit}>
          {/* Left side: Name, Email, Subject */}
          <div className="flex flex-col gap-4 w-full">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2 text-zinc-700 dark:text-zinc-200">Name</label>
              <input
                type="text"
                id="name"
                name="from_name"
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl border border-zinc-200/80 dark:border-zinc-700/70 bg-white/90 dark:bg-zinc-900/80 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-400/70 focus:border-blue-400/60 transition"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2 text-zinc-700 dark:text-zinc-200">Email</label>
              <input
                type="email"
                id="email"
                name="reply_to"
                required
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-xl border border-zinc-200/80 dark:border-zinc-700/70 bg-white/90 dark:bg-zinc-900/80 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-400/70 focus:border-blue-400/60 transition"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-zinc-700 dark:text-zinc-200">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                placeholder="Subject"
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-zinc-200/80 dark:border-zinc-700/70 bg-white/90 dark:bg-zinc-900/80 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-400/70 focus:border-blue-400/60 transition"
              />
            </div>
          </div>
          {/* Right side: Message */}
          <div className="flex flex-col w-full h-full">
            <label htmlFor="message" className="block text-sm font-semibold mb-2 text-zinc-700 dark:text-zinc-200">Message</label>
            <textarea
              id="message"
              name="message"
              rows={10}
              required
              placeholder="Your Message"
              className="w-full h-full min-h-[240px] px-4 py-3 rounded-xl border border-zinc-200/80 dark:border-zinc-700/70 bg-white/90 dark:bg-zinc-900/80 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-400/70 focus:border-blue-400/60 transition resize-none"
            />
          </div>
          {/* Button full width below both columns */}
          <div className="col-span-1 md:col-span-2">
            <button
              type="submit"
              disabled={status === "sending"}
              className="flex items-center justify-center gap-2 w-full py-3.5 px-4 bg-gradient-to-r from-blue-600 via-pink-500 to-cyan-500 text-white font-bold rounded-2xl shadow-lg hover:from-blue-700 hover:to-pink-600 transition-all text-lg tracking-wide"
            >
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24" className="inline-block">
                <path fill="currentColor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
            {status === "error" && (
              <p className="mt-3 text-sm text-red-500 text-center">{errorMessage}</p>
            )}
            <p className="text-xs text-zinc-500 dark:text-zinc-400 text-center mt-2">
              <span className="inline-block align-middle mr-1">🔒</span>
              Your information is kept private and secure.
            </p>
          </div>
        </form>
      )}
      </div>
    </section>
  );
}

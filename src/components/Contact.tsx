import React, { useState } from "react";

export default function Contact(): JSX.Element {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<null | "idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setStatus("error");
      return;
    }
    try {
      setStatus("sending");
      // Simulate send — replace with real API call as needed
      await new Promise((r) => setTimeout(r, 800));
      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6" />
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Get in touch with Narayana Law Firm for consultations, appointments, or enquiries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6 p-6 bg-white dark:bg-slate-800 rounded-xl shadow border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Office</h3>
            <address className="not-italic text-slate-600 dark:text-slate-300 space-y-2 text-sm">
              <div>Narayana Law Firm</div>
              <div>Address - Chamber No -264, Civil Wing</div>
              <div>Tis Hazari Court Complex, North Delhi</div>
              <div>Pin Code - 110054</div>
              <div>
                Email:{" "}
                <a
                  href="mailto:gyanendra@lawer.com"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  gyanendra@lawer.com
                </a>
              </div>
            </address>

            <div>
              <h4 className="text-sm font-medium text-slate-700 dark:text-slate-200">Hours</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">Mon - Fri: 9:30 AM — 6:00 PM</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow border border-slate-200 dark:border-slate-700">
            <div className="grid gap-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent text-slate-900 dark:text-white"
                required
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent text-slate-900 dark:text-white"
                required
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message"
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent text-slate-900 dark:text-white"
                required
              />

              <div className="flex items-center justify-between gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg font-semibold transition"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
                {status === "sent" && <span className="text-sm text-green-600">Message sent — we will contact you soon.</span>}
                {status === "error" && <span className="text-sm text-red-600">Please fill all fields.</span>}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

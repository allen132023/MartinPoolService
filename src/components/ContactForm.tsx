"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const services = [
  "Weekly Pool Cleaning",
  "Chemical Balancing",
  "Filter Cleaning",
  "Green Pool Recovery",
  "Equipment Inspection",
  "Pool Vacuuming",
  "Tile Brushing",
  "Full Pool Maintenance Plan",
  "Other / Not Sure",
];

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(data: Record<string, string>) {
    const e: Record<string, string> = {};
    if (!data.name.trim()) e.name = "Name is required";
    if (!data.email.trim() || !/\S+@\S+\.\S+/.test(data.email)) e.email = "Valid email is required";
    if (!data.phone.trim()) e.phone = "Phone number is required";
    if (!data.service) e.service = "Please select a service";
    return e;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    const errs = validate(data);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("submitting");

    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 text-center">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-emerald-500" />
        </div>
        <h3 className="text-2xl font-bold text-[#0a2540] mb-2">Message Sent!</h3>
        <p className="text-[#1a1a2e]/60">
          Thank you! We&apos;ll get back to you within 24 hours with your free quote.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-[#00b4d8] text-sm font-medium hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label className="block text-sm font-semibold text-[#0a2540] mb-1.5" htmlFor="name">
            Full Name <span className="text-[#00b4d8]">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="John Smith"
            className={`w-full px-4 py-3 rounded-xl border text-sm text-[#0a2540] placeholder-gray-400 outline-none transition-all focus:ring-2 focus:ring-[#00b4d8]/40 focus:border-[#00b4d8] ${errors.name ? "border-red-400" : "border-gray-200"}`}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-[#0a2540] mb-1.5" htmlFor="email">
            Email <span className="text-[#00b4d8]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            className={`w-full px-4 py-3 rounded-xl border text-sm text-[#0a2540] placeholder-gray-400 outline-none transition-all focus:ring-2 focus:ring-[#00b4d8]/40 focus:border-[#00b4d8] ${errors.email ? "border-red-400" : "border-gray-200"}`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Phone */}
        <div>
          <label className="block text-sm font-semibold text-[#0a2540] mb-1.5" htmlFor="phone">
            Phone <span className="text-[#00b4d8]">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(555) 123-4567"
            className={`w-full px-4 py-3 rounded-xl border text-sm text-[#0a2540] placeholder-gray-400 outline-none transition-all focus:ring-2 focus:ring-[#00b4d8]/40 focus:border-[#00b4d8] ${errors.phone ? "border-red-400" : "border-gray-200"}`}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>

        {/* Service */}
        <div>
          <label className="block text-sm font-semibold text-[#0a2540] mb-1.5" htmlFor="service">
            Service Needed <span className="text-[#00b4d8]">*</span>
          </label>
          <select
            id="service"
            name="service"
            defaultValue=""
            className={`w-full px-4 py-3 rounded-xl border text-sm text-[#0a2540] outline-none transition-all focus:ring-2 focus:ring-[#00b4d8]/40 focus:border-[#00b4d8] bg-white ${errors.service ? "border-red-400" : "border-gray-200"}`}
          >
            <option value="" disabled>Select a service</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
        </div>
      </div>

      {/* Address */}
      <div>
        <label className="block text-sm font-semibold text-[#0a2540] mb-1.5" htmlFor="address">
          Pool Address
        </label>
        <input
          id="address"
          name="address"
          type="text"
          placeholder="123 Main St, City, State"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#0a2540] placeholder-gray-400 outline-none transition-all focus:ring-2 focus:ring-[#00b4d8]/40 focus:border-[#00b4d8]"
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-semibold text-[#0a2540] mb-1.5" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your pool, any current issues, or questions..."
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#0a2540] placeholder-gray-400 outline-none transition-all focus:ring-2 focus:ring-[#00b4d8]/40 focus:border-[#00b4d8] resize-none"
        />
      </div>

      {/* Spam prevention */}
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

      {status === "error" && (
        <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-xl p-3">
          <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
          <p className="text-red-600 text-sm">Something went wrong. Please try again or call us directly.</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#00b4d8] to-[#0a8fad] text-white py-4 rounded-xl font-bold text-base hover:shadow-lg hover:shadow-[#00b4d8]/30 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Send Message
          </>
        )}
      </button>

      <p className="text-center text-xs text-gray-400">
        We typically respond within 24 hours. Your information is never shared.
      </p>
    </form>
  );
}

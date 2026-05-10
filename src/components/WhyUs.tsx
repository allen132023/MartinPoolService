"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Star, Leaf, Phone, Award } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const reasons = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed pool technicians with comprehensive liability insurance for your peace of mind.",
  },
  {
    icon: Clock,
    title: "Reliable & Punctual",
    description: "We show up when scheduled, every time. Consistent weekly service you can set your calendar by.",
  },
  {
    icon: Star,
    title: "Expert Technicians",
    description: "Our team is trained in all aspects of pool care, chemistry, and equipment diagnostics.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Products",
    description: "We use environmentally responsible chemicals and methods to protect your family and the planet.",
  },
  {
    icon: Phone,
    title: "Responsive Support",
    description: "Real human support when you need it. Call or text and get a response the same day.",
  },
  {
    icon: Award,
    title: "Satisfaction Guaranteed",
    description: "Not happy with a cleaning? We'll come back and make it right — no questions asked.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-[#0a2540] relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00b4d8] to-transparent opacity-30" />
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#00b4d8]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#1a4a7a]/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateOnScroll className="text-center mb-16">
          <span className="inline-block text-[#00b4d8] font-semibold text-sm uppercase tracking-widest mb-3">
            Why Choose Us
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            The Martin Pool Difference
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            We bring professionalism, expertise, and genuine care to every pool we service.
          </p>
        </AnimateOnScroll>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <AnimateOnScroll key={reason.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="glass rounded-2xl p-6 border border-white/10 hover:border-[#00b4d8]/30 transition-colors group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#00b4d8] to-[#0a8fad] rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <reason.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{reason.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{reason.description}</p>
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

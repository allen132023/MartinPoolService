"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Star, Shield, CheckCircle, ArrowRight, ChevronDown } from "lucide-react";

const trustStats = [
  { value: "500+", label: "Happy Clients" },
  { value: "5★", label: "Average Rating" },
  { value: "10+", label: "Years Experience" },
  { value: "100%", label: "Satisfaction" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-gradient" />

      {/* Water ripple overlay */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(ellipse at 20% 50%, rgba(0,180,216,0.4) 0%, transparent 50%),
                              radial-gradient(ellipse at 80% 20%, rgba(144,224,239,0.3) 0%, transparent 40%),
                              radial-gradient(ellipse at 60% 80%, rgba(0,180,216,0.2) 0%, transparent 40%)`,
          }}
        />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating orbs */}
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-[15%] w-64 h-64 bg-[#00b4d8]/20 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 left-[10%] w-80 h-80 bg-[#1a4a7a]/30 rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
          >
            <Star className="w-4 h-4 text-[#00b4d8] fill-[#00b4d8]" />
            <span className="text-white/90 text-sm font-medium">
              Trusted Pool Service Professionals
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6"
          >
            Crystal Clear
            <br />
            <span className="text-[#00b4d8]">Pools. Every</span>
            <br />
            Time.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/70 leading-relaxed mb-8 max-w-xl"
          >
            Professional pool cleaning and maintenance you can count on. Weekly service, chemical balancing, and complete care — so you can simply enjoy your pool.
          </motion.p>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            {[
              "Licensed & Insured",
              "Same-Week Service",
              "100% Satisfaction Guarantee",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-1.5 text-white/80 text-sm"
              >
                <CheckCircle className="w-4 h-4 text-[#00b4d8] flex-shrink-0" />
                {item}
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00b4d8] to-[#0a8fad] text-white px-8 py-4 rounded-full text-base font-bold shadow-2xl shadow-[#00b4d8]/30 hover:shadow-[#00b4d8]/50 hover:-translate-y-1 transition-all duration-300"
            >
              Get Free Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+15555555555"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full text-base font-bold hover:bg-white/20 hover:-translate-y-1 transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10"
        >
          {trustStats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/5 backdrop-blur-sm px-6 py-6 text-center hover:bg-white/10 transition-colors"
            >
              <div className="text-3xl font-extrabold text-[#00b4d8] mb-1">
                {stat.value}
              </div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-1 text-white/40"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}

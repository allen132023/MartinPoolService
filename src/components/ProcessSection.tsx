"use client";

import { motion } from "framer-motion";
import AnimateOnScroll from "./AnimateOnScroll";

const steps = [
  {
    number: "01",
    title: "Free Consultation",
    description: "Contact us for a no-obligation quote. We'll discuss your pool's needs and provide transparent pricing.",
  },
  {
    number: "02",
    title: "Customized Plan",
    description: "We create a tailored service plan based on your pool size, usage, and specific requirements.",
  },
  {
    number: "03",
    title: "Professional Service",
    description: "Our certified technicians arrive on schedule and perform thorough, meticulous pool care.",
  },
  {
    number: "04",
    title: "Quality Report",
    description: "After each visit, receive a detailed service report with water chemistry readings and any recommendations.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00b4d8]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <span className="inline-block text-[#00b4d8] font-semibold text-sm uppercase tracking-widest mb-3">
            How It Works
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0a2540] mb-4">
            Simple & Seamless Process
          </h2>
          <p className="text-[#1a1a2e]/60 text-lg max-w-2xl mx-auto">
            Getting started is easy. We handle everything from the first call to your perfectly maintained pool.
          </p>
        </AnimateOnScroll>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00b4d8]/30 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <AnimateOnScroll key={step.number} delay={i * 0.15} direction="up">
                <div className="relative text-center group">
                  {/* Number circle */}
                  <div className="relative inline-flex items-center justify-center w-16 h-16 mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00b4d8] to-[#0a8fad] rounded-full opacity-10 group-hover:opacity-20 transition-opacity" />
                    <div className="absolute inset-0 border-2 border-[#00b4d8]/30 rounded-full group-hover:border-[#00b4d8]/60 transition-colors" />
                    <span className="text-2xl font-black text-[#00b4d8]">{step.number}</span>

                    {/* Ripple */}
                    <motion.div
                      animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
                      className="absolute inset-0 border border-[#00b4d8]/40 rounded-full"
                    />
                  </div>

                  <h3 className="text-[#0a2540] font-bold text-lg mb-3">{step.title}</h3>
                  <p className="text-[#1a1a2e]/60 text-sm leading-relaxed">{step.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

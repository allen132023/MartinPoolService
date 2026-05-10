"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Local Homeowner",
    rating: 5,
    text: "Martin Pool Service is absolutely amazing. My pool has never looked this good. They show up every week like clockwork and the water is always perfectly balanced. Highly recommend!",
  },
  {
    name: "David R.",
    location: "Pool Owner",
    rating: 5,
    text: "After trying two other pool services, I finally found Martin Pool Service. The difference is night and day. Professional, thorough, and they actually care about the quality of their work.",
  },
  {
    name: "Jennifer L.",
    location: "Satisfied Customer",
    rating: 5,
    text: "They rescued my pool from going completely green! Within two days it was sparkling clear. I've been a loyal customer ever since. Worth every penny.",
  },
  {
    name: "Michael T.",
    location: "Happy Customer",
    rating: 5,
    text: "Best pool service in town. They send a report after every visit which I really appreciate. My family can always jump in the pool knowing it's clean and safe.",
  },
  {
    name: "Amanda K.",
    location: "Pool Owner",
    rating: 5,
    text: "Super responsive team. I texted about a cloudy pool and they came out the next day. Couldn't be happier with the service and professionalism.",
  },
  {
    name: "Robert C.",
    location: "Long-time Customer",
    rating: 5,
    text: "3 years and counting with Martin Pool Service. They've never missed a scheduled visit and my pool always looks resort-quality. The best investment for any pool owner.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#f8fafc] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00b4d8]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <span className="inline-block text-[#00b4d8] font-semibold text-sm uppercase tracking-widest mb-3">
            Reviews
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0a2540] mb-4">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-amber-400 fill-amber-400" />
            ))}
            <span className="ml-2 text-[#1a1a2e]/60 text-sm">5.0 average rating</span>
          </div>
          <p className="text-[#1a1a2e]/60 text-lg max-w-2xl mx-auto">
            Don't just take our word for it — hear from our satisfied customers.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimateOnScroll key={t.name} delay={i * 0.1} direction="up">
              <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#00b4d8]/30 hover:shadow-lg hover:shadow-[#00b4d8]/10 transition-all duration-300 h-full flex flex-col">
                <Quote className="w-8 h-8 text-[#00b4d8]/20 mb-4 flex-shrink-0" />
                <p className="text-[#1a1a2e]/70 text-sm leading-relaxed mb-6 flex-1">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-[#0a2540] text-sm">{t.name}</div>
                    <div className="text-[#1a1a2e]/50 text-xs">{t.location}</div>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

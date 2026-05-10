"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Droplets,
  Filter,
  Leaf,
  Wrench,
  Wind,
  Brush,
  FlaskConical,
  Shield,
  Zap,
  Search,
  ArrowRight,
} from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const services = [
  {
    icon: Droplets,
    title: "Weekly Pool Cleaning",
    description:
      "Regular scheduled cleaning to keep your pool pristine. Skimming, brushing, and vacuuming every week.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: FlaskConical,
    title: "Chemical Balancing",
    description:
      "Expert water chemistry testing and treatment ensuring safe, balanced water year-round.",
    color: "from-cyan-500 to-teal-500",
  },
  {
    icon: Filter,
    title: "Filter Cleaning",
    description:
      "Thorough filter inspection, cleaning, and maintenance to maximize filtration efficiency.",
    color: "from-teal-500 to-emerald-500",
  },
  {
    icon: Leaf,
    title: "Green Pool Recovery",
    description:
      "Emergency shock treatment and algae removal to restore your green pool to crystal clarity.",
    color: "from-emerald-500 to-green-500",
  },
  {
    icon: Wrench,
    title: "Equipment Inspection",
    description:
      "Full equipment check including pump, heater, and automation systems to catch issues early.",
    color: "from-blue-600 to-blue-400",
  },
  {
    icon: Wind,
    title: "Pool Vacuuming",
    description:
      "Manual and automatic vacuuming of all pool surfaces to remove debris and sediment.",
    color: "from-sky-500 to-blue-500",
  },
  {
    icon: Brush,
    title: "Tile Brushing",
    description:
      "Detailed brushing of tile lines and walls to prevent calcium buildup and algae growth.",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: Wind,
    title: "Skimming",
    description:
      "Surface debris removal to keep your pool looking immaculate and improve circulation.",
    color: "from-cyan-400 to-blue-500",
  },
  {
    icon: Search,
    title: "Pump & Filter Checks",
    description:
      "Routine inspection of pump operation, pressure readings, and filter performance metrics.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Shield,
    title: "Maintenance Plans",
    description:
      "Customized service plans tailored to your pool size, usage, and seasonal requirements.",
    color: "from-violet-500 to-indigo-500",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function ServicesSection({ preview = false }: { preview?: boolean }) {
  const displayed = preview ? services.slice(0, 6) : services;

  return (
    <section className="py-24 bg-[#f8fafc] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00b4d8]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1a4a7a]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateOnScroll className="text-center mb-16">
          <span className="inline-block text-[#00b4d8] font-semibold text-sm uppercase tracking-widest mb-3">
            What We Do
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0a2540] mb-4">
            Complete Pool Care Services
          </h2>
          <p className="text-[#1a1a2e]/60 text-lg max-w-2xl mx-auto">
            From routine maintenance to emergency recovery — we handle everything so you can simply enjoy your pool.
          </p>
        </AnimateOnScroll>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {displayed.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#00b4d8]/30 hover:shadow-xl hover:shadow-[#00b4d8]/10 transition-all duration-350 cursor-pointer"
            >
              <div
                className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-[#0a2540] font-bold text-lg mb-2 group-hover:text-[#00b4d8] transition-colors">
                {service.title}
              </h3>
              <p className="text-[#1a1a2e]/60 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        {preview && (
          <AnimateOnScroll className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00b4d8] to-[#0a8fad] text-white px-8 py-4 rounded-full font-bold hover:shadow-lg hover:shadow-[#00b4d8]/30 hover:-translate-y-1 transition-all duration-300"
            >
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimateOnScroll>
        )}
      </div>
    </section>
  );
}

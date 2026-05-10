"use client";

import { motion } from "framer-motion";
import { ExternalLink, Camera } from "lucide-react";
import InstagramIcon from "./InstagramIcon";
import AnimateOnScroll from "./AnimateOnScroll";

const gradients = [
  "from-cyan-400 to-blue-600",
  "from-blue-500 to-indigo-600",
  "from-teal-400 to-cyan-600",
  "from-sky-400 to-blue-500",
  "from-blue-400 to-cyan-500",
  "from-cyan-500 to-teal-600",
  "from-indigo-500 to-blue-500",
  "from-sky-500 to-cyan-600",
  "from-blue-600 to-indigo-500",
  "from-cyan-600 to-blue-700",
  "from-teal-500 to-blue-600",
  "from-blue-500 to-cyan-400",
];

export default function GalleryGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-[#0a2540] mb-4">Pool Transformations</h2>
          <p className="text-[#1a1a2e]/60">
            Real results from real customers. Click any image to see more on Instagram.
          </p>
        </AnimateOnScroll>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {gradients.map((gradient, i) => (
            <motion.a
              key={i}
              href="https://www.instagram.com/martinpoolservice_/"
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                show: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
              }}
              whileHover={{ scale: 1.03 }}
              className={`group relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br ${gradient} cursor-pointer`}
            >
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.6) 0%, transparent 40%),
                                    radial-gradient(circle at 70% 70%, rgba(255,255,255,0.2) 0%, transparent 40%)`,
                }}
              />
              <svg
                className="absolute bottom-0 left-0 w-full opacity-40"
                viewBox="0 0 200 50"
                preserveAspectRatio="none"
              >
                <path d="M0 25 C50 5 150 45 200 25 L200 50 L0 50 Z" fill="rgba(255,255,255,0.25)" />
              </svg>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2">
                  <Camera className="w-8 h-8 text-white" />
                  <span className="text-white text-xs font-medium">View on Instagram</span>
                </div>
              </div>
              {i % 4 === 0 && (
                <div className="absolute top-3 left-3 bg-white/20 backdrop-blur-sm rounded-lg px-2 py-1">
                  <span className="text-white text-xs font-medium">Before/After</span>
                </div>
              )}
            </motion.a>
          ))}
        </motion.div>

        <AnimateOnScroll className="text-center mt-12">
          <a
            href="https://www.instagram.com/martinpoolservice_/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00b4d8] to-[#0a8fad] text-white px-8 py-4 rounded-full font-bold hover:shadow-lg hover:shadow-[#00b4d8]/30 hover:-translate-y-1 transition-all duration-300"
          >
            <InstagramIcon className="w-5 h-5" />
            See All Photos on Instagram
            <ExternalLink className="w-4 h-4" />
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

// Add your photos to public/gallery/ and list them here.
// Supported formats: .jpg, .jpeg, .png, .webp
const images = [
  { src: "/MartinPoolService/gallery/pool1.jpg", label: "Weekly Service" },
  { src: "/MartinPoolService/gallery/pool2.jpg", label: "Before & After" },
  { src: "/MartinPoolService/gallery/pool3.jpg", label: "Chemical Balance" },
  { src: "/MartinPoolService/gallery/pool4.jpg", label: "Green Recovery" },
  { src: "/MartinPoolService/gallery/pool5.jpg", label: "Filter Clean" },
  { src: "/MartinPoolService/gallery/pool6.jpg", label: "Weekly Service" },
  { src: "/MartinPoolService/gallery/pool7.jpg", label: "Before & After" },
  { src: "/MartinPoolService/gallery/pool8.jpg", label: "Tile Brushing" },
  { src: "/MartinPoolService/gallery/pool9.jpg", label: "Vacuuming" },
  { src: "/MartinPoolService/gallery/pool10.jpg", label: "Equipment Check" },
  { src: "/MartinPoolService/gallery/pool11.jpg", label: "Before & After" },
  { src: "/MartinPoolService/gallery/pool12.jpg", label: "Weekly Service" },
];

// Gradient fallback shown while image loads or if file is missing
const fallbacks = [
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
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [errored, setErrored] = useState<Set<number>>(new Set());

  function prev() {
    setLightbox((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  }

  function next() {
    setLightbox((i) => (i === null ? null : (i + 1) % images.length));
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-[#0a2540] mb-4">Pool Transformations</h2>
          <p className="text-[#1a1a2e]/60">
            Real results from real customers. Click any photo to enlarge.
          </p>
        </AnimateOnScroll>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {images.map((img, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, scale: 0.92 },
                show: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
              }}
              whileHover={{ scale: 1.03 }}
              onClick={() => setLightbox(i)}
              className={`group relative aspect-square rounded-2xl overflow-hidden cursor-zoom-in bg-gradient-to-br ${fallbacks[i % fallbacks.length]}`}
            >
              {!errored.has(i) && (
                <img
                  src={img.src}
                  alt={img.label}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={() => setErrored((prev) => new Set(prev).add(i))}
                />
              )}

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end justify-between p-3">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs font-semibold bg-black/40 rounded-lg px-2 py-1 backdrop-blur-sm">
                  {img.label}
                </span>
                <ZoomIn className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightbox !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={() => setLightbox(null)}
            >
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-4 text-white/70 hover:text-white p-3 rounded-full hover:bg-white/10 transition-colors"
              >
                <ChevronLeft className="w-7 h-7" />
              </button>

              <motion.div
                key={lightbox}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
                className={`relative max-w-4xl max-h-[85vh] w-full rounded-2xl overflow-hidden bg-gradient-to-br ${fallbacks[lightbox % fallbacks.length]}`}
              >
                {!errored.has(lightbox) && (
                  <img
                    src={images[lightbox].src}
                    alt={images[lightbox].label}
                    className="w-full h-full object-contain max-h-[85vh]"
                    onError={() => setErrored((prev) => new Set(prev).add(lightbox))}
                  />
                )}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white text-sm px-4 py-1.5 rounded-full backdrop-blur-sm">
                  {images[lightbox].label} — {lightbox + 1} / {images.length}
                </div>
              </motion.div>

              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-4 text-white/70 hover:text-white p-3 rounded-full hover:bg-white/10 transition-colors"
              >
                <ChevronRight className="w-7 h-7" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

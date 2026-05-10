import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const areas = [
  "Local City",
  "Nearby Town",
  "Surrounding Area",
  "Metro District",
  "Suburban Neighborhoods",
  "And More",
];

export default function ServiceArea() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#00b4d8]/3 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimateOnScroll direction="left">
            <span className="inline-block text-[#00b4d8] font-semibold text-sm uppercase tracking-widest mb-3">
              Service Area
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0a2540] mb-6">
              We Come to You
            </h2>
            <p className="text-[#1a1a2e]/60 text-lg leading-relaxed mb-8">
              Martin Pool Service proudly serves homeowners and businesses throughout the local area. If you&apos;re not sure if we service your neighborhood, just give us a call — we&apos;re always looking to expand our reach.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {areas.map((area) => (
                <div key={area} className="flex items-center gap-2 text-[#1a1a2e]/70 text-sm">
                  <MapPin className="w-4 h-4 text-[#00b4d8] flex-shrink-0" />
                  {area}
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00b4d8] to-[#0a8fad] text-white px-8 py-4 rounded-full font-bold hover:shadow-lg hover:shadow-[#00b4d8]/30 hover:-translate-y-1 transition-all duration-300"
            >
              Check Your Area
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimateOnScroll>

          {/* Visual map placeholder */}
          <AnimateOnScroll direction="right">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0a2540] to-[#1a4a7a] aspect-square max-w-lg mx-auto shadow-2xl">
              {/* Map-like grid */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
                                    linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
                  backgroundSize: "40px 40px",
                }}
              />

              {/* Center pin */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="w-24 h-24 bg-[#00b4d8]/20 rounded-full flex items-center justify-center">
                    <div className="w-16 h-16 bg-[#00b4d8]/30 rounded-full flex items-center justify-center">
                      <div className="w-10 h-10 bg-[#00b4d8] rounded-full flex items-center justify-center shadow-lg shadow-[#00b4d8]/50">
                        <MapPin className="w-5 h-5 text-white fill-white" />
                      </div>
                    </div>
                  </div>

                  {/* Ripple rings */}
                  {[1, 2, 3].map((ring) => (
                    <div
                      key={ring}
                      className="absolute inset-0 border-2 border-[#00b4d8]/20 rounded-full"
                      style={{
                        transform: `scale(${1 + ring * 0.8})`,
                        animation: `ripple ${2 + ring * 0.5}s ease-out infinite`,
                        animationDelay: `${ring * 0.4}s`,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Corner labels */}
              <div className="absolute top-6 left-6 glass rounded-lg px-3 py-1.5">
                <span className="text-white text-xs font-medium">Service Zone</span>
              </div>
              <div className="absolute bottom-6 right-6 glass rounded-lg px-3 py-1.5">
                <span className="text-[#00b4d8] text-xs font-medium">Expanding Soon</span>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}

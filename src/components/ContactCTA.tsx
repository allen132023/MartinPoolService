import Link from "next/link";
import { Phone, ArrowRight, MessageCircle } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

export default function ContactCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 animated-gradient" />
      <div className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(ellipse at 30% 50%, rgba(0,180,216,0.5) 0%, transparent 50%),
                            radial-gradient(ellipse at 70% 50%, rgba(144,224,239,0.3) 0%, transparent 50%)`,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimateOnScroll>
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 text-white/90 text-sm font-medium">
            <MessageCircle className="w-4 h-4 text-[#90e0ef]" />
            Ready to get started?
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Get Your Pool <span className="text-[#00b4d8]">Sparkling</span> Clean
          </h2>
          <p className="text-white/70 text-xl mb-10 max-w-2xl mx-auto">
            Contact us today for a free, no-obligation quote. We&apos;ll have your pool looking resort-quality in no time.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#0a2540] px-8 py-4 rounded-full text-base font-bold hover:bg-[#90e0ef] transition-colors duration-300 hover:-translate-y-1 shadow-2xl"
            >
              Get Free Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+15555555555"
              className="inline-flex items-center gap-2 border-2 border-white/40 text-white px-8 py-4 rounded-full text-base font-bold hover:bg-white/10 hover:border-white transition-all duration-300 hover:-translate-y-1"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

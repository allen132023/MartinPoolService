import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import ContactCTA from "@/components/ContactCTA";
import GalleryGrid from "@/components/GalleryGrid";
import InstagramIcon from "@/components/InstagramIcon";

export const metadata: Metadata = {
  title: "Pool Gallery — Before & After Photos",
  description:
    "See our pool cleaning and transformation results. Browse before and after photos from Martin Pool Service clients.",
};

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-[#0a2540] relative overflow-hidden">
        <div className="absolute inset-0 animated-gradient opacity-60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <span className="inline-block text-[#00b4d8] font-semibold text-sm uppercase tracking-widest mb-4">
              Gallery
            </span>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-6">
              Our Work Speaks
              <br />
              for Itself
            </h1>
            <p className="text-white/70 text-xl max-w-2xl mx-auto">
              Browse our portfolio of transformed pools. Every project is a testament to our commitment to quality.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Instagram CTA Banner */}
      <section className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-3 text-white">
              <InstagramIcon className="w-5 h-5" />
              <span className="font-semibold text-sm">Follow us on Instagram for more photos and videos</span>
            </div>
            <a
              href="https://www.instagram.com/martinpoolservice_/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-pink-600 px-4 py-1.5 rounded-full text-sm font-bold hover:bg-pink-50 transition-colors"
            >
              @martinpoolservice_
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      <GalleryGrid />
      <ContactCTA />
    </>
  );
}

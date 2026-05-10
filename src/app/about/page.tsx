import type { Metadata } from "next";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import ContactCTA from "@/components/ContactCTA";
import { Shield, Award, Heart, Leaf, Star, Users, ExternalLink } from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Martin Pool Service",
  description:
    "Learn about Martin Pool Service — our story, values, and commitment to providing exceptional pool cleaning and maintenance services.",
};

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We do what we say, when we say it. No shortcuts, no surprises — just honest, reliable service.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Every pool we service gets our full attention and expertise. We take pride in perfection.",
  },
  {
    icon: Heart,
    title: "Customer Care",
    description: "Your satisfaction is our priority. We build lasting relationships, not just client lists.",
  },
  {
    icon: Leaf,
    title: "Responsibility",
    description: "We use eco-conscious products and responsible practices to protect your family and environment.",
  },
];

const stats = [
  { value: "500+", label: "Satisfied Customers" },
  { value: "10+", label: "Years Experience" },
  { value: "5★", label: "Average Rating" },
  { value: "100%", label: "Satisfaction Rate" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-[#0a2540] relative overflow-hidden">
        <div className="absolute inset-0 animated-gradient opacity-60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <span className="inline-block text-[#00b4d8] font-semibold text-sm uppercase tracking-widest mb-4">
              About Us
            </span>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-6">
              Passion for Clean Pools
            </h1>
            <p className="text-white/70 text-xl max-w-2xl mx-auto">
              We&apos;re not just pool cleaners — we&apos;re pool care professionals who take pride in every sparkling result.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll direction="left">
              <span className="inline-block text-[#00b4d8] font-semibold text-sm uppercase tracking-widest mb-3">
                Our Story
              </span>
              <h2 className="text-4xl font-extrabold text-[#0a2540] mb-6">
                Built on a Passion for Perfect Pools
              </h2>
              <div className="space-y-4 text-[#1a1a2e]/70 leading-relaxed">
                <p>
                  Martin Pool Service was founded with a simple mission: to provide pool owners with the kind of professional, reliable service they actually deserve. We saw too many homeowners frustrated by no-shows, shoddy work, and unbalanced water chemistry.
                </p>
                <p>
                  So we built something different. A pool service company that treats your pool like it&apos;s our own — showing up on time, every time, with the expertise and tools to do the job right.
                </p>
                <p>
                  Today, we&apos;re proud to serve hundreds of pool owners across the area, and our reputation speaks for itself. Every client who joins the Martin family stays with us — not because they have to, but because they genuinely don&apos;t want to trust anyone else with their pool.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <a
                  href="https://www.instagram.com/martinpoolservice_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#00b4d8] font-semibold hover:underline text-sm"
                >
                  <InstagramIcon className="w-4 h-4" />
                  Follow our work on Instagram
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </AnimateOnScroll>

            {/* Visual */}
            <AnimateOnScroll direction="right">
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-[#00b4d8] to-[#0a2540] relative shadow-2xl">
                  <div className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8) 0%, transparent 40%),
                                        radial-gradient(circle at 70% 70%, rgba(255,255,255,0.3) 0%, transparent 40%)`,
                    }}
                  />
                  <svg className="absolute bottom-0 left-0 w-full opacity-40" viewBox="0 0 400 100" preserveAspectRatio="none">
                    <path d="M0 50 C100 10 300 90 400 50 L400 100 L0 100 Z" fill="rgba(255,255,255,0.2)" />
                    <path d="M0 70 C100 40 300 100 400 70 L400 100 L0 100 Z" fill="rgba(255,255,255,0.15)" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-7xl font-black mb-2">10+</div>
                      <div className="text-xl font-medium text-white/80">Years of Excellence</div>
                    </div>
                  </div>
                </div>

                {/* Floating card */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-xl border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center">
                      <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                    </div>
                    <div>
                      <div className="font-bold text-[#0a2540] text-sm">5-Star Rated</div>
                      <div className="text-[#1a1a2e]/50 text-xs">500+ Reviews</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#0a2540]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimateOnScroll key={stat.label} delay={i * 0.1} className="text-center">
                <div className="text-4xl font-extrabold text-[#00b4d8] mb-2">{stat.value}</div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-16">
            <span className="inline-block text-[#00b4d8] font-semibold text-sm uppercase tracking-widest mb-3">
              Our Values
            </span>
            <h2 className="text-4xl font-extrabold text-[#0a2540] mb-4">
              What Drives Us
            </h2>
            <p className="text-[#1a1a2e]/60 text-lg max-w-xl mx-auto">
              Our core values guide every decision we make and every pool we service.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <AnimateOnScroll key={v.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#00b4d8]/30 hover:shadow-lg transition-all group text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#00b4d8] to-[#0a8fad] rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg group-hover:scale-110 transition-transform">
                    <v.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-[#0a2540] font-bold text-lg mb-2">{v.title}</h3>
                  <p className="text-[#1a1a2e]/60 text-sm leading-relaxed">{v.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <Users className="w-12 h-12 text-[#00b4d8] mx-auto mb-4" />
            <h2 className="text-3xl font-extrabold text-[#0a2540] mb-4">
              Join Our Family of Happy Pool Owners
            </h2>
            <p className="text-[#1a1a2e]/60 mb-8">
              Ready to experience the Martin Pool Service difference? Contact us today for your free quote.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00b4d8] to-[#0a8fad] text-white px-8 py-4 rounded-full font-bold hover:shadow-lg hover:shadow-[#00b4d8]/30 hover:-translate-y-1 transition-all duration-300"
            >
              Get Your Free Quote
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

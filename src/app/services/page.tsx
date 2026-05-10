import type { Metadata } from "next";
import ServicesSection from "@/components/ServicesSection";
import ContactCTA from "@/components/ContactCTA";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import Link from "next/link";
import { CheckCircle, Phone, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Pool Cleaning & Maintenance Services",
  description:
    "Complete pool cleaning and maintenance services: weekly cleaning, chemical balancing, filter cleaning, green pool recovery, equipment inspection, and more.",
};

const plans = [
  {
    name: "Basic",
    price: "From $120",
    period: "/ month",
    description: "Perfect for smaller pools with occasional use",
    features: [
      "Weekly skimming & brushing",
      "Basic chemical testing",
      "Debris removal",
      "Monthly filter check",
      "Email service reports",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "From $180",
    period: "/ month",
    description: "Our most popular plan for regular pool owners",
    features: [
      "Everything in Basic",
      "Full chemical balancing",
      "Pool vacuuming",
      "Tile brushing",
      "Bi-weekly filter cleaning",
      "Equipment inspection",
      "Digital service reports",
      "Priority support",
    ],
    cta: "Most Popular",
    highlighted: true,
  },
  {
    name: "Premium",
    price: "From $260",
    period: "/ month",
    description: "Complete white-glove service for discerning pool owners",
    features: [
      "Everything in Professional",
      "Weekly filter cleaning",
      "Pump & equipment checks",
      "Water feature cleaning",
      "Seasonal adjustments",
      "Emergency response",
      "Dedicated technician",
      "Monthly health report",
    ],
    cta: "Get Premium",
    highlighted: false,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-[#0a2540] relative overflow-hidden">
        <div className="absolute inset-0 animated-gradient opacity-60" />
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <span className="inline-block text-[#00b4d8] font-semibold text-sm uppercase tracking-widest mb-4">
              Services
            </span>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-6">
              Complete Pool Care
            </h1>
            <p className="text-white/70 text-xl max-w-2xl mx-auto">
              From routine maintenance to emergency recovery — we have a service for every pool need.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Services Grid */}
      <ServicesSection />

      {/* Pricing */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-16">
            <span className="inline-block text-[#00b4d8] font-semibold text-sm uppercase tracking-widest mb-3">
              Pricing
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0a2540] mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-[#1a1a2e]/60 text-lg max-w-2xl mx-auto">
              No hidden fees. No surprises. Just clean pools and honest pricing.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <AnimateOnScroll key={plan.name} delay={i * 0.1}>
                <div
                  className={`relative rounded-3xl p-8 h-full flex flex-col ${
                    plan.highlighted
                      ? "bg-gradient-to-br from-[#0a2540] to-[#1a4a7a] text-white shadow-2xl scale-105"
                      : "bg-white border border-gray-100 hover:border-[#00b4d8]/30 hover:shadow-xl transition-all"
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-gradient-to-r from-[#00b4d8] to-[#0a8fad] text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className={`text-xl font-bold mb-1 ${plan.highlighted ? "text-[#00b4d8]" : "text-[#0a2540]"}`}>
                      {plan.name}
                    </h3>
                    <p className={`text-sm mb-4 ${plan.highlighted ? "text-white/60" : "text-[#1a1a2e]/60"}`}>
                      {plan.description}
                    </p>
                    <div className="flex items-baseline gap-1">
                      <span className={`text-4xl font-extrabold ${plan.highlighted ? "text-white" : "text-[#0a2540]"}`}>
                        {plan.price}
                      </span>
                      <span className={`text-sm ${plan.highlighted ? "text-white/60" : "text-[#1a1a2e]/50"}`}>
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.highlighted ? "text-[#00b4d8]" : "text-[#00b4d8]"}`} />
                        <span className={plan.highlighted ? "text-white/80" : "text-[#1a1a2e]/70"}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`flex items-center justify-center gap-2 py-3.5 rounded-full font-bold text-sm transition-all duration-300 hover:-translate-y-0.5 ${
                      plan.highlighted
                        ? "bg-gradient-to-r from-[#00b4d8] to-[#0a8fad] text-white hover:shadow-lg hover:shadow-[#00b4d8]/30"
                        : "border-2 border-[#00b4d8] text-[#00b4d8] hover:bg-[#00b4d8] hover:text-white"
                    }`}
                  >
                    {plan.highlighted ? plan.cta : "Get Started"}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll className="text-center mt-12">
            <p className="text-[#1a1a2e]/60 text-sm">
              Prices vary based on pool size and specific needs.{" "}
              <a href="tel:+15555555555" className="text-[#00b4d8] font-medium hover:underline">
                Call for an exact quote.
              </a>
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

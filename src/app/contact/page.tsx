import type { Metadata } from "next";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";

export const metadata: Metadata = {
  title: "Contact Us — Free Pool Quote",
  description:
    "Get a free pool cleaning and maintenance quote from Martin Pool Service. Contact us by phone, email, or fill out our form and we'll get back to you within 24 hours.",
};

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    detail: "(520) 283-2882",
    sub: "Mon-Sat, 6am to 5pm",
    href: "tel:+15555555555",
  },
  {
    icon: Mail,
    title: "Email Us",
    detail: "info@martinpoolservice.com",
    sub: "We respond within 24 hours",
    href: "mailto:info@martinpoolservice.com",
  },
  {
    icon: InstagramIcon,
    title: "Instagram",
    detail: "@martinpoolservice_",
    sub: "See our latest work",
    href: "https://www.instagram.com/martinpoolservice_/",
  },
  {
    icon: MapPin,
    title: "Service Area",
    detail: "Local Area",
    sub: "Contact us to confirm your address",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-[#0a2540] relative overflow-hidden">
        <div className="absolute inset-0 animated-gradient opacity-60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <span className="inline-block text-[#00b4d8] font-semibold text-sm uppercase tracking-widest mb-4">
              Contact
            </span>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-6">
              Get Your Free Quote
            </h1>
            <p className="text-white/70 text-xl max-w-2xl mx-auto">
              Ready for a sparkling clean pool? Fill out the form and we&apos;ll get back to you within 24 hours.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left: Info */}
            <div className="lg:col-span-2 space-y-6">
              <AnimateOnScroll direction="left">
                <h2 className="text-3xl font-extrabold text-[#0a2540] mb-2">
                  Let&apos;s Talk Pools
                </h2>
                <p className="text-[#1a1a2e]/60 mb-8">
                  Whether you need a quote, have questions about our services, or just want to say hi — we&apos;d love to hear from you.
                </p>
              </AnimateOnScroll>

              {contactInfo.map((item, i) => (
                <AnimateOnScroll key={item.title} delay={i * 0.1} direction="left">
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-start gap-4 group bg-white rounded-2xl p-5 border border-gray-100 hover:border-[#00b4d8]/30 hover:shadow-md transition-all"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-[#00b4d8] to-[#0a8fad] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-105 transition-transform">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-[#1a1a2e]/50 text-xs uppercase tracking-wider mb-0.5">{item.title}</div>
                        <div className="text-[#0a2540] font-bold text-sm">{item.detail}</div>
                        <div className="text-[#1a1a2e]/50 text-xs mt-0.5">{item.sub}</div>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-gray-100">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#00b4d8] to-[#0a8fad] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-[#1a1a2e]/50 text-xs uppercase tracking-wider mb-0.5">{item.title}</div>
                        <div className="text-[#0a2540] font-bold text-sm">{item.detail}</div>
                        <div className="text-[#1a1a2e]/50 text-xs mt-0.5">{item.sub}</div>
                      </div>
                    </div>
                  )}
                </AnimateOnScroll>
              ))}

              {/* Hours */}
              <AnimateOnScroll delay={0.4} direction="left">
                <div className="bg-[#0a2540] rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-4 h-4 text-[#00b4d8]" />
                    <span className="text-white font-semibold text-sm uppercase tracking-wider">Hours</span>
                  </div>
                  <div className="space-y-1.5 text-sm">
                    <div className="flex justify-between">
                      <span className="text-white/60">Monday – Friday</span>
                      <span className="text-white font-medium">8:00am – 5:00pm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/60">Saturday</span>
                      <span className="text-white font-medium">9:00am – 2:00pm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/60">Sunday</span>
                      <span className="text-white/40">Closed</span>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <AnimateOnScroll direction="right">
                <div className="mb-6 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-[#00b4d8]" />
                  <span className="text-[#0a2540] font-bold text-xl">Send Us a Message</span>
                </div>
                <ContactForm />
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

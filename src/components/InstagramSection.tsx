import Link from "next/link";
import { ExternalLink } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import InstagramIcon from "./InstagramIcon";

const poolImages = [
  { id: 1, bg: "from-cyan-400 to-blue-600" },
  { id: 2, bg: "from-blue-500 to-indigo-600" },
  { id: 3, bg: "from-teal-400 to-cyan-600" },
  { id: 4, bg: "from-sky-400 to-blue-500" },
  { id: 5, bg: "from-blue-400 to-cyan-500" },
  { id: 6, bg: "from-cyan-500 to-teal-600" },
];

export default function InstagramIconSection() {
  return (
    <section className="py-24 bg-[#0a2540] relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00b4d8]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <InstagramIcon className="w-8 h-8 text-[#00b4d8]" />
            <span className="text-[#00b4d8] font-semibold text-sm uppercase tracking-widest">
              Follow Our Work
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            See the Results
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Follow us on InstagramIcon to see before &amp; afters, pool transformations, and our latest work.
          </p>
        </AnimateOnScroll>

        {/* InstagramIcon grid mockup */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {poolImages.map((img, i) => (
            <AnimateOnScroll key={img.id} delay={i * 0.07}>
              <a
                href="https://www.instagram.com/martinpoolservice_/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square rounded-xl overflow-hidden block"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${img.bg} opacity-80`} />
                {/* Water pattern overlay */}
                <div className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `radial-gradient(circle at 30% 70%, rgba(255,255,255,0.4) 0%, transparent 50%)`,
                  }}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <InstagramIcon className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                {/* Pool wave effect */}
                <svg
                  className="absolute bottom-0 left-0 w-full opacity-40"
                  viewBox="0 0 200 40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 20 C50 5 150 35 200 20 L200 40 L0 40 Z"
                    fill="rgba(255,255,255,0.3)"
                  />
                </svg>
              </a>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll className="text-center">
          <a
            href="https://www.instagram.com/martinpoolservice_/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-[#00b4d8]/40 text-[#00b4d8] hover:bg-[#00b4d8] hover:text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:-translate-y-1"
          >
            <InstagramIcon className="w-5 h-5" />
            Follow @martinpoolservice_
            <ExternalLink className="w-4 h-4" />
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

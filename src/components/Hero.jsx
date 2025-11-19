import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[70vh] grid place-items-center overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 sm:py-28">
        <div className="text-center">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-white/70 backdrop-blur border border-slate-200 text-slate-700 mb-4">
            Non‑profit • Community Impact
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900">
            Empowering communities with compassion and action
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            We partner with local leaders to deliver education, food security, and health programs. Your support helps us reach more lives.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a href="#donate" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-medium shadow-sm shadow-rose-600/30 transition-colors">
              Donate Now
            </a>
            <a href="#programs" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white/80 hover:bg-white text-slate-900 font-medium border border-slate-200 backdrop-blur">
              Our Programs
            </a>
          </div>
        </div>
      </div>

      {/* Soft gradient overlay to ensure text readability without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
    </section>
  );
}

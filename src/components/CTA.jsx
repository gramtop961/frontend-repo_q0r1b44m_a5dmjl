export default function CTA() {
  return (
    <section id="donate" className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Join us in building brighter futures</h2>
            <p className="mt-4 text-slate-600">Your generosity fuels programs that change lives. Donate today or sign up to volunteer—every action counts.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-medium shadow-sm shadow-rose-600/30 transition-colors">Donate</a>
              <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white text-slate-900 font-medium border border-slate-200">Volunteer</a>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="First name" />
              <input className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="Last name" />
              <input className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm sm:col-span-2" placeholder="Email address" />
              <textarea rows="3" className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm sm:col-span-2" placeholder="How would you like to help?" />
              <button type="button" className="sm:col-span-2 inline-flex items-center justify-center px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium">Send message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

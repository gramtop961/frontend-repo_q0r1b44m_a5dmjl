import { BookOpen, Stethoscope, UtensilsCrossed } from "lucide-react";

const programs = [
  {
    icon: BookOpen,
    title: "Education Access",
    desc: "Scholarships, school supplies, and after‑school mentorship to help students learn and lead.",
  },
  {
    icon: Stethoscope,
    title: "Community Health",
    desc: "Mobile clinics and wellness workshops delivering preventive care to underserved areas.",
  },
  {
    icon: UtensilsCrossed,
    title: "Food Security",
    desc: "Weekly food distributions and nutrition programs that support families year‑round.",
  },
];

export default function Programs() {
  return (
    <section className="bg-slate-50" id="programs">
      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">What we do</h2>
          <p className="mt-3 text-slate-600">Focused initiatives that meet urgent needs and build long‑term resilience.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <Icon className="w-6 h-6 text-rose-600" />
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

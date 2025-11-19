import { Users, GraduationCap, HeartHandshake } from "lucide-react";

const stats = [
  {
    icon: Users,
    label: "Meals provided",
    value: "120k+",
  },
  {
    icon: GraduationCap,
    label: "Students supported",
    value: "8,500",
  },
  {
    icon: HeartHandshake,
    label: "Volunteers engaged",
    value: "2,300",
  },
];

export default function Impact() {
  return (
    <section className="bg-white" id="about">
      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Real impact, powered by people</h2>
            <p className="mt-4 text-slate-600">
              Our mission is to create opportunities for every child and family to thrive. We work hand‑in‑hand with communities to deliver programs that are sustainable, measurable, and human.
            </p>
            <p className="mt-4 text-slate-600">
              Transparency and accountability guide everything we do. We share outcomes openly and invest resources where they matter most.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {stats.map(({ icon: Icon, label, value }) => (
              <div key={label} className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                <Icon className="w-6 h-6 text-rose-600 mx-auto" />
                <div className="mt-3 text-2xl font-bold text-slate-900">{value}</div>
                <div className="mt-1 text-xs text-slate-500">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

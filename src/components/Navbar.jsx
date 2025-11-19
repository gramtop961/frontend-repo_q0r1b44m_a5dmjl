import { Menu, Heart, Users, Home, Info, Mail } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: Info },
    { name: "Programs", href: "#programs", icon: Users },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-rose-500 text-white grid place-items-center shadow-lg shadow-rose-500/20">
              <Heart className="w-5 h-5" />
            </div>
            <span className="font-semibold text-slate-900">HopeWorks</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map(({ name, href }) => (
              <a key={name} href={href} className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                {name}
              </a>
            ))}
            <a
              href="#donate"
              className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-sm shadow-rose-600/30 transition-colors"
            >
              <Heart className="w-4 h-4" /> Donate
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-300 text-slate-700"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              {links.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-100 text-slate-700"
                >
                  <Icon className="w-4 h-4" />
                  <span>{name}</span>
                </a>
              ))}
              <a
                href="#donate"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-700 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-sm shadow-rose-600/30"
              >
                <Heart className="w-4 h-4" /> Donate
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

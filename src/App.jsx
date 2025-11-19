import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Impact from './components/Impact';
import Programs from './components/Programs';
import CTA from './components/CTA';

function App() {
  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Impact />
        <Programs />
        <CTA />
      </main>
      <footer className="border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-10 text-sm text-slate-500 grid gap-4 sm:flex sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} HopeWorks Foundation. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-slate-700">About</a>
            <a href="#programs" className="hover:text-slate-700">Programs</a>
            <a href="#contact" className="hover:text-slate-700">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

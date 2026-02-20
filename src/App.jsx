import { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { useTheme } from './context/ThemeContext';

function App() {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-base-100 transition-colors duration-300">

      {/* Navigation — DaisyUI navbar */}
      <div className="navbar fixed top-0 left-0 right-0 z-50 bg-base-100/90 backdrop-blur-lg border-b border-base-300 shadow-sm transition-colors duration-300 px-4">

        {/* Brand */}
        <div className="navbar-start">
          <a href="#home" className="text-2xl font-bold">
            <span className="text-gradient">MF</span>
          </a>
        </div>

        {/* Desktop links */}
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal gap-1 px-0 text-base-content/80">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="font-medium hover:text-primary transition-colors rounded-lg"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right side controls */}
        <div className="navbar-end flex items-center gap-2">
          {/* Dark mode toggle — DaisyUI swap */}
          <label className="swap swap-rotate btn btn-ghost btn-circle btn-sm">
            <input
              type="checkbox"
              checked={isDarkMode}
              onChange={toggleDarkMode}
              aria-label="Toggle dark mode"
            />
            {/* Moon icon (light mode) */}
            <Moon className="swap-off w-5 h-5 fill-current" />
            {/* Sun icon (dark mode) */}
            <Sun className="swap-on w-5 h-5 fill-current text-warning" />
          </label>

          {/* Mobile hamburger */}
          <div className="dropdown dropdown-end md:hidden">
            <button
              tabIndex={0}
              className="btn btn-ghost btn-square btn-sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            {isMobileMenuOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-100 rounded-box w-52 border border-base-300"
              >
                {navLinks.map(({ href, label }) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="footer footer-center py-8 bg-base-100 border-t border-base-300 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
            <p className="text-base-content/60 text-sm">© 2025 Mahmoud Farag. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/mahmoud-farag"
                target="_blank"
                rel="noopener noreferrer"
                className="link link-hover text-base-content/60 hover:text-primary transition-colors text-sm"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/mahmoud-farag-4346a4162"
                target="_blank"
                rel="noopener noreferrer"
                className="link link-hover text-base-content/60 hover:text-primary transition-colors text-sm"
              >
                LinkedIn
              </a>
              <a
                href="mailto:mahmoud32salamn@gmail.com"
                className="link link-hover text-base-content/60 hover:text-primary transition-colors text-sm"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

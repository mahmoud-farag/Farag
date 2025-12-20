import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="#home" className="text-2xl font-bold">
              <span className="text-gradient">MF</span>
            </a>
            <ul className="hidden md:flex items-center gap-8">
              <li><a href="#home" className="text-gray-600 hover:text-primary-600 transition-colors font-medium">Home</a></li>
              <li><a href="#about" className="text-gray-600 hover:text-primary-600 transition-colors font-medium">About</a></li>
              <li><a href="#skills" className="text-gray-600 hover:text-primary-600 transition-colors font-medium">Skills</a></li>
              <li><a href="#experience" className="text-gray-600 hover:text-primary-600 transition-colors font-medium">Experience</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-primary-600 transition-colors font-medium">Contact</a></li>
            </ul>
            {/* Mobile menu button */}
            <button className="md:hidden text-gray-700 p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-8 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500">© 2024 Mahmoud Farag. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="https://github.com/mahmoud-farag" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary-600 transition-colors">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/mahmoud-farag-4346a4162" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary-600 transition-colors">
                LinkedIn
              </a>
              <a href="mailto:mahmoud32salamn@gmail.com" className="text-gray-500 hover:text-primary-600 transition-colors">
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

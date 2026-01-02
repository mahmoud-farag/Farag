function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-primary-50 to-white" id="home">
      {/* Animated background orbs - subtle on white */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-primary-200/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-80 h-80 top-1/2 right-0 bg-secondary-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute w-64 h-64 bottom-0 left-1/3 bg-accent-200/30 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <p className="text-primary-500 text-lg mb-4 font-medium animate-fade-in-up opacity-0" style={{ animationDelay: '0s', animationFillMode: 'forwards' }}>
              Hello, I'm
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              Mahmoud Farag
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              <span className="text-gradient">Full Stack Software Engineer</span>
            </h2>
            <p className="text-gray-600 text-lg md:text-xl mb-8 leading-relaxed animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              With 4 years of experience building, maintaining, and
              scaling production web applications. Strong background in the Node.js ecosystem (NestJS, Express, TypeScript)
              with solid experience in MongoDB, MySQL, and AWS services. Passionate about clean architecture and maintainable systems.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              {/* <a href="#projects" className="btn-primary group">
                <span>View Projects</span>
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a> */}
              <a
                href="https://drive.google.com/file/d/1JGXl_PX0XxCntmTYx47XNnhGytGU_xNS/view"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="flex-shrink-0 animate-fade-in-up opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>
              {/* Photo container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary-100 to-secondary-100 p-1">
                <img
                  src="/profile.jpg"
                  alt="Mahmoud Farag"
                  className="w-full h-full rounded-full object-cover border-4 border-white shadow-card"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 hover:text-primary-500 transition-colors">
        <span className="text-sm font-medium">Scroll</span>
        <svg className="w-6 h-6 animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
}

export default Hero;

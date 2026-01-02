function About() {
    return (
        <section className="py-24 bg-gray-50" id="about">
            <div className="container mx-auto px-6">
                <h2 className="section-title">About Me</h2>

                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Image */}
                    <div className="flex-shrink-0">
                        <div className="relative group">
                            {/* Gradient border effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary-400 to-accent-400 rounded-2xl opacity-40 blur group-hover:opacity-60 transition-opacity duration-500"></div>
                            <div className="relative w-64 h-64 md:w-80 md:h-80 bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-card">
                                <img
                                    src="/profile.jpg"
                                    alt="Mahmoud Farag"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Text */}
                    <div className="flex-1 text-center lg:text-left">
                        <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
                            Full Stack Software Engineer
                        </h3>
                        <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                            Backend-focused Software Engineer with 4 years of experience building, maintaining, and
                            scaling production web applications. Strong background in the Node.js ecosystem (NestJS, Express, TypeScript),
                            with solid experience in MongoDB, MySQL, and AWS services.
                        </p>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            I've worked extensively on real-world systems including payroll platforms, focusing on
                            performance, maintainability, and clean architecture. Comfortable working across the full stack
                            when needed, with hands-on experience using Angular and React to deliver complete features end-to-end.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4">
                            <div className="glass-card p-6 text-center">
                                <span className="block text-3xl md:text-4xl font-bold text-gradient mb-2">4+</span>
                                <span className="text-gray-500 text-sm">Years Experience</span>
                            </div>
                            <div className="glass-card p-6 text-center">
                                <span className="block text-3xl md:text-4xl font-bold text-gradient mb-2">3</span>
                                <span className="text-gray-500 text-sm">Companies</span>
                            </div>
                            <div className="glass-card p-6 text-center">
                                <span className="block text-3xl md:text-4xl font-bold text-gradient mb-2">10+</span>
                                <span className="text-gray-500 text-sm">Technologies</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;

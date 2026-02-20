function About() {
    return (
        <section className="py-24 bg-base-200 transition-colors duration-300" id="about">
            <div className="container mx-auto px-6">
                <h2 className="section-title">About Me</h2>

                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Image */}
                    <div className="flex-shrink-0">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-40 blur group-hover:opacity-60 transition-opacity duration-500"></div>
                            <div className="relative w-64 h-64 md:w-80 md:h-80 bg-base-100 rounded-2xl border border-base-300 overflow-hidden shadow-card">
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
                        <h3 className="text-2xl md:text-3xl font-semibold text-base-content mb-6">
                            Full Stack Software Engineer
                        </h3>
                        <p className="text-base-content/70 text-lg mb-4 leading-relaxed">
                            With 4 years of experience building, maintaining, and scaling production web applications.
                            Strong background in the Node.js ecosystem (NestJS, Express, TypeScript),
                            with solid experience in MongoDB, PostgresSQL, MySQL, and AWS services.
                        </p>
                        <p className="text-base-content/70 text-lg mb-4 leading-relaxed">
                            I've worked extensively on real-world systems including payroll platforms,
                            with hands-on experience using Angular and React to deliver complete features end-to-end.
                        </p>
                        <p className="text-base-content/70 text-lg mb-10 leading-relaxed">
                            Currently open to Backend or Backend-leaning Full Stack roles where I can contribute
                            to building reliable, scalable systems and continue growing as an engineer.
                        </p>

                        {/* DaisyUI stats component */}
                        <div className="stats stats-vertical sm:stats-horizontal shadow-card w-full border border-base-300 bg-base-100">
                            <div className="stat place-items-center">
                                <div className="stat-value text-gradient text-3xl">4</div>
                                <div className="stat-title text-base-content/60">Years Experience</div>
                            </div>
                            <div className="stat place-items-center">
                                <div className="stat-value text-gradient text-3xl">3</div>
                                <div className="stat-title text-base-content/60">Companies</div>
                            </div>
                            <div className="stat place-items-center">
                                <div className="stat-value text-gradient text-3xl">10+</div>
                                <div className="stat-title text-base-content/60">Technologies</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;

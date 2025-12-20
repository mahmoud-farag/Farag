const projects = [
    {
        title: 'E-Commerce Platform',
        description: 'A full-stack e-commerce application with shopping cart, user authentication, and payment integration.',
        tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        link: '#',
        gradient: 'from-primary-400 to-secondary-400',
    },
    {
        title: 'Task Management App',
        description: 'A collaborative project management tool with real-time updates and team features.',
        tech: ['React', 'Express', 'Socket.io', 'PostgreSQL'],
        link: '#',
        gradient: 'from-secondary-400 to-accent-400',
    },
    {
        title: 'AI Document Assistant',
        description: 'An intelligent document processing system using AI for text extraction and analysis.',
        tech: ['Node.js', 'Gemini AI', 'MongoDB', 'AWS S3'],
        link: '#',
        gradient: 'from-accent-400 to-primary-400',
    },
];

function Projects() {
    return (
        <section className="py-24 bg-white" id="projects">
            <div className="container mx-auto px-6">
                <h2 className="section-title">Featured Projects</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <article
                            key={project.title}
                            className="group glass-card overflow-hidden animate-fade-in-up opacity-0"
                            style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'forwards' }}
                        >
                            {/* Project image placeholder */}
                            <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-white/10 group-hover:bg-white/0 transition-colors duration-300"></div>
                                <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <rect x="3" y="3" width="18" height="18" rx="2" />
                                    <path d="M9 13l3 3 6-6" />
                                </svg>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tech stack */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-xs px-3 py-1 bg-primary-50 text-primary-600 rounded-full font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={project.link}
                                    className="inline-flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors group/link font-medium"
                                >
                                    <span>View Project</span>
                                    <svg
                                        className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;

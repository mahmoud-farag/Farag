import { useState } from 'react';
import { Github, ChevronDown, ChevronUp } from 'lucide-react';

const projects = [
    {
        title: 'MindMesh',
        description: 'A comprehensive full-stack application leveraging modern technologies.',
        longDescription: 'An AI-powered RAG mini system that helps students learn more effectively through document analysis, flashcard generation, quiz creation, and intelligent chat interactions.',
        tech: ['React', 'Node.js', 'MongoDB', 'AWS'], // Inferring stack from skills
        links: [
            { label: 'Frontend', url: 'https://github.com/mahmoud-farag/mindMesh-FE' },
            { label: 'Backend', url: 'https://github.com/mahmoud-farag/mindMesh-BE' }
        ],
        gradient: 'from-primary-400 to-secondary-400',
        image: '/project-mindmesh.png'
    }
];

function ProjectCard({ project, index }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <article
            className="group glass-card overflow-hidden animate-fade-in-up opacity-0 flex flex-col h-full"
            style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'forwards' }}
        >
            {/* Project image placeholder or actual image */}
            <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden flex-shrink-0`}>
                <div className="absolute inset-0 bg-white/10 group-hover:bg-white/0 transition-colors duration-300"></div>
                {project.image ? (
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                    />
                ) : (
                    <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <path d="M9 13l3 3 6-6" />
                    </svg>
                )}
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                </h3>
                
                <div className="mb-4">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-2">
                        {project.description}
                    </p>
                    {project.longDescription && (
                        <div>
                            <div 
                                className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-2 pb-2">
                                    {project.longDescription}
                                </p>
                            </div>
                            <button 
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="text-primary-600 dark:text-primary-400 text-sm font-medium hover:underline inline-flex items-center gap-1 mt-1"
                            >
                                {isExpanded ? (
                                    <>Read Less <ChevronUp className="w-4 h-4" /></>
                                ) : (
                                    <>Read More <ChevronDown className="w-4 h-4" /></>
                                )}
                            </button>
                        </div>
                    )}
                </div>

                <div className="mt-auto">
                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                            <span
                                key={tech}
                                className="text-xs px-3 py-1 bg-primary-50 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 rounded-full font-medium"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex gap-4">
                        {project.links.map((link) => (
                            <a
                                key={link.label}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors group/link font-medium"
                            >
                                <Github className="w-4 h-4" />
                                <span>{link.label}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </article>
    );
}

function Projects() {
    return (
        <section className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300" id="projects">
            <div className="container mx-auto px-6">
                <h2 className="section-title">Featured Projects</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;

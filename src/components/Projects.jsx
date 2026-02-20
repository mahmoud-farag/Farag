import { useState } from 'react';
import { Github, ChevronDown, ChevronUp } from 'lucide-react';

const projects = [
    {
        title: 'MindMesh',
        description: 'A comprehensive full-stack application leveraging modern technologies.',
        longDescription: 'An AI-powered RAG mini system that helps students learn more effectively through document analysis, flashcard generation, quiz creation, and intelligent chat interactions.',
        tech: ['React', 'Node.js', 'MongoDB', 'AWS'],
        links: [
            { label: 'Frontend', url: 'https://github.com/mahmoud-farag/mindMesh-FE' },
            { label: 'Backend', url: 'https://github.com/mahmoud-farag/mindMesh-BE' }
        ],
        gradient: 'from-primary to-secondary',
        image: '/project-mindmesh.png'
    },
    {
        title: 'Task Flow',
        description: 'A simple Task Manager application built with React Native (Expo).',
        longDescription: 'My first React Native project featuring task list management, filtering by priority (High, Medium, Low), swipe actions for deletion, and a beautiful UI inspired by modern Dribbble designs. Includes interactive bottom sheets and smooth gradient aesthetics.',
        tech: ['React Native', 'Expo', 'TypeScript', 'NativeWind'],
        links: [
            { label: 'Repository', url: 'https://github.com/mahmoud-farag/TaskManagerRN' }
        ],
        gradient: 'from-pink-400 to-rose-400',
        image: '/project-taskflow.png'
    }
];

function ProjectCard({ project, index }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div
            className="card bg-base-100 border border-base-300 shadow-card overflow-hidden flex flex-col h-full animate-fade-in-up opacity-0 hover:-translate-y-1 hover:border-primary/30 hover:shadow-glow transition-all duration-300 group"
            style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'forwards' }}
        >
            {/* Project image / gradient banner */}
            <figure className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden flex-shrink-0`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
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
            </figure>

            {/* Card body */}
            <div className="card-body p-6 flex flex-col flex-grow gap-3">
                <h3 className="card-title text-base-content group-hover:text-primary transition-colors">
                    {project.title}
                </h3>

                <div>
                    <p className="text-base-content/70 leading-relaxed text-sm">
                        {project.description}
                    </p>
                    {project.longDescription && (
                        <div>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}
                            >
                                <p className="text-base-content/70 leading-relaxed text-sm pb-2">
                                    {project.longDescription}
                                </p>
                            </div>
                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="btn btn-ghost btn-xs text-primary mt-1 inline-flex items-center gap-1 px-0"
                            >
                                {isExpanded ? (
                                    <>Read Less <ChevronUp className="w-3 h-3" /></>
                                ) : (
                                    <>Read More <ChevronDown className="w-3 h-3" /></>
                                )}
                            </button>
                        </div>
                    )}
                </div>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                    {project.tech.map((tech) => (
                        <span key={tech} className="badge badge-primary badge-outline badge-sm">
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Card actions */}
                <div className="card-actions mt-3 pt-3 border-t border-base-300">
                    {project.links.map((link) => (
                        <a
                            key={link.label}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-ghost btn-sm gap-2 text-base-content/70 hover:text-primary transition-colors"
                        >
                            <Github className="w-4 h-4" />
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

function Projects() {
    return (
        <section className="py-24 bg-base-100 transition-colors duration-300" id="projects">
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

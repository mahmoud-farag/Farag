import { useState } from 'react';

const skills = [
    { name: 'Node.js', category: 'Backend', level: 95 },
    { name: 'NestJS', category: 'Backend', level: 90 },
    { name: 'Express.js', category: 'Backend', level: 95 },
    { name: 'RESTful APIs', category: 'Backend', level: 95 },
    { name: 'GraphQL', category: 'Backend', level: 75 },
    { name: 'Microservices', category: 'Backend', level: 80 },
    { name: '.NET Core', category: 'Backend', level: 50 },
    { name: 'Spring Boot', category: 'Backend', level: 50 },
    { name: 'MongoDB', category: 'Database', level: 95 },
    { name: 'MySQL', category: 'Database', level: 80 },
    { name: 'PostgreSQL', category: 'Database', level: 75 },
    { name: 'Mongoose', category: 'Database', level: 90 },
    { name: 'Prisma', category: 'Database', level: 80 },
    { name: 'TypeORM', category: 'Database', level: 75 },
    { name: 'Angular', category: 'Frontend', level: 80 },
    { name: 'React.js', category: 'Frontend', level: 85 },
    { name: 'TypeScript', category: 'Language', level: 90 },
    { name: 'JavaScript', category: 'Language', level: 95 },
    { name: 'Java', category: 'Language', level: 70 },
    { name: 'C#', category: 'Language', level: 70 },
    { name: 'AWS', category: 'Cloud', level: 75 },
    { name: 'Docker', category: 'DevOps', level: 75 },
    { name: 'Kubernetes', category: 'DevOps', level: 65 },
    { name: 'CI/CD Pipelines', category: 'DevOps', level: 80 },
    { name: 'GitHub Copilot', category: 'Tools', level: 95 },
    { name: 'Claude Code', category: 'Tools', level: 95 },
    { name: 'Camunda BPM', category: 'Tools', level: 65 },
];

const categoryColors = {
    Backend: 'badge-primary',
    Database: 'badge-secondary',
    Frontend: 'badge-accent',
    Language: 'badge-warning',
    Cloud: 'badge-info',
    DevOps: 'badge-success',
    Tools: 'badge-error',
};

const filterButtonColors = {
    All: 'btn-neutral',
    Backend: 'btn-primary',
    Database: 'btn-secondary',
    Frontend: 'btn-accent',
    Language: 'btn-warning',
    Cloud: 'btn-info',
    DevOps: 'btn-success',
    Tools: 'btn-error',
};

const extraSkills = [
    'Lambda', 'S3', 'SQS', 'Fargate', 'CloudWatch', 'AWS CDK (IaC)',
    'Jenkins', 'Git', 'GitLab', 'GitHub Actions', 'CI/CD Pipelines',
    'Tailwind CSS', 'Bootstrap', 'StyledComponents',
    'Agile/Scrum', 'Java (basics)',
    'Codex', 'Antigravity', 'Claude-code (Ollama)',
];

const categories = ['All', ...Object.keys(categoryColors)];

function Skills() {
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredSkills = activeFilter === 'All'
        ? skills
        : skills.filter((s) => s.category === activeFilter);

    return (
        <section className="py-24 bg-base-100 transition-colors duration-300" id="skills">
            <div className="container mx-auto px-6">
                <h2 className="section-title">Skills &amp; Technologies</h2>

                {/* Category Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            id={`filter-${cat.toLowerCase()}`}
                            onClick={() => setActiveFilter(cat)}
                            className={`btn btn-sm rounded-full transition-all duration-300 ${
                                activeFilter === cat
                                    ? `${filterButtonColors[cat]} text-white shadow-md scale-105`
                                    : 'btn-ghost border border-base-300 hover:scale-105'
                            }`}
                        >
                            {cat}
                            {cat !== 'All' && (
                                <span className="ml-1 opacity-60 text-xs">
                                    ({skills.filter((s) => s.category === cat).length})
                                </span>
                            )}
                        </button>
                    ))}
                </div>

                {/* Skills Grid — DaisyUI card + progress */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {filteredSkills.map((skill, index) => (
                        <div
                            key={skill.name}
                            className="card bg-base-100 border border-base-300 shadow-card hover:-translate-y-1 hover:border-primary/30 hover:shadow-glow transition-all duration-300 animate-fade-in-up opacity-0"
                            style={{ animationDelay: `${index * 0.07}s`, animationFillMode: 'forwards' }}
                        >
                            <div className="card-body p-5 gap-3">
                                <div className="flex items-center justify-between">
                                    <span className="card-title text-base-content font-semibold text-base">
                                        {skill.name}
                                    </span>
                                    <span className={`badge badge-sm badge-outline ${categoryColors[skill.category] || 'badge-neutral'}`}>
                                        {skill.category}
                                    </span>
                                </div>
                                {/* DaisyUI progress bar */}
                                <div>
                                    <progress
                                        className="progress progress-primary w-full h-2"
                                        value={skill.level}
                                        max="100"
                                    ></progress>
                                    <span className="text-base-content/50 text-xs mt-1 inline-block">{skill.level}%</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Extra Skills — DaisyUI badges */}
                <div className="text-center">
                    <h3 className="text-xl text-base-content/70 mb-6 font-medium">Also experienced with</h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {extraSkills.map((skill) => (
                            <span
                                key={skill}
                                className="badge badge-ghost badge-lg hover:badge-primary hover:badge-outline cursor-default transition-all duration-300 text-sm py-3 px-4"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;

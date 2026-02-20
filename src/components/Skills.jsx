const skills = [
    { name: 'Node.js', category: 'Backend', level: 95 },
    { name: 'Express.js', category: 'Backend', level: 95 },
    { name: 'NestJS', category: 'Backend', level: 85 },
    { name: 'RESTful APIs', category: 'Backend', level: 95 },
    { name: 'MongoDB', category: 'Database', level: 95 },
    { name: 'MySQL', category: 'Database', level: 80 },
    { name: 'PostgreSQL', category: 'Database', level: 70 },
    { name: 'Angular', category: 'Frontend', level: 80 },
    { name: 'React.js', category: 'Frontend', level: 85 },
    { name: 'TypeScript', category: 'Language', level: 90 },
    { name: 'AWS', category: 'Cloud', level: 70 },
];

const categoryColors = {
    Backend: 'badge-primary',
    Database: 'badge-secondary',
    Frontend: 'badge-accent',
    Language: 'badge-warning',
    Cloud: 'badge-info',
};

const extraSkills = [
    'Mongoose', 'Prisma', 'Sequelize', 'Lambda', 'S3', 'SQS', 'Fargate',
    'CloudWatch', 'AWS CDK', 'Docker', 'Kubernetes', 'Jenkins', 'Git',
    'GitHub Actions', 'Tailwind CSS', 'Bootstrap', 'Agile', 'Scrum',
    'TDD', 'CI/CD', 'Microservices', 'Performance Optimisation',
];

function Skills() {
    return (
        <section className="py-24 bg-base-100 transition-colors duration-300" id="skills">
            <div className="container mx-auto px-6">
                <h2 className="section-title">Skills &amp; Technologies</h2>

                {/* Skills Grid — DaisyUI card + progress */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {skills.map((skill, index) => (
                        <div
                            key={skill.name}
                            className="card bg-base-100 border border-base-300 shadow-card hover:-translate-y-1 hover:border-primary/30 hover:shadow-glow transition-all duration-300 animate-fade-in-up opacity-0"
                            style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
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

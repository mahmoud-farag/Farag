const skills = [
    { name: 'Node.js', category: 'Backend', level: 95 },
    { name: 'Express.js', category: 'Backend', level: 95 },
    { name: 'NestJS', category: 'Backend', level: 75 },
    { name: 'RESTful APIs', category: 'Backend', level: 90 },
    { name: 'MongoDB', category: 'Database', level: 90 },
    { name: 'MySQL', category: 'Database', level: 80 },
    { name: 'PostgreSQL', category: 'Database', level: 70 },
    { name: 'Angular', category: 'Frontend', level: 80 },
    { name: 'React.js', category: 'Frontend', level: 70 },
    { name: 'TypeScript', category: 'Language', level: 75 },
    { name: 'AWS', category: 'Cloud', level: 70 },
];

const extraSkills = ['Mongoose', 'Prisma', 'Sequelize', 'Lambda', 'S3', 'SQS', 'Fargate', 'CloudWatch', 'Jenkins', 'Git', 'GitHub', 'Tailwind CSS', 'Bootstrap', 'Agile', 'Scrum', 'CI/CD', 'Microservices'];

function Skills() {
    return (
        <section className="py-24 bg-white" id="skills">
            <div className="container mx-auto px-6">
                <h2 className="section-title">Skills & Technologies</h2>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {skills.map((skill, index) => (
                        <div
                            key={skill.name}
                            className="glass-card p-6 animate-fade-in-up opacity-0"
                            style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
                        >
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-gray-800 font-semibold">{skill.name}</span>
                                <span className="text-xs text-primary-600 bg-primary-50 px-2 py-1 rounded-full font-medium">
                                    {skill.category}
                                </span>
                            </div>
                            {/* Progress bar */}
                            <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-2">
                                <div
                                    className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full transition-all duration-1000 ease-out"
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                            <span className="text-gray-500 text-sm">{skill.level}%</span>
                        </div>
                    ))}
                </div>

                {/* Extra Skills */}
                <div className="text-center">
                    <h3 className="text-xl text-gray-700 mb-6">Also experienced with</h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {extraSkills.map((skill) => (
                            <span
                                key={skill}
                                className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-gray-600 
                           hover:border-primary-400 hover:text-primary-600 hover:bg-primary-50 transition-all duration-300 cursor-default"
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

const experiences = [
    {
        title: 'Software Engineer',
        company: 'Make It Simple',
        location: 'United Kingdom - Remote',
        period: 'Dec 2022 - Present',
        type: 'Full-time',
        responsibilities: [
            'Fixing bugs and improving system stability across core payroll features',
            'Refactoring and optimizing legacy codebases for better maintainability and scalability',
            'Applying best engineering practices to ensure robustness and performance in production',
            'Involved in architectural transition to microservices on AWS Serverless',
            'Developing and enhancing reports to meet new business requirements',
        ],
    },
    {
        title: 'Node.js Developer',
        company: 'Freelancer',
        location: 'Remote',
        period: 'Jun 2022 - Dec 2022',
        type: 'Part-time',
        responsibilities: [
            'Developed robust, secure, and well-documented APIs using ExpressJS and MySQL',
            'Worked with clients to understand requirements and deliver quality solutions',
            'Implemented best practices for API security and performance',
        ],
    },
    {
        title: 'ReactJS Developer',
        company: 'Freelancer',
        location: 'Remote',
        period: 'Sep 2022 - Oct 2022',
        type: 'Part-time',
        responsibilities: [
            'Built a jewelry e-commerce application with a talented team',
            'Responsible for building and integrating new pages and UI components',
            'Collaborated closely with backend team to connect frontend features with API endpoints',
        ],
    },
];

function Experience() {
    return (
        <section className="py-24 bg-gray-50" id="experience">
            <div className="container mx-auto px-6">
                <h2 className="section-title">Professional Experience</h2>

                <div className="max-w-4xl mx-auto">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="relative pl-8 pb-12 last:pb-0 animate-fade-in-up opacity-0"
                            style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'forwards' }}
                        >
                            {/* Timeline line */}
                            <div className="absolute left-0 top-2 bottom-0 w-px bg-gradient-to-b from-primary-500 to-primary-100"></div>

                            {/* Timeline dot */}
                            <div className="absolute left-0 top-2 w-3 h-3 -translate-x-1/2 rounded-full bg-primary-500 ring-4 ring-primary-100"></div>

                            <div className="glass-card p-6 md:p-8 ml-4">
                                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-semibold text-gray-900">{exp.title}</h3>
                                        <p className="text-primary-600 font-medium">{exp.company}</p>
                                        <p className="text-gray-500 text-sm">{exp.location}</p>
                                    </div>
                                    <div className="text-right">
                                        <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-50 text-primary-600 rounded-full mb-2">
                                            {exp.type}
                                        </span>
                                        <p className="text-gray-500 text-sm">{exp.period}</p>
                                    </div>
                                </div>

                                <ul className="space-y-2">
                                    {exp.responsibilities.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-600">
                                            <svg className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Education */}
                <div className="max-w-4xl mx-auto mt-16">
                    <h3 className="text-2xl font-semibold text-gray-800 text-center mb-8">Education</h3>
                    <div className="glass-card p-6 md:p-8 text-center">
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">Bachelor of Computer Science</h4>
                        <p className="text-primary-600 font-medium">Menoufia University</p>
                        <p className="text-gray-500">2015 - 2020</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;

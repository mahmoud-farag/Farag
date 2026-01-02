const experiences = [
    {
        title: 'Software Engineer',
        company: 'Make It Simple',
        location: 'United Kingdom - Remote',
        period: 'Dec 2022 - Present',
        type: 'Full-time',
        responsibilities: [
            'Contributed to the development and stabilization of a large-scale payroll system used in production, working across the full stack with a strong backend focus using Node.js, RESTful APIs, MongoDB, and Angular',
            'Refactored and optimized legacy backend codebases to improve readability, maintainability, and reduce bug recurrence across core payroll features',
            'Designed, implemented, and enhanced RESTful APIs to support new business requirements, ensuring data consistency and clean integration between backend services and frontend applications',
            'Actively participated in developing and maintaining Angular-based UI features, implementing new screens, improving existing components, and collaborating closely with backend logic to deliver complete end-to-end functionality',
            'Took part in the early stages of transitioning parts of the system toward a microservices-oriented architecture on AWS (Lambda, S3, Fargate, SQS), gaining hands-on experience with real-world scalability, deployment, and architectural challenges',
            'Improved overall system reliability and user experience by debugging production issues across both backend and frontend layers, and collaborating closely with cross-functional teams including product and QA',
        ],
    },
    {
        title: 'Node.js Developer',
        company: 'Freelancer',
        location: 'Remote',
        period: 'Jun 2022 - Dec 2022',
        type: 'Part-time',
        responsibilities: [
            'Developed secure and well-documented REST APIs using Express.js and MySQL for multiple client projects',
            'Implemented authentication, validation, and error-handling patterns to ensure API reliability and maintainability',
            'Worked independently with clients to translate business requirements into backend solutions',
        ],
    },
    {
        title: 'ReactJS Developer',
        company: 'Freelancer',
        location: 'Remote',
        period: 'Sep 2022 - Oct 2022',
        type: 'Part-time',
        responsibilities: [
            'Built and integrated UI components for a React-based e-commerce application, collaborating with backend developers to connect frontend features with API endpoints',
            'Focused on delivering responsive, user-friendly interfaces while maintaining clean and reusable component structures',
        ],
    },
];

function Experience() {
    return (
        <section className="py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300" id="experience">
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
                            <div className="absolute left-0 top-2 bottom-0 w-px bg-gradient-to-b from-primary-500 to-primary-100 dark:to-primary-800"></div>

                            {/* Timeline dot */}
                            <div className="absolute left-0 top-2 w-3 h-3 -translate-x-1/2 rounded-full bg-primary-500 ring-4 ring-primary-100 dark:ring-primary-900"></div>

                            <div className="glass-card p-6 md:p-8 ml-4">
                                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                                        <p className="text-primary-600 dark:text-primary-400 font-medium">{exp.company}</p>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm">{exp.location}</p>
                                    </div>
                                    <div className="text-right">
                                        <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-50 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 rounded-full mb-2">
                                            {exp.type}
                                        </span>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm">{exp.period}</p>
                                    </div>
                                </div>

                                <ul className="space-y-2">
                                    {exp.responsibilities.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
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
                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 text-center mb-8">Education</h3>
                    <div className="glass-card p-6 md:p-8 text-center">
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Bachelor of Computer Science</h4>
                        <p className="text-primary-600 dark:text-primary-400 font-medium">Menoufia University</p>
                        <p className="text-gray-500 dark:text-gray-400">2015 - 2020</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;


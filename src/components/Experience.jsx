const experiences = [
    {
        title: 'Software Engineer',
        company: 'Make It Simple',
        location: 'United Kingdom - Remote',
        period: 'Dec 2022 - Present',
        type: 'Full-time',
        responsibilities: [
            'Contributed to the development and stabilisation of a large-scale payroll system used in production, working across the full stack with a strong backend focus using Node.js, RESTful APIs, MongoDB, and Angular',
            'Refactored and optimised legacy backend codebases to improve readability, maintainability, and reduce bug recurrence across core payroll features',
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
        <section className="py-24 bg-base-200 transition-colors duration-300" id="experience">
            <div className="container mx-auto px-6">
                <h2 className="section-title">Professional Experience</h2>

                {/* DaisyUI vertical timeline */}
                <div className="max-w-4xl mx-auto">
                    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                        {experiences.map((exp, index) => (
                            <li key={index}>
                                {index > 0 && <hr className="bg-primary/30" />}

                                {/* Timeline icon */}
                                <div className="timeline-middle">
                                    <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20 flex items-center justify-center">
                                    </div>
                                </div>

                                <div className={`${index % 2 === 0 ? 'timeline-end' : 'timeline-start md:text-end'} mb-10 animate-fade-in-up opacity-0`}
                                    style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'forwards' }}
                                >
                                    {/* Date on top */}
                                    <time className="text-xs text-base-content/50 font-mono mb-1 block">{exp.period}</time>

                                    {/* Card */}
                                    <div className="card bg-base-100 border border-base-300 shadow-card hover:-translate-y-1 hover:border-primary/30 transition-all duration-300">
                                        <div className="card-body p-6">
                                            {/* Header */}
                                            <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                                                <div>
                                                    <h3 className="card-title text-base-content text-xl">{exp.title}</h3>
                                                    <p className="text-primary font-semibold text-sm">{exp.company}</p>
                                                    <p className="text-base-content/50 text-xs">{exp.location}</p>
                                                </div>
                                                <span className={`badge ${exp.type === 'Full-time' ? 'badge-primary' : 'badge-secondary'} badge-outline`}>
                                                    {exp.type}
                                                </span>
                                            </div>

                                            {/* Responsibilities */}
                                            <ul className="space-y-2 mt-2">
                                                {exp.responsibilities.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-base-content/70 text-sm">
                                                        <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                        </svg>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {index < experiences.length - 1 && <hr className="bg-primary/30" />}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Education */}
                <div className="max-w-4xl mx-auto mt-16">
                    <h3 className="text-2xl font-semibold text-base-content text-center mb-8">Education</h3>
                    <div className="card bg-base-100 border border-base-300 shadow-card text-center">
                        <div className="card-body p-8 items-center">
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-3">
                                <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                </svg>
                            </div>
                            <h4 className="card-title text-base-content text-xl">Bachelor of Computer Science</h4>
                            <p className="text-primary font-semibold">Menoufia University</p>
                            <div className="badge badge-ghost mt-2">2015 – 2020</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;

import { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section className="py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300" id="contact">
            <div className="container mx-auto px-6">
                <h2 className="section-title">Get In Touch</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Let's connect</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed">
                            I'm currently looking for new full-time opportunities where I can contribute
                            my skills and grow as a software engineer. If you have an opening that matches
                            my experience, I'd love to hear from you!
                        </p>

                        {/* Contact Links */}
                        <div className="space-y-4">
                            <a href="mailto:mahmoud32salamn@gmail.com" className="glass-card flex items-center gap-4 p-4 group">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900 dark:to-accent-900 flex items-center justify-center group-hover:from-primary-200 group-hover:to-accent-200 dark:group-hover:from-primary-800 dark:group-hover:to-accent-800 transition-all">
                                    <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <path d="M22 6l-10 7L2 6" />
                                    </svg>
                                </div>
                                <div>
                                    <span className="block text-gray-500 dark:text-gray-400 text-sm">Email</span>
                                    <span className="text-gray-800 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors font-medium">mahmoud32salamn@gmail.com</span>
                                </div>
                            </a>

                            <a href="tel:+201024279414" className="glass-card flex items-center gap-4 p-4 group">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900 dark:to-accent-900 flex items-center justify-center group-hover:from-primary-200 group-hover:to-accent-200 dark:group-hover:from-primary-800 dark:group-hover:to-accent-800 transition-all">
                                    <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                </div>
                                <div>
                                    <span className="block text-gray-500 dark:text-gray-400 text-sm">Phone</span>
                                    <span className="text-gray-800 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors font-medium">+20 102 427 9414</span>
                                </div>
                            </a>

                            <a href="https://github.com/mahmoud-farag" target="_blank" rel="noopener noreferrer" className="glass-card flex items-center gap-4 p-4 group">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900 dark:to-accent-900 flex items-center justify-center group-hover:from-primary-200 group-hover:to-accent-200 dark:group-hover:from-primary-800 dark:group-hover:to-accent-800 transition-all">
                                    <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                    </svg>
                                </div>
                                <div>
                                    <span className="block text-gray-500 dark:text-gray-400 text-sm">GitHub</span>
                                    <span className="text-gray-800 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors font-medium">github.com/mahmoud-farag</span>
                                </div>
                            </a>

                            <a href="https://www.linkedin.com/in/mahmoud-farag-4346a4162" target="_blank" rel="noopener noreferrer" className="glass-card flex items-center gap-4 p-4 group">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900 dark:to-accent-900 flex items-center justify-center group-hover:from-primary-200 group-hover:to-accent-200 dark:group-hover:from-primary-800 dark:group-hover:to-accent-800 transition-all">
                                    <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                        <rect x="2" y="9" width="4" height="12" />
                                        <circle cx="4" cy="4" r="2" />
                                    </svg>
                                </div>
                                <div>
                                    <span className="block text-gray-500 dark:text-gray-400 text-sm">LinkedIn</span>
                                    <span className="text-gray-800 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors font-medium">linkedin.com/in/mahmoud-farag</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form className="glass-card p-8" onSubmit={handleSubmit}>
                        <div className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-gray-700 dark:text-gray-200 text-sm font-medium mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your name"
                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-primary-400 dark:focus:border-primary-500 focus:ring-2 focus:ring-primary-100 dark:focus:ring-primary-900 transition-all"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-gray-700 dark:text-gray-200 text-sm font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="your@email.com"
                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-primary-400 dark:focus:border-primary-500 focus:ring-2 focus:ring-primary-100 dark:focus:ring-primary-900 transition-all"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-gray-700 dark:text-gray-200 text-sm font-medium mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your message..."
                                    rows="5"
                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-primary-400 dark:focus:border-primary-500 focus:ring-2 focus:ring-primary-100 dark:focus:ring-primary-900 transition-all resize-none"
                                ></textarea>
                            </div>

                            <button type="submit" className="btn-primary w-full group">
                                <span>Send Message</span>
                                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;


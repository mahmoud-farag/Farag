import { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Send } from 'lucide-react';

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
                                    <Mail className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                                </div>
                                <div>
                                    <span className="block text-gray-500 dark:text-gray-400 text-sm">Email</span>
                                    <span className="text-gray-800 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors font-medium text-sm md:text-lg">mahmoud32salamn@gmail.com</span>
                                </div>
                            </a>

                            <a href="tel:+201024279414" className="glass-card flex items-center gap-4 p-4 group">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900 dark:to-accent-900 flex items-center justify-center group-hover:from-primary-200 group-hover:to-accent-200 dark:group-hover:from-primary-800 dark:group-hover:to-accent-800 transition-all">
                                    <Phone className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                                </div>
                                <div>
                                    <span className="block text-gray-500 dark:text-gray-400 text-sm">Phone</span>
                                    <span className="text-gray-800 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors font-medium">+20 102 427 9414</span>
                                </div>
                            </a>

                            <a href="https://github.com/mahmoud-farag" target="_blank" rel="noopener noreferrer" className="glass-card flex items-center gap-4 p-4 group">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900 dark:to-accent-900 flex items-center justify-center group-hover:from-primary-200 group-hover:to-accent-200 dark:group-hover:from-primary-800 dark:group-hover:to-accent-800 transition-all">
                                    <Github className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                                </div>
                                <div>
                                    <span className="block text-gray-500 dark:text-gray-400 text-sm text-sm md:text-lg">GitHub</span>
                                    <span className="text-gray-800 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors font-medium text-sm md:text-lg">github.com/mahmoud-farag</span>
                                </div>
                            </a>

                            <a href="https://www.linkedin.com/in/mahmoud-farag-4346a4162" target="_blank" rel="noopener noreferrer" className="glass-card flex items-center gap-4 p-4 group">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900 dark:to-accent-900 flex items-center justify-center group-hover:from-primary-200 group-hover:to-accent-200 dark:group-hover:from-primary-800 dark:group-hover:to-accent-800 transition-all">
                                    <Linkedin className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                                </div>
                                <div>
                                    <span className="block text-gray-500 dark:text-gray-400 text-sm">LinkedIn</span>
                                    <span className="text-gray-800 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors font-medium text-sm md:text-lg">linkedin.com/in/mahmoud-farag</span>
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
                                <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;


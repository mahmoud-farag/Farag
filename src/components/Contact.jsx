import { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Send } from 'lucide-react';

const contactLinks = [
    {
        href: 'mailto:mahmoud32salamn@gmail.com',
        icon: Mail,
        label: 'Email',
        value: 'mahmoud32salamn@gmail.com',
        target: '_self',
    },
    {
        href: 'tel:+201024279414',
        icon: Phone,
        label: 'Phone',
        value: '+20 102 427 9414',
        target: '_self',
    },
    {
        href: 'https://github.com/mahmoud-farag',
        icon: Github,
        label: 'GitHub',
        value: 'github.com/mahmoud-farag',
        target: '_blank',
    },
    {
        href: 'https://www.linkedin.com/in/mahmoud-farag-4346a4162',
        icon: Linkedin,
        label: 'LinkedIn',
        value: 'linkedin.com/in/mahmoud-farag',
        target: '_blank',
    },
];

function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section className="py-24 bg-base-200 transition-colors duration-300" id="contact">
            <div className="container mx-auto px-6">
                <h2 className="section-title">Get In Touch</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-2xl font-semibold text-base-content mb-3">Let's connect</h3>
                        <p className="text-base-content/70 text-lg mb-8 leading-relaxed">
                            I'm currently looking for new full-time opportunities where I can contribute
                            my skills and grow as a software engineer. If you have an opening that matches
                            my experience, I'd love to hear from you!
                        </p>

                        {/* DaisyUI card contact links */}
                        <div className="space-y-3">
                            {contactLinks.map(({ href, icon: Icon, label, value, target }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target={target}
                                    rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                                    className="card bg-base-100 border border-base-300 hover:border-primary/40 hover:-translate-y-0.5 hover:shadow-soft transition-all duration-300 group cursor-pointer"
                                >
                                    <div className="card-body flex-row items-center gap-4 p-4">
                                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 group-hover:from-primary/25 group-hover:to-accent/25 flex items-center justify-center transition-all duration-300 flex-shrink-0">
                                            <Icon className="w-5 h-5 text-primary" />
                                        </div>
                                        <div className="min-w-0">
                                            <span className="block text-base-content/50 text-xs font-medium uppercase tracking-wide">{label}</span>
                                            <span className="text-base-content group-hover:text-primary transition-colors font-medium text-sm md:text-base truncate block">
                                                {value}
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form — DaisyUI form controls */}
                    <form
                        className="card bg-base-100 border border-base-300 shadow-card"
                        onSubmit={handleSubmit}
                    >
                        <div className="card-body p-8 gap-5">
                            {/* Name */}
                            <div className="form-control">
                                <label className="label pb-1">
                                    <span className="label-text font-medium">Name</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your name"
                                    className="input input-bordered w-full focus:input-primary transition-all"
                                />
                            </div>

                            {/* Email */}
                            <div className="form-control">
                                <label className="label pb-1">
                                    <span className="label-text font-medium">Email</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="your@email.com"
                                    className="input input-bordered w-full focus:input-primary transition-all"
                                />
                            </div>

                            {/* Message */}
                            <div className="form-control">
                                <label className="label pb-1">
                                    <span className="label-text font-medium">Message</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your message..."
                                    rows="5"
                                    className="textarea textarea-bordered w-full focus:textarea-primary transition-all resize-none"
                                ></textarea>
                            </div>

                            {/* Submit */}
                            <div className="card-actions mt-2">
                                <button type="submit" className="btn-primary-gradient w-full group">
                                    <span>Send Message</span>
                                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </section>
    );
}

export default Contact;

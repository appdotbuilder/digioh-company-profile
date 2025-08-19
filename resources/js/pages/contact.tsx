import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';

interface ContactInfo {
    address: string;
    phone: string;
    email: string;
    whatsapp: string;
    map_embed?: string;
    social_links?: Record<string, string>;
}

interface Props {
    contactInfo: ContactInfo;
    [key: string]: unknown;
}



export default function Contact({ contactInfo }: Props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/contact', {
            onSuccess: () => {
                reset();
            },
        });
    };

    return (
        <>
            <Head title="Contact Us - digiOH" />
            
            <div className="min-h-screen bg-white">
                {/* Navigation */}
                <nav className="bg-white shadow-sm border-b">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-16">
                            <div className="flex items-center">
                                <Link href="/" className="text-2xl font-bold" style={{ fontFamily: 'Bebas Neue', color: '#12234F' }}>
                                    digiOH
                                </Link>
                            </div>
                            <div className="hidden md:flex space-x-8">
                                <Link href="/" className="text-gray-900 hover:text-blue-600 transition-colors">Home</Link>
                                <Link href="/about" className="text-gray-900 hover:text-blue-600 transition-colors">About</Link>
                                <Link href="/services" className="text-gray-900 hover:text-blue-600 transition-colors">Services</Link>
                                <Link href="/portfolio" className="text-gray-900 hover:text-blue-600 transition-colors">Portfolio</Link>
                                <Link href="/contact" className="text-blue-600 font-semibold">Contact</Link>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="py-20" style={{ backgroundColor: '#F3F9FF' }}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 
                            className="text-5xl md:text-6xl font-bold mb-6"
                            style={{ fontFamily: 'Bebas Neue', color: '#12234F' }}
                        >
                            GET IN TOUCH
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
                            💬 Ready to transform your digital experience? Let's discuss your project and bring your vision to life
                        </p>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Contact Form */}
                            <div>
                                <h2 
                                    className="text-3xl font-bold mb-8"
                                    style={{ fontFamily: 'Bebas Neue', color: '#12234F' }}
                                >
                                    SEND US A MESSAGE
                                </h2>
                                
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Your Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={data.name}
                                            onChange={(e) => setData('name', e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Enter your full name"
                                            required
                                        />
                                        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={data.email}
                                            onChange={(e) => setData('email', e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="your.email@example.com"
                                            required
                                        />
                                        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            value={data.subject}
                                            onChange={(e) => setData('subject', e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="What's this about?"
                                        />
                                        {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            rows={6}
                                            value={data.message}
                                            onChange={(e) => setData('message', e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                            placeholder="Tell us about your project, timeline, and any specific requirements..."
                                            required
                                        />
                                        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="w-full px-6 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                        style={{ backgroundColor: '#5B82C3', color: 'white' }}
                                    >
                                        {processing ? '🚀 Sending...' : '📨 Send Message'}
                                    </button>
                                </form>
                            </div>

                            {/* Contact Information */}
                            <div>
                                <h2 
                                    className="text-3xl font-bold mb-8"
                                    style={{ fontFamily: 'Bebas Neue', color: '#12234F' }}
                                >
                                    CONTACT INFORMATION
                                </h2>
                                
                                <div className="space-y-8">
                                    <div className="flex items-start space-x-4">
                                        <div className="text-2xl">📍</div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-1">Office Address</h3>
                                            <p className="text-gray-600">{contactInfo.address}</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start space-x-4">
                                        <div className="text-2xl">📞</div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                                            <a href={`tel:${contactInfo.phone}`} className="text-gray-600 hover:text-blue-600 transition-colors">
                                                {contactInfo.phone}
                                            </a>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start space-x-4">
                                        <div className="text-2xl">📧</div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                                            <a href={`mailto:${contactInfo.email}`} className="text-gray-600 hover:text-blue-600 transition-colors">
                                                {contactInfo.email}
                                            </a>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start space-x-4">
                                        <div className="text-2xl">💬</div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-1">WhatsApp</h3>
                                            <a 
                                                href={`https://wa.me/${contactInfo.whatsapp}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-600 hover:text-green-600 transition-colors"
                                            >
                                                Chat with us instantly
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Quick Response */}
                                <div className="mt-12 p-6 rounded-2xl" style={{ backgroundColor: '#F3F9FF' }}>
                                    <h3 
                                        className="text-xl font-bold mb-4"
                                        style={{ color: '#12234F', fontFamily: 'Bebas Neue' }}
                                    >
                                        QUICK RESPONSE GUARANTEE
                                    </h3>
                                    <div className="space-y-3 text-sm">
                                        <div className="flex items-center space-x-2">
                                            <span>⚡</span>
                                            <span>Email responses within 4 hours</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <span>💬</span>
                                            <span>WhatsApp replies within 30 minutes</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <span>📞</span>
                                            <span>Phone consultations available 9 AM - 6 PM</span>
                                        </div>
                                    </div>
                                </div>

                                {/* WhatsApp CTA */}
                                <div className="mt-8">
                                    <a 
                                        href={`https://wa.me/${contactInfo.whatsapp}?text=Hi%20digiOH!%20I'm%20interested%20in%20your%20digital%20solutions.`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-lg"
                                        style={{ backgroundColor: '#FBBC51', color: '#12234F' }}
                                    >
                                        📱 Chat on WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Map Section */}
                <section className="py-20" style={{ backgroundColor: '#F3F9FF' }}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 
                                className="text-4xl font-bold mb-4"
                                style={{ fontFamily: 'Bebas Neue', color: '#12234F' }}
                            >
                                FIND US ON THE MAP
                            </h2>
                            <p className="text-lg text-gray-600">
                                Visit our office or schedule a virtual meeting
                            </p>
                        </div>
                        
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                            {contactInfo.map_embed ? (
                                <div 
                                    className="w-full h-96"
                                    dangerouslySetInnerHTML={{ __html: contactInfo.map_embed }}
                                />
                            ) : (
                                <div className="w-full h-96 bg-gray-100 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-6xl mb-4">🗺️</div>
                                        <p className="text-gray-600 font-semibold">Interactive Map</p>
                                        <p className="text-sm text-gray-500 mt-2">{contactInfo.address}</p>
                                        <p className="text-sm text-gray-400 mt-1">Google Maps integration coming soon</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
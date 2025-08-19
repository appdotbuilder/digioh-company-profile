import React from 'react';
import { Head, Link } from '@inertiajs/react';

interface Service {
    id: number;
    title: string;
    description: string;
    icon?: string;
    slug: string;
}

interface PortfolioItem {
    id: number;
    title: string;
    category: string;
    images?: string[];
    slug: string;
}

interface ClientLogo {
    id: number;
    name: string;
    logo: string;
    url?: string;
}

interface Metrics {
    events_count: string;
    since_year: string;
    clients_count: string;
}

interface Props {
    services: Service[];
    portfolioItems: PortfolioItem[];
    clientLogos: ClientLogo[];
    metrics: Metrics;
    [key: string]: unknown;
}

export default function Home({ services, portfolioItems, clientLogos, metrics }: Props) {
    return (
        <>
            <Head title="digiOH - Digital Events & Signage Solutions" />
            
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
                                <Link href="/contact" className="text-gray-900 hover:text-blue-600 transition-colors">Contact</Link>
                            </div>
                            <div className="flex space-x-4">
                                <Link 
                                    href="/contact" 
                                    className="px-4 py-2 rounded-lg text-white transition-all duration-300 hover:shadow-lg"
                                    style={{ backgroundColor: '#5B82C3' }}
                                >
                                    Get Quote
                                </Link>
                                <Link 
                                    href="/login" 
                                    className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                                >
                                    Admin
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="relative py-20 lg:py-32 overflow-hidden" style={{ background: 'linear-gradient(135deg, #12234F 0%, #5B82C3 100%)' }}>
                    <div className="absolute inset-0 bg-black opacity-10"></div>
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h1 
                                className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-wider"
                                style={{ fontFamily: 'Bebas Neue' }}
                            >
                                DIGITAL EVENTS<br />
                                <span style={{ color: '#FBBC51' }}>& SIGNAGE SOLUTIONS</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto" style={{ fontFamily: 'Poppins' }}>
                                Transforming experiences through innovative digital technology since {metrics.since_year}. 
                                From virtual events to dynamic signage, we bring your vision to life.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link 
                                    href="/contact" 
                                    className="px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105"
                                    style={{ backgroundColor: '#FBBC51', color: '#12234F' }}
                                >
                                    🚀 Start Your Project
                                </Link>
                                <Link 
                                    href="/services" 
                                    className="px-8 py-4 rounded-lg text-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
                                >
                                    📋 Explore Services
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Services */}
                <section className="py-20" style={{ backgroundColor: '#F3F9FF' }}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 
                                className="text-4xl md:text-5xl font-bold mb-4"
                                style={{ fontFamily: 'Bebas Neue', color: '#12234F' }}
                            >
                                OUR CORE SERVICES
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Comprehensive digital solutions tailored to elevate your brand and engage your audience
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service) => (
                                <Link
                                    key={service.id}
                                    href={`/services/${service.slug}`}
                                    className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                                >
                                    <div className="text-4xl mb-4">
                                        {service.icon ? (
                                            <span>{service.icon}</span>
                                        ) : (
                                            <div 
                                                className="w-12 h-12 rounded-lg flex items-center justify-center text-white text-xl font-bold"
                                                style={{ backgroundColor: '#5B82C3' }}
                                            >
                                                {service.title.charAt(0)}
                                            </div>
                                        )}
                                    </div>
                                    <h3 
                                        className="text-xl font-bold mb-3"
                                        style={{ color: '#12234F', fontFamily: 'Bebas Neue' }}
                                    >
                                        {service.title.toUpperCase()}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {service.description}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Trusted by Clients */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 
                                className="text-4xl md:text-5xl font-bold mb-4"
                                style={{ fontFamily: 'Bebas Neue', color: '#12234F' }}
                            >
                                TRUSTED BY {metrics.clients_count}+ CLIENTS
                            </h2>
                            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
                                <div className="text-center">
                                    <div 
                                        className="text-4xl font-bold mb-2"
                                        style={{ color: '#FBBC51', fontFamily: 'Bebas Neue' }}
                                    >
                                        {metrics.events_count}
                                    </div>
                                    <div className="text-gray-600 font-semibold">Successful Events</div>
                                </div>
                                <div className="text-center">
                                    <div 
                                        className="text-4xl font-bold mb-2"
                                        style={{ color: '#F98D2E', fontFamily: 'Bebas Neue' }}
                                    >
                                        9+
                                    </div>
                                    <div className="text-gray-600 font-semibold">Years Experience</div>
                                </div>
                                <div className="text-center">
                                    <div 
                                        className="text-4xl font-bold mb-2"
                                        style={{ color: '#655BC2', fontFamily: 'Bebas Neue' }}
                                    >
                                        24/7
                                    </div>
                                    <div className="text-gray-600 font-semibold">Support Available</div>
                                </div>
                            </div>
                        </div>
                        
                        {clientLogos.length > 0 && (
                            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60 hover:opacity-100 transition-opacity duration-500">
                                {clientLogos.map((client) => (
                                    <div key={client.id} className="text-center">
                                        {client.url ? (
                                            <a href={client.url} target="_blank" rel="noopener noreferrer">
                                                <img 
                                                    src={client.logo} 
                                                    alt={client.name}
                                                    className="h-12 mx-auto filter grayscale hover:grayscale-0 transition-all duration-300"
                                                />
                                            </a>
                                        ) : (
                                            <img 
                                                src={client.logo} 
                                                alt={client.name}
                                                className="h-12 mx-auto filter grayscale"
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                {/* Portfolio Preview */}
                <section className="py-20" style={{ backgroundColor: '#F3F9FF' }}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 
                                className="text-4xl md:text-5xl font-bold mb-4"
                                style={{ fontFamily: 'Bebas Neue', color: '#12234F' }}
                            >
                                FEATURED PROJECTS
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                                Discover how we've transformed ideas into memorable digital experiences
                            </p>
                            <Link 
                                href="/portfolio" 
                                className="inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
                                style={{ backgroundColor: '#5B82C3', color: 'white' }}
                            >
                                View All Projects →
                            </Link>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {portfolioItems.slice(0, 8).map((item) => (
                                <Link
                                    key={item.id}
                                    href={`/portfolio/${item.slug}`}
                                    className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                                        {item.images && item.images.length > 0 ? (
                                            <img 
                                                src={item.images[0]} 
                                                alt={item.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                        ) : (
                                            <div 
                                                className="w-16 h-16 rounded-lg flex items-center justify-center text-white text-xl font-bold"
                                                style={{ backgroundColor: '#5B82C3' }}
                                            >
                                                {item.title.charAt(0)}
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-4">
                                        <div 
                                            className="text-xs font-semibold text-orange-600 mb-1"
                                            style={{ color: '#F98D2E' }}
                                        >
                                            {item.category.toUpperCase()}
                                        </div>
                                        <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                            {item.title}
                                        </h3>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #FAEC2D 0%, #E9FA50 100%)' }}>
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 
                            className="text-4xl md:text-6xl font-bold mb-6"
                            style={{ fontFamily: 'Bebas Neue', color: '#12234F' }}
                        >
                            READY TO GO DIGITAL?
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-800 mb-8 max-w-3xl mx-auto">
                            Let's create something amazing together. From concept to execution, we're your digital transformation partner.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link 
                                href="/contact" 
                                className="px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105"
                                style={{ backgroundColor: '#12234F', color: 'white' }}
                            >
                                💬 Let's Talk
                            </Link>
                            <a 
                                href={`https://wa.me/1234567890`} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 rounded-lg text-lg font-semibold border-2 transition-all duration-300 hover:bg-white"
                                style={{ borderColor: '#12234F', color: '#12234F' }}
                            >
                                📱 WhatsApp
                            </a>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="py-12 bg-white border-t">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                            <div>
                                <div className="text-2xl font-bold mb-4" style={{ fontFamily: 'Bebas Neue', color: '#12234F' }}>
                                    digiOH
                                </div>
                                <p className="text-gray-600">
                                    Digital events and signage solutions that transform experiences and elevate brands.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 mb-4">Services</h3>
                                <ul className="space-y-2">
                                    <li><Link href="/services" className="text-gray-600 hover:text-blue-600">Virtual Events</Link></li>
                                    <li><Link href="/services" className="text-gray-600 hover:text-blue-600">Digital Signage</Link></li>
                                    <li><Link href="/services" className="text-gray-600 hover:text-blue-600">Hybrid Weddings</Link></li>
                                    <li><Link href="/services" className="text-gray-600 hover:text-blue-600">Rental Solutions</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 mb-4">Company</h3>
                                <ul className="space-y-2">
                                    <li><Link href="/about" className="text-gray-600 hover:text-blue-600">About Us</Link></li>
                                    <li><Link href="/portfolio" className="text-gray-600 hover:text-blue-600">Portfolio</Link></li>
                                    <li><Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 mb-4">Connect</h3>
                                <div className="flex space-x-4">
                                    <a href="#" className="text-gray-600 hover:text-blue-600 text-xl">📧</a>
                                    <a href="#" className="text-gray-600 hover:text-blue-600 text-xl">📱</a>
                                    <a href="#" className="text-gray-600 hover:text-blue-600 text-xl">🌐</a>
                                </div>
                            </div>
                        </div>
                        <div className="border-t pt-8 text-center text-gray-600">
                            <p>&copy; 2024 digiOH. All rights reserved. Transforming digital experiences since {metrics.since_year}.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
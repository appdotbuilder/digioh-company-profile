import React from 'react';
import { Head, Link } from '@inertiajs/react';

interface Service {
    id: number;
    title: string;
    description: string;
    full_description?: string;
    icon?: string;
    slug: string;
    gallery?: string[];
}

interface Props {
    services: Service[];
    [key: string]: unknown;
}

export default function ServicesIndex({ services }: Props) {
    const coreServices = services.slice(0, 3);
    const additionalServices = services.slice(3);

    return (
        <>
            <Head title="Our Services - digiOH" />
            
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
                                <Link href="/services" className="text-blue-600 font-semibold">Services</Link>
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
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #12234F 0%, #5B82C3 100%)' }}>
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 
                            className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-wider"
                            style={{ fontFamily: 'Bebas Neue' }}
                        >
                            OUR SERVICES
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto">
                            🚀 Comprehensive digital solutions that transform experiences and elevate your brand presence
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link 
                                href="/contact" 
                                className="px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105"
                                style={{ backgroundColor: '#FBBC51', color: '#12234F' }}
                            >
                                💬 Discuss Your Project
                            </Link>
                            <Link 
                                href="/portfolio" 
                                className="px-8 py-4 rounded-lg text-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
                            >
                                📂 View Our Work
                            </Link>
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
                                CORE SERVICES
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Our flagship digital solutions that form the foundation of exceptional experiences
                            </p>
                        </div>
                        
                        <div className="space-y-12">
                            {coreServices.map((service, index) => (
                                <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                                    <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                                        <div className="text-5xl mb-4">
                                            {service.icon || '🎯'}
                                        </div>
                                        <h3 
                                            className="text-3xl md:text-4xl font-bold mb-4"
                                            style={{ fontFamily: 'Bebas Neue', color: '#12234F' }}
                                        >
                                            {service.title.toUpperCase()}
                                        </h3>
                                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                            {service.full_description || service.description}
                                        </p>
                                        <div className="space-y-4 mb-6">
                                            <div className="flex items-center space-x-3">
                                                <div 
                                                    className="w-2 h-2 rounded-full"
                                                    style={{ backgroundColor: '#FBBC51' }}
                                                />
                                                <span className="text-gray-700">Professional setup and technical support</span>
                                            </div>
                                            <div className="flex items-center space-x-3">
                                                <div 
                                                    className="w-2 h-2 rounded-full"
                                                    style={{ backgroundColor: '#F98D2E' }}
                                                />
                                                <span className="text-gray-700">Custom solutions tailored to your needs</span>
                                            </div>
                                            <div className="flex items-center space-x-3">
                                                <div 
                                                    className="w-2 h-2 rounded-full"
                                                    style={{ backgroundColor: '#655BC2' }}
                                                />
                                                <span className="text-gray-700">24/7 support and maintenance</span>
                                            </div>
                                        </div>
                                        <Link 
                                            href={`/services/${service.slug}`}
                                            className="inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
                                            style={{ backgroundColor: '#5B82C3', color: 'white' }}
                                        >
                                            Learn More →
                                        </Link>
                                    </div>
                                    
                                    <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                                        <div className="bg-white rounded-2xl p-8 shadow-xl">
                                            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center mb-6">
                                                {service.gallery && service.gallery.length > 0 ? (
                                                    <img 
                                                        src={service.gallery[0]} 
                                                        alt={service.title}
                                                        className="w-full h-full object-cover rounded-lg"
                                                    />
                                                ) : (
                                                    <div className="text-6xl">{service.icon || '🎯'}</div>
                                                )}
                                            </div>
                                            <div className="text-center">
                                                <div 
                                                    className="text-lg font-bold mb-2"
                                                    style={{ color: '#12234F' }}
                                                >
                                                    {service.title}
                                                </div>
                                                <p className="text-gray-600 text-sm">
                                                    {service.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Additional Services */}
                {additionalServices.length > 0 && (
                    <section className="py-20 bg-white">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-16">
                                <h2 
                                    className="text-4xl md:text-5xl font-bold mb-4"
                                    style={{ fontFamily: 'Bebas Neue', color: '#12234F' }}
                                >
                                    ADDITIONAL SERVICES
                                </h2>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                    Specialized solutions to complement and enhance your digital experience
                                </p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {additionalServices.map((service) => (
                                    <Link
                                        key={service.id}
                                        href={`/services/${service.slug}`}
                                        className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                                    >
                                        <div className="text-4xl mb-4">
                                            {service.icon || '⭐'}
                                        </div>
                                        <h3 
                                            className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors"
                                            style={{ color: '#12234F', fontFamily: 'Bebas Neue' }}
                                        >
                                            {service.title.toUpperCase()}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed mb-6">
                                            {service.description}
                                        </p>
                                        <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                                            <span>Learn more</span>
                                            <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Process Section */}
                <section className="py-20" style={{ backgroundColor: '#F3F9FF' }}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 
                                className="text-4xl md:text-5xl font-bold mb-4"
                                style={{ fontFamily: 'Bebas Neue', color: '#12234F' }}
                            >
                                OUR PROCESS
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                From concept to execution, we ensure every project delivers exceptional results
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {[
                                { icon: '💡', title: 'DISCOVERY', desc: 'Understanding your vision, goals, and requirements' },
                                { icon: '🎨', title: 'DESIGN', desc: 'Creating custom solutions that align with your brand' },
                                { icon: '⚡', title: 'DEVELOPMENT', desc: 'Building and testing your digital experience' },
                                { icon: '🚀', title: 'LAUNCH', desc: 'Deployment with ongoing support and optimization' }
                            ].map((step, index) => (
                                <div key={index} className="text-center">
                                    <div className="relative mb-6">
                                        <div 
                                            className="w-20 h-20 mx-auto rounded-full flex items-center justify-center text-3xl shadow-lg"
                                            style={{ backgroundColor: '#5B82C3' }}
                                        >
                                            <span className="text-white">{step.icon}</span>
                                        </div>
                                        <div 
                                            className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                                            style={{ backgroundColor: '#FBBC51' }}
                                        >
                                            {index + 1}
                                        </div>
                                    </div>
                                    <h3 
                                        className="text-xl font-bold mb-3"
                                        style={{ color: '#12234F', fontFamily: 'Bebas Neue' }}
                                    >
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 
                            className="text-4xl md:text-5xl font-bold mb-6"
                            style={{ fontFamily: 'Bebas Neue', color: '#12234F' }}
                        >
                            READY TO GET STARTED?
                        </h2>
                        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                            Let's discuss your project and create a custom solution that exceeds your expectations.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link 
                                href="/contact" 
                                className="px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105"
                                style={{ backgroundColor: '#5B82C3', color: 'white' }}
                            >
                                💼 Request Consultation
                            </Link>
                            <Link 
                                href="/portfolio" 
                                className="px-8 py-4 rounded-lg text-lg font-semibold border-2 transition-all duration-300 hover:bg-gray-50"
                                style={{ borderColor: '#5B82C3', color: '#5B82C3' }}
                            >
                                📂 View Case Studies
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
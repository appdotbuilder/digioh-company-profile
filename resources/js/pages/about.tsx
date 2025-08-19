import React from 'react';
import { Head, Link } from '@inertiajs/react';

interface TeamMember {
    id: number;
    name: string;
    role: string;
    bio?: string;
    photo?: string;
    social_links?: Record<string, string>;
}

interface CompanyInfo {
    history: string;
    vision: string;
    mission: string;
    office_address: string;
    office_map_embed?: string;
}

interface Props {
    teamMembers: TeamMember[];
    companyInfo: CompanyInfo;
    [key: string]: unknown;
}

export default function About({ teamMembers, companyInfo }: Props) {
    return (
        <>
            <Head title="About Us - digiOH" />
            
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
                                <Link href="/about" className="text-blue-600 font-semibold">About</Link>
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
                            ABOUT DIGIOH
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
                            🚀 Transforming digital experiences since 2015 with innovation, creativity, and cutting-edge technology
                        </p>
                    </div>
                </section>

                {/* Company Story */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 
                                    className="text-4xl font-bold mb-6"
                                    style={{ fontFamily: 'Bebas Neue', color: '#12234F' }}
                                >
                                    OUR STORY
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                    {companyInfo.history}
                                </p>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Today, we continue to push boundaries, creating seamless connections between physical and digital worlds 
                                    through our comprehensive suite of event technology and digital signage solutions.
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                                <div className="text-center">
                                    <div 
                                        className="text-6xl font-bold mb-4"
                                        style={{ color: '#5B82C3', fontFamily: 'Bebas Neue' }}
                                    >
                                        9+
                                    </div>
                                    <div className="text-xl font-semibold text-gray-700">
                                        Years of Innovation
                                    </div>
                                    <div className="text-gray-600 mt-2">
                                        Serving clients worldwide
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Vision & Mission */}
                <section className="py-20" style={{ backgroundColor: '#F3F9FF' }}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="bg-white rounded-2xl p-8 shadow-lg">
                                <div className="text-4xl mb-4">🔮</div>
                                <h3 
                                    className="text-3xl font-bold mb-4"
                                    style={{ fontFamily: 'Bebas Neue', color: '#12234F' }}
                                >
                                    OUR VISION
                                </h3>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    {companyInfo.vision}
                                </p>
                            </div>
                            
                            <div className="bg-white rounded-2xl p-8 shadow-lg">
                                <div className="text-4xl mb-4">🎯</div>
                                <h3 
                                    className="text-3xl font-bold mb-4"
                                    style={{ fontFamily: 'Bebas Neue', color: '#12234F' }}
                                >
                                    OUR MISSION
                                </h3>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    {companyInfo.mission}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 
                                className="text-4xl md:text-5xl font-bold mb-4"
                                style={{ fontFamily: 'Bebas Neue', color: '#12234F' }}
                            >
                                MEET OUR TEAM
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                The creative minds and technical experts behind every successful project
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {teamMembers.map((member) => (
                                <div key={member.id} className="text-center group">
                                    <div className="mb-6 relative">
                                        {member.photo ? (
                                            <img 
                                                src={member.photo} 
                                                alt={member.name}
                                                className="w-48 h-48 mx-auto rounded-2xl object-cover shadow-lg group-hover:shadow-xl transition-all duration-300"
                                            />
                                        ) : (
                                            <div 
                                                className="w-48 h-48 mx-auto rounded-2xl flex items-center justify-center text-white text-4xl font-bold shadow-lg group-hover:shadow-xl transition-all duration-300"
                                                style={{ backgroundColor: '#5B82C3' }}
                                            >
                                                {member.name.split(' ').map(n => n[0]).join('')}
                                            </div>
                                        )}
                                    </div>
                                    <h3 
                                        className="text-xl font-bold mb-2"
                                        style={{ color: '#12234F', fontFamily: 'Bebas Neue' }}
                                    >
                                        {member.name.toUpperCase()}
                                    </h3>
                                    <p 
                                        className="text-lg font-semibold mb-3"
                                        style={{ color: '#F98D2E' }}
                                    >
                                        {member.role}
                                    </p>
                                    {member.bio && (
                                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                            {member.bio}
                                        </p>
                                    )}
                                    {member.social_links && (
                                        <div className="flex justify-center space-x-3">
                                            {Object.entries(member.social_links).map(([platform, url]) => (
                                                <a
                                                    key={platform}
                                                    href={url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-gray-400 hover:text-blue-600 transition-colors"
                                                >
                                                    🔗
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Office Location */}
                <section className="py-20" style={{ backgroundColor: '#F3F9FF' }}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 
                                className="text-4xl font-bold mb-4"
                                style={{ fontFamily: 'Bebas Neue', color: '#12234F' }}
                            >
                                VISIT OUR OFFICE
                            </h2>
                            <p className="text-xl text-gray-600">
                                📍 {companyInfo.office_address}
                            </p>
                        </div>
                        
                        <div className="bg-white rounded-2xl p-8 shadow-lg">
                            {companyInfo.office_map_embed ? (
                                <div 
                                    className="w-full h-96 rounded-lg overflow-hidden"
                                    dangerouslySetInnerHTML={{ __html: companyInfo.office_map_embed }}
                                />
                            ) : (
                                <div className="w-full h-96 bg-gray-100 rounded-lg flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-6xl mb-4">🗺️</div>
                                        <p className="text-gray-600">Interactive map coming soon</p>
                                        <p className="text-sm text-gray-500 mt-2">{companyInfo.office_address}</p>
                                    </div>
                                </div>
                            )}
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
                            READY TO WORK TOGETHER?
                        </h2>
                        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                            Let's discuss how we can bring your digital vision to life with our expertise and creativity.
                        </p>
                        <Link 
                            href="/contact" 
                            className="inline-flex items-center px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105"
                            style={{ backgroundColor: '#FBBC51', color: '#12234F' }}
                        >
                            💬 Get In Touch
                        </Link>
                    </div>
                </section>
            </div>
        </>
    );
}
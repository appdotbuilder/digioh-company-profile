import React, { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';

interface PortfolioItem {
    id: number;
    title: string;
    category: string;
    client?: string;
    description: string;
    images?: string[];
    video_url?: string;
    project_date: string;
    slug: string;
}

interface Props {
    portfolioItems: PortfolioItem[];
    categories: string[];
    selectedCategory: string;
    [key: string]: unknown;
}

export default function PortfolioIndex({ portfolioItems, categories, selectedCategory }: Props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

    const filterByCategory = (category: string) => {
        router.get('/portfolio', category === 'all' ? {} : { category }, {
            preserveState: true,
            replace: true
        });
    };

    const openModal = (item: PortfolioItem) => {
        setSelectedItem(item);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedItem(null);
    };

    const categoryColors = {
        'Events': '#5B82C3',
        'Weddings': '#F98D2E', 
        'Signage': '#655BC2',
        'Rental': '#FBBC51'
    };

    return (
        <>
            <Head title="Portfolio - digiOH" />
            
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
                                <Link href="/portfolio" className="text-blue-600 font-semibold">Portfolio</Link>
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
                            OUR PORTFOLIO
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
                            🎨 Explore our successful projects and see how we've transformed digital experiences for clients across industries
                        </p>
                    </div>
                </section>

                {/* Filter Section */}
                <section className="py-12 bg-white border-b">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-wrap justify-center gap-4">
                            <button
                                onClick={() => filterByCategory('all')}
                                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                                    selectedCategory === 'all' 
                                        ? 'text-white shadow-lg' 
                                        : 'text-gray-700 bg-gray-100 hover:bg-gray-200'
                                }`}
                                style={selectedCategory === 'all' ? { backgroundColor: '#12234F' } : {}}
                            >
                                All Projects ({portfolioItems.length})
                            </button>
                            
                            {categories.map((category) => {
                                const count = portfolioItems.filter(item => item.category === category).length;
                                const isActive = selectedCategory === category;
                                
                                return (
                                    <button
                                        key={category}
                                        onClick={() => filterByCategory(category)}
                                        className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                                            isActive 
                                                ? 'text-white shadow-lg' 
                                                : 'text-gray-700 bg-gray-100 hover:bg-gray-200'
                                        }`}
                                        style={isActive ? { backgroundColor: categoryColors[category as keyof typeof categoryColors] || '#5B82C3' } : {}}
                                    >
                                        {category} ({count})
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Portfolio Grid */}
                <section className="py-20" style={{ backgroundColor: '#F3F9FF' }}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {portfolioItems.length === 0 ? (
                            <div className="text-center py-20">
                                <div className="text-6xl mb-4">📂</div>
                                <h3 className="text-2xl font-bold text-gray-700 mb-2">No projects found</h3>
                                <p className="text-gray-500">Try selecting a different category</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {portfolioItems.map((item) => (
                                    <div
                                        key={item.id}
                                        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
                                        onClick={() => openModal(item)}
                                    >
                                        <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                                            {item.images && item.images.length > 0 ? (
                                                <img 
                                                    src={item.images[0]} 
                                                    alt={item.title}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center">
                                                    <div 
                                                        className="w-16 h-16 rounded-lg flex items-center justify-center text-white text-2xl font-bold"
                                                        style={{ backgroundColor: categoryColors[item.category as keyof typeof categoryColors] || '#5B82C3' }}
                                                    >
                                                        {item.title.charAt(0)}
                                                    </div>
                                                </div>
                                            )}
                                            
                                            {/* Category Badge */}
                                            <div 
                                                className="absolute top-4 left-4 px-3 py-1 rounded-full text-white text-sm font-semibold"
                                                style={{ backgroundColor: categoryColors[item.category as keyof typeof categoryColors] || '#5B82C3' }}
                                            >
                                                {item.category}
                                            </div>
                                            
                                            {/* Video indicator */}
                                            {item.video_url && (
                                                <div className="absolute top-4 right-4 bg-black bg-opacity-50 rounded-full p-2">
                                                    <span className="text-white text-lg">▶️</span>
                                                </div>
                                            )}
                                        </div>
                                        
                                        <div className="p-6">
                                            <div className="flex items-center justify-between mb-3">
                                                <span className="text-sm text-gray-500">
                                                    {new Date(item.project_date).toLocaleDateString('en-US', { 
                                                        year: 'numeric', 
                                                        month: 'long' 
                                                    })}
                                                </span>
                                                {item.client && (
                                                    <span className="text-xs text-gray-400 truncate max-w-32">
                                                        {item.client}
                                                    </span>
                                                )}
                                            </div>
                                            
                                            <h3 
                                                className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors"
                                                style={{ color: '#12234F', fontFamily: 'Bebas Neue' }}
                                            >
                                                {item.title.toUpperCase()}
                                            </h3>
                                            
                                            <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                                                {item.description}
                                            </p>
                                            
                                            <div className="mt-4 flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                                                <span className="text-sm">View Details</span>
                                                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                {/* Modal */}
                {isModalOpen && selectedItem && (
                    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
                        <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                            <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
                                <h3 
                                    className="text-2xl font-bold"
                                    style={{ color: '#12234F', fontFamily: 'Bebas Neue' }}
                                >
                                    {selectedItem.title.toUpperCase()}
                                </h3>
                                <button 
                                    onClick={closeModal}
                                    className="text-gray-400 hover:text-gray-600 text-3xl leading-none"
                                >
                                    ×
                                </button>
                            </div>
                            
                            <div className="p-6">
                                {/* Project Images/Video */}
                                <div className="mb-6">
                                    {selectedItem.video_url ? (
                                        <div className="aspect-video bg-black rounded-lg overflow-hidden">
                                            <iframe
                                                src={selectedItem.video_url}
                                                className="w-full h-full"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            />
                                        </div>
                                    ) : selectedItem.images && selectedItem.images.length > 0 ? (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {selectedItem.images.map((image, index) => (
                                                <img
                                                    key={index}
                                                    src={image}
                                                    alt={`${selectedItem.title} ${index + 1}`}
                                                    className="w-full aspect-video object-cover rounded-lg"
                                                />
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                                            <div className="text-center">
                                                <div 
                                                    className="w-20 h-20 mx-auto rounded-lg flex items-center justify-center text-white text-3xl font-bold mb-4"
                                                    style={{ backgroundColor: categoryColors[selectedItem.category as keyof typeof categoryColors] || '#5B82C3' }}
                                                >
                                                    {selectedItem.title.charAt(0)}
                                                </div>
                                                <p className="text-gray-500">Project visuals coming soon</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                
                                {/* Project Details */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-2">Category</h4>
                                        <span 
                                            className="px-3 py-1 rounded-full text-white text-sm font-semibold"
                                            style={{ backgroundColor: categoryColors[selectedItem.category as keyof typeof categoryColors] || '#5B82C3' }}
                                        >
                                            {selectedItem.category}
                                        </span>
                                    </div>
                                    
                                    {selectedItem.client && (
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-2">Client</h4>
                                            <p className="text-gray-600">{selectedItem.client}</p>
                                        </div>
                                    )}
                                    
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-2">Project Date</h4>
                                        <p className="text-gray-600">
                                            {new Date(selectedItem.project_date).toLocaleDateString('en-US', { 
                                                year: 'numeric', 
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </p>
                                    </div>
                                </div>
                                
                                {/* Description */}
                                <div className="mb-6">
                                    <h4 className="font-semibold text-gray-900 mb-3">Project Description</h4>
                                    <p className="text-gray-600 leading-relaxed">
                                        {selectedItem.description}
                                    </p>
                                </div>
                                
                                {/* CTA */}
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link 
                                        href="/contact" 
                                        className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg text-center"
                                        style={{ backgroundColor: '#5B82C3', color: 'white' }}
                                        onClick={closeModal}
                                    >
                                        💬 Start Similar Project
                                    </Link>
                                    <Link 
                                        href="/services" 
                                        className="px-6 py-3 rounded-lg font-semibold border-2 transition-all duration-300 hover:bg-gray-50 text-center"
                                        style={{ borderColor: '#5B82C3', color: '#5B82C3' }}
                                        onClick={closeModal}
                                    >
                                        📋 View Services
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* CTA Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 
                            className="text-4xl md:text-5xl font-bold mb-6"
                            style={{ fontFamily: 'Bebas Neue', color: '#12234F' }}
                        >
                            INSPIRED BY OUR WORK?
                        </h2>
                        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                            Every great project starts with a conversation. Let's discuss how we can bring your vision to life.
                        </p>
                        <Link 
                            href="/contact" 
                            className="inline-flex items-center px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105"
                            style={{ backgroundColor: '#FBBC51', color: '#12234F' }}
                        >
                            🚀 Start Your Project
                        </Link>
                    </div>
                </section>
            </div>
        </>
    );
}
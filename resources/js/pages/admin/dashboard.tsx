import React from 'react';
import { Head, Link } from '@inertiajs/react';

interface ContactMessage {
    id: number;
    name: string;
    email: string;
    subject?: string;
    message: string;
    created_at: string;
    is_read: boolean;
}

interface Stats {
    services_count: number;
    portfolio_count: number;
    team_members_count: number;
    client_logos_count: number;
    unread_messages_count: number;
    recent_messages: ContactMessage[];
}

interface Props {
    stats: Stats;
    [key: string]: unknown;
}

export default function AdminDashboard({ stats }: Props) {
    return (
        <>
            <Head title="Admin Dashboard - digiOH" />
            
            <div className="min-h-screen bg-gray-100">
                {/* Navigation */}
                <nav className="bg-white shadow-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-16">
                            <div className="flex items-center">
                                <Link href="/" className="text-2xl font-bold mr-8" style={{ fontFamily: 'Bebas Neue', color: '#12234F' }}>
                                    digiOH Admin
                                </Link>
                                <div className="hidden md:flex space-x-6">
                                    <Link href="/admin" className="text-blue-600 font-semibold">Dashboard</Link>
                                    <Link href="/admin/services" className="text-gray-700 hover:text-blue-600">Services</Link>
                                    <Link href="/admin/portfolio" className="text-gray-700 hover:text-blue-600">Portfolio</Link>
                                    <Link href="/admin/team" className="text-gray-700 hover:text-blue-600">Team</Link>
                                    <Link href="/admin/clients" className="text-gray-700 hover:text-blue-600">Clients</Link>
                                    <Link href="/admin/messages" className="text-gray-700 hover:text-blue-600">Messages</Link>
                                    <Link href="/admin/settings" className="text-gray-700 hover:text-blue-600">Settings</Link>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <Link href="/" className="text-gray-600 hover:text-blue-600">
                                    🌐 View Site
                                </Link>
                                <Link href="/logout" method="post" as="button" className="text-gray-600 hover:text-red-600">
                                    🚪 Logout
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Header */}
                <div className="bg-white shadow">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                        <h1 
                            className="text-3xl font-bold"
                            style={{ color: '#12234F', fontFamily: 'Bebas Neue' }}
                        >
                            DASHBOARD OVERVIEW
                        </h1>
                        <p className="text-gray-600 mt-2">
                            Welcome back! Here's what's happening with your digiOH website.
                        </p>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
                        <div className="bg-white rounded-lg p-6 shadow-md">
                            <div className="flex items-center">
                                <div 
                                    className="p-3 rounded-full text-white"
                                    style={{ backgroundColor: '#5B82C3' }}
                                >
                                    <span className="text-xl">⚡</span>
                                </div>
                                <div className="ml-4">
                                    <p className="text-2xl font-bold text-gray-900">{stats.services_count}</p>
                                    <p className="text-gray-600">Services</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg p-6 shadow-md">
                            <div className="flex items-center">
                                <div 
                                    className="p-3 rounded-full text-white"
                                    style={{ backgroundColor: '#F98D2E' }}
                                >
                                    <span className="text-xl">📂</span>
                                </div>
                                <div className="ml-4">
                                    <p className="text-2xl font-bold text-gray-900">{stats.portfolio_count}</p>
                                    <p className="text-gray-600">Portfolio Items</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg p-6 shadow-md">
                            <div className="flex items-center">
                                <div 
                                    className="p-3 rounded-full text-white"
                                    style={{ backgroundColor: '#655BC2' }}
                                >
                                    <span className="text-xl">👥</span>
                                </div>
                                <div className="ml-4">
                                    <p className="text-2xl font-bold text-gray-900">{stats.team_members_count}</p>
                                    <p className="text-gray-600">Team Members</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg p-6 shadow-md">
                            <div className="flex items-center">
                                <div 
                                    className="p-3 rounded-full text-white"
                                    style={{ backgroundColor: '#FBBC51' }}
                                >
                                    <span className="text-xl">🏢</span>
                                </div>
                                <div className="ml-4">
                                    <p className="text-2xl font-bold text-gray-900">{stats.client_logos_count}</p>
                                    <p className="text-gray-600">Client Logos</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg p-6 shadow-md">
                            <div className="flex items-center">
                                <div 
                                    className="p-3 rounded-full text-white"
                                    style={{ backgroundColor: '#E9FA50' }}
                                >
                                    <span className="text-xl">💬</span>
                                </div>
                                <div className="ml-4">
                                    <p className="text-2xl font-bold text-gray-900">{stats.unread_messages_count}</p>
                                    <p className="text-gray-600">Unread Messages</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Recent Messages */}
                        <div className="bg-white rounded-lg shadow-md">
                            <div className="p-6 border-b">
                                <div className="flex items-center justify-between">
                                    <h2 
                                        className="text-xl font-bold"
                                        style={{ color: '#12234F', fontFamily: 'Bebas Neue' }}
                                    >
                                        RECENT MESSAGES
                                    </h2>
                                    <Link 
                                        href="/admin/messages" 
                                        className="text-blue-600 hover:text-blue-700 font-semibold"
                                    >
                                        View All →
                                    </Link>
                                </div>
                            </div>
                            <div className="p-6">
                                {stats.recent_messages.length > 0 ? (
                                    <div className="space-y-4">
                                        {stats.recent_messages.map((message) => (
                                            <div key={message.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50">
                                                <div 
                                                    className={`w-3 h-3 rounded-full mt-2 ${
                                                        message.is_read ? 'bg-gray-300' : 'bg-red-500'
                                                    }`}
                                                />
                                                <div className="flex-1 min-w-0">
                                                    <p className="font-semibold text-gray-900 truncate">
                                                        {message.name}
                                                    </p>
                                                    <p className="text-sm text-gray-600 truncate">
                                                        {message.subject || 'No Subject'}
                                                    </p>
                                                    <p className="text-xs text-gray-500">
                                                        {new Date(message.created_at).toLocaleDateString()}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-8">
                                        <div className="text-4xl mb-2">📭</div>
                                        <p className="text-gray-500">No recent messages</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="bg-white rounded-lg shadow-md">
                            <div className="p-6 border-b">
                                <h2 
                                    className="text-xl font-bold"
                                    style={{ color: '#12234F', fontFamily: 'Bebas Neue' }}
                                >
                                    QUICK ACTIONS
                                </h2>
                            </div>
                            <div className="p-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <Link
                                        href="/admin/services/create"
                                        className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all text-center"
                                    >
                                        <div className="text-2xl mb-2">⚡</div>
                                        <p className="font-semibold text-gray-900">Add Service</p>
                                        <p className="text-xs text-gray-500">Create new service</p>
                                    </Link>

                                    <Link
                                        href="/admin/portfolio/create"
                                        className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all text-center"
                                    >
                                        <div className="text-2xl mb-2">📂</div>
                                        <p className="font-semibold text-gray-900">Add Portfolio</p>
                                        <p className="text-xs text-gray-500">Add new project</p>
                                    </Link>

                                    <Link
                                        href="/admin/team/create"
                                        className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all text-center"
                                    >
                                        <div className="text-2xl mb-2">👤</div>
                                        <p className="font-semibold text-gray-900">Add Team Member</p>
                                        <p className="text-xs text-gray-500">Add team member</p>
                                    </Link>

                                    <Link
                                        href="/admin/settings"
                                        className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all text-center"
                                    >
                                        <div className="text-2xl mb-2">⚙️</div>
                                        <p className="font-semibold text-gray-900">Site Settings</p>
                                        <p className="text-xs text-gray-500">Configure site</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* System Status */}
                    <div className="mt-8 bg-white rounded-lg shadow-md">
                        <div className="p-6 border-b">
                            <h2 
                                className="text-xl font-bold"
                                style={{ color: '#12234F', fontFamily: 'Bebas Neue' }}
                            >
                                SYSTEM STATUS
                            </h2>
                        </div>
                        <div className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                <div className="text-center">
                                    <div className="text-green-500 text-2xl mb-2">✅</div>
                                    <p className="font-semibold text-gray-900">Website</p>
                                    <p className="text-sm text-green-600">Online</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-green-500 text-2xl mb-2">✅</div>
                                    <p className="font-semibold text-gray-900">Database</p>
                                    <p className="text-sm text-green-600">Connected</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-green-500 text-2xl mb-2">✅</div>
                                    <p className="font-semibold text-gray-900">Email</p>
                                    <p className="text-sm text-green-600">Working</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-blue-500 text-2xl mb-2">ℹ️</div>
                                    <p className="font-semibold text-gray-900">Last Updated</p>
                                    <p className="text-sm text-blue-600">Just now</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
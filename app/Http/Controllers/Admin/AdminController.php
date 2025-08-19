<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Service;
use App\Models\PortfolioItem;
use App\Models\TeamMember;
use App\Models\ClientLogo;
use App\Models\ContactMessage;
use Inertia\Inertia;

class AdminController extends Controller
{
    /**
     * Display the admin dashboard.
     */
    public function index()
    {
        $stats = [
            'services_count' => Service::count(),
            'portfolio_count' => PortfolioItem::count(),
            'team_members_count' => TeamMember::where('is_active', true)->count(),
            'client_logos_count' => ClientLogo::where('is_active', true)->count(),
            'unread_messages_count' => ContactMessage::unread()->count(),
            'recent_messages' => ContactMessage::latest()->limit(5)->get(),
        ];

        return Inertia::render('admin/dashboard', [
            'stats' => $stats,
        ]);
    }
}
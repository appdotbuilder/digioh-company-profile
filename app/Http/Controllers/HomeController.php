<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Service;
use App\Models\PortfolioItem;
use App\Models\TeamMember;
use App\Models\ClientLogo;
use App\Models\SiteSetting;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Display the homepage.
     */
    public function index()
    {
        $services = Service::published()->limit(5)->get();
        $portfolioItems = PortfolioItem::published()->latest()->limit(8)->get();
        $clientLogos = ClientLogo::active()->limit(10)->get();
        
        // Get key metrics from site settings
        $metrics = [
            'events_count' => SiteSetting::get('metrics_events_count', '500+'),
            'since_year' => SiteSetting::get('metrics_since_year', '2015'),
            'clients_count' => SiteSetting::get('metrics_clients_count', '200+'),
        ];

        return Inertia::render('home', [
            'services' => $services,
            'portfolioItems' => $portfolioItems,
            'clientLogos' => $clientLogos,
            'metrics' => $metrics,
        ]);
    }
}
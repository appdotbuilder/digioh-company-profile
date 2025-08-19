<?php

namespace Database\Seeders;

use App\Models\PortfolioItem;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class PortfolioItemSeeder extends Seeder
{
    /**
     * Run the database seeder.
     */
    public function run(): void
    {
        $portfolioItems = [
            [
                'title' => 'Tech Conference 2024',
                'category' => 'Events',
                'client' => 'TechCorp International',
                'description' => 'Virtual conference platform hosting 5,000+ attendees with interactive sessions, networking lounges, and live Q&A features.',
                'project_date' => '2024-03-15',
                'status' => 'published',
                'published_at' => now(),
            ],
            [
                'title' => 'Sarah & David Wedding',
                'category' => 'Weddings',
                'client' => 'Private Client',
                'description' => 'Hybrid wedding experience connecting 200+ remote guests with live ceremony streaming and interactive guest participation.',
                'project_date' => '2024-02-14',
                'status' => 'published',
                'published_at' => now(),
            ],
            [
                'title' => 'Corporate Digital Displays',
                'category' => 'Signage',
                'client' => 'Metro Business Center',
                'description' => 'Interactive wayfinding and promotional digital signage installation across 15 floors of modern office complex.',
                'project_date' => '2024-01-30',
                'status' => 'published',
                'published_at' => now(),
            ],
            [
                'title' => 'Product Launch Event',
                'category' => 'Events',
                'client' => 'Innovation Labs',
                'description' => 'Multi-platform product launch with AR demonstrations and real-time audience engagement across 3 time zones.',
                'project_date' => '2023-12-10',
                'status' => 'published',
                'published_at' => now(),
            ],
            [
                'title' => 'Retail LED Installation',
                'category' => 'Signage',
                'client' => 'Fashion Forward',
                'description' => 'Dynamic LED display system for flagship store featuring real-time social media integration and promotional content.',
                'project_date' => '2023-11-22',
                'status' => 'published',
                'published_at' => now(),
            ],
            [
                'title' => 'Charity Gala Virtual',
                'category' => 'Events',
                'client' => 'Hope Foundation',
                'description' => 'Virtual charity gala with live auction functionality, donor recognition system, and interactive fundraising features.',
                'project_date' => '2023-10-15',
                'status' => 'published',
                'published_at' => now(),
            ],
            [
                'title' => 'Equipment Rental - Film Festival',
                'category' => 'Rental',
                'client' => 'Independent Film Festival',
                'description' => 'Complete AV rental package including LED walls, sound systems, and lighting for 5-day film festival event.',
                'project_date' => '2023-09-08',
                'status' => 'published',
                'published_at' => now(),
            ],
            [
                'title' => 'Brand Motion Graphics',
                'category' => 'Rental',
                'client' => 'Startup Accelerator',
                'description' => 'Custom motion graphics package and video content for accelerator demo day and investor presentations.',
                'project_date' => '2023-08-25',
                'status' => 'published',
                'published_at' => now(),
            ],
        ];

        foreach ($portfolioItems as $itemData) {
            $itemData['slug'] = Str::slug($itemData['title']);
            PortfolioItem::create($itemData);
        }
    }
}
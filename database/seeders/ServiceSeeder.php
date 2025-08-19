<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeder.
     */
    public function run(): void
    {
        $services = [
            [
                'title' => 'Virtual Events',
                'icon' => '📺',
                'description' => 'Immersive virtual event experiences with interactive features, live streaming, and audience engagement tools.',
                'full_description' => 'Transform your events into captivating virtual experiences with our cutting-edge platform. We provide comprehensive virtual event solutions including multi-channel streaming, interactive breakout rooms, networking lounges, and real-time audience engagement features.',
                'status' => 'published',
                'published_at' => now(),
            ],
            [
                'title' => 'Hybrid Weddings',
                'icon' => '💒',
                'description' => 'Seamlessly blend in-person and virtual wedding experiences for guests worldwide.',
                'full_description' => 'Create magical wedding moments that connect loved ones regardless of location. Our hybrid wedding solutions include multiple camera angles, professional live streaming, interactive guest participation, and memorable digital keepsakes.',
                'status' => 'published',
                'published_at' => now(),
            ],
            [
                'title' => 'Digital Signage',
                'icon' => '📱',
                'description' => 'Dynamic digital displays and interactive signage solutions for businesses and events.',
                'full_description' => 'Enhance your space with intelligent digital signage that captivates and informs. From wayfinding systems to promotional displays, our solutions integrate seamlessly with your brand and operational needs.',
                'status' => 'published',
                'published_at' => now(),
            ],
            [
                'title' => 'Rental Solutions',
                'icon' => '🎬',
                'description' => 'Professional AV equipment rentals with technical support for any scale of event.',
                'full_description' => 'Access top-tier audio-visual equipment without the investment. Our rental solutions include LED displays, sound systems, cameras, lighting, and technical support to ensure your event runs flawlessly.',
                'status' => 'published',
                'published_at' => now(),
            ],
            [
                'title' => 'Creative Content',
                'icon' => '🎨',
                'description' => 'Custom content creation including motion graphics, videos, and interactive experiences.',
                'full_description' => 'Bring your vision to life with our creative content services. We specialize in motion graphics, promotional videos, interactive presentations, and branded content that resonates with your audience.',
                'status' => 'published',
                'published_at' => now(),
            ],
        ];

        foreach ($services as $serviceData) {
            $serviceData['slug'] = Str::slug($serviceData['title']);
            Service::create($serviceData);
        }
    }
}
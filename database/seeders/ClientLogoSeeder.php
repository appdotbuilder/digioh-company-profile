<?php

namespace Database\Seeders;

use App\Models\ClientLogo;
use Illuminate\Database\Seeder;

class ClientLogoSeeder extends Seeder
{
    /**
     * Run the database seeder.
     */
    public function run(): void
    {
        $clients = [
            [
                'name' => 'TechCorp International',
                'logo' => '/images/clients/techcorp.png',
                'url' => 'https://techcorp.example.com',
                'sort_order' => 1,
                'is_active' => true,
            ],
            [
                'name' => 'Innovation Labs',
                'logo' => '/images/clients/innovation-labs.png',
                'url' => 'https://innovationlabs.example.com',
                'sort_order' => 2,
                'is_active' => true,
            ],
            [
                'name' => 'Metro Business Center',
                'logo' => '/images/clients/metro-business.png',
                'url' => 'https://metro-business.example.com',
                'sort_order' => 3,
                'is_active' => true,
            ],
            [
                'name' => 'Fashion Forward',
                'logo' => '/images/clients/fashion-forward.png',
                'url' => 'https://fashionforward.example.com',
                'sort_order' => 4,
                'is_active' => true,
            ],
            [
                'name' => 'Hope Foundation',
                'logo' => '/images/clients/hope-foundation.png',
                'url' => 'https://hopefoundation.example.com',
                'sort_order' => 5,
                'is_active' => true,
            ],
        ];

        foreach ($clients as $clientData) {
            ClientLogo::create($clientData);
        }
    }
}
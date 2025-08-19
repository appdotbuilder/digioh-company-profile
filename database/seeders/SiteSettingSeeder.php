<?php

namespace Database\Seeders;

use App\Models\SiteSetting;
use Illuminate\Database\Seeder;

class SiteSettingSeeder extends Seeder
{
    /**
     * Run the database seeder.
     */
    public function run(): void
    {
        $settings = [
            // Company Info
            ['key' => 'company_name', 'value' => 'digiOH', 'group' => 'company'],
            ['key' => 'company_tagline', 'value' => 'Digital Events & Signage Solutions', 'group' => 'company'],
            
            // Contact Info
            ['key' => 'contact_address', 'value' => '123 Digital Avenue, Tech City, TC 12345', 'group' => 'contact'],
            ['key' => 'contact_phone', 'value' => '+1 (555) 123-4567', 'group' => 'contact'],
            ['key' => 'contact_email', 'value' => 'hello@digioh.com', 'group' => 'contact'],
            ['key' => 'contact_admin_email', 'value' => 'admin@digioh.com', 'group' => 'contact'],
            ['key' => 'contact_whatsapp', 'value' => '+1234567890', 'group' => 'contact'],
            
            // About Info
            ['key' => 'about_history', 'value' => 'Founded in 2015, digiOH has been at the forefront of digital innovation, transforming how businesses and individuals connect through immersive digital experiences. Our journey began with a simple mission: to bridge the gap between physical and digital worlds through cutting-edge technology and creative solutions.', 'group' => 'about'],
            ['key' => 'about_vision', 'value' => 'To be the leading force in digital transformation, creating seamless connections that transcend physical boundaries and revolutionize how people experience events and interact with brands.', 'group' => 'about'],
            ['key' => 'about_mission', 'value' => 'We empower businesses and individuals with innovative digital solutions that enhance engagement, amplify reach, and create unforgettable experiences through virtual events, digital signage, and creative technology.', 'group' => 'about'],
            
            // Metrics
            ['key' => 'metrics_events_count', 'value' => '500+', 'group' => 'metrics'],
            ['key' => 'metrics_since_year', 'value' => '2015', 'group' => 'metrics'],
            ['key' => 'metrics_clients_count', 'value' => '200', 'group' => 'metrics'],
            
            // Social Links
            ['key' => 'social_links', 'value' => json_encode([
                'facebook' => 'https://facebook.com/digioh',
                'instagram' => 'https://instagram.com/digioh',
                'linkedin' => 'https://linkedin.com/company/digioh',
                'twitter' => 'https://twitter.com/digioh'
            ]), 'type' => 'json', 'group' => 'social'],
            
            // SEO
            ['key' => 'seo_title', 'value' => 'digiOH - Digital Events & Signage Solutions', 'group' => 'seo'],
            ['key' => 'seo_description', 'value' => 'Transform your events and brand presence with digiOH\'s innovative digital solutions. Virtual events, hybrid weddings, digital signage, and creative content since 2015.', 'group' => 'seo'],
            ['key' => 'seo_keywords', 'value' => 'digital events, virtual events, digital signage, hybrid weddings, AV rental, creative content, event technology', 'group' => 'seo'],
        ];

        foreach ($settings as $setting) {
            SiteSetting::create($setting);
        }
    }
}
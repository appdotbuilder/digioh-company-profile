<?php

namespace Database\Seeders;

use App\Models\TeamMember;
use Illuminate\Database\Seeder;

class TeamMemberSeeder extends Seeder
{
    /**
     * Run the database seeder.
     */
    public function run(): void
    {
        $teamMembers = [
            [
                'name' => 'Sarah Johnson',
                'role' => 'CEO & Founder',
                'bio' => 'Visionary leader with 15+ years in digital innovation and event technology. Sarah founded digiOH with the mission to revolutionize digital experiences.',
                'photo' => null,
                'social_links' => [
                    'linkedin' => 'https://linkedin.com/in/sarah-johnson',
                    'twitter' => 'https://twitter.com/sarahjohnson'
                ],
                'sort_order' => 1,
                'is_active' => true,
            ],
            [
                'name' => 'Michael Chen',
                'role' => 'CTO & Co-Founder',
                'bio' => 'Technology expert specializing in virtual event platforms and digital signage systems. Drives technical innovation and platform development.',
                'photo' => null,
                'social_links' => [
                    'linkedin' => 'https://linkedin.com/in/michael-chen',
                    'github' => 'https://github.com/michaelchen'
                ],
                'sort_order' => 2,
                'is_active' => true,
            ],
            [
                'name' => 'Emma Rodriguez',
                'role' => 'Creative Director',
                'bio' => 'Award-winning creative director with expertise in motion graphics, brand design, and immersive digital experiences.',
                'photo' => null,
                'social_links' => [
                    'behance' => 'https://behance.net/emmarodriguez',
                    'instagram' => 'https://instagram.com/emmacreates'
                ],
                'sort_order' => 3,
                'is_active' => true,
            ],
            [
                'name' => 'James Wilson',
                'role' => 'Head of Operations',
                'bio' => 'Operations expert ensuring seamless project delivery and exceptional client experiences across all our digital solutions.',
                'photo' => null,
                'social_links' => [
                    'linkedin' => 'https://linkedin.com/in/james-wilson'
                ],
                'sort_order' => 4,
                'is_active' => true,
            ],
        ];

        foreach ($teamMembers as $memberData) {
            TeamMember::create($memberData);
        }
    }
}
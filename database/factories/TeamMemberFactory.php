<?php

namespace Database\Factories;

use App\Models\TeamMember;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\TeamMember>
 */
class TeamMemberFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $roles = [
            'CEO & Founder',
            'CTO & Co-Founder', 
            'Creative Director',
            'Head of Operations',
            'Senior Developer',
            'Design Lead',
            'Project Manager',
            'Marketing Manager',
        ];

        return [
            'name' => fake()->name(),
            'role' => fake()->randomElement($roles),
            'bio' => fake()->paragraph(random_int(2, 3)),
            'photo' => null,
            'social_links' => [
                'linkedin' => fake()->url(),
                'twitter' => fake()->optional()->url(),
            ],
            'sort_order' => fake()->numberBetween(1, 10),
            'is_active' => true,
        ];
    }

    /**
     * Indicate that the team member is inactive.
     */
    public function inactive(): static
    {
        return $this->state(fn (array $attributes) => [
            'is_active' => false,
        ]);
    }
}
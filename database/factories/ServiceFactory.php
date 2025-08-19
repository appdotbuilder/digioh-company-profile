<?php

namespace Database\Factories;

use App\Models\Service;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Service>
 */
class ServiceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $title = fake()->words(random_int(2, 4), true);
        
        return [
            'title' => $title,
            'slug' => Str::slug($title),
            'icon' => fake()->randomElement(['🎯', '⚡', '🎨', '📱', '🚀', '💡', '🔧', '📊']),
            'description' => fake()->sentence(random_int(10, 15)),
            'full_description' => fake()->paragraph(random_int(3, 5)),
            'gallery' => null,
            'status' => 'published',
            'published_at' => now(),
            'seo_title' => $title . ' - digiOH',
            'seo_description' => fake()->sentence(random_int(8, 12)),
            'seo_keywords' => fake()->words(random_int(5, 8), true),
        ];
    }

    /**
     * Indicate that the service is a draft.
     */
    public function draft(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'draft',
            'published_at' => null,
        ]);
    }

    /**
     * Indicate that the service is scheduled.
     */
    public function scheduled(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'scheduled',
            'published_at' => fake()->dateTimeBetween('tomorrow', '+1 month'),
        ]);
    }
}
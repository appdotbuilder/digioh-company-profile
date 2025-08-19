<?php

namespace Database\Factories;

use App\Models\PortfolioItem;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\PortfolioItem>
 */
class PortfolioItemFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $title = fake()->words(random_int(2, 4), true);
        $categories = ['Events', 'Weddings', 'Signage', 'Rental'];
        
        return [
            'title' => $title,
            'slug' => Str::slug($title),
            'category' => fake()->randomElement($categories),
            'client' => fake()->company(),
            'description' => fake()->paragraph(random_int(2, 4)),
            'images' => null,
            'video_url' => null,
            'project_date' => fake()->dateTimeBetween('-2 years', 'now'),
            'status' => 'published',
            'published_at' => now(),
            'seo_title' => $title . ' - Portfolio - digiOH',
            'seo_description' => fake()->sentence(random_int(8, 12)),
            'seo_keywords' => fake()->words(random_int(5, 8), true),
        ];
    }

    /**
     * Indicate that the portfolio item is a draft.
     */
    public function draft(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'draft',
            'published_at' => null,
        ]);
    }

    /**
     * Indicate that the portfolio item has a video.
     */
    public function withVideo(): static
    {
        return $this->state(fn (array $attributes) => [
            'video_url' => fake()->url(),
        ]);
    }
}
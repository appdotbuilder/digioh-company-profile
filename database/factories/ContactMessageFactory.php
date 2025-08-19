<?php

namespace Database\Factories;

use App\Models\ContactMessage;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ContactMessage>
 */
class ContactMessageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'email' => fake()->safeEmail(),
            'subject' => fake()->optional()->sentence(random_int(3, 6)),
            'message' => fake()->paragraph(random_int(3, 5)),
            'is_read' => fake()->boolean(30), // 30% chance of being read
            'replied_at' => fake()->optional(20)->dateTimeBetween('-1 month', 'now'),
        ];
    }

    /**
     * Indicate that the message is unread.
     */
    public function unread(): static
    {
        return $this->state(fn (array $attributes) => [
            'is_read' => false,
            'replied_at' => null,
        ]);
    }

    /**
     * Indicate that the message has been replied to.
     */
    public function replied(): static
    {
        return $this->state(fn (array $attributes) => [
            'is_read' => true,
            'replied_at' => fake()->dateTimeBetween('-1 month', 'now'),
        ]);
    }
}
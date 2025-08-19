<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeder.
     */
    public function run(): void
    {
        // Create admin user
        User::create([
            'name' => 'Admin User',
            'email' => 'admin@digioh.com',
            'password' => Hash::make('admin123'),
            'role' => 'admin',
            'is_active' => true,
            'email_verified_at' => now(),
        ]);

        // Create editor user
        User::create([
            'name' => 'Editor User',
            'email' => 'editor@digioh.com',
            'password' => Hash::make('editor123'),
            'role' => 'editor',
            'is_active' => true,
            'email_verified_at' => now(),
        ]);

        // Create author user
        User::create([
            'name' => 'Author User',
            'email' => 'author@digioh.com',
            'password' => Hash::make('author123'),
            'role' => 'author',
            'is_active' => true,
            'email_verified_at' => now(),
        ]);
    }
}
<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::factory()->create([
            'name' => 'USER',
            'first_name' => 'Test',
            'email' => 'test@example',
            'password' => Hash::make('password'),
        ]);

        User::factory()->create([
            'name' => 'ADMIN',
            'first_name' => 'Test',
            'email' => 'admin@example',
            'password' => Hash::make('password'),
        ]);

        User::factory(8)->create();
    }
}

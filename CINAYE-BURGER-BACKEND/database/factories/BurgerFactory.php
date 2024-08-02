<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Burger>
 */
class BurgerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->unique()->word(),
            'price' => $this->faker->randomElement([1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500]),
            'image' => $this->faker->imageUrl(640, 480, 'food', true),
            'description' => $this->faker->realText(400),
        ];
    }
}

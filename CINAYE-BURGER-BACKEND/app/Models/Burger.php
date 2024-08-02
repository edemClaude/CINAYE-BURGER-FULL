<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @mixin IdeHelperBurger
 */
class Burger extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'price',
        'image',
        'is_active',
        'is_archived',
    ];

    /**
     * Define a one-to-many relationship with the Order model.
     *
     * @return HasMany
     */
    public function orders() : HasMany
    {
        return $this->hasMany(Order::class);
    }

}

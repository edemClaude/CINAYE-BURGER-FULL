<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Notifications\Notifiable;

/**
 * @mixin IdeHelperCustomer
 */
class Customer extends Model
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'first_name',
        'email',
        'phone',
        'address',
        'is_active',
    ];

    /**
     * A description of the entire PHP function.
     *
     * @return HasMany
     */
    public function orders() : HasMany
    {
        return $this->hasMany(Order::class);
    }

}

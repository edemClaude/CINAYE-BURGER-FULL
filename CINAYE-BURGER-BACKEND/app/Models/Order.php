<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @mixin IdeHelperOrder
 */
class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'customer_id',
        'burger_id',
        'quantity',
        'status',
        'facture',
    ];

    /**
     * A description of the entire PHP function.
     *
     * @return BelongsTo
     */
    public function customer(): BelongsTo
    {
        return $this->belongsTo(Customer::class);
    }

    /**
     * Define a one-to-one relationship with the Burger model.
     *
     * @return BelongsTo
     */
    public function burger(): BelongsTo
    {
        return $this->belongsTo(Burger::class);
    }

    /**
     * Define a one-to-many relationship with the Payment model.
     *
     * @return HasMany
     */
    public function payments(): HasMany
    {
        return $this->hasMany(Payment::class);
    }
}

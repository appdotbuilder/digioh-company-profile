<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

/**
 * App\Models\ClientLogo
 *
 * @property int $id
 * @property string $name
 * @property string $logo
 * @property string|null $url
 * @property int $sort_order
 * @property bool $is_active
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|ClientLogo newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ClientLogo newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ClientLogo query()
 * @method static \Illuminate\Database\Eloquent\Builder|ClientLogo active()
 * @method static \Database\Factories\ClientLogoFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class ClientLogo extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'logo',
        'url',
        'sort_order',
        'is_active',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'is_active' => 'boolean',
        'sort_order' => 'integer',
    ];

    /**
     * Scope a query to only include active client logos.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeActive(Builder $query): Builder
    {
        return $query->where('is_active', true)->orderBy('sort_order');
    }
}
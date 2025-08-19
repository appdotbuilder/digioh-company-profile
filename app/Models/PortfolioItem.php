<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

/**
 * App\Models\PortfolioItem
 *
 * @property int $id
 * @property string $title
 * @property string $slug
 * @property string $category
 * @property string|null $client
 * @property string $description
 * @property array|null $images
 * @property string|null $video_url
 * @property string $project_date
 * @property string $status
 * @property \Illuminate\Support\Carbon|null $published_at
 * @property string|null $seo_title
 * @property string|null $seo_description
 * @property string|null $seo_keywords
 * @property string|null $og_image
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|PortfolioItem newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|PortfolioItem newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|PortfolioItem query()
 * @method static \Illuminate\Database\Eloquent\Builder|PortfolioItem published()
 * @method static \Illuminate\Database\Eloquent\Builder|PortfolioItem byCategory(string $category)
 * @method static \Database\Factories\PortfolioItemFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class PortfolioItem extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'title',
        'slug',
        'category',
        'client',
        'description',
        'images',
        'video_url',
        'project_date',
        'status',
        'published_at',
        'seo_title',
        'seo_description',
        'seo_keywords',
        'og_image',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'images' => 'array',
        'project_date' => 'date',
        'published_at' => 'datetime',
    ];

    /**
     * Scope a query to only include published portfolio items.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopePublished(Builder $query): Builder
    {
        return $query->where('status', 'published')
                    ->where(function ($q) {
                        $q->whereNull('published_at')
                          ->orWhere('published_at', '<=', now());
                    });
    }

    /**
     * Scope a query to filter by category.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @param  string  $category
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeByCategory(Builder $query, string $category): Builder
    {
        return $query->where('category', $category);
    }
}
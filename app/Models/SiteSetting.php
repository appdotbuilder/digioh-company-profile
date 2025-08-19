<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\SiteSetting
 *
 * @property int $id
 * @property string $key
 * @property string|null $value
 * @property string $type
 * @property string $group
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|SiteSetting newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|SiteSetting newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|SiteSetting query()
 * @method static mixed get(string $key, mixed $default = null)
 * @method static void set(string $key, mixed $value, string $type = 'text', string $group = 'general')

 * 
 * @mixin \Eloquent
 */
class SiteSetting extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'key',
        'value',
        'type',
        'group',
    ];

    /**
     * Get a setting value by key.
     *
     * @param  string  $key
     * @param  mixed  $default
     * @return mixed
     */
    public static function get(string $key, mixed $default = null): mixed
    {
        $setting = static::where('key', $key)->first();
        
        if (!$setting) {
            return $default;
        }

        return match($setting->type) {
            'json' => json_decode($setting->value, true),
            'boolean' => (bool) $setting->value,
            'integer' => (int) $setting->value,
            'float' => (float) $setting->value,
            default => $setting->value,
        };
    }

    /**
     * Set a setting value by key.
     *
     * @param  string  $key
     * @param  mixed  $value
     * @param  string  $type
     * @param  string  $group
     * @return void
     */
    public static function set(string $key, mixed $value, string $type = 'text', string $group = 'general'): void
    {
        $processedValue = match($type) {
            'json' => json_encode($value),
            'boolean' => $value ? '1' : '0',
            default => (string) $value,
        };

        static::updateOrCreate(
            ['key' => $key],
            [
                'value' => $processedValue,
                'type' => $type,
                'group' => $group,
            ]
        );
    }
}
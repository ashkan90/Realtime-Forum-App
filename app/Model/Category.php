<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $guarded = [];

    public function getRouteKeyName()
    {
    	return 'slug';
    }

    public function setNameAttribute($value)
    {
    	$this->attributes['name'] = $value;
    	$this->attributes['slug'] = str_slug($value);
    }

    public function getPathAttribute()
    {
        return asset('api/category/' . $this->slug);
    }
}

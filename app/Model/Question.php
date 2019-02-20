<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{

    //protected $guarded = [];
    protected $fillable = ['title', 'body', 'slug', 'user_id', 'category_id'];

    public function getRouteKeyName()
    {
        return 'slug';
    }
    
    public function user()
    {
    	return $this->belongsTo(\App\User::class);
    }

    public function replies()
    {
    	return $this->hasMany(Reply::class);
    }

    public function category()
    {
    	return $this->belongsTo(Category::class);
    }

    public function getPathAttribute()
    {
        return "/question/$this->slug";
    }

    public function setTitleAttribute($value)
    {
        $this->attributes['title'] = $value;
        $this->attributes['slug'] = str_slug($value);
    }

}

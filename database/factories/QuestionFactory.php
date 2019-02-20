<?php

use Faker\Generator as Faker;

$factory->define(App\Model\Question::class, function (Faker $faker) {
	$title = $faker->sentence(5);
    return [
        'title' => $title,
        'slug' => str_slug($title),
        'body' => $faker->paragraph(10),
        'category_id' => function() {
    		return App\Model\Category::all()->random();
        },
        'user_id' => function() {
        	return App\User::all()->random();
        }
    ];
});

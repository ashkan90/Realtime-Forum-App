<?php

use Faker\Generator as Faker;

$factory->define(App\Model\Category::class, function (Faker $faker) {
	$name = ucwords($faker->word);
    return [
        'name' => $name,
        'slug' => str_slug($name)
    ];
});

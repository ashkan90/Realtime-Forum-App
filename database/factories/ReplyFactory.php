<?php

use Faker\Generator as Faker;

$factory->define(App\Model\Reply::class, function (Faker $faker) {
    return [
        'body' => $faker->paragraph(10),
        'question_id' => function() {
        	return App\Model\Question::all()->random();
        },
        'user_id' => function() {
        	return App\User::all()->random();
        }
    ];
});

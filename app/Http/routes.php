<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/


Route::get('/', 'IndexController@Start');
Route::get('/resume', 'ResumeController@Start');
Route::get('/portfolio', 'PortfolioController@Start');

Route::get('/blog', 'BlogController@Start');
Route::get('/blog/{$_slug}', 'BlogController@ViewEntry');

Route::get('/justpark', 'JustParkController@Start');